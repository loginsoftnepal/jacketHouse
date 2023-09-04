import { UniqueFileName } from "@/lib/uniqueFileName";
import { prisma } from "@/server/db";
import { existsSync } from "fs";
import { NextRequest, NextResponse } from "next/server";
import { join } from "path";
import fs from 'fs/promises'
import { uploadPhoto } from "@/lib/uploadPhoto";
import { deletePhoto } from "@/lib/deletePhoto";


export async function GET(request: NextRequest) {
    try {
       const salesBanner = await prisma.salesBanner.findMany()
       let json_response = {
         status: 'success',
         results: salesBanner.length,
         salesBanner
       }

       return NextResponse.json(json_response);
    } catch (error: any) {
        let error_response = {
            status: 'error',
            message: error.message
        }
        return NextResponse.json(error_response);
    }
}


export const POST = async (req: NextRequest) => {
    try {
       const data = await req.formData()
       const file: File | null = data.get('salesBanner') as unknown as File

       if(!file) {
        return NextResponse.json({
            success: false,
            message: 'Failed to upload file.'
        })
       }

       const destinationDirPath = join(process.cwd(), 'public/salesBanner');
       const { uniqueName, extension } = UniqueFileName(destinationDirPath, uniqueName);
       const destination = join(destinationDirPath, uniqueName);

       if(!existsSync(destinationDirPath)) {
           fs.mkdir(destinationDirPath, { recursive: true })
       }

       const createSalesBanner = await prisma.salesBanner.create({
         data: {
            fileName: uniqueName,
            originalFileName: file.name,
            path: destination,
         }
       })

       await uploadPhoto(file, destination)
       return NextResponse.json({ success: true, salesBanner: createSalesBanner})
    } catch (error: any) {
        let error_response = {
            status: 'error',
            message: error.message
        }

        return NextResponse.json(error_response);
    }
}


export async function DELETE(request: NextRequest) {
    try {
        const fileId = Number(request.nextUrl.searchParams.get('fileId'))
        if(!fileId) {
            return NextResponse.json({
                status: 'failed',
                message: 'salesBanner doesnot exist...'
            })
        }

        const salesBanner = await prisma.salesBanner.findUnique({
            where: { id: fileId }
        })

      const filePath = salesBanner.path
      if (!existsSync(filePath)) {
        return NextResponse.json({
            status: 'failed',
            message: 'Image not found.'
        })
      }

      await prisma.salesBanner.delete({
        where: {
            id: salesBanner.id,
        }
      })

      await deletePhoto(filePath)
      return NextResponse.json({
        status: 'success',
        message: 'Image deleted successfully.',
      })
      
    } catch (error: any) {
        return NextResponse.json({
            status: 'failed',
            message: error.message,
        })
    }
}
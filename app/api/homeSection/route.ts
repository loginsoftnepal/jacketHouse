import { prisma } from "@/server/db";
import { NextRequest, NextResponse } from "next/server";

export async function GET(request: NextRequest) {
    try {
      const homeSection = await prisma.homeSection.findMany();
      let json_response = {
        status: 'success',
        results: homeSection.length,
        homeSection,
      }

      return NextResponse.json(json_response)
    } catch (error: any) {
       let error_response = {
        status: 'error',
        message: error.message
       }

       return NextResponse.json(error_response);
    }
}


export const POST = async (req: NextResponse) => {
    try {
       const json = await req.json();
       const homeSection = await prisma.homeSection.create({
        data: json,
       })

       let json_response = {
         status: 'success',
         data: {
            homeSection,
         },
       }

       return new NextResponse(JSON.stringify(json_response), {
          status: 201,
          headers: {
            'Content-Type': 'application/json',
          }
       })

    } catch(error: any) {
        let error_response = {
            status: 'error',
            message: error.message
        }

        return new NextResponse(JSON.stringify(error_response), {
            status: 500,
            headers: { 'Content-Type': 'application/json' },
        })
    }
}
import { prisma } from "@/server/db"
import { NextResponse } from "next/server"

export async function PATCH(request: Request, { params }: { params: { id: number }}) {
    try {
      const id = params.id
      const json = await request.json()

      const updated_homeSection = await prisma.homeSection.update({
        where: { id },
        data: json,
      })

      let json_response = {
        status: 'success',
        data: {
            homeSection: updated_homeSection,
        }
      }

      return NextResponse.json(json_response);

    }catch(error: any) {
       
        let error_response = {
            status: 'error',
            message: error.message
        }

        return new NextResponse(JSON.stringify(error_response), {
            status: 500,
            headers: { 'Content-Type': 'application/json '},
        })
    }
}

export async function DELETE(request: Request, { params }: { params: { id: number }}) {
    try {
      
      const id = params.id
      await prisma.homeSection.delete({
        where: { id }
      })

      return new NextResponse(null, { status: 204 })
    } catch (error: any) { 
      let error_response = {
        status: 'error',
        message: error.message,
      }

      return new NextResponse(JSON.stringify(error_response), {
         status: 500,
         headers: { 'Content-Type': 'application/json' },
      })
    }
}
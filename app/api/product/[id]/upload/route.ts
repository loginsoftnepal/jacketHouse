import { NextResponse } from "next/server";

export async function POST(request: Request) {

    try {
       const json = await request.json();
       console.log(json);
       return NextResponse.json({ id: 'hwllo world'})
    } catch(error: any) {

      let error_response = {
        status: 'error',
        message: error.message,
      }

      return new NextResponse(JSON.stringify(error_response), {
        status: 500,
        headers: { 'Content-Type': "application/json"},
      })
    }
}

export async function GET(request: Request) {
 
    try {
     let json_response = {
      status: 'success',
      data: []
    }

    return NextResponse.json(json_response)
  }catch(error:any) {
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

export async function DELETE(request: Request) {
    try {
       
    }catch (error: any) {
        console.log(error);
    }
}
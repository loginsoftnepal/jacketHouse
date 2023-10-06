import { prisma } from "@/server/db";
import { NextRequest, NextResponse } from "next/server";

export async function GET(request: NextRequest) {
    try {
    const page_str = request.nextUrl.searchParams.get('page');
    const limit_str = request.nextUrl.searchParams.get('limit');

    const productTitle = request.nextUrl.searchParams.get('productTitle');

    if(!productTitle) {
        return NextResponse.json({ status: 'error', message: "Product Title must be something."})
    }

    const page = page_str ? parseInt(page_str, 10) : 1;
    const limit = limit_str ? parseInt(limit_str, 10) : 10
    const skip = (page - 1) * limit

    const products = await prisma.product.findMany({
        where: {
            title: productTitle,
        }
    })

    return NextResponse.json({status: 'success', data: { searchedProduct: products}});
  
   } catch(error: any) {
     return NextResponse.json({ status: 'error', message: error.message });
   } 
}
import { prisma } from "@/server/db";
import { NextRequest, NextResponse } from "next/server";

export async function GET(request: NextRequest, { params }: { params: { userId: number }}) {
    const userId = params.userId;
    const orders = await prisma.order.findMany({
        where: {
            userId: userId
        }
    });

   let json_response = {
    status: 'success',
    results: orders.length,
    orders,
   }
    
   return NextResponse.json(json_response)
}
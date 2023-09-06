"use client"
import React from 'react'
import { ColumnDef } from "@tanstack/react-table"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuLabel, DropdownMenuSeparator, DropdownMenuTrigger } from '@/components/ui/dropdown-menu'
import { Button } from '@/components/ui/button'
import { ArrowUpDown, MoreHorizontal } from 'lucide-react'

export type Order = {
    id: number,
    status: "processing" | "delivered" | "failed" | "cancelled",
    items: number,
    amount: number,
    orderedDate: string,
    
}

export const columns: ColumnDef<Order>[] = [
    {
        accessorKey: "id",
        header: 'OrderId'
    },
    {
        accessorKey: 'status',
        header: 'Order Status',
    },
    {
        accessorKey: 'items',
        header: 'No. of items',
    },
    {
        accessorKey: 'amount',
        header: () => <div className='text-right'>Amount</div>,
        cell: ({ row }) => {
            const amount = parseFloat(row.getValue('amount'))
            const formatted = new Intl.NumberFormat('ne-NP', {
                style: 'currency',
                currency:  'NPR'
            }).format(amount)
            return <div className='text-right font-medium'>{formatted}</div>
        }
    },
    {
        accessorKey: 'orderedDate',
        header: ({ column }) => {
            return (
              <Button 
               variant={'ghost'} 
               onClick={() => column.toggleSorting(column.getIsSorted() === 'asc')}
              >
                Ordered Date    
                <ArrowUpDown className='ml-2 h-4 w-4' />
              </Button>
            )
        }
    },
    {
        id: 'actions',
        cell: ({ row }) => {
          const order = row.original;

          return (
            <DropdownMenu>
                <DropdownMenuTrigger>
                    <Button variant="ghost" className='h-8 w-8 p-0'>
                       <span className='sr-only'>
                         Open Menu
                       </span>
                        <MoreHorizontal className='h-4 w-4' />
                    </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent align="end">
                  <DropdownMenuLabel>Actions</DropdownMenuLabel>
                  <DropdownMenuItem>
                     Cancel
                  </DropdownMenuItem>
                  <DropdownMenuSeparator />
                </DropdownMenuContent>
            </DropdownMenu>
          )
        }
    }
]
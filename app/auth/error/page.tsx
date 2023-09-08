'use client'
import { useSearchParams } from 'next/navigation'
import React from 'react'

function Error() {
  
  const searchParams = useSearchParams();
  const  error = searchParams.get('error');

  return (
     <div>
       {error}
     </div>
  )
}

export default Error

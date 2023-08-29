"use client"
import React from 'react'

interface AdminButtonProps {
   onClick: () => void,
   text: string,
}

function AdminButton({ onClick, text }: AdminButtonProps) {

  return (
        <button
          className="text-white p-2 border-2 m-2 border-white rounded-3xl"
          onClick={onClick}
        >
          {text}
        </button>
  )
}

export default AdminButton
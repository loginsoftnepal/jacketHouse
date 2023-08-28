import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import React from 'react'

function AdminLogin() {
  return (
    <div
      className="bg-primary"
      style={{
        height: '100vh',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      <div
        className="container"
        style={{
          height: '100vh',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        <div className="w-[40%]  py-8 px-8 border-2 border-red rounded-xl bg-primary">
          <form className="">
            <div className="text-white text-2xl text-center font-semibold mb-6 text-uppercase">
              ADMIN LOGIN
            </div>
            <div className="">
              <div className="mb-4">
                <Input className="bg-wheat" placeholder="Enter Username" />
              </div>
              <div className="mb-4">
                <Input className="bg-wheat" placeholder="Enter Password" />
              </div>
            </div>
          </form>
          <div className="w-full mt-2">
            <Button
              className="w-full bg-red text-white hover:bg-red hover:text-wheat "
              size={'lg'}
            >
              LOGIN
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default AdminLogin

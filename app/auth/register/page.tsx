"use client"
import { buttonVariants } from '@/components/ui/button'
import { cn } from '@/lib/utils'
import Image from 'next/image'
import Link from 'next/link'
import Image1 from '../../../image/man 1.png'
import { UserRegisterForm } from '@/section/UserRegisterForm/UserRegisterForm'
import { Card } from '@/components/ui/card'

export default function Register() {
  return (
    <>
      <div className="container relative hidden h-[100vh] flex-col items-center justify-center md:grid lg:max-w-none lg:grid-cols-2 lg:px-0 overflow-hidden">
        <Link
          href="/auth/signin"
          className={cn(
            buttonVariants({ variant: 'ghost' }),
            'absolute right-4 top-4 md:right-8 md:top-8',
          )}
        >
          Login
        </Link>
        <div className="relative hidden h-full flex-col bg-muted p-10 text-white dark:border-r lg:flex">
          <div className="absolute inset-0" />
          <div className="relative z-20 flex items-center justify-center text-lg font-medium">
            <Link href={'/'} className="flex">
              <Image src={Image1} alt="" className="]" />
            </Link>
          </div>
        </div>
        <div className="lg:p-8">

        <Card className='border-[1px] border-[rgba(0,0,0,0.2)] lg:w-[70%] mx-auto py-8'>
          <div className="mx-auto flex w-full flex-col justify-center space-y-6 sm:w-[350px]">
            <div className="flex flex-col space-y-2 text-center">
              <h1 className="text-2xl font-semibold tracking-tight">
                Create account
              </h1>
              <p className="text-sm text-muted-foreground">
                Enter your email below to create account.
              </p>
            </div>
            <UserRegisterForm />
          </div>
          </Card>
        </div>
      </div>
    </>
  )
}

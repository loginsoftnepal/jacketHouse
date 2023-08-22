import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { UserAuthForm } from "@/section/UserAuthForm/UserAuthForm";
import Image from "next/image";
import Link from "next/link";
import Image1 from '../../../image/Logo.png';

export default function SignIn() {
    return (
        <> 
      <div className="container relative hidden h-[100vh] flex-col items-center justify-center md:grid lg:max-w-none lg:grid-cols-2 lg:px-0">
        <Link
          href="/auth/register"
          className={cn(
            buttonVariants({ variant: "ghost" }),
            "absolute right-4 top-4 md:right-8 md:top-8"
          )}
        >
          Register
        </Link>
        <div className="relative hidden h-full flex-col bg-muted p-10 text-white dark:border-r lg:flex">
         <div className="absolute inset-0 bg-zinc-900" />
          <div className="relative z-20 flex items-center text-lg font-medium">
            <Link href={'/'} className="flex">
                <Image src={Image1} alt="" className="]" />
             </Link>
          </div>
          <div className="relative z-20 mt-auto">
            <blockquote className="space-y-2">
              <p className="text-lg">
                &ldquo;Get up to 15% Membership Offer
                Be our regular buyer and get amazing gift hampers&rdquo;
              </p>
              <footer className="text-sm">Login Soft</footer>
            </blockquote>
          </div>
        </div>
        <div className="lg:p-8">
          <div className="mx-auto flex w-full flex-col justify-center space-y-6 sm:w-[350px]">
            <div className="flex flex-col space-y-2 text-center">
              <h1 className="text-2xl font-semibold tracking-tight">
                SignIn
              </h1>
              <p className="text-sm text-muted-foreground">
                Enter your email below to login
              </p>
            </div>
            <UserAuthForm />
          </div>
        </div>
      </div>
   </>
    )
}
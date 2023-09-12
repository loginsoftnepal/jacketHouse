'use client'
import * as React from 'react'
import { cn } from '@/lib/utils'
import { Input } from '@/components/ui/input'
import { Button } from '@/components/ui/button'
import { Icons } from '@/components/Icons/Icons'
import { useRouter } from 'next/navigation'
import { useSearchParams } from 'next/navigation'
import { signIn } from 'next-auth/react'
import { z } from 'zod'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form'
import { Card, CardContent } from '@/components/ui/card'

interface UserAuthFormProps extends React.HTMLAttributes<HTMLDivElement> {}

export function UserAuthForm({ className, ...props }: UserAuthFormProps) {
  const router = useRouter()

  const formSchema = z.object({
    email: z.string().email('Email must be in valid format'),
    password: z
      .string()
      .min(8, {
        message: 'Password must have at least 8 characters.',
      })
      .max(30, {
        message: 'Password must be less than 30 characters long.',
      }),
  })

  const [isLoading, setIsLoading] = React.useState<boolean>(false)
  const [error, setError] = React.useState('')

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: '',
      password: '',
    },
  })

  const searchParams = useSearchParams()
  const callBackurl = searchParams.get('callbackUrl') || '/'
  console.log(callBackurl)
  async function onSubmit(values: z.infer<typeof formSchema>) {
    setIsLoading(true)

    try {
      const res = await signIn('credentials', {
        redirect: false,
        email: values.email,
        password: values.password,
        callBackurl,
      })

      setIsLoading(false)
      console.log(res)
      if (!res?.error) {
        router.push(callBackurl)
      } else {
        setError('Invalid email or password')
      }
    } catch (error: any) {
      setIsLoading(false)
      setError(error)
    }
  }

  return (
    <>
      <div className={cn('grid gap-6', className)} {...props}>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)}>
            {error && (
              <p className="text-center bg-red-300 py-4 mb-6 rounded">
                {error}
              </p>
            )}
            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Email</FormLabel>
                  <FormControl>
                    <Input placeholder="Enter email address" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="password"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Password</FormLabel>
                  <FormControl>
                    <Input placeholder="Enter your password" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <Button disabled={isLoading} className="w-full mt-2" type="submit">
              {isLoading && (
                <Icons.spinner className="mr-2 h-4 w-4 animate-spin" />
              )}
              Sign In with Email
            </Button>
          </form>
        </Form>
        <div className="relative">
          <div className="absolute inset-0 flex items-center">
            <span className="w-full border-t" />
          </div>
          <div className="relative flex justify-center text-xs uppercase">
            <span className="bg-background px-2 text-muted-foreground">
              Or continue with
            </span>
          </div>
        </div>
        <Button
          variant="outline"
          type="button"
          disabled={isLoading}
          onClick={() => signIn('google')}
        >
          {isLoading ? (
            <Icons.spinner className="mr-2 h-4 w-4 animate-spin" />
          ) : (
            <Icons.google className="mr-2 h-4 w-4" />
          )}{' '}
          Google
        </Button>
      </div>
    </>
  )
}

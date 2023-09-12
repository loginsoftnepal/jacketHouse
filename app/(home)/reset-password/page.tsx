'use client'
import { apiResetPassword } from '@/app/api-request/resetPasswordCalls'
import { Button } from '@/components/ui/button'
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card'
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form'
import { Input } from '@/components/ui/input'
import { zodResolver } from '@hookform/resolvers/zod'
import { message } from 'antd'
import { useSearchParams } from 'next/navigation'
import React from 'react'
import { useForm } from 'react-hook-form'
import { z } from 'zod'

function ResetPassword() {
  const searchParams = useSearchParams()
  const token = searchParams.get('token')
  const userId = searchParams.get('userId')

  const formSchema = z.object({
    newPassword: z
      .string()
      .min(8, {
        message: 'Password must be at at least 8 characters.',
      })
      .max(30, {
        message: 'Password must not be more than 30 characters',
      }),
    confirmPassword: z
      .string()
      .min(8, {
        message: 'Password must be at at least 8 characters.',
      })
      .max(30, {
        message: 'Password must not be more than 30 characters',
      }),
  })

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      newPassword: '',
      confirmPassword: '',
    },
  })

  const onSubmit = async (values: z.infer<typeof formSchema>) => {
    console.log(values)
    console.log(token, userId)
    const res = await apiResetPassword({ ...values, token, userId })
    message.success('Password reset is successfull.')
  }

  return (
    <div className="w-screen h-screen flex justify-center items-center">
      <Card className="lg:basis-[50%]">
        <CardHeader>
          <CardTitle>Reset Password</CardTitle>
          {/* <CardDescription>
                 Enter the new password.
             </CardDescription> */}
        </CardHeader>
        <CardContent>
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
              <FormField
                control={form.control}
                name="newPassword"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>New Password</FormLabel>
                    <FormControl>
                      <Input placeholder="Enter new password." {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="confirmPassword"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Confirm password</FormLabel>
                    <FormControl>
                      <Input placeholder="Confirm new password" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <div className="w-full flex justify-end mt-2">
                <Button className="mr-2" variant={'outline'}>
                  Cancel
                </Button>
                <Button type="submit">Submit</Button>
              </div>
            </form>
          </Form>
        </CardContent>
      </Card>
    </div>
  )
}

export default ResetPassword

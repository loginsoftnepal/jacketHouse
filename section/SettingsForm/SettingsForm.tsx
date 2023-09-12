'use client'
import { Icons } from '@/components/Icons/Icons'
import { Button } from '@/components/ui/button'
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
import React, { useState } from 'react'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import * as z from 'zod'
import { apiUpdatePassword } from '@/app/api-request/settingCalls'
import { useSession } from 'next-auth/react'

function SettingsForm() {

  const session = useSession();

  const formSchema = z.object({
    oldPassword: z.string(),
    newPassword: z
      .string()
      .min(8, {
        message: 'New Password must be at least 8 characters.',
      })
      .max(30, {
        message: 'New Password must not be more than 30 characters long.',
      }),
    confirmPassword: z.string(),
  })

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      oldPassword: '',
      newPassword: '',
      confirmPassword: '',
    },
  })

  async function onSubmit(values: z.infer<typeof formSchema>) {
    console.log(values);
    // await apiUpdatePassword({id: (session.data?.user as any).id, formData: values})

  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
        <FormField
          control={form.control}
          name="oldPassword"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Old Password</FormLabel>
              <FormControl>
                <Input type="text" placeholder="shadcn" {...field} />
              </FormControl>
              <FormDescription>
                Please enter your old passwrod here.
              </FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="newPassword"
          render={({ field }) => (
            <FormItem>
              <FormLabel>New Password</FormLabel>
              <FormControl>
                <Input type="password" placeholder="shadcn" {...field} />
              </FormControl>
              <FormDescription>
                Enter the new password, must be 8 characters long.
              </FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="confirmPassword"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Confirm Password</FormLabel>
              <FormControl>
                <Input placeholder="shadcn" {...field} />
              </FormControl>
              <FormDescription>
                Must match the new password above.
              </FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />

        <Button type="submit">Update Password</Button>
      </form>
    </Form>
  )
}

export default SettingsForm

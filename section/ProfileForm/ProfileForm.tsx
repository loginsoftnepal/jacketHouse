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
import React, { useEffect, useState } from 'react'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import * as z from 'zod'
import ProfileAvatar from '../ProfileAvatar/ProfileAvatar'
import {
  Profile,
  apiGetProfile,
  apiUpdateProfile,
} from '@/app/api-request/profileCall'
import { useSession } from 'next-auth/react'
import { useInternalMessage } from 'antd/es/message/useMessage'

interface IProfileForm {
  profile: Profile,
}

function ProfileForm({profile}: IProfileForm) {

  
  const formSchema = z.object({
    username: z
      .string()
      .min(2, {
        message: 'Username must be at least 2 characters.',
      })
      .max(30, {
        message: 'Username must not be more than 30 characters long.',
      }),
    fullname: z
      .string()
      .min(2, {
        message: 'Username must be at least 2 characters.',
      })
      .max(30, {
        message: 'Username must not be more than 30 characters long.',
      }),
    email: z.string().email(),
    phone: z
      .string()
      .min(7, {
        message: 'Phone number must be valid',
      })
      .max(30, {
        message: 'Phone number must be valid',
      }),
    address1: z
      .string()
      .min(7, {
        message: 'Phone number must be valid',
      })
      .max(100, {
        message: 'Phone number must be valid',
      }),
    address2: z
      .string()
      .min(7, {
        message: 'Phone number must be valid',
      })
      .max(100, {
        message: 'Phone number must be valid',
      }),
  })

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      username: profile?.username ? profile.username : '',
      fullname: profile?.fullname ? profile.fullname: '',
      email: profile?.email ? profile.email : '',
      phone: profile?.phone ? profile.phone : '',
      address1: profile?.address1 ? profile.address1 : '',
      address2: profile?.address2 ? profile.address2 : '',
    },
  })

  async function onSubmit(values: z.infer<typeof formSchema>) {
    try {
      console.log(values);
      const updatedProfile = await apiUpdateProfile({id: profile.id, formData: {name: values.username, fullname: values.fullname, email: values.email, phone: values.phone, address1: values.address1, address2: values.address2}})
      console.log(updatedProfile);
    } catch (error: any) {
      console.log(error)
    }
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
        <FormField
          control={form.control}
          name="username"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Username</FormLabel>
              <FormControl>
                <Input placeholder="shadcn" {...field} />
              </FormControl>
              <FormDescription>
                This is your public display name.
              </FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="fullname"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Full Name</FormLabel>
              <FormControl>
                <Input placeholder="shadcn" {...field} />
              </FormControl>
              <FormDescription>
                This is your public display name.
              </FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Email</FormLabel>
              <FormControl>
                <Input placeholder="shadcn" {...field} />
              </FormControl>
              <FormDescription>
                This is your public display name.
              </FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="phone"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Phone Number</FormLabel>
              <FormControl>
                <Input placeholder="shadcn" {...field} />
              </FormControl>
              <FormDescription>
                This is your public display name.
              </FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="address1"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Address 1</FormLabel>
              <FormControl>
                <Input placeholder="shadcn" {...field} />
              </FormControl>
              <FormDescription>
                This is your public display name.
              </FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="address2"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Address 2</FormLabel>
              <FormControl>
                <Input placeholder="shadcn" {...field} />
              </FormControl>
              <FormDescription>
                This is your public display name.
              </FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />
        <Button type="submit">Update Profile</Button>
      </form>
    </Form>
  )
}

export default ProfileForm

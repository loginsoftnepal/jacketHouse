'use client'
import { apiVerfiyEmail } from '@/app/api-request/verifyEmail'
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
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form'
import { Input } from '@/components/ui/input'
import { zodResolver } from '@hookform/resolvers/zod'
import Link from 'next/link'
import { useForm } from 'react-hook-form'
import { z } from 'zod'

export default function NewUser() {
  const formSchema = z.object({
    email: z.string().email('Please enter the email format.'),
  })

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: '',
    },
  })
  const onSubmit = async (values: z.infer<typeof formSchema>) => {
    const res = await apiVerfiyEmail(values)
  }

  return (
    <div className="w-screen h-screen flex justify-center items-center">
      <Card>
        <CardHeader>
          <CardTitle>Active your account.</CardTitle>
          <CardDescription>
            A link has been sent to your email address. Click the link to
            activate your account. If you didn't find the email, resend it.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
              <FormField
                control={form.control}
                name="email"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Email address</FormLabel>
                    <FormControl>
                      <Input placeholder="Enter your email" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <div className="w-full flex justify-end">
                <Button className="mr-2" variant={'outline'}>
                  <Link href={'/'}>Cancel</Link>
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

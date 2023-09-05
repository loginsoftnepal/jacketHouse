'use client'
import * as React from 'react'
import { cn } from '@/lib/utils'
import { Label } from '@/components/ui/label'
import { Input } from '@/components/ui/input'
import { Button } from '@/components/ui/button'
import { Icons } from '@/components/Icons/Icons'
import { signIn } from 'next-auth/react'

interface UserAuthFormProps extends React.HTMLAttributes<HTMLDivElement> {}

export function UserRegisterForm({ className, ...props }: UserAuthFormProps) {
  const [isLoading, setIsLoading] = React.useState<boolean>(false)
  const [error, setError] = React.useState('')
  const [formValues, setFormValues] = React.useState({
    name: '',
    email: '',
    password: '',
  })

  async function onSubmit(event: React.SyntheticEvent) {
    event.preventDefault()
    setIsLoading(true)

    try {
      const res = await fetch(`/api/register`, {
        method: 'POST',
        body: JSON.stringify(formValues),
        headers: {
          'Content-Type': 'application/json',
        },
      })

      setIsLoading(false)
      setFormValues({ name: '', email: '', password: '' })
      if (!res.ok) {
        setError((await res.json()).message)
        return
      }

      signIn(undefined, { callbackUrl: '/' })
    } catch (error: any) {
      setIsLoading(false)
      setError(error)
    }
  }

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target
    setFormValues({ ...formValues, [name]: value })
  }

  return (
    <div className={cn('grid gap-6', className)} {...props}>
      <form onSubmit={onSubmit}>
        {error && (
          <p className="text-center bg-red-300 py-4 mb-6 rounded">{error}</p>
        )}
        <div className="grid gap-2">
          <div className="grid gap-1">
            <Label className="sr-only" htmlFor="name">
              Username
            </Label>
            <Input
              id="name"
              name="name"
              placeholder="Enter username"
              type="text"
              disabled={isLoading}
              autoCorrect="off"
              autoCapitalize="none"
              // autoComplete="username"
              onChange={handleChange}
              value={formValues.name}
            />
            <Label className="sr-only" htmlFor="email">
              Email
            </Label>
            <Input
              id="email"
              name="email"
              placeholder="name@example.com"
              type="email"
              autoCapitalize="none"
              // autoComplete="email"
              autoCorrect="off"
              value={formValues.email}
              onChange={handleChange}
              disabled={isLoading}
            />
            <Label className="sr-only" htmlFor="password">
              Password
            </Label>
            <Input
              id="password"
              name="password"
              placeholder="Enter Password"
              type="password"
              autoCapitalize="none"
              // autoComplete="password"
              autoCorrect="off"
              disabled={isLoading}
              onChange={handleChange}
              value={formValues.password}
            />
          </div>
          <Button disabled={isLoading}>
            {isLoading && (
              <Icons.spinner className="mr-2 h-4 w-4 animate-spin" />
            )}
            Create Account with Email
          </Button>
        </div>
      </form>
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
      <Button variant="outline" type="button" disabled={isLoading}>
        {isLoading ? (
          <Icons.spinner className="mr-2 h-4 w-4 animate-spin" />
        ) : (
          <Icons.google className="mr-2 h-4 w-4" />
        )}{' '}
        Google
      </Button>
    </div>
  )
}

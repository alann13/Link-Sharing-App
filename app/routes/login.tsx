import type { MetaFunction } from '@remix-run/node'

export const meta: MetaFunction = () => {
  return [
    { title: 'Link Sharing App | Login' },
    { name: 'description', content: '' },
  ]
}

export default function LoginPage() {
  return <h1>Login page</h1>
}

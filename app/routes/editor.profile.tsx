import type { MetaFunction } from '@remix-run/node'

export const meta: MetaFunction = () => {
  return [
    { title: 'Link Sharing App | Profile' },
    { name: 'description', content: '' },
  ]
}

export default function EditorProfilePage() {
  return <h1>Editor profile page</h1>
}

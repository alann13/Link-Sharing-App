import type { MetaFunction } from '@remix-run/node'

export const meta: MetaFunction = () => {
  return [
    { title: 'Link Sharing App | Register' },
    { name: 'description', content: '' },
  ]
}

export default function EditorLinksPage() {
  return <h1>Register page</h1>
}

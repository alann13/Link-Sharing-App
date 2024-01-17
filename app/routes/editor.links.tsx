import type { MetaFunction } from '@remix-run/node'

export const meta: MetaFunction = () => {
  return [
    { title: 'Link Sharing App | Editor Links' },
    { name: 'description', content: '' },
  ]
}

export default function EditorLinksPage() {
  return <h1>Editor link page</h1>
}

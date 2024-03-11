import type { MetaFunction } from '@remix-run/node'

export const meta: MetaFunction = () => {
  return [
    { title: 'Link Sharing App | Preview' },
    { name: 'description', content: '' },
  ]
}

export default function PreviewPage() {
  return <h1>Preview Page</h1>
}

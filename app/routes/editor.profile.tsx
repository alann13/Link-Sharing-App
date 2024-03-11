import type { MetaFunction, ActionFunctionArgs } from "@remix-run/node"
import { redirect } from "@remix-run/react"

export const meta: MetaFunction = () => {
  return [{ title: "Link Sharing App | Profile" }, { name: "description", content: "" }]
}

export const action = async ({ request }: ActionFunctionArgs) => {
  return redirect("/editor/profile")
}

export default function EditorProfilePage() {
  return <h1>Editor profile page</h1>
}

import { Outlet } from "@remix-run/react"

export default function EditorPage() {
  return (
    <>
      <nav>devlinks logo</nav>
      <main>
        <Outlet />
      </main>
    </>
  )
}

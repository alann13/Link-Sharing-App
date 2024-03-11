import type { MetaFunction, LinksFunction } from "@remix-run/node"
import { Form, Link } from "@remix-run/react"
import loginPageStyles from "../styles/login-page.css"
import logo from "../images/logo-devlinks-large.svg"

export const links: LinksFunction = () => {
  return [
    {
      rel: "icon",
      href: "/favicon.png",
      type: "image/png",
    },
    { rel: "stylesheet", href: loginPageStyles },
  ]
}

export const meta: MetaFunction = () => {
  return [{ title: "Link Sharing App" }, { name: "description", content: "A link sharing app" }]
}

export default function Index() {
  return (
    <main>
      <div>
        <img className="page-logo" src={logo} alt="DevLinks Logo" />
        <div className="login-form-ctn">
          <h1>Login</h1>
          <p>Add your details below to get back into the app</p>
          <Form method="POST" className="login-form" action="/editor/profile">
            <label htmlFor="email">Email Address</label>
            <input type="text" name="email" placeholder="e.g alex@email.com" />
            <label htmlFor="password">Password</label>
            <input type="password" name="password" placeholder="Enter your password" />
            <button type="submit">Login</button>
            <p className="form-footer-text">
              Don&apos;t have an account?&nbsp;
              <span>
                <Link to="/register">Create account</Link>
              </span>
            </p>
          </Form>
        </div>
      </div>
    </main>
  )
}

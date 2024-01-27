import type { MetaFunction, LinksFunction } from '@remix-run/node'
import { Form } from '@remix-run/react'
import loginPageStyles from '../styles/login-page.css'
import logo from '../images/logo-devlinks-large.svg'

export const links: LinksFunction = () => {
  return [
    {
      rel: 'icon',
      href: '/favicon.png',
      type: 'image/png',
    },
    { rel: 'stylesheet', href: loginPageStyles },
  ]
}

export const meta: MetaFunction = () => {
  return [
    { title: 'Link Sharing App' },
    { name: 'description', content: 'A link sharing app' },
  ]
}

export default function Index() {
  return (
    <main>
      <div>
        <img className="page-logo" src={logo} alt="DevLinks Logo" />
        <div className="login-form-ctn">
          <h1>Login</h1>
          <p>Add your details below to get back into the app</p>
          <Form method="POST" className="login-form">
            <input type="text" name="email" />
            <input type="password" name="password" />
          </Form>
        </div>
      </div>
    </main>
  )
}

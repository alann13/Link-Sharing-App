import type { ActionFunctionArgs, LinksFunction, MetaFunction } from "@remix-run/node"
import { json, redirect } from "@remix-run/node"
import { Form, Link } from "@remix-run/react"
import logo from "../images/logo-devlinks-large.svg"
import registerPageStyles from "../styles/register.page.css"
import { checkPasswordLength, checkPasswordMatch } from "~/utils/auth"
import TextField from "~/components/TextField/TextField"

export const links: LinksFunction = () => {
  return [
    {
      rel: "icon",
      href: "/favicon.png",
      type: "image/png",
    },
    { rel: "stylesheet", href: registerPageStyles },
  ]
}

export const meta: MetaFunction = () => {
  return [{ title: "Link Sharing App | Register" }, { name: "description", content: "Register your account with us" }]
}

export async function action({ request }: ActionFunctionArgs) {
  const body = await request.formData()
  const formData = Object.fromEntries(body)

  // if (checkPasswordMatch(formData['email'], confirmPassword) && checkPasswordLength(createPassword))
  //   return redirect(`/editor/links`)

  return json({
    error: "hi",
  })
}

export default function RegisterPage() {
  return (
    <main>
      <div>
        <img className="page-logo" src={logo} alt="DevLinks Logo" />
        <div className="login-form-ctn">
          <h1>Create account</h1>
          <p>Let&apos;s get you started sharing your links!</p>
          <Form method="POST" className="login-form">
            <TextField
              id="register-email"
              labelContent="Email Address"
              labelFor="register-email"
              name="email"
              placeholder="e.g alex@email.com"
            />

            <TextField
              id="createPassword"
              name="createPassword"
              labelContent="Create password"
              labelFor="create-password"
              placeholder="At least 8 characters"
            />

            <TextField
              id="confirmPassword"
              labelContent="Confirm password"
              labelFor="confirm-password"
              name="confirmPassword"
              placeholder="At least 8 characters"
            />

            <button type="submit">Create new account</button>
            <p className="form-footer-text">
              Already have an account?&nbsp;
              <span>
                <Link to="/">Login</Link>
              </span>
            </p>
          </Form>
        </div>
      </div>
    </main>
  )
}

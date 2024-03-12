import { createCookieSessionStorage, json, redirect } from "@remix-run/node"
import bcrypt from "bcryptjs"
import { prisma } from "./prisma.server"
import { LoginForm, RegisterForm } from "./types.server"
import { createUser } from "./user.server"

const sessionSecret = process.env.SESSION_SECRET

if (!sessionSecret) {
  throw new Error("SESSION_SECRET must be set")
}

const storage = createCookieSessionStorage({
  cookie: {
    name: "sesh",
    secure: process.env.NODE_ENV === "production",
    secrets: [sessionSecret],
    sameSite: "lax",
    path: "/",
    maxAge: 60 * 60 * 24 * 30,
    httpOnly: true,
  },
})

export async function login({ email, password }: LoginForm) {
  const user = await prisma.user.findUnique({ where: { email } })

  if (!user || !(await bcrypt.compare(password, user.password))) {
    return json({ error: "Incorrect login." }, { status: 400 })
  }

  return createUserSession(user.id, "/editor")
}

export async function register(user: RegisterForm) {
  const existingUser = await prisma.user.count({ where: { email: user.email } })

  if (existingUser) {
    return json(
      {
        error: "User already exists with that email.",
      },
      { status: 400 }
    )
  }

  const newlyCreatedUser = await createUser(user)

  if (!newlyCreatedUser) {
    return json(
      {
        error: "Something went wrong",
        fields: { email: user.email, password: user.password },
      },
      { status: 400 }
    )
  }

  return createUserSession(newlyCreatedUser.id, "/editor")
}

export async function createUserSession(userId: string, redirectTo: string) {
  const session = await storage.getSession()
  session.set("userId", userId)

  return redirect(redirectTo, {
    headers: { "Set-Cookie": await storage.commitSession(session) },
  })
}

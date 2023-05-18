import { Config } from "https://edge.netlify.com"

export default async () => throw new Error("💥")

export const config: Config = {
  path: "/hello"
}

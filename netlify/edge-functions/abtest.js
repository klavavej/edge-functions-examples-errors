import { Config } from "https://edge.netlify.com"

export default async () => throw new Error("oops")

export const config: Config = {
  path: "/hello"
}

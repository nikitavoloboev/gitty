import { command, optional, positional, run, string } from "cmd-ts"
import { execa } from "execa"

const cmd = command({
  name: "gitty",
  description: "automate git",
  version: "0.0.1",
  args: {
    query: positional({ type: optional(string), displayName: "query" }),
  },
  handler: async (args) => {
    if (args.query === ".") {
      // git add .
      // git commit -m "."
      // git push
      // await execa("git", ["."])
      // await execa("git", ["-m"])
      // await execa("git", ["push"])
    }
  },
})

run(cmd, process.argv.slice(2))

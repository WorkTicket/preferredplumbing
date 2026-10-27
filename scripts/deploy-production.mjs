import { execFileSync } from "node:child_process";

const run = (command, args, options = {}) => {
  if (process.platform === "win32" && ["npm", "npx"].includes(command)) {
    execFileSync(process.env.ComSpec || "cmd.exe", [
      "/d",
      "/s",
      "/c",
      [command, ...args].join(" "),
    ], { stdio: "inherit", ...options });
    return;
  }
  execFileSync(command, args, { stdio: "inherit", ...options });
};
const output = (command, args) =>
  execFileSync(command, args, {
    encoding: "utf8",
  }).trim();

try {
  output("git", ["rev-parse", "--is-inside-work-tree"]);
} catch {
  throw new Error("Production deployment must run from the Git repository.");
}

if (output("git", ["branch", "--show-current"]) !== "main") {
  throw new Error("Production deployment is only allowed from the main branch.");
}
if (output("git", ["status", "--porcelain"])) {
  throw new Error("Commit or discard all changes before deploying production.");
}

run("git", ["fetch", "origin", "main"]);
const commit = output("git", ["rev-parse", "HEAD"]);
const remoteCommit = output("git", ["rev-parse", "origin/main"]);
if (commit !== remoteCommit) {
  throw new Error("Local main must exactly match origin/main before deployment.");
}

run("npm", ["ci"]);
run("npm", ["run", "typecheck"]);
run("npm", ["run", "check"]);
run("npx", ["wrangler", "deploy", "--config", "wrangler.contact.toml"]);
run("npx", [
  "wrangler",
  "pages",
  "deploy",
  "out",
  "--project-name",
  "preferred-plumbing-preview",
  "--branch",
  "main",
  "--commit-hash",
  commit,
]);

console.log(
  `Production deployed from ${commit}. Previous deployments were retained for rollback.`,
);

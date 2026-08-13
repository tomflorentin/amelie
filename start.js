const { spawn } = require("node:child_process");

const apps = [
  { name: "amelienergie", port: "4000" },
  { name: "pompihouse", port: "4001" },
];

let shuttingDown = false;

const children = apps.map(({ name, port }) =>
  spawn("node", [`/app/${name}/server.js`], {
    stdio: "inherit",
    env: { ...process.env, PORT: port, HOSTNAME: "0.0.0.0" },
  })
);

function shutdown(code) {
  if (shuttingDown) return;
  shuttingDown = true;
  children.forEach((child) => child.kill());
  process.exit(code);
}

children.forEach((child) => child.on("exit", (code) => shutdown(code ?? 1)));
process.on("SIGTERM", () => shutdown(0));
process.on("SIGINT", () => shutdown(0));

const { createServer } = require("node:http");
const { extname, join, normalize, resolve } = require("node:path");
const { readFile } = require("node:fs").promises;

const apps = [
  { name: "amelienergie", port: 4000 },
  { name: "pompihouse", port: 4001 },
];

const contentTypes = {
  ".css": "text/css; charset=utf-8",
  ".gif": "image/gif",
  ".html": "text/html; charset=utf-8",
  ".ico": "image/x-icon",
  ".jpeg": "image/jpeg",
  ".jpg": "image/jpeg",
  ".js": "text/javascript; charset=utf-8",
  ".json": "application/json; charset=utf-8",
  ".png": "image/png",
  ".svg": "image/svg+xml",
  ".webp": "image/webp",
  ".woff": "font/woff",
  ".woff2": "font/woff2",
};

function fileCandidates(root, pathname) {
  const decodedPath = decodeURIComponent(pathname.split("?")[0]);
  const relativePath = normalize(decodedPath).replace(/^([.][.][/\\])+/, "");
  const filePath = resolve(root, `.${relativePath}`);
  const rootPath = resolve(root);

  if (filePath !== rootPath && !filePath.startsWith(`${rootPath}/`)) {
    return [];
  }

  return [
    filePath,
    `${filePath}.html`,
    join(filePath, "index.html"),
  ];
}

function serve(root, req, res) {
  const candidates = fileCandidates(root, req.url || "/");
  if (candidates.length === 0) {
    res.writeHead(403);
    res.end("Forbidden");
    return;
  }

  (async () => {
    for (const candidate of candidates) {
      try {
        const body = await readFile(candidate);
        const type = contentTypes[extname(candidate)] || "application/octet-stream";
        res.writeHead(200, {
          "Content-Type": type,
          "Cache-Control": candidate.includes("/_next/")
            ? "public, max-age=31536000, immutable"
            : "public, max-age=3600",
        });
        res.end(body);
        return;
      } catch (error) {
        if (error.code !== "ENOENT" && error.code !== "EISDIR") throw error;
      }
    }

    res.writeHead(404, { "Content-Type": "text/plain; charset=utf-8" });
    res.end("Not found");
  })().catch(() => {
    if (!res.headersSent) res.writeHead(500);
    res.end("Internal server error");
  });
}

const servers = apps.map(({ name, port }) => {
  const root = join(__dirname, "apps", name, "out");
  const server = createServer((req, res) => serve(root, req, res));
  server.listen(port, "0.0.0.0", () => {
    console.log(`${name} listening on port ${port}`);
  });
  return server;
});

function shutdown() {
  servers.forEach((server) => server.close());
}

process.on("SIGTERM", shutdown);
process.on("SIGINT", shutdown);

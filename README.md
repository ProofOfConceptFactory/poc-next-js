Hello from Next.js!👋
========================

The "Hello from Next.js!👋" application is just a starter to show a minimalist Next.js app.

Requirements
------------

* [Docker Desktop][1]

Installation
------------

Clone this repository:

```console
https://github.com/ProofOfConceptFactory/poc-next-js
```

Go on the project root folder:

```console
cd poc-next-js/
```

Install certificate to use HTTPS:

```console
mkcert -install
mkdir -p certs
mkcert -key-file certs/poc-next-js.key.pem -cert-file certs/poc-next-js.crt.pem localhost
```

Execute this command to launch docker container:

```console
docker compose -f docker/compose.yaml up -d --build
```

Install JavaScript dependencies:

```console
docker compose -f docker/compose.yaml exec node pnpm install
```

Usage
-----

There's no need to configure anything before running the application. There are
2 different ways of running this application depending on your needs:

**Option 1. Run the application in dev mode**

Start the application using the dev server:

```console
docker compose -f docker/compose.yaml exec node pnpm dev --experimental-https --experimental-https-key certs/poc-next-js.key.pem --experimental-https-cert certs/poc-next-js.crt.pem
```

Then access the application in your browser at the given URL (<https://localhost:3000> by default).

**Option 2. Run the application in prod mode**

```console
docker compose -f docker/compose.yaml exec node pnpm build
```
You now have your fresh JavaScript files for production 🚀.
You can check everything is OK by opening the [Next production][2] directory and navigate on your application by opening the [index.html][3] file.

Tests
-----

Install Cypress dependencies:

```console
docker compose -f docker/compose.yaml exec node pnpm cypress install
```

Execute this command to run tests:

```console
docker compose -f docker/compose.yaml exec node pnpm cypress run
```

[1]: https://www.docker.com/products/docker-desktop/
[2]: ./.next/server/app
[3]: ./.next/server/app/index.html

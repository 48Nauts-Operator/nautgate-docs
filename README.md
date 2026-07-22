# nautgate-docs

Documentation for [NautGate](https://github.com/48Nauts-Operator/NautGate),
published at [docs.nautgate.dev](https://docs.nautgate.dev).

[Fumadocs](https://fumadocs.dev) on Next.js, exported statically — no server.

## Develop

```bash
bun install
bun run dev      # http://localhost:3000
bun run build    # → out/
```

## Writing

Content is MDX under `content/docs/`. Each folder is a chapter with its own
`meta.json` giving the sidebar title and page order; the root `content/docs/meta.json`
orders the chapters themselves.

Two MDX traps worth knowing:

- **`<https://example.com>` autolinks fail the build** — MDX parses `<` as JSX.
  Use `[text](url)`.
- **Bare `{...}` in prose is parsed as a JS expression.** Wrap shapes like
  `` `{offline: true}` `` in backticks, or the build fails with a
  `ReferenceError` — at build time, not dev time. Run `bun run build` before
  pushing.

## Accuracy

These docs were written from a code review of the shipping tree rather than from
the README, and several pages deliberately document limitations and gotchas
(attestation coverage, the `.env` precedence trap, what offline mode does *not*
cover). Keep that standard: if a claim cannot be verified in code, do not make
it.

## Brand

Colours in `app/global.css` mirror `docs/brand.md` in the NautGate repo, which is
the source of truth. Note the ramp — `#808000` is too dark for text on near-black,
so type uses `#C3CE1F` while fills stay at the base, and light mode needs a
*darker* olive for contrast.

## Deploy

`main` → GitHub Pages via `.github/workflows/pages.yml`. Forgejo
(`48Nauts/nautgate-docs`) is the source of truth; GitHub is the deploy mirror.

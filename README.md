# Welcome to [Astro](https://astro.build)

[![Open in StackBlitz](https://developer.stackblitz.com/img/open_in_stackblitz.svg)](https://stackblitz.com/github/withastro/astro/tree/latest/examples/basics)

> 🧑‍🚀 **Seasoned astronaut?** Delete this file. Have fun!

![basics](https://user-images.githubusercontent.com/4677417/186188965-73453154-fdec-4d6b-9c34-cb35c248ae5b.png)


## 🚀 Project Structure

Inside of your Astro project, you'll see the following folders and files:

```
/
├── public/
│   └── favicon.svg
├── src/
│   ├── components/
│   │   └── Card.astro
│   ├── layouts/
│   │   └── Layout.astro
│   └── pages/
│       └── index.astro
└── package.json
```

Astro looks for `.astro` or `.md` files in the `src/pages/` directory. Each page is exposed as a route based on its file name.

There's nothing special about `src/components/`, but that's where we like to put any `Astro/React/Vue/Svelte/Preact` components.

Any static assets, like images, can be placed in the `public/` directory.

## 🧞 Commands

All commands are run from the root of the project, from a terminal:

| Command                | Action                                             |
| :--------------------- | :------------------------------------------------- |
| `npm install`          | Installs dependencies                              |
| `npm run dev`          | Starts local dev server at `localhost:3000`        |
| `npm run build`        | Build your production site to `./dist/`            |
| `npm run preview`      | Preview your build locally, before deploying       |
| `npm run astro ...`    | Run CLI commands like `astro add`, `astro preview` |
| `npm run astro --help` | Get help using the Astro CLI                       |

## Project Notes

I have followed the [Ben Holmes](https://twitter.com/BHolmesDev) and [whitep4nth3r](https://www.youtube.com/c/whitep4nth3r) session on Astro on her [Youtube channel](https://www.youtube.com/watch?v=A3HDN_dPq7k).


__Tip: __ find nice projects on [astro.new](https://astro.new).

### Tip for PNPM users

Add `.npmrc` if using `pnpm` with the following content:

```ini
// expose Astro dependencies for 'pnpm' users
shamefully-hoist=true
```

### Add Github GH CLI

`Astro` calls `integrations` what most other componies call `plugins`.

Add Github `gh` CLI:

```bash
brew install gh
gh auth login
# make the initial commit and then create and add the remote
gh repo create
```

### Add Netlify CLI with an Alias

First, install Netlify CLI:

```bash
pnpm i -g netlify-cli
netlify --version
```

Now open the `~/.zshrc` with `nano` and add the `ntl` alias

```bash
alias ntl='netlify'
```

Authorize with Github and create a new Netlify website:

```bash
ntl login # if expired run "ntl logout" first
ntl init # follow the dialog
git push
ntl open
```

### Fetching Remote Data

Next step, let us try and fetch some Markdown file from Github and show it on the page. We create a `src/components/Readme.astro` file and add this code:

```tsx
---
import { marked } from 'marked'
const response = await fetch('https://raw.githubusercontent.com/madrus/mdocs/master/README.md')
const markdown = await response.text()
const content = marked.parse(markdown)
---
<section set:html={content}></section>
```

Several notes:
1. we have to add `marked` as a dependency and `@types/marked` as a devDependency for this to work
2. as `marked.parse()` generates HTML, we need to add it via `set:html={}` attribute

## 👀 Want to learn more?

Feel free to check [our documentation](https://docs.astro.build) or jump into our [Discord server](https://astro.build/chat).

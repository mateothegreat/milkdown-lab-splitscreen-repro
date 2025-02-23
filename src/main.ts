import { splitEditing } from '@milkdown-lab/plugin-split-editing'
import { defaultValueCtx, Editor, rootCtx } from '@milkdown/core'
import { commonmark } from '@milkdown/preset-commonmark'
import { gfm } from '@milkdown/preset-gfm'
import { nord } from '@milkdown/theme-nord'

import '@milkdown/theme-nord/style.css'
import 'uno.css'
import './style.css'

async function main() {
  setInterval(async () => {
    const root = document.querySelector('#app')
    const editor = await Editor.make()
      .config(nord)
      .config((ctx) => {
        ctx.set(rootCtx, root)
        ctx.set(defaultValueCtx, '# Hello milkdown-lab')
      })
      .use(commonmark)
      .use(gfm)
      .use(splitEditing)
      .create()
  }, 3000)
}

main()

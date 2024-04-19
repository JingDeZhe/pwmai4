import { defineConfig } from 'vitepress'

import { generateSidebar } from './util/generate.mjs'

const config = defineConfig({
  base: '/pwmai4/',
  outDir: '../dist',
  lang: 'zh-CN',
  title: 'Mathematica Programming',
  markdown: {
    math: true,
  },
  head: [
    [
      'link',
      { rel: 'icon', type: 'image/x-icon', href: '/pwmai4/favicon.ico' },
    ],
    [
      'link',
      {
        rel: 'stylesheet',
        href: 'https://cdn.bootcdn.net/ajax/libs/firacode/6.2.0/fira_code.css',
      },
    ],
  ],
  themeConfig: {
    sidebar: generateSidebar(),
  },
})

export default config

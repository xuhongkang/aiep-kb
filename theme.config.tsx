import React from 'react'
import { DocsThemeConfig } from 'nextra-theme-docs'

const config: DocsThemeConfig = {
  logo: <span>AIEP</span>,
  project: {
    link: 'https://github.com/xuhongkang/aiep-kb',
  },
  search: {
    placeholder: 'Search/Buscar...',
  },
  i18n: [
    { locale: 'en', text: 'English' },
    { locale: 'es', text: 'Español' }
  ],
  editLink: {
    component: null

  },
  feedback: {
    content: null
  }
}

export default config

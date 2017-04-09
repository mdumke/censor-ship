import jsdoc2md from 'jsdoc-to-markdown'
import fs from 'fs'

let content = jsdoc2md.renderSync({
  files: [
    './src/utils/*.js'
  ]
})

fs.writeFileSync('docs/docs.md', content)

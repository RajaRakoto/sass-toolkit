const fs = require('fs')
const path = require('path')

// recursively browse files in a directory
function traverseDirectory(dir) {
  fs.readdirSync(dir).forEach((file) => {
    const filePath = path.join(dir, file)
    const stat = fs.statSync(filePath)

    if (stat.isDirectory()) {
      // ignore node_modules
      if (file !== 'node_modules') {
        traverseDirectory(filePath)
      }
    } else {
      if (path.extname(file) === '.scss') {
        processSCSSFile(filePath)
      }
    }
  })
}

// add utf8 at the beginning of an SCSS file
function processSCSSFile(filePath) {
  const data = fs.readFileSync(filePath, 'utf8')
  if (!data.startsWith('@charset "UTF-8";')) {
    const newData = `@charset "UTF-8";\n\n${data}`
    fs.writeFileSync(filePath, newData)
    console.log(`${path.relative(process.cwd(), filePath)} encoded ... [done]`)
  } else {
    console.log(
      `${path.relative(process.cwd(), filePath)} already encoded, skipping ...`,
    )
  }
}

// entry point
function startCharset() {
  const projectRoot = path.join(__dirname, '..')
  traverseDirectory(projectRoot)
}

startCharset()

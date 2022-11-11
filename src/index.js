const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')
const helmet = require('helmet')
const morgan = require('morgan')
const mathjax = require('mathjax-node')

const { Macros } = require('./macros')

const app = express()
app.use(helmet())
app.use(bodyParser.json())
app.use(cors())
app.use(morgan('combined'))

mathjax.config({ MathJax: { TeX: { Macros } } })
mathjax.start()

app.get('/', (req, res) => {
  res.send({
    message: 'HumbleGO server is running',
  })
})

app.get('/math', (req, res) => {
  const { tex, theme } = req.query
  console.log(`received`, { tex, theme })
  mathjax.typeset({ math: tex, format: 'TeX', svg: true }, data => {
    switch (theme) {
      case 'dark':
        data.svg = data.svg.replace(/fill="currentColor"/g, 'fill="#ffffff"')
        break
      case 'light':
        break
      default:
        break
    }
    res.writeHead(200, {
      'Content-type': 'image/svg+xml;charset=utf-8',
      'Cross-Origin-Resource-Policy': 'cross-origin',
    })
    res.write(data.svg)
    res.end()
  })
})

const PORT = 23333
app.listen(PORT, () => {
  console.log(`🚀 HumbleGO starts listening on port ${PORT}`)
})

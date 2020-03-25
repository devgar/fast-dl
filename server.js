#!/usr/bin/env node

const express = require('express')
const youtubedl = require('youtube-dl')
const cors = require('cors')
const { resolve } = require('path')

const app = express()
const port = process.env.PORT || 3000

app.use(cors())

app.get('/', (req, res, next) => {
  const { url } = req.query
  if (!url) return next()
  console.log('Downloading from:', url)
  youtubedl.exec(url, ['-x', '--audio-format', 'mp3'], {}, function(err, output) {
    if (err) return next(err)

    console.log('Downloaded:\n', output.join('\n'))
    res.json({ status: 'done' })
    // TODO: Do something useful with downloaded files
  })
})

app.listen(port, () => {
  console.log(`fast-dl server listening on port`, port)
  console.log(`Extension path:`, resolve(__dirname, 'extension'))
  console.log(`Downloads path:`, process.cwd())
})

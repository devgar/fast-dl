#!/usr/bin/env node

const express = require('express')
const youtubedl = require('youtube-dl')
const app = express()
const port = process.env.PORT || 3000

app.get('/', (req, res, next) => {
  const { url } = req.query
  if (!url) return next()
  youtubedl.exec(url, ['-x', '--audio', 'mp3'], {}, (err, outupt) => {
    if (err) return  next(err)
    res.json({ status: 'done' })
  })
})

app.listen(port, () => {
  console.log(`fast-dl server listening port`, port)
  console.log(`Extension path:`, '_' )
  console.log(`Downloads path:`, process.cwd())
})

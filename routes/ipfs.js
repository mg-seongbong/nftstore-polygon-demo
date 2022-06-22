'use strict'

let express = require('express')
let router = express.Router()
let create = require('ipfs-http-client')
let { globSource } = create
// let ipfs = create({host:'ipfs.infura.io', port:5001, protocol:"https"})
// const ipfs = new ipfsClient({host:'localhost', port:'5001', protocol: 'http'})
const ipfs = new create('/ip4/127.0.0.1/tcp/5001') // ipfs daemon listening
const IPFS_STATUS_PREFIX = 'ipfs.io/ipfs/'

let fs = require('fs')

const addFile = async (filePath) => {
  for await (const file of ipfs.add(globSource(filePath, { recursive: true }))) {
    return `${file.cid}`
  }
}

const addMetadata = async (metadata) => {
  for await (const ret of ipfs.add(metadata)) {
    return `${ret.cid}`
  }
}

router.post('/upload/file', async (req, res, next) => {
  const file = req.files.file
  const fileName = req.body.fileName
  const filePath = 'mintingImgs/' + fileName

  file.mv(filePath, async (err) => {
    if (err) {
      console.log('Error : failed to download the file.')
    } else {
      let fileHash = await addFile(filePath)
      
      fs.unlink(filePath, (err) => {
        if (err) console.error(err);
      })

      res.send({
        hash: fileHash,
        imgURL: `${IPFS_STATUS_PREFIX}${fileHash}`
      })
    }
  })
});

router.post('/upload/meta', async (req, res, next) => {
  let metaHash = await addMetadata(Buffer.from(JSON.stringify(req.body)))
  res.send({
    metaURL: `${IPFS_STATUS_PREFIX}${metaHash}`
  })
})


module.exports = router;

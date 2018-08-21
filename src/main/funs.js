import https from 'https'
import fs from 'fs'
import path from 'path'
/*
export function getTrayimg () {
  let imgName = 'windows-icon.png'
  return new Promise((resolve, reject) => {
    https.get('https://aapi.laifuyun.com/v2/download/1,16418e48406d', function (res) {
      var imgData = ''
      res.setEncoding('binary') // 一定要设置response的编码为binary否则会下载下来的图片打不开
      res.on('data', function (chunk) {
        imgData += chunk
      })
      res.on('end', function () {
        fs.writeFile(path.join(process.cwd(), imgName), imgData, 'binary', function (err) {
          if (err) {
            console.error('down fail')
            throw new Error('down fail')
          } else {
            console.log('down success')
            resolve('down success')
          }
        })
      })
    })
  })
}
*/

export function getTrayimg () {
  var p1 = new Promise(function (resolve, reject) {
    https.get('https://up.fumamx.com/v2/image/5,029d50b060e4/@100', function (res) {
      var imgData = ''
      res.setEncoding('binary') // 一定要设置response的编码为binary否则会下载下来的图片打不开
      res.on('data', function (chunk) {
        imgData += chunk
      })
      res.on('end', function () {
        fs.writeFile(path.join(process.cwd(), 'windows-icon.png'), imgData, 'binary', function (err) {
          if (err) {
            console.error('down fail')
            throw new Error('down fail')
          } else {
            console.log('down success')
            resolve('down success')
          }
        })
      })
    })
  })
  return Promise.all([p1])
}

import config from './config.js'



export function request(url){
  return new Promise((resolve,reject)=>{
    wx.request({
      url: config.host + url,
      success: function(res){
        if(res.data.code == 0){
          resolve(res.data.data)
        }else{
          reject(res.data)
        }
      }
    })
  })
}

// const formatTime = date => {
//   const year = date.getFullYear()
//   const month = date.getMonth() + 1
//   const day = date.getDate()
//   const hour = date.getHours()
//   const minute = date.getMinutes()
//   const second = date.getSeconds()

//   return [year, month, day].map(formatNumber).join('/') + ' ' + [hour, minute, second].map(formatNumber).join(':')
// }

// const formatNumber = n => {
//   n = n.toString()
//   return n[1] ? n : '0' + n
// }

// module.exports = {
//   formatTime: formatTime
// }




import request from 'browser-request'
let apiUrl = 'http://207.154.254.134/'

export function getAllCategoriesService () {
  return new Promise((resolve, reject) => {
    request(apiUrl + 'api/v1/category/getAllCategories', (er, response, body) => {
      if (er) {
        reject(er)
      }
      let list = JSON.parse(body)
      console.log(list)
      resolve(list)
    })
  })
}

// export function getBigDebt () {
//   return new Promise((resolve, reject) => {
//     // http://api.openweathermap.org/data/2.5/forecast/daily?q=London&mode=json&units=metric&cnt=3&appid=e04b30b1e12c331a401c7669d7ab0afe
//     request('http://debtmd.ihub.space/api/v1/debt/total', function (er, response, body) {
//       if (er) {
//         reject(er)
//       }
//       let list = JSON.parse(body)
//       resolve(list)
//     })
//   })
// }
//

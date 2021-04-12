// fetch.js

import axios from 'axios';

export default {
  async fetchPostsList(callback) {
    let data={
        "IncidentID": "1455",
       "Location": "xxx",
       "Latitude": 35.34242 ,
       "Longitude": 34.23432 ,
       "Year": "2020",
       "Month": "6",
       "Day": "9",
       "Details": "xxxx",
       "Category": "sss"
       };
       
    return axios.post('https://ripple506.herokuapp.com/reportCreate',data).then(res => {
      console.log(res);
      return callback(res.data);
    })
  },
  async fetchPostsList2(callback) {
    let data={
        "Latitude": 35.34242 ,
        "Longitude": 34.23432 ,
        "LongitudeDelta": 1,
        "LatitudeDelta": 1
        };
        
        //此为示列 测试可注册返回值
        return axios.get('https://jsonplaceholder.typicode.com/posts').then(res => {
         console.log('dd:',res.data)    
        return callback(res.data);
          })
       
    // return axios.post('https://ripple506.herokuapp.com/getReportByLocation',data).then(res => {
    //   console.log('fetchPostsList2:',res);
    //   return callback(res.data);
    // })
  }

}
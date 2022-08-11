import axios from "axios"
import {message} from "antd"
/*
wrap axios to send ajax request
*/

export default function ajax(url, data={}, method="GET"){

    return new Promise((resolve,reject)=>{
        let promise
        if (method==="get"){

            promise =axios.get(url,{
                 params:data
             })
         } else {
             promise= axios.post(url, data)
         }
        
         promise.then(response=>{
            resolve(response)
        }).catch(error=>{
            message.error("something went wrong", error.message)
        })
    })
   
    

}
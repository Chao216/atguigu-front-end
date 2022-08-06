import axios from "axios"

/*
wrap axios to send ajax request
*/

export default function ajax(url, data={}, method="GET"){
    if (method==="get"){
        axios.get(url,{
            params:data
        })
    } else {
        axios.post(url, data)
    }

}
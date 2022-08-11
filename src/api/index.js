/*
this module contains all api related functions
all api related fucntions return promises
*/

// the login api

import ajax from "./ajax"
const BASE = ""
// export function reqLogin(username, password){
// return ajax("/login",{username,password}, "POST")
// }

//这里写箭头函数不要放{}， 如果一定要， 加上return ()=>{return xxx}

export const reqLogin =(username, password)=> ajax(BASE +"/login", {username,password},"POST")

// add user api

export const reqAddUser=(user)=>ajax(BASE+"/manage/user/add", user, "POST")
import React from "react"
import memoryUtils from "../../utils/memoryUtils"
import { useNavigate } from "react-router-dom"

// management router component


export default function Admin(){
    let navigate = useNavigate()
    const user = memoryUtils.user
    if (!user||!user._id){
        navigate("/login")
    }
    return (
        <div>
            Hello {user.username}
        </div>
    )
}
import React, { useEffect } from "react"
import "./login.less"
import logo from "./images/Timma-logos-300.jpeg"
import {useNavigate}from "react-router-dom"
import memoryUtils from "../../utils/memoryUtils"
import storageUtils from "../../utils/storageUtils"

// import antd components
import { LockOutlined, UserOutlined } from '@ant-design/icons';
import { Button, Form, Input, message } from 'antd';
import {reqLogin} from "../../api"


export default function Login(){
  let navigate = useNavigate()
   // here we will check if user is already logged in. if he/she did, go to admin.

   useEffect(()=>{
    const user = memoryUtils.user
    if (user._id){
      navigate("/")
    }

   })
  
   
  async function onFinish(values){
    
      console.log('Received values of form: ', values);
      const {username, password}=values
      // reqLogin(username,password).then(response=>{console.log("successful", response.data)}).catch(error=>{console.log("failed", error)})
      
        const response = await reqLogin(username,password)
        
        if (response.status===0){
          const user = response.data
          //store info into RAM
          memoryUtils.user=user
          //let us also store the user info in localStorage
          storageUtils.saveUser(user)
          navigate("/")
        } else {
          message.error("invalid password or username")
        }
  }

  function validatePwd(rule,value){
    if (!value){
      return Promise.reject(new Error('cannot be empty'));
    } else if (value.length<4){
      return Promise.reject(new Error('at least 4 digits'));
      
    } else if (value.length>12){
      return Promise.reject(new Error('at most 12 digits'));
      
    } else if (!/^[a-zA-Z0-9_]+$/.test(value)){
      return Promise.reject(new Error('must conatin number letter, and underscore'));
      
    } else {
      return Promise.resolve()
    }
   }
 
  
   return <div className="login">
   <header className="login-header">
       <img src={logo} alt="header-logo"  />
       <h1>TIMMA managment system</h1>
   </header>
   <section className="login-content">
       <h2>Login</h2>
       <Form
name="normal_login"
className="login-form"
initialValues={{
remember: true,
}}
onFinish={onFinish}
>
<Form.Item
name="username"
rules={[
{
required: true,
message: 'Please input your Username!',
},
{
min: 4,
message: 'username at least 6 digits',
},
{
max: 12,
message: 'username at most 12 digits',
},
{
pattern: /^[a-zA-Z0-9_]+$/,
message: 'must contain number, letter, and underscore',
},
]}
>
<Input prefix={<UserOutlined className="site-form-item-icon" />} placeholder="Username" />
</Form.Item>
<Form.Item
name="password"
rules={[
{
validator:validatePwd
}
]}
>
<Input
prefix={<LockOutlined className="site-form-item-icon" />}
type="password"
placeholder="Password"
/>
</Form.Item>


<Form.Item>
<Button type="primary" htmlType="submit" className="login-form-button">
Log in
</Button>

</Form.Item>
</Form>
       
   </section>
</div>
}
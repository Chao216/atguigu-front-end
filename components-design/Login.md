less provide nesting feature to write css

for the Login header, use `display:flex;` and `align-items:center;` to align logo and header text

## verify username and password

### declared validation

rules 是一个数列对象的要求

```javascript
rules={[
          {
            required: true,
            message: 'Please input your Username!',
          },
          {
            min: 6,
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
```

## customized validation

1. create a validator function on top before render
use promise now!

```javascript
 validatePwd = (rule,value)=>{
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
```

2. set the rule as validator function
```javascript
<Form.Item
        name="password"
        rules={[
          {
          validator:this.validatePwd
          }
        ]}
      >
```
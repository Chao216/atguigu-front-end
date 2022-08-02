# Guli Management System MERN stack

## 1. use AntD and advanced setting.

due to the dependency issue, use alpha version for craco and craco-less at the moment Aug 2022.

1. `$ npm i @craco/craco@alpha` [craco](https://github.com/dilanx/craco/issues/442)
1. `npm i craco-less@2.1.0-alpha.0` [craco-less](https://github.com/DocSpring/craco-less/issues/95)

## 2. use router

quick start

you need to import necessary component for use router
```javascript
import{BrowserRouter as Router, Route, Routes} from "react-router-dom"
```

then import your own components

then put everything in a router element, then create ***path element pair***
```javascript
<Router>
        <Routes>
        <Route path="/login" element={<Login/>} />
        <Route path="/" element={<Admin/>}/>
        </Routes>
      </Router>
```

Note! new version use Routes to replace Switch, element for component

### Bonus, convert image in linux

```shell
convert old.jpg -resize 100x100 new.jpg
```

to read documentation for Login component, go to [Login](./components-design/Login.md)
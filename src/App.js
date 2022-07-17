import React  from "react";
import {HashRouter,BrowserRouter,Route, Routes,Navigate,Link,NavLink} from 'react-router-dom'
import Home from "./views/Home";
import Login from "./views/Login"
import Reg from "./views/Reg";
import NotFound from "./views/NotFound";
import "./App.css"
import "./index.scss"

import 'antd/dist/antd.css';


import List1 from "./views/manage/interview/List1"
import List2 from "./views/manage/interview/List2"
import Modify from "./views/manage/interview/Modify"
function App() {
  return (

        <BrowserRouter>
            <Routes>
              <Route path="/" element={<Login/>} />
              <Route path="/home" element={<Home/>} >
                  <Route path="interview/list1" element={<List1/>} />
                  <Route path="interview/list2" element={<List2/>} />
                  <Route path="interview/list1/modify/:id" element={<Modify/>} /> 
              </Route>
              <Route path="login" element={<Login/>} />
              <Route path="reg" element={<Reg/>} />
              {/* <Route path="*" element={<NotFound/>} /> */}
            </Routes>
        </BrowserRouter>
  
  );
}

export default App;

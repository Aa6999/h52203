
import { Link,NavLink ,useNavigate} from "react-router-dom"
const Head =()=>{
        //编程式导航
        const navigate = useNavigate();
    
    return(
        <div>
           <div>
                <p>Link</p>
                <Link to="/home">首页</Link>
                <Link to="/login">登录</Link>
                <Link to="/reg">注册</Link>
                    <p>NavLink</p>
                <NavLink to="/home" className="box">首页</NavLink>
                <NavLink to="/login" style={{color:"pink"}}>登录</NavLink>
                <NavLink to="/reg">注册</NavLink>
           </div>

            <button onClick={()=>{navigate("/reg")}}>跳转到注册</button>
        </div>
    )
}
export default Head
import React,{Component} from 'react';
import {
    HashRouter as Router,Route,Link,Switch
} from "react-router-dom";

import './footer.less';
export default class Footer extends Component{
    render(){
        return(
        <Router>
            <div className="footer">
                <span className="footerText footer-recommend"><Link to="/">首页推荐</Link></span>
                <span className="footerText footer-list"><Link to='/category'>菜单分类</Link></span>
                <span className="footerText footer-message"><Link to='/info'>个人信息</Link></span>
            </div>
        </Router>

        )
    }
}
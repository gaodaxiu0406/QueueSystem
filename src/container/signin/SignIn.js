/**
 * 登录页面
 */
import './signin.less'
import React,{Component} from "react";
import Header from "../../components/header/Header";
export default  class SignIn extends Component{
    constructor(){
        super();
        this.state={title:'登录'}
    }
    render(){
        return (
            <div>
                <Header title={this.state.title}/>
                <img className="avatar" src="../../../static/img/avatar.png" alt="个人头像"/>
                <form id="form" method="get">
                    <div className="form-group">
                        <label htmlFor="name">昵称</label>
                        <input id="name" type="text" placeholder="请输入您的用户名"/>
                    </div>
                    <div className="form-group">
                        <label htmlFor="name">密码</label>
                        <input id="name" type="text" placeholder="请设置您的密码"/>
                    </div>
                    <div className="form-group">
                        <button id="register">立即登录</button>
                    </div>
                </form>
            </div>
        )
    }
}
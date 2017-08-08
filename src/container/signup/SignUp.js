/**
 * 注册页面
 */
import './signup.less';
import {ajax} from '../../util/index';
import React,{Component} from "react";
import Header from "../../components/header/Header";
import {
    HashRouter as Router,Route,Link,Switch
} from "react-router-dom";
import SignIn from "../signin/SignIn";
export default  class SignUp extends Component{
    constructor(){
        super();
        this.state={
            title:'注册'
        }
    }
    handleClick(){
        let data = {
            nickname: this.refs.nickname.value,
            tel: this.refs.tel.value,
            pwd: this.refs.pwd.value,
            cpwd: this.refs.cpwd.value,
        };
        ajax({
            method:'post',
            url:'http://localhost:8080/signup',
            async:true,
            data:data,
            headers:{} }).then((result)=>{
            console.log(result);
        }).catch((err)=>{
            console.log(err);
        });
        console.log('click');
    }
    render(){
        return (
            <div>
                <Header title={this.state.title}/>
                <div className="text">
                    <span className="text1">欢迎注册成为本店会员用户</span>
                    <span className="text2">可以直接免排队点餐哦~</span>
                </div>
                <form id="form" method="post">
                    <div className="form-group">
                        <label htmlFor="name">昵称</label>
                        <input required ref='nickname' id="name" type="text" placeholder="昵称"/>
                    </div>
                    <div className="form-group">
                        <label htmlFor="name">手机号</label>
                        <input required ref='tel' id="tel" type="text" placeholder="请输入您的手机号"/>
                    </div>
                    <div className="form-group">
                        <label htmlFor="name">密码</label>
                        <input required ref='pwd' id="pwd" type="text" placeholder="请设置您的密码"/>
                    </div>
                    <div className="form-group">
                        <label htmlFor="name">确认密码</label>
                        <input required ref='cpwd' id="cpwd" type="text" placeholder="请重新验证您的密码"/>
                    </div>

                </form>
                <Router>
                    <div className="signUp-router" style={{color:"black"}}>
                        <Link to="/signin" style={{color:"black",fontSize:"20px"}} onClick={()=>this.handleClick()} id="register">立即注册</Link>
                        <Route path="/signin" component={SignIn}/>
                    </div>
                </Router>
            </div>
        )
    }
}
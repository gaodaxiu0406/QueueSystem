/**
 * Created by ZhaoQiHui on 2017/8/7.
 */
import React,{Component} from "react";
import {
    HashRouter as Router,Route,Link,Switch
} from "react-router-dom";
import Favorite from "./Favorite";
import History from "./History";
import HotList from "../hotlist/HotList";
import Header from "../../components/header/Header";
export default  class Category extends Component{
    constructor(){
        super();
        this.state={title:'菜单分类'}
    }
    render(){
        return (
            <div>
                <Header title={this.state.title}/>
                Category
                <Route path="category/histroy" component={Favorite}></Route>
                <Route path="Rcategory/favorite" component={History}></Route>
                <Route path="category/hotlist" component={HotList}></Route>
            </div>

        )
    }
}
/**
 * Created by ZhaoQiHui on 2017/8/7.
 */
import React,{Component} from "react";
import Header from "../../components/header/Header";
export default  class HotList extends Component{
    constructor(){
        super();
        this.state={title:'热卖列表'}
    }
    render(){
        return (
            <div>
                <Header title={this.state.title}/>
                HotList
            </div>
        )
    }
}
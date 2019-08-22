import React, { Component } from 'react';
import ReactDom from 'react-dom';
class App extends Component{
    constructor(props){
        super(props)
    }

    render(){
        return(<div>新的页面</div>)
    }
};

ReactDom.render(<App />, document.getElementById('app'));
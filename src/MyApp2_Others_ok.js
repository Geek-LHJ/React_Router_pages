import React from 'react';

class App extends React.Component{
    constructor(){
        super();
        this.state={
            title:'你在干什么',
            content: ''
        };
        // this.handleTemp = this.handleTemp.bind(this);
    }
    onChildChanged=(newState)=>{
         this.setState({
            content: newState,
        })
    }
    render(){
        return(
            <div>
                <span>{this.state.title}:</span>
                <span>{this.state.content}</span>
                <Child title={this.state.title} onChildChanged={this.onChildChanged}/>
                <ChildBrother content={this.state.content}/>
            </div>
        )
    }
}

class Child extends React.Component{
    constructor(){
        super();
    }
    handleTemp=(e)=>{
        this.props.onChildChanged(e.target.value);
    }
    render(){
        return(
            <div>
                <span>{this.props.title}</span>
                <input type="text" onChange={this.handleTemp}/>
            </div>

        )
    }
}

class ChildBrother extends React.Component{
    render(){
        return (
            <div>
                <span>{this.props.content}</span>
            </div>
        )
    }
}


export default App;
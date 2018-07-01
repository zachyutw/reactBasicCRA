import React, { Component } from 'react'
import { connect } from 'react-redux'

import s from './TemplatePage.css';

class TemplatePage extends Component {

    constructor(props) {
        super(props)
        this.state={}
        this.handleOnClick = this.handleOnClick.bind(this)
        
    }
    componentDidMount(){
        
    }
    handleOnClick(value){
        console.log(value);
        this.setState({getId:true});
    }
    render() {
        const id = 1;
        return (
        //   <div onClick={  this.handleOnClick}>
        <div onClick={ ()=> this.handleOnClick(id)}>
              template
          </div>
        )
    }
}

const mapStateToProps = (state) => {
  
    return {  }
}
const mapDispatchToProps = (dispatch)=>{
    return {
      
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(TemplatePage)

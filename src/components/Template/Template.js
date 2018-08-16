import React, { Component } from 'react'
import { connect } from 'react-redux'

import s from './Template.css';

class Template extends Component {

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
        <div className={s.templateContainer} onClick={ ()=> this.handleOnClick(id)}>
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

export default connect(mapStateToProps,mapDispatchToProps)(Template)

import React, { Component } from 'react'
import { connect } from 'react-redux'



import {
    Button,
    Container,
    Divider,
    Grid,
    Header,
    Icon,
    Image,
    List,
    Menu,
    Responsive,
    Segment,
    Sidebar,
    Visibility,
  } from 'semantic-ui-react'
import s from './NavBar.css';

class NavBar extends Component {

    constructor(props) {
        super(props)
        this.state={}
        this.handleOnClick = this.handleOnClick.bind(this)
        
        
    }
    componentDidMount(){
        
    }
    handleOnClick = ()=>{

    }
    render() {
        const id = 1;
        return (
            <Responsive {...Responsive.onlyComputer} >
                <Segment
                    inverted
                    textAlign='center'
                    style={{ minHeight: 700, padding: '1em 0em' }}
                    vertical
                >
                </Segment>
            </Responsive>
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

export default connect(mapStateToProps,mapDispatchToProps)(NavBar)

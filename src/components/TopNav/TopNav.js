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
import s from './TopNav.css';

class TopNav extends Component {

    constructor(props) {
        super(props)
        this.state={}
        this.handleOnClick = this.handleOnClick.bind(this)
        
    }
    componentDidMount(){
        
    }
    
    render() {
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

export default connect(mapStateToProps,mapDispatchToProps)(TopNav)

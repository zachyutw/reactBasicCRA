import React, { Component } from 'react'
import { connect } from 'react-redux'
import NavBar from 'components/TopNav/NavBar/NavBar';
import s from './HomePage.css';
import WavingString from 'components/App/WavingString/WavingString';

class HomePage extends Component {

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
        return (<div className="ui container" >
            {/* <NavBar /> */}
            <WavingString className={s.highLight} text="How Are You Todayaaaa"/>
            To get started, edit src/App.js and save to reload.
        </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {  }
}
const mapDispatchToProps = (dispatch)=>{
    return {}
}

export default connect(mapStateToProps,mapDispatchToProps)(HomePage)

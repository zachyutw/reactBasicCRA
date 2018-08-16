import React,{Component} from 'react';
import PropTypes from 'prop-types';

class Toogle extends Component {
    constructor(props) {
        super(props);
        this.state = {
            on:props.show || false
        };
        
    }
    toggle = ()=> {
        console.log("click");
        this.setState({
            on: !this.state.on
        })
    }

    render() {
        const {children} = this.props;
        const {on} =this.state;
        return children(
                 {on,toggle:this.toggle}
             );
    }
}

Toogle.propTypes = {};

export default Toogle;

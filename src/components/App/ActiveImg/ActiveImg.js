import React, { Component } from 'react';

import s from './ActiveImg.css';

class ActiveImg extends Component {
    constructor(props) {
        super(props)
        this.state={img:""}
        this.handleMouseEnter = this.handleMouseEnter.bind(this);
        this.handleMouseLeave = this.handleMouseLeave.bind(this)
    }

    componentDidMount(){
        const {img,imgActive,active} = this.props;
        this.setState({img:active?imgActive:img})
    }
    
    handleMouseEnter(){ 
     
        this.setState({img:this.props.imgActive});
    }
    handleMouseLeave(){
        const {img,imgActive,active} = this.props; 
        this.setState({img:active?imgActive:img})
      
    }

render() {
        const {classes,imgStyle,style,title} = this.props;
        const {img} = this.state;
      
        return (
            <div className={classes} onMouseEnter={this.handleMouseEnter} onMouseLeave={this.handleMouseLeave} style={style}>
                <img src={img} className={s.img} alt={img} style={imgStyle}/>
                {title&& <div  className={s.title}>{title}</div> }  
            </div>
        )
    }
}

export default ActiveImg;

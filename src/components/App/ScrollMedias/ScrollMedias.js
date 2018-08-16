import React, { Component } from 'react'
import { connect } from 'react-redux'
import ImgBgCurtainWindow from 'components/App/ImgBgCurtainWindow/ImgBgCurtainWindow';
import s from './ScrollMedias.css';
import {Icon} from 'semantic-ui-react';
import Portal from 'components/App/Portal/Portal';

class MediaItem extends Component{
    state={hover:false,show:false}
    handleEnter=()=>this.setState({hover:true});
    handleLeave=()=>this.setState({hover:false});
    handleShow=()=>this.setState({show:true});
    handleClose=()=>this.setState({show:false});
    render(){
        const {last,index,img,toggle,hanldeToggle} = this.props;
        const {hover,show} = this.state;
        return <div className={ s.item  } style={{zIndex: hover?"99" :`${last-index}`}} onMouseEnter={this.handleEnter} onMouseLeave={this.handleLeave}>
        { index==0 && 
        <div className={s.btn} onClick={hanldeToggle}>
                <Icon size="big" name="block layout"/> 
        </div> }
        <div className={ s.img } onClick={this.handleShow}>    
            <img  src={ img.thumb } />
        </div>
        {show && <Portal>
            <Portal.Image vertical="top" hide={this.handleClose} thumb={img.thumb} src={img.normal} />
        </Portal>}
    </div>  
    }
}

class ScrollMedias extends Component {

    state={toggle:true}
    hanldeToggle=()=>this.setState({toggle:!this.state.toggle});
    render() {
        const {media=[]} =this.props;
        const {toggle} = this.state;
        const last = media.length ;
        return <div className={ toggle? `${s.menu} ${s.scroll}`: `${s.menu}`}>
        { media.map((img, index) => <MediaItem hanldeToggle={this.hanldeToggle} key={index} last={last} img={img} index={index} />
        )}
        </div>
    }
}


const mapStateToProps = (state) => {
    return {  }
}
const mapDispatchToProps = (dispatch)=>{
    return {}
}

export default connect(mapStateToProps,mapDispatchToProps)(ScrollMedias)
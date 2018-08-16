import React, {Component} from 'react';
import _ from 'lodash';
import PropTypes from 'prop-types';
import s from './WavingString.css';
import {propMin,webUnits} from 'js/prop-types-validtor';

class JumpCharactor extends Component {
    render() {
        const {charactor, jump, basic, tranform} = this.props;
        return <i
            style={{
            fontSize: jump
                ? tranform
                : basic
        }}>{charactor}</i>
    }
}

class HoverCharactor extends Component {

    handleMouserEnter=(index)=>this.props.getIndex(index)
    render() {
        const {item, postion,getIndex,index} = this.props;
        return <i style={{fontSize:`${postion}em` }} onMouseEnter={()=>getIndex(index)}>{item}</i>
    }
}
class WavingHoverItem extends Component {

    handleMouserEnter=(index)=>this.props.getIndex(index)
    render() {
        const {item, postion,getIndex,index} = this.props;
        return <div style={{transform:`scale(${postion},${postion})`,display:"inline-block" }} onMouseEnter={()=>getIndex(index)}>{item}</div>
    }
}




export default class WavingString extends Component {
    state = {  index: 0, strings: [],cursor:0 }

    componentDidMount() {
        const {auto} =this.props;
        auto && this.handleAutoWave();

        const {text, duration, jumpingWords} = this.props;
        const splitTimes = Math.round(text.length / jumpingWords);    
        const strings = _.times(splitTimes, (n) => text.slice(n * jumpingWords, n * jumpingWords + jumpingWords));
        this.setState({ strings});

    }
    componentWillUnmount() {
        clearInterval(this.state.intervalId);
    }

    handleAutoWave=()=>{
        const {text, duration, jumpingWords} = this.props;
        const splitTimes = Math.round(text.length / jumpingWords);    
        const strings = _.times(splitTimes, (n) => text.slice(n * jumpingWords, n * jumpingWords + jumpingWords));
        let index = 0;

        const intervalId = setInterval(() => {
            if (index >= splitTimes) {
                index = 0;
            }
            this.setState({jump: index});
            index = index + 1;
        }, duration);
        this.setState({intervalId, strings})
    }
    handlePostion=(cursor)=>{
        switch(cursor){
            case 3: return 1;
            case 2: return 1.1;
            case 1: return 1.2;
            case 0: return 1.3;
            default: return 1;
        }
    }
    getIndex=(index)=>this.setState({cursor:index})
    render() {
        const { text,basic, tranform, unit,style,onClick,onMouseEnter,onMouseLeave,className,auto} = this.props;
        const {jump,cursor, strings} = this.state;
        return <div style={style} onClick={onClick} onMouseEnter={onMouseEnter} onMouseLeave={onMouseLeave} className={ [s.component,className].join(" ")}  >
        {auto && strings.map(((c, index) => <JumpCharactor
                charactor={c}
                basic={basic + unit}
                tranform={tranform + unit}
                jump={jump == index}
                key={index}/>)) }
        {!auto  && <p>{text}</p>}
         <p>{ strings.map( (charactor,index)=> 
            <HoverCharactor key={index} index={index} 
                            postion={this.handlePostion(Math.abs(index-cursor))} 
                            getIndex={this.getIndex} 
                            item={charactor} />) }</p>
        </div>
    }
}

WavingString.defaultProps = {
    text: "How Are You Today",
    unit: "em",
    duration: 200,
    basic: 1,
    jumpingWords: 1,
    tranform: 1.3,
    auto:true,
}

WavingString.propTypes = {
    text: PropTypes.string,
    unit: PropTypes.oneOf(webUnits),
    duration: PropTypes.number,
    basic: PropTypes.number,
    tranform: PropTypes.number,
    auto:PropTypes.bool,
    jumpingWords: (props,propName,componentName)=>propMin(props[propName],1)
}


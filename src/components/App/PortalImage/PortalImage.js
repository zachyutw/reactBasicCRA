import React, {Component} from 'react';
import s from './PortalImage.css'
import {Segment, Icon} from 'semantic-ui-react';
import Image from 'components/App/Image/Image';
const modalRoot = document.getElementsByTagName("BODY")[0];

class PortalImage extends Component {

    componentDidMount() {
        const {
            scrolling = false
        } = this.props;
        scrolling && modalRoot.setAttribute("class", "modalShow");
    }
    componentWillUnmount() {
        const {
            scrolling = false
        } = this.props;
        scrolling && modalRoot.removeAttribute("class", "modalShow");
    }

    sizing = (size) => {
        switch (size) {
            case "xs":
                return "20rem";
            case "sm":
                return "30rem";
            case "md":
                return "40rem";
            case "lg":
                return "50rem";
            case "full":
                return "100%";
            default:
                return "40rem";
        }
    }
    verticalHeight = (vertical) => {
        switch (vertical) {
            case "toptop":
                return "2vh";
            case "top":
                return "5vh";
            case "normal":
                return "25vh";
            case "bottom":
                return "75vh";
            default:
                return "25vh";
        }
    }
    render() {
        let {
            hide,
            children,
            closeBtn = false,
            vertical = "normal",
            style,
            size,thumb,src,
            close = <Icon className={s.closeIcon} size='large' name="times"/>
        } = this.props;
        return <div className={s.bgCurtain}>
            <Segment
                className={s.segment + " " + s.modal}
                style={{
                width: this.sizing(size),
                top: this.verticalHeight(vertical),
                ...style
            }}>
                {closeBtn && <div className={s.closeIcon} onClick={hide}>{close}</div>}
                <Image thumb={thumb} src={src} fluid />
            </Segment>

            <div className={s.background} onClick={hide}></div>
        </div>
    }
}

export default PortalImage;
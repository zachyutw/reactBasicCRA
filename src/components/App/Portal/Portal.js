import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import s from './Portal.css';
import PortalModal from 'components/App/PortalModal/PortalModal';
import PortalImage from 'components/App/PortalImage/PortalImage';
const modalRoot = document.getElementsByTagName("BODY")[0];
// const modalRoot = document.getElementById("portal");

class Portal extends Component {
    static Modal = PortalModal;
    static Image = PortalImage;
    constructor(props) {
        super(props);
        this.state = {};
        this.el = document.createElement('div');
    }

    componentDidMount() {
        modalRoot.appendChild(this.el);
        //  window.addEventListener("scroll",this.staticScroll);
    }
    staticScroll = () => window.scrollTo(0, 0);

    componentWillUnmount() {
        modalRoot.removeChild(this.el);
        // window.removeEventListener("scroll",this.staticScroll);
    }
    render() {
        return ReactDOM.createPortal(this.props.children,
        // A DOM element
        this.el,);
    }
}

export default Portal;

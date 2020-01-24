import React, {Component} from 'react';
import './styles.scss'
import PropTypes from "prop-types";
import Button from "../Button/Button";

export default class Modal extends Component{
    static propTypes = {
        label: PropTypes.string,
        cancelFunction: PropTypes.func,
        okFunction: PropTypes.func,
        cancel: PropTypes.string,
        ok: PropTypes.string
    };


    render() {
        const {label, ok, cancel, okFunction, cancelFunction, show} = this.props;

        return !show ? null : <div className={`modal-message`}>
            <div className={'message-container'}>
                <div className={'label'}>{label}</div>
                <div className={'actions'}>
                    <Button label={cancel} onClick={cancelFunction} type={'cancel'}/>
                    <Button label={ok} onClick={okFunction} type={'logout'}/>
                </div>
            </div>
        </div>
    }
}
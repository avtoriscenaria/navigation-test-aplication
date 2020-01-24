import React, {Component} from 'react';
import PropTypes from "prop-types";
import './styles.scss'

export default class Button extends Component{

    static propTypes = {
        label: PropTypes.string,
        onClick: PropTypes.func,
        type: PropTypes.string,
    };

    state = {
        hover: false
    };

    render() {
        const {onClick, label, icon, type} = this.props;
        const {hover} = this.state;

        return <div className={`button${type ? ` ${type}` : ''}${hover ? ' -hover' : ''}`} onClick={onClick} onMouseOver={() => this.setState({hover: true})} onMouseOut={()=> this.setState({hover: false})}>
            {
                icon ? icon : null
            }
            <span>{label}</span>
        </div>
    }
}
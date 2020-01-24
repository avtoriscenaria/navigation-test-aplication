import React, {Component} from 'react';
import './styles.scss';
import Button from '../../components/Button/Button';
import t from '../../constants/translations'
import favicon from '../../assets/favicon.ico';
import connect from "react-redux/es/connect/connect";
import {setUser} from "../../redux/actions";
import Icon from '../../components/Icon/Icon'


class Login extends Component {

    onClick() {
        this.props.setUser('test-user')
    }

    render() {

        return <div className='login-page'>
            <div className='lp-logo'>
                <img alt={''} src={favicon}/>
            </div>
            <div className='lp-login'>
                <div></div>
                <Button type={'in'} label={t.login.ru} onClick={() => this.onClick()} icon={<Icon icon={'enter'} color={'white'} size={20}/>}/>
            </div>
        </div>
    }
}

const mapStateToProps = state => ({
    user: state.user
});

const mapDispatchToProps = dispatch => ({
    setUser: user => dispatch(setUser(user)),
});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Login)
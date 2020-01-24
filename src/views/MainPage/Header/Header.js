import React, {Component} from 'react'
import connect from "react-redux/es/connect/connect";
import './styles.scss'
import {setArticle, setArticles, setUser} from "../../../redux/actions";
import Button from "../../../components/Button/Button";
import t from '../../../constants/translations';
import favicon from '../../../assets/favicon.ico';
import {site_name} from "../../../constants/site_names";
import Modal from "../../../components/Modal/Modal";
import Icon from '../../../components/Icon/Icon'

//import {setUser} from "../../redux/actions";

class Header extends Component{

    state = {
        show: false,
        cancelFunction: null,
        okFunction: null
    };

    onClick() {

        this.setState({
            show: true,
            okFunction: this.okFunction,
            cancelFunction: this.cancelFunction
        });


    }

    cancelFunction = () => {
      this.setState({
          show: false,
          okFunction: null,
          cancelFunction: null
      })
    };

    okFunction = () => {
        localStorage.removeItem('user');
        localStorage.removeItem('article');
        //localStorage.removeItem('articles');

        this.props.setUser(null);
        this.props.setArticle(null);
        //this.props.setArticles(null);
    };

    render() {
        const {cancelFunction, okFunction, show} = this.state;

        return <div className={'main-page-header'}>
            <Modal ok={t.ok.ru} cancel={t.cancel.ru} label={t.modalMessage.ru} cancelFunction={cancelFunction} okFunction={okFunction} show={show}/>
            <div className='site-name'>
                <div className={'mph-icon'}><img alt={''} src={favicon} width={20} height={20}/></div>
                <div>{site_name}</div>
            </div>
            <div className={'site-logout'}>
                <Button label={t.logout.ru} type={'out'} onClick={() => this.onClick()} icon={<Icon icon={'exit'} color={'white'} size={20}/>}/>
            </div>
        </div>
    }
}

const mapStateToProps = state => ({
    user: state.user
});

const mapDispatchToProps = dispatch => ({
    setUser: user => dispatch(setUser(user)),
    setArticle: article => dispatch(setArticle(article)),
    setArticles: articles => dispatch(setArticles(articles)),
});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Header)
import React, {Component} from 'react'
import connect from "react-redux/es/connect/connect";
import Header from "./Header/Header";
import Body from "./Body/Body";
import './styles.scss'
import {articlesGenerator} from "../../helpers/articlesGenerator";
import {setArticles} from "../../redux/actions";

class MainPage extends Component{

    render() {
        return <div className={'main-page'}>
            <Header/>
            <Body/>
        </div>
    }
}

const mapStateToProps = state => ({
    articles: state.articles
});

const mapDispatchToProps = dispatch => ({
    setArticles: articles => dispatch(setArticles(articles)),
});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(MainPage)
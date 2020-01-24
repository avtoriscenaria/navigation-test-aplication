import React from 'react';
import Login from './views/Login/Login'
import './styles/App.scss'
import connect from "react-redux/es/connect/connect";
import {setUser, setArticle, setArticles} from "./redux/actions";
import MainPage from "./views/MainPage/MainPage";
import {articlesGenerator} from "./helpers/articlesGenerator";

class App extends React.Component {

    componentDidMount() {
        let user = localStorage.getItem('user');
        let article = localStorage.getItem('article');
        let articles = localStorage.getItem('articles');

        if (user) {
            this.props.setUser(user);

            if (article) {
                this.props.setArticle(article)
            }
        }

        if (articles === null || articles.length === 0) {
            articles = articlesGenerator(4)
        } else {
            articles = JSON.parse(articles)
        }
        this.props.setArticles(articles)


    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        this.updateLocalStorage(prevProps)
    }

    updateLocalStorage(prevProps) {
        if (prevProps.user !== this.props.user && this.props.user !== null && this.props.user !== undefined) {
            localStorage.setItem('user', this.props.user)
        }

        if (JSON.stringify(prevProps.articles) !== JSON.stringify(this.props.articles) && this.props.articles !== null && this.props.articles !== undefined) {
            localStorage.setItem('articles', JSON.stringify(this.props.articles))
        }

        if (prevProps.article !== this.props.article && this.props.article !== null && this.props.article !== undefined) {
            localStorage.setItem('article', this.props.article)
        }
    }

    render() {
        const {user} = this.props;

        return <div className='app-body'>
            {
                user ?
                    <MainPage/> :
                    <Login/>
            }
        </div>
    }
}

const mapStateToProps = state => ({
    user: state.user,
    articles: state.articles,
    article: state.article
});

const mapDispatchToProps = dispatch => ({
    setUser: user => dispatch(setUser(user)),
    setArticle: article => dispatch(setArticle(article)),
    setArticles: articles => dispatch(setArticles(articles)),
});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(App)
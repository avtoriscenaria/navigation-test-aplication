import React, {Component} from 'react'
import connect from "react-redux/es/connect/connect";
import './styles.scss';
import ArticlesList from "./ArticlesList/ArticlesList";

//import {setUser} from "../../redux/actions";

class Article extends Component{

    state = {
      article: null
    };

    componentDidMount() {
        this.getArticle()
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        if (prevProps.article !== this.props.article) {
            this.getArticle()
        }
    }

    getArticle() {
        const {article, articles} = this.props;

        let chosenArticle = articles.find(a => a._id === article);

        this.setState({article: chosenArticle})
    }

    render() {
        const {article} = this.state;

        return article === null ? null : <div className={'article'}>
            <ArticlesList/>
            <div className={'article-text'}>
                <div className={'name'}>{article.name}</div>
                <div className={'text'}>{article.text}</div>
            </div>
        </div>
    }
}

const mapStateToProps = state => ({
    article: state.article,
    articles: state.articles
});

// const mapDispatchToProps = dispatch => ({
//     setUser: user => dispatch(setUser(user)),
// });

export default connect(
    mapStateToProps,
    // mapDispatchToProps
)(Article)
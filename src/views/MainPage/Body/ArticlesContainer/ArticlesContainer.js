import React, {Component} from 'react'
import connect from "react-redux/es/connect/connect";
import './styles.scss';
import {articlesGenerator} from "../../../../helpers/articlesGenerator";
import {setArticle} from "../../../../redux/actions";

//import {setUser} from "../../redux/actions";

class ArticlesContainer extends Component{

    state = {
      articles: null,
        hovered: ''
    };

    componentDidMount() {
        let articles = this.props.articles || null;
        this.setState({articles})
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        if (this.state.articles === null && this.props.articles !== null) {
            //this.setState({articles: this.props.articles})
        }
    }

    onClick(article) {
        this.props.setArticle(article)
    }

    render() {
        const {articles, hovered} = this.state;

        return articles === null ? null : <div className={'articles-container'}>
            {
                articles.map(a => <div className={`article-item${hovered === a._id ? ' -hovered' : ''}`} key={a._id} onClick={() => this.onClick(a._id)}
                                       onMouseOver={() => this.setState({hovered: a._id})} onMouseOut={() => this.setState({hovered: ''})}
                >
                    {a.name}
                </div>)
            }
        </div>
    }
}

const mapStateToProps = state => ({
    user: state.user,
    articles: state.articles
});

const mapDispatchToProps = dispatch => ({
    setArticle: article => dispatch(setArticle(article)),
});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(ArticlesContainer)
import React, {Component} from 'react'
import connect from "react-redux/es/connect/connect";
import {setArticle} from "../../../../../redux/actions";
import './styles.scss';

//import {setUser} from "../../redux/actions";

class ArticlesList extends Component{

    state = {
        hovered: ''
    };

    onClick(article) {
        this.props.setArticle(article)
    }

    render() {
        const {articles, article} = this.props;
        const {hovered} = this.state;

        return <div className={'articles-list'}>
            {
                articles.map(a => <div className={`list-item${hovered === a._id ? ' -hovered' : ''}${article === a._id ? ' -selected' : ''}`} key={a._id} onClick={() => this.onClick(a._id)}
                                       onMouseOver={() => this.setState({hovered: a._id})} onMouseOut={() => this.setState({hovered: ''})}>
                    {a.name}
                </div>)
            }
        </div>
    }
}

const mapStateToProps = state => ({
    article: state.article,
    articles: state.articles
});

const mapDispatchToProps = dispatch => ({
    setArticle: article => dispatch(setArticle(article)),
});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(ArticlesList)
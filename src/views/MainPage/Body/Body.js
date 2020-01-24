import React, {Component} from 'react'
import connect from "react-redux/es/connect/connect";
import './styles.scss'
import Article from "./Article/Article";
import ArticlesContainer from "./ArticlesContainer/ArticlesContainer";
//import {setUser} from "../../redux/actions";

class Body extends Component{

    render() {
        const {article} = this.props;
        console.log(article)
        return <div className={'articles-body'}>
            {
                article ?
                    <Article/> :
                    <ArticlesContainer/>
            }
        </div>
    }
}

const mapStateToProps = state => ({
    article: state.article
});

// const mapDispatchToProps = dispatch => ({
//     setUser: user => dispatch(setUser(user)),
// });

export default connect(
    mapStateToProps,
   // mapDispatchToProps
)(Body)
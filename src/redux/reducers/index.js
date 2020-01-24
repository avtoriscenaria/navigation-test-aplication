import { combineReducers } from 'redux';

import user from '../reducers/user'
import article from '../reducers/article'
import articles from '../reducers/articles'

export default combineReducers({
    user,
    article,
    articles
});
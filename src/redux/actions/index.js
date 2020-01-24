import {set_user} from "../reducers/user";
import {set_article} from "../reducers/article";
import {set_articles} from "../reducers/articles";

export const setUser = user => ({
    type: 'set_user',
    user
});

export const setArticle = article => ({
    type: 'set_article',
    article
});

export const setArticles = articles => ({
    type: 'set_articles',
    articles
});
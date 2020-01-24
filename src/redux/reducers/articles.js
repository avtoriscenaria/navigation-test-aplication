export const set_articles = "set_articles";

export default (article = null, action) => {
    switch(action.type)
    {
        case set_articles:
            return action.articles;
        default:
            return article;
    }
}
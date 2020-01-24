export const set_article = "set_article";

export default (article = null, action) => {
    switch(action.type)
    {
        case set_article:
            return action.article;
        default:
            return article;
    }
}
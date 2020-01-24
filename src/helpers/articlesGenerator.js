import {article_text} from "../constants/site_names";

export const articlesGenerator = (numb) => {
    let articles = [];

    for (let i = numb; i !== 0; i--) {
        articles.push({
            _id: `${i}-article-${new Date().getTime()}`,
            name: `Article ${i}`,
            text: article_text
        })
    }

    return articles.reverse()
};
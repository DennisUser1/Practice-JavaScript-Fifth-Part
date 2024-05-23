let authors = [];

const addAuthor = (authorName, delay) => 
    authors.push(
        new Promise((resolve, reject) => {
            setTimeout(() => {
                authorName ? resolve(authorName) : reject("No name");
            }, delay);
        })
    );
const getAuthors = () => Promise.all(authors);

export default {
    addAuthor,
    getAuthors,
}
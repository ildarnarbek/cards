export default {
  getPosts() {
    const path = 'https://jsonplaceholder.typicode.com/posts';
    return fetch(path);
  },
};

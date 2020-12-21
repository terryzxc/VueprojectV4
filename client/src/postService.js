import axios from 'axios';

const url = '/api/posts/';

class PostService {
    //Get Posts
    static getPosts() {
        return new Promise((resolve, reject) => {
            axios.get(url).then(getData=>{
                console.log(getData.data);
                resolve(getData.data.map(post => ({
                    ...post, //works the same as text:post.text
                    createdAt: new Date(post.createdAt)
                })));
            }).catch(err =>{
                reject(err);
            });
        })
    }

    //Create Posts
    static insertPost(text){
    return axios.post(url, {
        text
    });
}

    //Delete Posts
    static deletePost(id){
    return axios.delete(`${url}${id}`);
}
}


export default PostService;
const express = require('express');
const mongodb = require('mongodb');


const router = express.Router();


//GET posts
router.get('/', async (req, res) => {
    const posts = await loadPostsCollection();
    res.send(await posts.find({}).toArray());
});

//ADD posts
router.post('/', async (req, res) => {
    const posts = await loadPostsCollection();
    await posts.insertOne({
        text: req.body.text,
        createdAt: new Date()
    });

    res.status(201).send();
});

//DELETE posts
router.delete('/:id', async (req,res)=>{
    const posts = await loadPostsCollection();
    await posts.deleteOne({_id: new mongodb.ObjectID(req.params.id)});
    res.status(200).send();
});


async function loadPostsCollection() {
    const uri = "mongodb+srv://adminuser:test123@vueexpress.lx60z.mongodb.net/vueExpress?retryWrites=true&w=majority";
    const client = await mongodb.MongoClient.connect(uri, { useNewUrlParser: true });
    return client.db('test').collection('users');

   
}

module.exports = router;
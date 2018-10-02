const mongoose = require("mongoose");
const db = require("../models");

mongoose.connect(
    process.env.MONGODB_URI ||
    "mongodb://localhost/nytscrub"
);

const articleSeed = [
    {
        headline: "Man bites Dog",
        byline: "Megan Anthony",
        web_url: "www.google.com/manbitesdog",
        date: new Date(Date.now())
    },
    {
        headline: "Everyone gets a kitten in Philadelphia",
        byline: "Megan Anthony",
        web_url: "www.google.com/everyonegetsakitteninphiladelphia",
        date: new Date(Date.now())
    },
    {
        headline: "Man bites Dog",
        byline: "Megan Anthony",
        web_url: "www.google.com/manbitesdog",
        date: new Date(Date.now())
    },
    {
        headline: "I still don't understand how the shape of water won an oscar",
        byline: "Megan Anthony",
        web_url: "www.google.com/theshapeofwaterisaterriblemovie",
        date: new Date(Date.now())
    },
    {
        headline: "Halloween costumes for moms and babes",
        byline: "Megan Anthony",
        web_url: "www.google.com/cutehalloweencostumesformomsanddaughters",
        date: new Date(Date.now())
    },
];

db.Article
.remove({})
.then(() => db.Article.collection.insertMany(articleSeed))
.then(data => {
    console.log(data.result.n + "article inserted in database");
    process.exit(0);
})
.catch(err => {
    console.error(err);
    process.exit(1);
})

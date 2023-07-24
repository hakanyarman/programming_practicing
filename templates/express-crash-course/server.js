const express = require('express');
const app = express();

app.set('view engine', 'ejs')

app.get('/', (req, res) => {
    // res.send("ng")
    // res.status(500).send("Hii")

    // Api ile uğraştığımızda kullanırız.
    // res.json({ user: "Hakan" })

    // Kullanıcının dosya indirmesine yarar.
    // res.download('./text.txt')

    res.render('index', { text: "World" })
});

const userRouter = require('./routes/users');
const postRouter = require('./routes/posts')

app.use('/users', userRouter);
app.use('/posts', postRouter);


const port = 5500
app.listen(port)


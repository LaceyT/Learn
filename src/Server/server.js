const express = require("express")
const next = require("next")
const app = express()

const dev = process.env.NODE_ENV != 'production';
const nextApp = next({dev});
const nextHandler = nextApp.getRequestHandler();

nextApp.prepare().then(() => {
    app.get('*', (req, res) => {
        return nextHandler(req, res);
    });

    app.listen(3000, ()=>{
        console.log("server started on port 3000")
    });
})
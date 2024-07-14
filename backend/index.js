import express from "express"; //express is the backend library
import { PORT, mongoDBURL } from "./config.js";
import mongoose from "mongoose";
import { Recipe } from "./models/recipeModel.js";
import recipesRoute from './routes/recipesRoute.js';


const app = express();

// Middleware for parsing request body as JSON file
app.use(express.json());


app.get('/', (request, response) => { //sets up a GET request handler for the root URL
    console.log(request);
    return response.status(200).send("welcome to Renbo's website")
});

app.use('/recipes', recipesRoute);

mongoose //use mongoose to connect to mongoDB database
    .connect(mongoDBURL)
    .then(() => {
        console.log('App connected to mongoDB database')
        app.listen(PORT, () => {
            console.log(`App is listening to port: ${PORT}`);
        });
    })
    .catch((error) => {
        console.log(error);
    });
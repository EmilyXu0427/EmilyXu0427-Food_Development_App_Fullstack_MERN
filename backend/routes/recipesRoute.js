import express from 'express';
import { Recipe } from '../models/recipeModel.js';

const router = express.Router();

//Route for save a new recipe
router.post('/', async(request, response) => {
    try {
        if (
            !request.body.projectID ||
            !request.body.recipeID ||
            !request.body.ingredients ||
            !request.body.cookInstruction
        ) {
            return response.status(400).send({
                message: "Send all required fields: projectID, recipeID, ingredients, cookInstruction",
            });
        }
        const newRecipe = {//create a new recipe taking the request parameters
            projectID: request.body.projectID,
            recipeID: request.body.recipeID,
            ingredients: request.body.ingredients,
            cookInstruction: request.body.cookInstruction,
            comment: request.body.comment,
        }; 

        const recipe = await Recipe.create(newRecipe); //create and save a new recipe document in a MongoDB collection using Mongoose
        return response.status(201).send(recipe); //send a response back to the client indicating that a new recipe has been successfully created

    } catch (error) {
        console.log(error.message);
        response.status(500).send({ message: error.message});
    }
})

// Route for getting all recipes from the database
router.get('/', async (request, response) => {
    try {
        const recipes = await Recipe.find({}); //find all recipes in the database

        return response.status(200).json(recipes);
    } catch (error) {
        console.log(error.message);
        response.status(500).send({ message: error.message });
    }
})

// Route for finding a recipe by its id
router.get('/:id', async (request, response) => {
    try {
        const { id } = request.params; //extract the id parameter from the request URL
        const recipe = await Recipe.findById(id); 

        return response.status(200).json(recipe);
    } catch (error) {
        console.log(error.message);
        response.status(500).send({ message: error.message });
    }
})

// Route for updating a recipe
router.put('/:id', async (request, response) => {
    try {
        if (
            !request.body.projectID ||
            !request.body.recipeID ||
            !request.body.ingredients ||
            !request.body.cookInstruction
        ) {
            return response.status(400).send({
                message: "Send all required fields: projectID, recipeID, ingredients, cookInstruction",
            });
        }

        const { id } = request.params; 
        const recipe = await Recipe.findByIdAndUpdate(id, request.body); // find by id and update the data

        if(!recipe) {
            return response.status(404).json({ message: "Recipe not found"});
        }
        
        return response.status(200).send({ message: "Recipe updated successfully"});
    } catch (error) {
        console.log(error.message);
        response.status(500).send({ message: error.message });
    }
})

// Route for deleting a recipe by its id
router.delete('/:id', async (request, response) => {
    try {
        const { id } = request.params; //extract the id parameter from the request URL
        const recipe = await Recipe.findByIdAndDelete(id); 

        if (!recipe) {
            return response.status(404).json({ message: "Recipe not found"});
        }

        return response.status(200).send({ message: "Recipe deleted successfully"});

        return response.status(200).json(recipe);
    } catch (error) {
        console.log(error.message);
        response.status(500).send({ message: error.message });
    }
})

export default router;

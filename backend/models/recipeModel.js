import mongoose from 'mongoose';

const recipeSchema = mongoose.Schema(
    {
        projectID: {
            type: String,
            required: true,
        },
        recipeID: {
            type: String,
            required: true,
        },
        ingredients: {
            type: String,
            required: true,
        },
        cookInstruction: {
            type: String,
            required: true,
        },
        comment: {
            type: String,
            required: false,
        },
    },
    {
        timestamps: true,
    }
)
//define a mongoose model for Recipes collection including a name field of type String.
export const Recipe = mongoose.model('Recipe', recipeSchema); 

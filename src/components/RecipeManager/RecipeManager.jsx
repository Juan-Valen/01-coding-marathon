import React, { useState } from "react";
import Recipe from "./Recipe";
import './RecipeManager.css'
function RecipeManager() {
    const [recipes, setRecipes] = useState([]);
    const [newRecipe, setNewRecipe] = useState({ name: "", ingredients: "", instructions: "", prepTime: 0, nutritionInfo: "" });

    function handleInputChange(event) {
        const { name, value } = event.target;
        setNewRecipe((prevRecipe) => ({ ...prevRecipe, [name]: value }));
    }

    function addRecipe(e) {
        e.preventDefault();
        if (newRecipe.name.trim() !== "" && newRecipe.ingredients.trim() !== "") {
            setRecipes((r) => [...r, newRecipe]);
            setNewRecipe({ name: "", ingredients: "", instructions: "", prepTime: 0, nutritionInfo: "" });
        }
    }

    function deleteRecipe(index) {
        const updatedRecipes = recipes.filter((_, i) => i !== index);
        setRecipes(updatedRecipes);
    }

    return (
        <div className="recipe-manager">
            <h1>Recipe Manager</h1>
            <form onSubmit={addRecipe}>
                <div className="inputs">
                    <div>
                        <input
                            type="text"
                            placeholder="Enter recipe name..."
                            name="name"
                            value={newRecipe.name}
                            onChange={handleInputChange}
                        />
                        <input
                            className="prepTime"
                            type="number"
                            placeholder="Enter preparation time..."
                            name="prepTime"
                            value={newRecipe.prepTime}
                            onChange={handleInputChange}
                        /> hours
                    </div>
                    <label>
                        <strong>Ingredients:</strong>
                        <input
                            type="text"
                            placeholder="Enter ingredients..."
                            name="ingredients"
                            value={newRecipe.ingredients}
                            onChange={handleInputChange}
                        />
                    </label>
                    <label>
                        <strong>Instructions:</strong>
                        <textarea
                            placeholder="Enter instructions..."
                            name="instructions"
                            value={newRecipe.instructions}
                            onChange={handleInputChange}
                        />
                    </label>
                    <label>
                        <strong>Nutrition information:</strong>
                        <textarea
                            placeholder="Enter nutritional info..."
                            name="nutritionInfo"
                            value={newRecipe.nutritionInfo}
                            onChange={handleInputChange}
                        />
                    </label>
                </div>
                <button>Add Recipe</button>

            </form>
            <ol>
                {recipes.map((recipe, index) => <Recipe key={index} index={index} {...recipe} deleteRecipe={deleteRecipe} />)}
            </ol>
        </div>
    );
}

export default RecipeManager;

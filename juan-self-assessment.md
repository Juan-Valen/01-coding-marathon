# Recipes Manager Assessment

## Clear State Management

- The component uses useState hooks effectively to manage:
    - A list of recipes (recipes)
    -  The current recipe being created (newRecipe)
```javascript
import { useState } from "react";
const [recipes, setRecipes] = useState([]);
const [newRecipe, setNewRecipe] = useState({ name: "", ingredients: "", instructions: "", prepTime: 0, nutritionInfo: "" });
```

## Form Handling
- Centralized input handling with handleInputChange reduces repetition.
- prevents form submission default behavior (e.preventDefault()).
- Improvements:
    - Form is missing CSRF token.
    - The handleInputChange could prevent the hours input to go negative.
    - Visual clues could be given when a something hasn't been filled.

```javascript
function handleInputChange(event) {
  const { name, value } = event.target;
  setNewRecipe((prevRecipe) => ({ ...prevRecipe, [name]: value }));
}

function addRecipe(e) {
  e.preventDefault(); 
  if (newRecipe.name.trim() !== "" && newRecipe.ingredients.trim() !== "" && newRecipe.instructions !== "" && newRecipe.prepTime >= 0) {
    setRecipes((r) => [...r, newRecipe]);
    setNewRecipe({ name: "", ingredients: "", instructions: "", prepTime: 0, nutritionInfo: "" });
  }
}
```
```html
<form onSubmit={addRecipe}>
  <input
      type="text"
      placeholder="Enter recipe name..."
      name="name"
      value={newRecipe.name}
      onChange={handleInputChange} />
  ...
  <button>Add Recipe</button>
</form>
```

## Modular Design
- It delegates recipe rendering to a separate Recipe component.

## Validation
- Validation checks that critical fields are filled and prepTime is non-negative before adding a recipe.
- The nutrients Information was left as optional.

## UX/UI
- Improvements:
    - module.css file could have been used instead, to avoid the design affecting other components.
    - The presentation of the list of Items could be improve
    - The Ingredients and nutritional values could be shown in a different page after you click on a recipe.
    - An Image could be added.

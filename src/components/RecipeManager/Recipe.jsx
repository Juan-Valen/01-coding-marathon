function Recipe({ index, name, ingredients, instructions, prepTime, nutritionInfo, deleteRecipe }) {
    return (
        <li className='recipe' key={index}>
            <div>{name} ({prepTime} hours)</div>
            <div>{ingredients}</div>
            <div>{instructions} </div>
            <div>{nutritionInfo}</div>
            <button onClick={() => deleteRecipe(index)}>Delete</button>
        </li>
    )
}

export default Recipe;

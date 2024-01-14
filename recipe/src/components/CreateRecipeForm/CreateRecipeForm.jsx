import React, { useState } from 'react';
import './CreateRecipeForm.css'; // Make sure to create this CSS file

function CreateRecipeForm({ onSave }) {
    const [formData, setFormData] = useState({
        title: '',
        ingredients: '',
        instructions: '',
        readyInMinutes: '',
        servings: '',
        imageUrl: '',
    });

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        onSave({
            ...formData,
            ingredients: formData.ingredients.split('\n'),
            instructions: formData.instructions.split('\n'),
        });
    };

    return (
        <div className="create-recipe-form-container">
            <form onSubmit={handleSubmit} className="create-recipe-form">
                <input name="title" placeholder="Title" value={formData.title} onChange={handleChange} />
                <textarea name="ingredients" placeholder="Ingredients (one per line)" value={formData.ingredients} onChange={handleChange} />
                <textarea name="instructions" placeholder="Instructions (one step per line)" value={formData.instructions} onChange={handleChange} />
                <input type="number" name="readyInMinutes" placeholder="Ready in minutes" value={formData.readyInMinutes} onChange={handleChange} />
                <input type="number" name="servings" placeholder="Servings" value={formData.servings} onChange={handleChange} />
             
                <button type="submit">Create Recipe</button>
            </form>
        </div>
    );
}

export default CreateRecipeForm;
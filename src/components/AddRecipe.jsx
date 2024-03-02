import React, { useEffect, useState } from 'react';
import './AddRecipe.css';
import api from '../api/Recipes'

export default function AddRecipe() {
    const [customRecipe,setCustomRecipe]=useState();

    function random(){
    return Math.random().toString(36).substring(2);
    }

    useEffect(()=>{
        async function uploadData(){
            console.log(customRecipe);
        if(customRecipe){
            const response=await api.post('/recipes',customRecipe);
            console.log(response);
        }
        else{
            console.log('not uploaded');
        }
        }
        uploadData();
    },[customRecipe])

    const handleUpload=(event)=>{
        event.preventDefault();

        const formData=new FormData(event.target);
        const data=Object.fromEntries(formData.entries());
        console.log('data is:',data);

        const ingredients = {};
        for (let i = 1; i <= 6; i++) {
            ingredients[`ingredient${i}`] = data[`ingredient${i}`];
            delete data[`ingredient${i}`]; 
        }

        const newData = { ...data, ingredients,id:random()};
        setCustomRecipe(newData);

        event.target.reset();
    }

  return (
    <div className='addDiv'>
       <form onSubmit={handleUpload}>
            <div className='inputMatter'>
                <div className='userDetails'>
                <label htmlFor="title">Title</label>               <input type="text" name='title' className='add' id='title'/>
                <label htmlFor="url">URL</label>                   <input type="text" name='url' className='add' id='url'/>
                <label htmlFor="imgUrl">Image_url</label>          <input type="text" name='image_Url' className='add' id='imgUrl'/>
                <label htmlFor="publisher">Publisher</label>       <input type="text" name='publisher' className='add' id='publisher'/>
                <label htmlFor="cookingTime">cooking_time</label>  <input type="text" name='cookingTime' className='add' id='cookingTime'/>
                <label htmlFor="servings">Servings</label>         <input type="text" name='servings' className='add' id='servings'/>
            </div>
            <div className='ingDetails'>
                <label htmlFor="ingredient1">Ingredient1</label>  <input type="text" name='ingredient1' className='add' id='ingredient1'/>
                <label htmlFor="ingrediant2">Ingredient2</label>  <input type="text" name='ingredient2' className='add' id='ingredient2'/>
                <label htmlFor="ingrediant2">Ingredient3</label>  <input type="text" name='ingredient3' className='add' id='ingredient3'/>
                <label htmlFor="ingrediant2">Ingredient4</label>  <input type="text" name='ingredient4' className='add' id='ingredient4'/>
                <label htmlFor="ingrediant2">Ingredient5</label>  <input type="text" name='ingredient5' className='add' id='ingredient5'/>
                <label htmlFor="ingrediant2">Ingredient6</label>  <input type="text" name='ingredient6' className='add' id='ingredient6'/>
            </div>
        </div>
            <button  className='uploadBtn'>Upload</button>
        </form>
    </div>
  )
}

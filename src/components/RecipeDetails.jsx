import React, { useEffect, useState } from 'react'
import api from '../api/Recipes'


export default function RecipeDetails({ details }) {
    const[bookMark,setBookMark]=useState([]);

    useEffect(()=>{
        const fetchData=async()=>{
            let request= await api.get("/recipes");
            // console.log(request.data);
            if(request.data){
                setBookMark(request.data);
            }
            else{
                return []
            }
        }
        fetchData();
    },[]);

    const handleBookmark=async()=>{
    const request= details;
    let count=0;
    const selected=()=>{
        bookMark.forEach(item=>{
            if(item.id===request.id)  count++
        })
    }
    selected();
    console.log(count);
    if(count===0){
        const response=await api.post("/recipes",request);
        console.log(response);
    }
    else{
        console.log("already existing")
    }
    }


    return (
        <div className='recipeDetails'>
            <div className='imgDiv'>
                <img src={details.image_url} alt="" className='imgDetails' />
            </div>
            <div className='ingDiv'>
            <div className='timeDiv'>
                    <i className='item1'>{details.title}</i>
                    <i className="fa-solid fa-clock">Cooking time:{details.cooking_time}minutes</i>
                    <i>Serves: {details.servings}</i>
                    <i>Publisher:{details.publisher}</i>
                    <button onClick={handleBookmark} className='bookmarkBtn'>Bookmark</button>
                </div>
                < ul > 
                    {details===null?'':details.ingredients.map((item,index)=>{
                        return <li key={index} className='ingList'>
                           {item.quantity}{item.unit} {item.description}
                        </li>
                    })}
                </ul>
            </div>
            <div className='srcDiv'>
                <a href={details.source_url}>Source : {details.source_url}</a>
            </div>
            {/* <button onClick={handleBack}>Back</button> */}

        </div>
    )
}

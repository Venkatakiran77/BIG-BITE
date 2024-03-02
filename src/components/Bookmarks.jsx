import React, { useEffect, useState } from 'react';
import './Bookmarks.css';
import api from '../api/Recipes';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrashCan} from '@fortawesome/free-solid-svg-icons';
import axios from 'axios';
import Home from './Home';

export default function Bookmarks() {
    const [storedItems, setStoredItems] = useState([]);
    // console.log(storedItems);  
    const [recipeContent,setRecipeContent]=useState([]);
    
    const handleDelete = async (id) => {
        try {
            await api.delete(`/recipes/${id}`);
            const newList = storedItems.filter((item) => item.id !== id); // Filter out the deleted item
            setStoredItems(newList);
        } catch (error) {
            console.error('Error deleting item:', error);
        }
    };

    const handleDeleteAll=async()=>{
        try{
            const postId=storedItems.map(item=>item.id);
            console.log(postId);
            postId.forEach(id=> api.delete(`/recipes/${id}`));
        }catch(err){
            console.log(err);
        }
        setStoredItems([])
    }

    useEffect(()=>{

    },[storedItems]);
    

    useEffect(()=>{
        const fetchData=async()=>{
            let request= await api.get("/recipes");
            console.log(request.data);
            if(request.data){
                setStoredItems(request.data)
            }
            else{
                return []
            }
        }
        fetchData();
    },[]);

    const handleList=async(id)=>{
        try {
            console.log(id);
            const response = await axios.get(`https://forkify-api.herokuapp.com/api/v2/recipes/${id}?key=<insert your key>`);
            setRecipeContent(response.data.data.recipe);
        } catch (err) {
            console.log(err);
        }
    }


    return (
        <div className='bookmarkDiv'>
            <ul className="list-group list-group-flush">
                {storedItems === null ? '' : storedItems.map((item) => {
                    return <li key={item.id} className='list-group-item'> 
                         <div>
                            <button type='button'  className='btn' onClick={()=>handleList(item.id)}>
                        <img src={item.image_url === null ? '' : item.image_url} alt="Recipe" /> 
                         <p>{item.title} by ({item.publisher})</p></button>
                          </div>
                         <i onClick={()=>handleDelete(item.id)}><FontAwesomeIcon icon={faTrashCan} /></i>
                     </li> 
                })} 
            </ul>
            <button onClick={handleDeleteAll} className='deleteAll'>Delete All</button>
        </div>
    )
}

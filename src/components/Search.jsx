// import React ,{useState}from 'react'
// import Home from './Home';
// import axios from 'axios';

// export default function Search() {
//     const [searchResult, setSearchResult] = useState('');
//     const [fetchData, setFetchData] = useState([]);
//     const [displayPage, setDisplayPage] = useState(false);



//     const handleSearch = async () => {
//         try {
//             setDisplayPage(false);
//             const response = await axios.get(`https://forkify-api.herokuapp.com/api/v2/recipes?search=pizza&key=f107c3e5-89da-4d04-8afe-0634bef3880e`);
//             setDisplayPage(true);
//             const recipeData = response.data.data.recipes;
//             setFetchData(recipeData);

//         } catch (err) {
//             console.log(err);
//         }
//     }
//   return (
//     <div>
      
//         {fetchData!==null? <Home fetchedData={fetchData} displayPage={displayPage} /> :''}
//     </div>
//   )
// }

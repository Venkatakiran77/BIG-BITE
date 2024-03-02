import React, { useEffect, useState } from 'react';
import axios from 'axios';
// import { Link } from 'react-router-dom';
import RecipeDetails from './RecipeDetails';

export default function Home() {
    const [currentPage, setCurrentPage] = useState(1);
    const [recipeDetails, setRecipeDetails] = useState();
    const pageSize = 10;
    const [searchResult, setSearchResult] = useState('');
    const [displayPage, setDisplayPage] = useState(false);
    const [fetchData, setFetchData] = useState([]);
    const [constant, setConstant] = useState('');

    const handleSearch = async () => {
        try {
            sessionStorage.setItem('result', JSON.stringify(searchResult));
            setDisplayPage(false);
            const response = await axios.get(`https://forkify-api.herokuapp.com/api/v2/recipes?search=${searchResult}&key=f107c3e5-89da-4d04-8afe-0634bef3880e`);
            setDisplayPage(true);
            setSearchResult('');
            const recipeData = response.data.data.recipes;
            setFetchData(recipeData);
        } catch (err) {
            console.log(err);
        }
    };

    useEffect(() => {
        setConstant(JSON.parse(sessionStorage.getItem('result')));
        async function fetchResult() {
            if (constant) {
                setDisplayPage(false);
                const response = await axios.get(`https://forkify-api.herokuapp.com/api/v2/recipes?search=${constant}&key=f107c3e5-89da-4d04-8afe-0634bef3880e`);
                setDisplayPage(true);
                setSearchResult('');
                const recipeData = response.data.data.recipes;
                setFetchData(recipeData);
            }
        }
        fetchResult();
        sessionStorage.removeItem('results');
    }, [constant]);

    useEffect(() => {}, [fetchData]);

    useEffect(() => {}, [recipeDetails]);

    const handleRecipe = async (id) => {
        try {
            console.log(id);
            const response = await axios.get(`https://forkify-api.herokuapp.com/api/v2/recipes/${id}?key=<insert your key>`);
            setRecipeDetails(response.data.data.recipe);
        } catch (err) {
            console.log(err);
        }
    };

    const totalPages = Math.ceil(fetchData.length / pageSize);
    const startIndex = (currentPage - 1) * pageSize;
    const endIndex = Math.min(startIndex + pageSize, fetchData.length);
    const currentPageData = fetchData.slice(startIndex, endIndex);

    const goToPage = (page) => {
        setCurrentPage(page);
    };

    return (
        <>
            <div className={`simpleDiv ${displayPage ? 'simpleActive' : ''}`}>
                <h1>
                    "Discover Your Perfect Recipe from Over 1000 Culinary Delights!" <span>↑</span>
                </h1>
                <img src="/assets/img2.jpg" alt="sample img" />
                <div className='typesDiv'></div>
            </div>
            <div className='searchDiv'>
                <div className='inputDiv'>
                    <input type='text' value={searchResult} onChange={(e) => setSearchResult(e.target.value)} placeholder='Enter Recipes... '></input>
                    <button onClick={handleSearch}>Search</button>
                </div>
            </div>
            <div className='mainContainer'>
                <div className='container'>
                    <ul className="list-group list-group-flush">
                        {currentPageData.map((data) => {
                            return <li key={data.id} className="list-group-item">
                                <button type='button' className="btn" onClick={() => handleRecipe(data.id)}>
                                    <img src={data.image_url} alt="img" className='' />
                                    <p>{data.title} by ({data.publisher})</p>
                                </button>
                            </li>
                        })}
                    </ul>
                    <div className={`pagesDiv ${displayPage ? 'activePage' : ''}`}>
                        {/* Render page navigation buttons */}
                        <button disabled={currentPage === 1} onClick={() => goToPage(currentPage - 1)} className='pages'>
                            Previous Page
                        </button>
                        <span>{`Page ${currentPage} of ${totalPages}`}</span>
                        <button disabled={currentPage === totalPages} onClick={() => goToPage(currentPage + 1)} className='pages'>
                            Next Page
                        </button>
                    </div>
                </div>
                {recipeDetails && <RecipeDetails details={recipeDetails} />}
            </div>
        </>
    );
}

Home.defaultProps = {
    fetchData: [],
};

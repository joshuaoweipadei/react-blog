import React, { useState } from 'react'

import ArticleCard from './ArticleCard';
import { carArticles } from '../data/article';

const Articles = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const carsPerPage = 3; // Number of cars to display in the first page

  // Calculate the amount of the cars to display on first Page
  const indexOfLastCar = currentPage * carsPerPage;
  const indexOfFirstCar = indexOfLastCar - carsPerPage;
  const currentCarArticle = carArticles.slice(indexOfFirstCar, indexOfLastCar);
  
  const nextButton = () => {
    if (currentPage < Math.ceil(carArticles.length / carsPerPage)) {
      setCurrentPage(currentPage + 1);
    }
  }

  const previousButton = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  return (
    <div className='articles'>
      <h2 className='article-header'>Latest Cars Articles</h2>

      <div className='article-container'>
        {currentCarArticle.map((article, index) => (
          <ArticleCard key={index} article={article} />
        ))}
      </div>

      <div className="pagination">
        <button onClick={previousButton} disabled={currentPage === 1}>
          {"<<"} Previous
        </button>
        <button onClick={nextButton} disabled={currentPage === Math.ceil(carArticles.length / carsPerPage)}>
          Next {">>"}
        </button>
      </div>
    </div>
  )
}

export default Articles
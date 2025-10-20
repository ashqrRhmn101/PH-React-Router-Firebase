import React from 'react';
import { Link } from 'react-router';

const NewsDetailsCard = ({news}) => {
    console.log(news)
    return (
        <div>
            <div>
                <img src={news.image_url} alt="" />
            </div>
            <div className=''>
                <h1 className='text-3xl font-bold mt-5'>{news.title}</h1>
                <p className='mt-5'>{news.details}</p>
                <Link to={`/category/${news.category_id}`}><button className='btn btn-secondary mt-5'>All news in this category</button></Link>
            </div>
        </div>
    );
};

export default NewsDetailsCard;
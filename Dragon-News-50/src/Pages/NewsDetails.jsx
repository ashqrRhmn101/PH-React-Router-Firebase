import React, { useEffect, useState } from 'react';
import Header from '../Components/Header';
import RightAside from '../Components/HomeLayout/RightAside';
import { useLoaderData, useParams } from 'react-router';
import NewsDetailsCard from './NewsDetailsCard';

const NewsDetails = () => {

    const data = useLoaderData()
    const {id} = useParams()
    const [news,setNews] = useState({})


    useEffect(() => {
        const newsDetails = data.find(singleNews => singleNews.id == id)
        setNews(newsDetails)
    },[data,id])

    return (
        <div>
            <header>
                <Header/>
            </header>
            <main className='w-11/12 mx-auto grid md:grid-cols-12 gap-5 mt-8'>
                <section className='md:col-span-9'>
                    <h2 className='text-2xl font-bold mb-4'>News Details</h2>
                    <NewsDetailsCard news={news}/>
                </section>

                <aside className='col-span-3'>
                    <RightAside/>
                </aside>
            </main>
        </div>
    );
};

export default NewsDetails;
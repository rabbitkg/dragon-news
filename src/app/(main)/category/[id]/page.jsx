import LeftSidebar from '@/components/homePage/news/LeftSidebar';
import NewsCard from '@/components/homePage/news/NewsCard';
import RightSidebar from '@/components/homePage/news/RightSidebar';
import { getCategory, getNewsByCategoryId } from '@/lib/data';
import React from 'react';




const NewsCategoryPage = async ({ params }) => {
    const { id } = await params;
    console.log(id, "paramRes")


    const categories = await getCategory();
    const news = await getNewsByCategoryId(id);

    return (
        <div className="grid grid-cols-12 gap-4 container mx-auto my-10">

            <div className="col-span-3">
                <LeftSidebar categories={categories} activeId={id} />
            </div>
            <div className="col-span-6">
                <h2 className='font-bold text-xl mb-3'>Dragon News Home</h2>
                <div className="space-y-4">
                    {
                       news.length > 0? news.map((n) => {
                            return (
                            <NewsCard key={n.id} news={n}>
                                {n.title}
                            </NewsCard>
                            );
                        }) : <h2 className='font-bold text-4xl text-center my-7'>No News Found!</h2>
                    }
                </div>
            </div>
            <div className="col-span-3">
                <RightSidebar />
            </div>

        </div>
    );
};

export default NewsCategoryPage;
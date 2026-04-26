import React from 'react';
import Marquee from 'react-fast-marquee';


const news = [
    {
        _id: "1",
        title: "--Breaking News: Major Event Unfolds in the City.  ",
    },
    {
        _id: "2",
        title: "--Breaking News: New Policy Announced by the Government.  ",
    },
    {
        _id: "3",
        title: "--Breaking News: Sports Team Wins Championship.  ",
    },
    {
        _id: "4",
        title: "--Breaking News: The Project of 'fazle Rabbi' is Proceed.  ",
    },
];

const BreakingNews = () => {
    return (
        <div className='flex justify-between gap-1 items-center bg-gray-300 py-3 px-2 container mx-auto rounded-sm mb-4'>
            <button className='btn bg-pink-400 text-white'>Latest News</button>
            <Marquee pauseOnHover={true} speed={50}>
                {
                    news.map((n) => {
                        return <span key={n._id}>{n.title}</span>
                    })
                }
            </Marquee>
        </div>
    );
};

export default BreakingNews;
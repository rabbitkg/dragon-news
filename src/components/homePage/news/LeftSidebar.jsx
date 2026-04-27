import Link from 'next/link';
import React from 'react';

const LeftSidebar = ({ categories, activeId }) => {
    return (
        <div>
            <h2 className="font-bold text-xl">All Categories</h2>
            <ul className="flex flex-col gap-3 mt-3">
                {
                    categories.news_category.map((category) => {
                        return <li key={category.category_id} className={`
                            
                            ${activeId === category.category_id ? "bg-pink-300 p-2 rounded-md font-bold text-center text-xl cursor-pointer" : "bg-slate-300 p-2 rounded-md font-bold text-center text-xl cursor-pointer hover:bg-pink-300"} 
                            `}>
                                <Link href={`/category/${category.category_id}`} className='block'>{category.category_name}</Link>
                                </li>
                    })
                }
            </ul>
        </div>
    );
};

export default LeftSidebar;
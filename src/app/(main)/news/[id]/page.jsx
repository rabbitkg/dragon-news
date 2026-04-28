import { getNewsDetailsById } from '@/lib/data';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import { BsArrowRight } from 'react-icons/bs';
import { CiBookmark, CiShare2 } from 'react-icons/ci';
import { FaEye } from 'react-icons/fa';
import { IoIosStar, IoIosStarHalf } from 'react-icons/io';

const NewsDetailsPage = async ({ params }) => {
    const { id } = await params;
    console.log(id, "params");
    const news = await getNewsDetailsById(id);
    console.log(news, "news details");
    return (
        <div className='container mx-auto my-8'>
            <div className=" bg-base-100 border-2 border-slate-300 shadow-sm rounded-t-md">

            {/* Author info */}
            <div className='flex justify-between items-center bg-slate-300 p-4 rounded-t-md'>
                <div className='flex gap-1 items-center'>
                    <Image src={news.author?.img} alt={news.author?.name} height={40} width={40}
                        className='rounded-full'
                    ></Image>
                    <h2 className='font-semibold'>{news.author?.name}</h2>
                    <p className='text-xs'>{news.author?.published_date}</p>
                </div>
                <div className='flex justify-between items-center'>
                    <CiBookmark className='text-xl' />
                    <CiShare2 className='text-xl' />

                </div>
            </div>

            <div className="p-4 space-y-4">

                <div>
                    <h2 className="card-title">{news.title}</h2>

                </div>
                <figure>
                    <Image
                        src={news.image_url}
                        alt={news.title} width={300} height={300} className='w-full' />
                </figure>


                <p className=''>{news.details}</p>


                <div className='flex items-center gap-2 justify-between'>
                    <div className='flex items-center gap-2 '>
                        <h2 className='flex items-center gap-2 '>
                            <IoIosStar className='text-lg text-[#FF8C47]' />
                            <IoIosStar className='text-lg text-[#FF8C47]' />
                        <IoIosStarHalf className='text-lg text-[#FF8C47]'/>

                            {news.rating.number}</h2>
                        <h2 className='flex items-center gap-2 '><FaEye className='text-lg' />
                            {news.total_view}</h2>
                    </div>
                    <Link href={`/category/${news.category_id}`}><button className='btn bg-purple-500 text-white'>See other news for this category <BsArrowRight className='text-xl'/></button></Link>
                </div>


            </div>


        </div>
        </div>
    );
};

export default NewsDetailsPage;
import React from 'react';

const loadingPage = () => {
    return (
        <div className='flex h-[85vh] items-center justify-center gap-5'>
           
            <span className="loading loading-spinner text-neutral"></span>
            <br />
            <span className="loading loading-spinner text-info"></span>
            <br />
            <span className="loading loading-spinner text-success"></span>
        </div>
    );
};

export default loadingPage;
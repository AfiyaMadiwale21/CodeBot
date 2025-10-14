import React from 'react'

export const LoadingSpinner = () => {
    return (
        <div className="px-60 w-full max-w-4xl min-h-[200px] flex flex-col justify-center items-center">
            <span className="loading loading-spinner loading-xl text-black"></span>
             <span className='text-black mt-3'>please wait</span>
        </div>
    );
};
export default LoadingSpinner;

import React from 'react'

export const LoadingSpinner = () => {
    return (
        <div className="w-full min-h-[200px] flex justify-center items-center">
            <div className="flex flex-col justify-center items-center">
            <span className="loading loading-spinner loading-xl text-black"></span>
             <span className='text-black mt-3'>please wait</span>
            </div>
        </div>
    );
};
export default LoadingSpinner;

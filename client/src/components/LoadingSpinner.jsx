import React from 'react'

export const LoadingSpinner = () => {
    return (
        <div className="px-60 w-full max-w-4xl min-h-[200px] flex flex-row justify-center items-center">
            <div className="text-black">please wait <span className="loading loading-spinner loading-xl text-black"></span></div>
        </div>
    );
};
export default LoadingSpinner;

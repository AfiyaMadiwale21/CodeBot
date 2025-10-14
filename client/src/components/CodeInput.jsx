import React from 'react'

const CodeInput = ({ code, setCode }) => {
    return (
        <div className='mb-2 md:mb-8'>
            <label className='text-black'>Ask here:</label><br />
            <textarea className="textarea textarea-xs text-lg border-4 w-full bg-white text-black" placeholder="type here..." value={code} onChange={(e) => setCode(e.target.value)}></textarea>

        </div>

    )
}

export default CodeInput

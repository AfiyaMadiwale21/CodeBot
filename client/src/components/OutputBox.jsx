import React from 'react'
const stripMarkdown = (text) => {
    return text
        .replace(/[#*_`~>-]/g, '')
        .trim();
};

const OutputBox = ({ output }) => {
    const cleanOutput = stripMarkdown(output || 'Output will shine here soon!');

    return (
        <div>
            <h3 className='text-black'>Explanation:</h3>
            <div className="mockup-code text-md md:text-lg max-w-2xl md:max-w-4xl break-words p-4 overflow-auto bg-gray-800 text-white rounded-lg min-h-[200px] whitespace-pre-wrap">
                <pre><code>{cleanOutput}</code></pre>
            </div>
        </div>
    );
};

export default OutputBox;

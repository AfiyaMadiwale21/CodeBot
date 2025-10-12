
import React from 'react'

const LanguageSelect = ({ language, setLanguage }) => {
    return (
        <div>
            <label className='text-black'>Select Langauge:</label><br />
            <select className="select select-neutral text-md w-full" value={language} onChange={(e) => setLanguage(e.target.value)}>
                <option disabled={true}>Choose a language</option>
                <option value="javascript">JavaScript</option>
                <option value="python">Python</option>
                <option value="java">Java</option>
                <option value="c++">C++</option>
                <option value="c">C</option>
            </select>
        </div>
    )
}

export default LanguageSelect
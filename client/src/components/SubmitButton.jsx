import React from 'react'
const SubmitButton = ({ onSubmit }) => {
    return (
        <div>
            <button className="btn btn-neutral px-7 py-3" onClick={onSubmit}>send</button>
        </div>
    )
}

export default SubmitButton
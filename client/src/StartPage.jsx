import React from "react";
import { useNavigate } from 'react-router-dom';
function StartPage() {
    const navigate = useNavigate();
    return (
        <div className="min-h-screen bg-cover bg-center bg-no-repeat text-black" style={{
            backgroundImage: "url('https://plus.unsplash.com/premium_photo-1701068440109-eafa02feeef8?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=2071')",
        }}>
            <div className="hero min-h-screen">
                <div className="hero-content text-center">
                    <div className="max-w-md">
                        <h1 className="text-5xl font-bold">Hello there!</h1>
                        <p className="py-6 font-semibold">
                            CodeBot is your personal coding assistant that gives you easy-to-understand explanations. Select the language, paste your code, and let the CodeBot do the talking!
                        </p>
                        <button onClick={() => navigate('/codebot')} className="btn btn-neutral btn-dash text-md p-4">Get Started</button>
                    </div>
                </div>
            </div>
        </div >
    );
}
export default StartPage;


import React, { useState } from 'react'
import CodeInput from './components/CodeInput'
import LanguageSelect from './components/LanguageSelect'
import SubmitButton from './components/SubmitButton'
import OutputBox from './components/OutputBox'
import LoadingSpinner from './components/LoadingSpinner'

const App = () => {
  const [code, setCode] = useState('');
  const [language, setLanguage] = useState('javascript');
  const [output, setOutput] = useState('');
  const [loading, setLoading] = useState(false);
  const handleSubmit = async () => {
    setLoading(true);
    setOutput('');
    try {
      const response = await fetch(`${import.meta.env.VITE_API_URL}/api/explain`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ code, language })
      });
      const data = await response.json();
      setOutput(data.explanation);
    }
    catch (error) {
      console.log('Error:', error);
      setOutput("Failed to get explanation");
    } finally {
      setLoading(false);
    }
  };
  return (
    <div className='min-h-screen w-full bg-gradient-to-b from-purple-200 via-blue-100 to-white p-2'>
      <div className='flex flex-col gap-14 md:16 justify-center items-center'>
        <div className="w-full min-h-[60px] sm:min-h-20 bg-black rounded-full mx-auto p-2 sm:p-4">
          <div className="text-xl sm:text-3xl font-extrabold text-white ml-3 sm:ml-5 tracking-wide mt-2 text-left">
            <span className="text-blue-300">Code</span>Bot
          </div>
        </div>

        <div className="w-full flex-grow flex justify-center items-center max-w-2xl md:max-w-4xl px-2 sm:px-4 pt-2 sm:pt-6 pb-4 sm:pb-8">
          <div className="shadow-xl rounded-xl px-3 py-4 min-h-[150px] sm:min-h-[200px] w-full">
            {loading ? <LoadingSpinner /> : <OutputBox output={output} />}
          </div>
        </div>
        <div className="w-full max-w-4xl flex flex-col items-center gap-2 border-1 border-black rounded-2xl shadow-2xl p-4 md:p-6 mt-8">
          <div className=" w-full px-12">
            <LanguageSelect language={language} setLanguage={setLanguage} />
          </div>

          <div className='flex flex-col md:flex-row gap-4 w-full px-4'>
            <div className="w-full">
              <CodeInput code={code} setCode={setCode} />
            </div>
            <div className='flex justify-center items-center'>
              <SubmitButton onSubmit={handleSubmit} />
            </div>
          </div>
        </div>

      </div>
    </div>
  )
}

export default App
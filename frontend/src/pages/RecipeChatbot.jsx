import { useState } from 'react';


const RecipeChatbot = () => {
    const [prompt, setPrompt] = useState('');
    const [answer, setAnswer] = useState('')

    return (
        <div className = 'Chatbot'>
            <div className ='grid grid-cols-5'>
                <div className = 'grid-span-3 col-start-2'>
                    <span> Enter your question: </span>
                    <textarea onChange={(event) => setPrompt(event.target.value)} className='border rounded border-slate-800'></textarea>
                    <span>{prompt}</span>
                    <span>{answer}</span>
                </div>
            </div>
           
        </div>
    );
};

export default RecipeChatbot;
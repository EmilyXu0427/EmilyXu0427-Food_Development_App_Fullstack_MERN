import { useState } from 'react';


// const RecipeChatbot = () => {
//     const [prompt, setPrompt] = useState('');
//     const [answer, setAnswer] = useState('')

import { getAnswerFromAI} from '../requests/OpenAIRequests';

const RecipeChatbot = () => {
    const [prompt, setPrompt] = useState('');
    const [answer, setAnswer] = useState('');

    // Get answer from openai api call
    async function getAnswer(prompt) {
        const c = await getAnswerFromAI(prompt);
        setAnswer(c);
    }

    return (
        <div className = 'Chatbot'>
            <div className ='grid grid-cols-5'>
                <div className = 'grid-span-3 col-start-2'>
                    <span> Enter your question: </span>
                    <textarea onChange={(event) => setPrompt(event.target.value)} className='border rounded border-slate-800'></textarea>
                    <span>{answer}</span>
                    <button onClick={() => getAnswer(prompt)} className='bg-slate-600 text-white border rounded'>get Answer</button>
                
                </div>
            </div>
           
        </div>
    );
};

export default RecipeChatbot;
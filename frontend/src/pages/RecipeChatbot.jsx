import { useState } from 'react';
import { getAnswerFromAI } from '../requests/OpenAIRequests';
import chatBotBG from '../pages/picture/chatBotBG.jpg';
import BackButton from '../components/BackButton';

const RecipeChatbot = () => {
    const [prompt, setPrompt] = useState('');
    const [answer, setAnswer] = useState('');

    // Get answer from openai api call
    async function getAnswer(prompt) {
        const c = await getAnswerFromAI(prompt);
        setAnswer(c);
    }

    return (
        <div className='bg-cover bg-center h-screen w-screen'
            style={{ backgroundImage: `url(${chatBotBG})` }}>
            <BackButton />
            {/* Create parent container to adjust height and width of chatbot window */}
            <div className='flex items-center justify-center min-h-screen'>
                <div className='flex flex-col text-xl font-sans font-semibold w-[600px] h-[1000px] p-10 bg-red-200 mx-auto rounded-3xl'>
                    {/* <span className='flex-grow bg-white border rounded-lg'>{answer}</span> */}
                    <span className='block min-w-[200px] min-h-[700px] overflow-y-scroll bg-white border rounded-lg'>{answer}</span>
                    <span className='pb-3 text-2xl pt-5'> Start chat with recipe chatbot </span>
                    <textarea
                        onChange={(event) => setPrompt(event.target.value)}
                        className='border rounded border rounded-lg pb-4'>
                    </textarea>
                    <br />
                    <button
                        onClick={() => getAnswer(prompt)}
                        className='bg-green-800 text-white border rounded-lg h-12'>Send</button>
                </div>
            </div>
        </div>
    );
};

export default RecipeChatbot;
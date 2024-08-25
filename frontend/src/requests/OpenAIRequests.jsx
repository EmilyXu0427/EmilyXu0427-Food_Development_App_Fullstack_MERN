import openai from './configai';

async function getAnswer(prompt) {
    try {
        //create a comletion model to communicate with openai
        const response = await openai.chat.completions.create({
            model: 'gpt-3.5-turbo',
            messages: [{ role: 'user', content: prompt }],
            max_tokens: 1000
        });
        console.log(response.choices[0].message.content);
        return response.choices[0].message.content;
    } catch (error) {
        console.error('Error:', error);
        return error;
    }
}

export async function getAnswerFromAI(prompt) {
    const c= await getAnswer(prompt);
    return c;
};
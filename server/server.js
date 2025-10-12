const express = require('express');
const cors = require('cors');
const axios = require('axios');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

app.post('/api/explain', async (req, res) => {
    const { code, language } = req.body;

    if (!code || !language) {
        return res.status(400).json({ error: 'Code and language are required' });
    }

    try {
        const prompt = `Explain this ${language} code in simple terms:\n\n${code}`;

        const response = await axios.post(
            'https://openrouter.ai/api/v1/chat/completions', // ✅ Correct OpenRouter endpoint
            {
                model: 'openai/gpt-oss-20b:free', // your model
                messages: [{ role: 'user', content: prompt }],
                max_tokens: 500,
            },
            {
                headers: {
                    'Authorization': `Bearer ${process.env.OPENROUTER_API_KEY}`,
                    'Content-Type': 'application/json'
                }
            }
        );
        const explanation = response.data.choices[0].message.content;
        res.json({ explanation });
    } catch (err) {
        console.error('API error:', err.response?.data || err.message);
        res.status(500).json({ error: 'Failed to get explanation' });
    }
});

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});

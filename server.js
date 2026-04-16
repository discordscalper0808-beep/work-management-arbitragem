const express = require('express');
const { createClient } = require('@supabase/supabase-js');

const app = express();
const port = process.env.PORT || 3000;

// Supabase setup
const supabaseUrl = 'https://your-supabase-url.supabase.co';
const supabaseKey = 'your-service-role-key'; // Ensure to use your service role key
const supabase = createClient(supabaseUrl, supabaseKey);

app.use(express.json());

// CRUD API routes
// Create
app.post('/items', async (req, res) => {
    const { data, error } = await supabase
        .from('items')
        .insert([req.body]);
    if (error) return res.status(400).json(error);
    res.status(201).json(data);
});

// Read
app.get('/items', async (req, res) => {
    const { data, error } = await supabase
        .from('items')
        .select('*');
    if (error) return res.status(400).json(error);
    res.status(200).json(data);
});

// Update
app.put('/items/:id', async (req, res) => {
    const { id } = req.params;
    const { data, error } = await supabase
        .from('items')
        .update(req.body)
        .eq('id', id);
    if (error) return res.status(400).json(error);
    res.status(200).json(data);
});

// Delete
app.delete('/items/:id', async (req, res) => {
    const { id } = req.params;
    const { data, error } = await supabase
        .from('items')
        .delete()
        .eq('id', id);
    if (error) return res.status(400).json(error);
    res.status(204).send();
});

app.listen(port, () => {
    console.log(`Server running on http://localhost:${port}`);
});

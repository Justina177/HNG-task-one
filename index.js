import express from 'express';
const app = express();
const port = process.env.PORT || 7000;

app.get('/api', (req, res) => {
    const { slack_name, track } = req.query;

    if (!slack_name || !track) {
    
        return res.status(400).json({ error: 'slack_name and track are required parameters' });
    }

      // Get current day of the week
  const currentDay = new Date().toLocaleDateString('en-US', { weekday: 'long' });

  
})


app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});
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

  // Get current UTC time
  const now = new Date();

  // Extract the date and time components
    const year = now.getUTCFullYear();
    const month = String(now.getUTCMonth() + 1).padStart(2, '0');
    const day = String(now.getUTCDate()).padStart(2, '0');
    const hours = String(now.getUTCHours()).padStart(2, '0');
    const minutes = String(now.getUTCMinutes()).padStart(2, '0');
    const seconds = String(now.getUTCSeconds()).padStart(2, '0');

    // Set the UTC time as "yyyy-MM-ddTHH:mm:ssZ"
    const utcTime = `${year}-${month}-${day}T${hours}:${minutes}:${seconds}Z`;


    // Get GitHub URL of the file being run
  const githubFileUrl = `https://github.com/Justina177/HNG-task-one/blob/main/index.js`;


    

})


app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});
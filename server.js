const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const { google } = require('googleapis');
const fs = require('fs');

// Load environment variables if needed
// require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors());
app.use(bodyParser.json());

const serviceAccount = JSON.parse(fs.readFileSync('src/Contact/services/greenatheart-028bd6756392.json'));

const blogger = google.blogger({
  version: 'v3',
  auth: new google.auth.JWT(
    serviceAccount.client_email,
    null,
    serviceAccount.private_key,
    ['https://www.googleapis.com/auth/blogger']
  )
});

const sheets = google.sheets({ version: 'v4' });
const jwtClient = new google.auth.JWT(
  serviceAccount.client_email,
  null,
  serviceAccount.private_key,
  ['https://www.googleapis.com/auth/spreadsheets']
);

jwtClient.authorize((err, tokens) => {
  if (err) {
    console.error('Failed to authorize:', err);
  } else {
    console.log("Successfully connected!");
  }
});

// Function to fetch blog posts
async function fetchBlogPosts(blogId) {
  try {
    const res = await blogger.posts.list({
      blogId: blogId,
    });
    return res.data.items;
  } catch (err) {
    console.error('Failed to fetch blog posts:', err);
    throw err;
  }
}

// Route to get blog posts
app.get('/blog-posts', async (req, res) => {
  const blogId = '208676001230770356';
  try {
    const posts = await fetchBlogPosts(blogId);
    res.status(200).json(posts);
  } catch (error) {
    console.error('Failed to fetch blog posts:', error);
    res.status(500).send('Failed to fetch blog posts');
  }
});

// Function to write data to Google Sheets
async function writeData(spreadsheetId, range, data) {
  const values = [Object.values(data)];
  const request = {
    spreadsheetId: spreadsheetId,
    range: range,
    valueInputOption: 'RAW',
    resource: { values: values },
    auth: jwtClient,
  };

  try {
    await sheets.spreadsheets.values.append(request);
    console.log("Data written successfully.");
  } catch (err) {
    console.error('Failed to write data:', err);
  }
}

// Route to submit data to Google Sheets
app.post('/submit-data', async (req, res) => {
  const formType = req.body.formType;
  const spreadsheetId = '1KbnCvRRfSJ0o52QXcZHQBkQkuWFBs2rLjZdOJhQgu60';
  const range = formType === 'member' ? 'Sheet2' : 'Sheet1';

  const data = req.body;
  delete data.formType;

  try {
    await writeData(spreadsheetId, range, data);
    res.status(200).send('Data submitted successfully.');
  } catch (error) {
    console.error('Failed to submit data:', error);
    res.status(500).send('Failed to submit data');
  }
});

app.get('/', (req, res) => {
  res.send('Node.js server is running!');
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});

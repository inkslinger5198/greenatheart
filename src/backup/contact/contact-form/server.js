const express = require('express');
const cors = require('cors');
const { google } = require('googleapis');
const bodyParser = require('body-parser');
const fs = require('fs');

const app = express();
const PORT = 3000;

app.use(cors());
app.use(bodyParser.json());

const serviceAccount = JSON.parse(fs.readFileSync('src/Contact/services/greenatheart-028bd6756392.json'));

const sheets = google.sheets({ version: 'v4' });
const jwtClient = new google.auth.JWT(
  serviceAccount.client_email,
  null,
  serviceAccount.private_key,
  ['https://www.googleapis.com/auth/spreadsheets']
);

jwtClient.authorize((err, tokens) => {
  if (err) {
    console.log(err);
    return;
  } else {
    console.log("Successfully connected!");
  }
});

async function writeData(spreadsheetId, range, data) {
  const values = [[data.name, data.email, data.message, data.date]]; // Include the date field
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
    console.error('The API returned an error:', err);
  }
}

app.post('/submit-data', async (req, res) => {
  const spreadsheetId = '1KbnCvRRfSJ0o52QXcZHQBkQkuWFBs2rLjZdOJhQgu60';
  const range = 'Sheet1';
  const data = req.body;

  await writeData(spreadsheetId, range, data);
  res.status(200).send('Data submitted successfully');
});

app.get('/', (req, res) => {
  res.send('Node.js server is running!');
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});

const { google } = require('googleapis');

// Assuming your service account details are securely stored and accessible
const serviceAccount = require('../../src/Contact/services/greenatheart-028bd6756392.json');

const jwtClient = new google.auth.JWT(
  serviceAccount.client_email,
  null,
  serviceAccount.private_key,
  ['https://www.googleapis.com/auth/spreadsheets']
);

exports.handler = async (event) => {
  const headers = {
    'Access-Control-Allow-Origin': '*', // Or specify your GitHub Pages URL for security
    'Access-Control-Allow-Headers': 'Content-Type',
    'Access-Control-Allow-Methods': 'GET, POST, OPTIONS',
    'Content-Type': 'application/json',
  };

  // Handle OPTIONS request for CORS preflight
  if (event.httpMethod === 'OPTIONS') {
    return {
      statusCode: 200,
      headers,
      body: '',
    };
  }

  // Only allow POST for the actual request
  if (event.httpMethod !== 'POST') {
    return {
      statusCode: 405,
      headers,
      body: 'Method Not Allowed',
    };
  }

  // Initialize Google Sheets API
  const sheets = google.sheets({ version: 'v4', auth: jwtClient });

  // Parse the incoming request body
  const data = JSON.parse(event.body);
  const formType = data.formType;
  const spreadsheetId = '1KbnCvRRfSJ0o52QXcZHQBkQkuWFBs2rLjZdOJhQgu60';
  const range = formType === 'member' ? 'Sheet2' : 'Sheet1';
  delete data.formType; // Remove formType from data before submitting

  const values = [Object.values(data)]; // Prepare the data for Google Sheets API
  const request = {
    spreadsheetId: spreadsheetId,
    range: range,
    valueInputOption: 'RAW',
    resource: { values },
  };

  try {
    await sheets.spreadsheets.values.append(request);
    return {
      statusCode: 200,
      headers,
      body: JSON.stringify({ message: 'Data submitted successfully.' }),
    };
  } catch (error) {
    console.error('Error submitting data to Google Sheets:', error);
    return {
      statusCode: 500,
      headers,
      body: JSON.stringify({ error: 'Failed to submit data' }),
    };
  }
};

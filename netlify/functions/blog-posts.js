const { google } = require('googleapis');

// Assuming your service account details are securely stored and accessible
const serviceAccount = require('../../src/Contact/services/greenatheart-028bd6756392.json');

const blogger = google.blogger({
  version: 'v3',
  auth: new google.auth.JWT(
    serviceAccount.client_email,
    null,
    serviceAccount.private_key,
    ['https://www.googleapis.com/auth/blogger']
  )
});

exports.handler = async (event) => {
  // CORS headers
  const headers = {
    'Access-Control-Allow-Origin': '*', // Adjust as necessary for security
    'Access-Control-Allow-Headers': 'Content-Type',
    'Access-Control-Allow-Methods': 'GET, OPTIONS',
    'Content-Type': 'application/json',
  };

  // Preflight request handling for CORS
  if (event.httpMethod === 'OPTIONS') {
    return {
      statusCode: 200,
      headers,
      body: '',
    };
  }

  // Ensure this function only responds to GET requests
  if (event.httpMethod !== 'GET') {
    return { 
      statusCode: 405, 
      headers,
      body: 'Method Not Allowed' 
    };
  }

  const blogId = '208676001230770356';

  try {
    const res = await blogger.posts.list({ blogId: blogId });
    return {
      statusCode: 200,
      headers,
      body: JSON.stringify(res.data.items),
    };
  } catch (error) {
    console.error('Error fetching blog posts:', error);
    return {
      statusCode: 500,
      headers,
      body: JSON.stringify({ error: 'Failed to fetch blog posts' }),
    };
  }
};

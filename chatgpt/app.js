const apiUrl = 'https://api.openai.com/v1/chat/completions';
const apiKey = "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";

const headers = {
  'Content-Type': 'application/json',
  'Authorization': `Bearer ${apiKey}`
};

const data = JSON.stringify({
  model: 'gpt-3.5-turbo',
  messages: [
    { role: 'system', content: 'You are a helpful assistant.' },
    { role: 'user', content: 'Hello!' },
    { role: 'user', content: 'write simple program in c++' }
],
  temperature: 0.7
});

fetch(apiUrl, {
  method: 'POST',
  headers,
  body: data
})
  .then(response => response.json())
  .then(data => {
    // Handle the API response data here
    console.log(data.choices);
  })
  .catch(error => {
    // Handle any errors that occur during the request
    console.error(error);
  });

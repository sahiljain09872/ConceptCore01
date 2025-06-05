// api/signup.js

export async function sendSignupForm(data) {
    console.log('Sending signup form data:', data);
    const Backend_URL = import.meta.env.VITE_BACKEND_URL;
  
    const response = await fetch(`${Backend_URL}/api/auth/register`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    });
  
    return response.json();
  }
  
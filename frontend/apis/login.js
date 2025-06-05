// api/login.js


export async function sendLoginForm(data) {
    console.log('Sending login form data:', data);
    const Backend_URL = import.meta.env.VITE_BACKEND_URL;
  
    const response = await fetch(`${Backend_URL}/api/auth/login`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    });

    console.log('Response from login API:', response);
    if (!response.ok) {
      const errorData = await response.json();
      console.error('Login failed:', errorData);
    }
  
    return response.json();
  }
  
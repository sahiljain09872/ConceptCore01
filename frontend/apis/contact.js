// api/contact.js

export async function sendContactForm(data) {
    console.log('Sending contact form data:', data);
    const Backend_URL = import.meta.env.VITE_BACKEND_URL; // or process.env.REACT_APP_API_BASE_URL
    const response = await fetch(`${Backend_URL}/api/contact`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    });
  
    if (!response.ok) {
      throw new Error('Failed to send contact form');
    }
  
    return response.json();
  }



  
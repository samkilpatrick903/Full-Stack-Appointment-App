const loginFormHandler = async (event) => {
  event.preventDefault();

  // Collect values from the login form
  const email = document.querySelector('#email-login').value.trim();
  const password = document.querySelector('#password-login').value.trim();

  if (email && password) {
    // Send a POST request to the API endpoint
    const response = await fetch('/api/patient/login', {
      method: 'POST',
      body: JSON.stringify({ email, password }),
      headers: { 'Content-Type': 'application/json' },
    });

    if (response.ok) {
      // If successful, redirect the browser to the appointments page
      document.location.replace('/appointments');
    } else {
      alert('Failed to log in');
    }
  }
};
// Sign Up form start
const signupFormHandler = async (event) => {
  event.preventDefault();

  const name = document.querySelector('#name-signup').value.trim();
  const email = document.querySelector('#email-signup').value.trim();
  const password = document.querySelector('#password-signup').value.trim();
  // Send a POST request to the API endpoint
  if (name && email && password) {
    const response = await fetch('/api/patient', {
      method: 'POST',
      body: JSON.stringify({ name, email, password }),
      headers: { 'Content-Type': 'application/json' },
    });
 // If successful, redirect the browser to the appointments page
    if (response.ok) {
      document.location.replace('/appointments');
    } else {
      alert(response.statusText);
    }
  }
};
// Event Listeners on the login handlebars 
document
  .querySelector('.login-form-1')
  .addEventListener('submit', loginFormHandler);

document
  .querySelector('.login-form-2')
  .addEventListener('submit', signupFormHandler);

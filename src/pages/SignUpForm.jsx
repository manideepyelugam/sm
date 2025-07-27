import React, { useState } from 'react';

export default function SignUpForm() {
  const [formData, setFormData] = useState({ fullName: '', email: '', password: '' });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert('Form submitted!');
    localStorage.setItem('userData', JSON.stringify(formData));
    window.location.href = '/usercard';
  };


  return (
    <form onSubmit={handleSubmit} className="max-w-md mx-auto p-6 bg-white rounded shadow space-y-4">
      <h2 className="text-xl font-semibold">Sign Up</h2>
      <input
        name="fullName"
        type="text"
        placeholder="Full Name"
        required
        className="w-full px-4 py-2 border rounded"
        onChange={handleChange}
      />
      <input
        name="email"
        type="email"
        placeholder="Email Address"
        required
        className="w-full px-4 py-2 border rounded"
        onChange={handleChange}
      />
      <input
        name="password"
        type="password"
        placeholder="Password"
        required
        className="w-full px-4 py-2 border rounded"
        onChange={handleChange}
      />
      <button type="submit" className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700">
        Submit
      </button>
    </form>
  );
}

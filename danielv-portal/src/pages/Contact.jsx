import React, { useState } from 'react';

const Contact = () => {
  const [form, setForm] = useState({ name: '', email: '', message: '' });
  const [errors, setErrors] = useState({});

  const validateForm = () => {
    let formErrors = {};
    if (!form.name) formErrors.name = 'Name is required';
    if (!form.email) formErrors.email = 'Email is required';
    else if (!/\S+@\S+\.\S+/.test(form.email)) formErrors.email = 'Email is invalid';
    if (!form.message) formErrors.message = 'Message is required';
    setErrors(formErrors);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    validateForm();
  };

  return (
    <section className="flex flex-col items-start border-l-4 border-[#7f1fb8] p-6">
      <h2 className="text-3xl font-bold text-left mb-4">Contact</h2>
      <form onSubmit={handleSubmit} className="w-full max-w-lg">
        <div className="mb-4">
          <label className="block text-lg mb-2" htmlFor="name">Name:</label>
          <input
            id="name"
            type="text"
            value={form.name}
            onChange={(e) => setForm({ ...form, name: e.target.value })}
            className="w-full p-2 border-2 border-gray-300 rounded"
          />
          {errors.name && <p className="text-red-500 text-sm">{errors.name}</p>}
        </div>

        <div className="mb-4">
          <label className="block text-lg mb-2" htmlFor="email">Email:</label>
          <input
            id="email"
            type="email"
            value={form.email}
            onChange={(e) => setForm({ ...form, email: e.target.value })}
            className="w-full p-2 border-2 border-gray-300 rounded"
          />
          {errors.email && <p className="text-red-500 text-sm">{errors.email}</p>}
        </div>

        <div className="mb-4">
          <label className="block text-lg mb-2" htmlFor="message">Message:</label>
          <textarea
            id="message"
            value={form.message}
            onChange={(e) => setForm({ ...form, message: e.target.value })}
            className="w-full p-2 border-2 border-gray-300 rounded"
          />
          {errors.message && <p className="text-red-500 text-sm">{errors.message}</p>}
        </div>

        <button
          type="submit"
          className="bg-[#7f1fb8] text-white px-6 py-2 rounded-full hover:bg-[#9d32cf]"
        >
          Submit
        </button>
      </form>
    </section>
  );
};

export default Contact;


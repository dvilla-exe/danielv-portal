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
    <section>
      <h2>Contact</h2>
      <form onSubmit={handleSubmit}>
        <label>Name:</label>
        <input type="text" value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })} />
        {errors.name && <p>{errors.name}</p>}

        <label>Email:</label>
        <input type="email" value={form.email} onChange={(e) => setForm({ ...form, email: e.target.value })} />
        {errors.email && <p>{errors.email}</p>}

        <label>Message:</label>
        <textarea value={form.message} onChange={(e) => setForm({ ...form, message: e.target.value })}></textarea>
        {errors.message && <p>{errors.message}</p>}

        <button type="submit">Submit</button>
      </form>
    </section>
  );
};

export default Contact;

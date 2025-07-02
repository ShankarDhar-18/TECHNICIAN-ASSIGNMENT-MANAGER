import React, { useState } from 'react';
import axios from 'axios';

const Cityform = () => {
  const [formdata, setFormdata] = useState({
    title: '',
    desc: '',
    status: ''
  });

  const [image, setImage] = useState(null);

  const handleChange = (e) => {
    setFormdata((prev) => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  const handleImage = (e) => {
    setImage(e.target.files[0]);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!image) {
      alert('Please upload an image.');
      return;
    }

    const data = new FormData();
    data.append('title', formdata.title);
    data.append('desc', formdata.desc);
    data.append('status', formdata.status);
    data.append('image', image);

    try {
      const res = await axios.post('http://localhost:6500/api/zones', data);
      console.log('Uploaded:', res.data);
      alert('City added successfully');

      // Reset form
      setFormdata({ title: '', desc: '', status: '' });
      setImage(null);
      e.target.reset(); // Note: works only if ref applied to form or direct DOM access
    } catch (err) {
      console.error(err);
      alert('Error submitting data');
    }
  };

  return (
    <>
      <h4>Add Technician Zone</h4>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="title"
          placeholder="title"
          value={formdata.title}
          onChange={handleChange}
          required
        />
        <br />

        <textarea
          name="desc"
          placeholder="Description"
          value={formdata.desc}
          onChange={handleChange}
          required
        />
        <br />

        <input
          type="text"
          name="status"
          placeholder="Status"
          value={formdata.status}
          onChange={handleChange}
        />
        <br />

        <input
          type="file"
          accept="image/*"
          onChange={handleImage}
          required
        />
        <br />

        <button className="btn btn-danger" type="submit">
          Add Technician
        </button>
      </form>
    </>
  );
};

export default Cityform;

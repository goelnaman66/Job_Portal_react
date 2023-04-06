import React, { useState } from 'react';


const Form = (props) => {
  const [errorMessage, setErrorMessage] = useState("");
  const [formData, setFormData] = useState({
    title: '',
    company: '',
    industry: '',
    location: '',
    type: '',
  });

  const handleChange = (event) => {
    setFormData({
      ...formData,
      [event.target.name]: event.target.value,
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (!formData.title || !formData.company || !formData.industry) {
      setErrorMessage("Please fill in all required fields.");
    } else {
      setErrorMessage("");
      props.onSubmit(formData);
    }
  };
  return (
    <div className="w-1/3 border-gray-400 border-4 p-4">
      <form className="flex flex-col p-4" noValidate>
        <div className="flex flex-row justify-between mb-4 mt-2">
          <h1 className='text-3xl mb-4'>Create a Job</h1>
          <h3 className='text-2xl font-bold mt-2'>Step 1</h3>
        </div>
        <div className="flex flex-col">
          <label className="mb-1">
            Job Title<span className="text-red-400">*</span>
          </label>
          <input
            type="text"
            name="title"
            placeholder="ex. UX UI Designer"
            className="p-1 mt-1 border-2 mb-2"
            value={formData.title}
            onChange={handleChange}
            required
          />

          <label className="mb-1">
            Company Name<span className="text-red-400">*</span>
          </label>
          <input
            type="text"
            name="company"
            placeholder="ex. Google"
            className="p-1 mt-1 border-2 mb-2"
            value={formData.company}
            onChange={handleChange}
            required
          />

          <label className="mb-1">
            Industry<span className="text-red-400">*</span>
          </label>
          <input
            type="text"
            name="industry"
            placeholder="ex. Information Technology"
            className="p-1 mt-1 border-2 mb-2"
            value={formData.industry}
            onChange={handleChange}
            required
          />
          <div className="flex flex-row justify-evenly">
            <div className="flex flex-col p-1 mt-1 mb-2 w-1/2 ">
              <label className="mb-1 w-1/2">Location</label>
              <input
                type="text"
                name="location"
                placeholder="ex. Chennai"
                className="p-1 mt-1 border-2 mb-2"
                value={formData.location}
                onChange={handleChange}
              />
            </div>
            <div className="flex flex-col p-1 mt-1 mb-2 w-1/2">
              <label className="mb-1">Remote Type</label>
              <input
                type="text"
                name="type"
                placeholder="ex. in-office"
                className="p-1 mt-1 border-2 mb-2"
                value={formData.type}
                onChange={handleChange}
              />
            </div>
          </div>
          <div className='flex flex-row justify-end'>
            <button type="submit" onClick={handleSubmit} className="bg-sky-400 text-white pt-2 pb-2 pl-4 pr-4 rounded-sm mt-10 mb-2">
              Next
            </button>
          </div>
          {errorMessage && <p className="error-message">{errorMessage}</p>}
        </div>
      </form>
    </div>
  );
};

export default Form;

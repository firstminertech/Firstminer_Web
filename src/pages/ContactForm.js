import React, { useEffect, useState } from "react";
import { observer } from "mobx-react";
import { Link } from "react-router-dom";

const ContactForm = observer(() => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        address: '',
        experience: '',
        skills: '',
        education: '',
        github: '',
        linkedin: '',
        resume: null,
        noticePeriod: '',
      });
    
      const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({
          ...prevData,
          [name]: value,
        }));
      };
    
      const handleFileChange = (e) => {
        setFormData((prevData) => ({
          ...prevData,
          resume: e.target.files[0],
        }));
      };
    
      const handleSubmit = (e) => {
        e.preventDefault();
        console.log('Form Data Submitted:', formData);
      };
  return (
    <div>
 <div className="container my-5">
      <h2 className="text-center mb-4">Create Your Resume</h2>
      <form onSubmit={handleSubmit} className="p-4 border rounded shadow-sm bg-light">
        <div className="form-group mb-3">
          <label htmlFor="name" className="form-label">Full Name</label>
          <input
            type="text"
            id="name"
            name="name"
            className="form-control"
            value={formData.name}
            onChange={handleChange}
            required
          />
        </div>

        <div className="form-group mb-3">
          <label htmlFor="email" className="form-label">Email</label>
          <input
            type="email"
            id="email"
            name="email"
            className="form-control"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </div>

        <div className="form-group mb-3">
          <label htmlFor="phone" className="form-label">Phone Number</label>
          <input
            type="text"
            id="phone"
            name="phone"
            className="form-control"
            value={formData.phone}
            onChange={handleChange}
            required
          />
        </div>

        <div className="form-group mb-3">
          <label htmlFor="address" className="form-label">Address</label>
          <input
            type="text"
            id="address"
            name="address"
            className="form-control"
            value={formData.address}
            onChange={handleChange}
            required
          />
        </div>

        <div className="form-group mb-3">
          <label htmlFor="experience" className="form-label">Experience</label>
          <textarea
            id="experience"
            name="experience"
            className="form-control"
            value={formData.experience}
            onChange={handleChange}
            required
          />
        </div>

        <div className="form-group mb-3">
          <label htmlFor="skills" className="form-label">Skills</label>
          <textarea
            id="skills"
            name="skills"
            className="form-control"
            value={formData.skills}
            onChange={handleChange}
            required
          />
        </div>

        <div className="form-group mb-3">
          <label htmlFor="education" className="form-label">Education</label>
          <textarea
            id="education"
            name="education"
            className="form-control"
            value={formData.education}
            onChange={handleChange}
            required
          />
        </div>

        <div className="form-group mb-3">
          <label htmlFor="github" className="form-label">GitHub URL</label>
          <input
            type="url"
            id="github"
            name="github"
            className="form-control"
            value={formData.github}
            onChange={handleChange}
          />
        </div>

        <div className="form-group mb-3">
          <label htmlFor="linkedin" className="form-label">LinkedIn URL</label>
          <input
            type="url"
            id="linkedin"
            name="linkedin"
            className="form-control"
            value={formData.linkedin}
            onChange={handleChange}
          />
        </div>

        <div className="form-group mb-3">
          <label htmlFor="resume" className="form-label">Upload Resume</label>
          <input
            type="file"
            id="resume"
            name="resume"
            className="form-control"
            onChange={handleFileChange}
            required
          />
        </div>

        <div className="form-group mb-3">
          <label htmlFor="noticePeriod" className="form-label">Notice Period</label>
          <select
            id="noticePeriod"
            name="noticePeriod"
            className="form-control"
            value={formData.noticePeriod}
            onChange={handleChange}
            required
          >
            <option value="">Select Notice Period</option>
            <option value="Immediate">Immediate</option>
            <option value="1 Month">1 Month</option>
            <option value="2 Months">2 Months</option>
            <option value="3 Months">3 Months</option>
          </select>
        </div>

        <button type="submit" className="btn btn-primary w-100 mt-3">Submit</button>
      </form>
    </div>
    </div>
  );
});

export default ContactForm;

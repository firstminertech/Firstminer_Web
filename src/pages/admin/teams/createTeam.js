import React, { useEffect, useState } from 'react';
import { Formik, Field, Form } from 'formik';
import websiteStore from '../../../store/WebsiteStore';
import { useParams, useNavigate } from 'react-router-dom';
import AdminSidebar from '../../../component/admin-component/Admin-Sidebar';
import AdminHeader from '../../../component/admin-component/AdminHeader';

const CreateTeam = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const isEditMode = Boolean(id);
  const [teamMember, setTeamMember] = useState(null); // Local state to hold the team member data

  useEffect(() => {
    if (isEditMode) {
      const fetchedTeamMember = websiteStore.getTeamMemberById(id);
      if (fetchedTeamMember) {
        setTeamMember(fetchedTeamMember); // Set fetched data into state
      }
    }
  }, [id, isEditMode]);

  const handleSubmit = async (values) => {
    try {
      console.log(values, "aaaa");

      if (isEditMode) {
        await websiteStore.updateTeam(id, values);
      } else {
        await websiteStore.addTeam(values);
      }
      navigate('/admin/get-teams-details');
    } catch (error) {
      console.error('Error:', error);
    }
  };

  // If in edit mode and teamMember is not loaded yet, we show loading message
  if (isEditMode && !teamMember) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <AdminHeader/>
    <div className="d-flex">
      <AdminSidebar/>
      <div className='container p-3'>
      <h2 className="text-center mb-4">{isEditMode ? 'Edit Team Member' : 'Create a Team Member'}</h2>
      <Formik
        initialValues={{
          name: isEditMode ? teamMember?.name || '' : '',
          position: isEditMode ? teamMember?.position || '' : '',
          description: isEditMode ? teamMember?.description || '' : '',
          image: isEditMode ? teamMember?.image || '' : '',
          instagram: isEditMode ? teamMember?.instagram || '' : '',
          whatsapp: isEditMode ? teamMember?.whatsapp || '' : '',
          linkedin: isEditMode ? teamMember?.linkedin || '' : '',
          facebook: isEditMode ? teamMember?.facebook || '' : ''
        }}
        enableReinitialize // Ensures the form reinitializes when initialValues change
        onSubmit={handleSubmit}
      >
        {({ values, handleChange }) => (
          <Form className="team-form">
            <div className="form-group form-group-x">
              <label htmlFor="name">Name:</label>
              <Field
                id="name"
                name="name"
                type="text"
                className="form-control"
                value={values.name}
                onChange={handleChange}
                required
              />
            </div>

            <div className="form-group">
              <label htmlFor="position">Position:</label>
              <Field
                id="position"
                name="position"
                type="text"
                className="form-control"
                value={values.position}
                onChange={handleChange}
                required
              />
            </div>

            <div className="form-group">
              <label htmlFor="description">Description:</label>
              <Field
                as="textarea"
                id="description"
                name="description"
                className="form-control"
                value={values.description}
                onChange={handleChange}
                required
              />
            </div>

            <div className="form-group">
              <label htmlFor="image">Image URL:</label>
              <Field
                id="image"
                name="image"
                type="text"
                className="form-control"
                value={values.image}
                onChange={handleChange}
              />
            </div>

            <div className="form-group">
              <label htmlFor="instagram">Instagram:</label>
              <Field
                id="instagram"
                name="instagram"
                type="text"
                className="form-control"
                value={values.instagram}
                onChange={handleChange}
              />
            </div>

            <div className="form-group">
              <label htmlFor="whatsapp">WhatsApp:</label>
              <Field
                id="whatsapp"
                name="whatsapp"
                type="text"
                className="form-control"
                value={values.whatsapp}
                onChange={handleChange}
              />
            </div>

            <div className="form-group">
              <label htmlFor="linkedin">LinkedIn:</label>
              <Field
                id="linkedin"
                name="linkedin"
                type="text"
                className="form-control"
                value={values.linkedin}
                onChange={handleChange}
              />
            </div>

            <div className="form-group">
              <label htmlFor="facebook">Facebook:</label>
              <Field
                id="facebook"
                name="facebook"
                type="text"
                className="form-control"
                value={values.facebook}
                onChange={handleChange}
              />
            </div>

            <button type="submit" className="btn btn-x btn-primary btn-block mt-4">
              {isEditMode ? 'Update Team Member' : 'Create Team Member'}
            </button>
          </Form>
        )}
      </Formik>
      </div>
      </div>
    </div>
  );
};

export default CreateTeam;

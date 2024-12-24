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
  const [teamMember, setTeamMember] = useState(null);

  useEffect(() => {
    if (isEditMode) {
      const fetchedTeamMember = websiteStore.getTeamMemberById(id);
      if (fetchedTeamMember) {
        setTeamMember(fetchedTeamMember);
      }
    }
  }, [id, isEditMode]);

  const handleSubmit = async (values) => {
    try {
      console.log(values, "aaaa");
      const formData = new FormData();
      formData.append('name', values.name);
      formData.append('position', values.position);
      formData.append('description', values.description);
      if (values.image) {
        // Append the image as binary data (file object)
        formData.append('image', values.image);
      }
      formData.append('instagram', values.instagram);
      formData.append('whatsapp', values.whatsapp);
      formData.append('linkedin', values.linkedin);
      formData.append('facebook', values.facebook);

      if (isEditMode) {
        await websiteStore.updateTeam(id, formData); // Send formData instead of raw values
      } else {
        await websiteStore.addTeam(formData); // Send formData instead of raw values
      }
      navigate('/admin/get-teams-details');
    } catch (error) {
      console.error('Error:', error);
    }
  };

  if (isEditMode && !teamMember) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <AdminHeader />
      <div className="d-flex">
        <AdminSidebar />
        <div className='container p-3'>
          <h2 className="text-center mb-4">{isEditMode ? 'Edit Team Member' : 'Create a Team Member'}</h2>
          <Formik
            initialValues={{
              name: isEditMode ? teamMember?.name || '' : '',
              position: isEditMode ? teamMember?.position || '' : '',
              description: isEditMode ? teamMember?.description || '' : '',
              image: null,
              instagram: isEditMode ? teamMember?.instagram || '' : '',
              whatsapp: isEditMode ? teamMember?.whatsapp || '' : '',
              linkedin: isEditMode ? teamMember?.linkedin || '' : '',
              facebook: isEditMode ? teamMember?.facebook || '' : ''
            }}
            enableReinitialize
            onSubmit={handleSubmit}
          >
            {({ values, handleChange, setFieldValue }) => (
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
                  <label htmlFor="image">Image</label>
                  <input
                    id="image"
                    name="image"
                    type="file"
                    className="form-control"
                    onChange={(event) => {
                      const file = event.currentTarget.files[0];
                      setFieldValue("image", file); 
                    }}
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

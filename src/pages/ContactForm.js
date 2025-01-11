import React from "react";
import { observer } from "mobx-react";
import { toast } from "react-toastify";
import { Link } from "react-router-dom";
import Header from "../component/Header";
import * as Yup from "yup";
import { Formik, Field, Form, ErrorMessage } from "formik";
import Select from "react-select";
import { ToastContainer } from "react-toastify";

const ContactForm = observer(() => {
  // Define validation schema using Yup
  const validationSchema = Yup.object({
    name: Yup.string().required("Full Name is required"),
    email: Yup.string()
      .email("Invalid email format")
      .required("Email is required"),
    phone: Yup.string()
      .matches(/^[0-9]{10}$/, "Phone number must be exactly 10 digits")
      .required("Phone number is required"),
    address: Yup.string().required("Address is required"),
  });
  const skillOptions = [
    { value: "React", label: "React" },
    { value: "MERN", label: "MERN" },
    { value: "JavaScript", label: "JavaScript" },
    { value: "Node.js", label: "Node.js" },
    { value: "React Native", label: "React Native" },
    { value: "JAVA", label: "JAVA" },
    { value: "PYTHON", label: "Python" },
    { value: "CSS", label: "CSS" },
    { value: "HTML", label: "HTML" },
  ];

  const onSubmit = async (values, { setSubmitting, resetForm }) => {
    const formData = new FormData();
    Object.keys(values).forEach((key) => {
      formData.append(key, values[key]);
    });

    if (values.resume) {
      formData.append("resume", values.resume);
    }

    formData.append("access_key", "2083e8f2-0956-41b2-81f2-9964e34027b1");

    try {
      const res = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData,
      }).then((res) => res.json());

      if (res.success) {
        toast.success("Form submitted successfully!", {
          position: "top-right", // Choose the position of the toast
          autoClose: 3000,       // Auto close after 3 seconds
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",        // You can change to "dark" for dark mode
        });
      } else {
        toast.error("Form submission failed", {
          position: "top-right", // Choose the position of the toast
          autoClose: 3000,       // Auto close after 3 seconds
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",        // You can change to "dark" for dark mode
        });
      }
      resetForm();
    } catch (error) {
      console.error("Error", error);
    } finally {
      setSubmitting(false);
    }
  };

  const initialValues = {
    name: "",
    email: "",
    phone: "",
    address: "",
    experience: "",
    skills: "",
    education: "",
    github: "",
    linkedin: "",
    resume: null,
    noticePeriod: "",
  };

  return (
    <div>
      <Header />
      <ToastContainer />
      <div className="container my-2">
        <div className="shadow-lg border-0 rounded">
          <div className="card-header text-white text-center py-4 formbackground">
            <h3>Thank you for considering my application.</h3>
            <p className="paratext">" We will reach out to you soon to discuss the next steps."</p>
          </div>
          <Formik
            initialValues={initialValues}
            validationSchema={validationSchema}
            onSubmit={onSubmit}
          >
            {({ setFieldValue, isSubmitting }) => (
              <Form className="p-4">
                <div className="row mb-3">
                  <div className="col-md-6">
                    <label htmlFor="name" className="form-label">
                      Full Name
                    </label>
                    <Field
                      type="text"
                      id="name"
                      name="name"
                      className="form-control"
                    />
                    <ErrorMessage
                      name="name"
                      component="div"
                      className="text-danger"
                    />
                  </div>
                  <div className="col-md-6">
                    <label htmlFor="email" className="form-label">
                      Email
                    </label>
                    <Field
                      type="email"
                      id="email"
                      name="email"
                      className="form-control"
                    />
                    <ErrorMessage
                      name="email"
                      component="div"
                      className="text-danger"
                    />
                  </div>
                </div>

                <div className="row mb-3">
                  <div className="col-md-6">
                    <label htmlFor="phone" className="form-label">
                      Phone Number
                    </label>
                    <Field
                      type="text"
                      id="phone"
                      name="phone"
                      className="form-control"
                      maxLength="10" // Max length set to 10 digits
                      onInput={(e) =>
                        (e.target.value = e.target.value.replace(/[^0-9]/g, ""))
                      } // Allow only numbers
                    />
                    <ErrorMessage
                      name="phone"
                      component="div"
                      className="text-danger"
                    />
                  </div>
                  <div className="col-md-6">
                    <label htmlFor="address" className="form-label">
                      Address
                    </label>
                    <Field
                      type="text"
                      id="address"
                      name="address"
                      className="form-control"
                    />
                    <ErrorMessage
                      name="address"
                      component="div"
                      className="text-danger"
                    />
                  </div>
                </div>

                <div className="form-group mb-3">
                  <label htmlFor="experience" className="form-label ">
                    Experience/year
                  </label>
                  <Field
                    type="number"
                    id="experience"
                    name="experience"
                    className="form-control "
                  />
                  <ErrorMessage
                    name="experience"
                    component="div"
                    className="text-danger"
                  />
                </div>

                <div className="form-group mb-3">
                  <label htmlFor="skills" className="form-label">
                    Skills
                  </label>
                  <Field name="skills">
                    {({ field, form }) => (
                      <Select
                        isMulti
                        options={skillOptions}
                        onChange={(selectedOptions) => {
                          form.setFieldValue(
                            "skills",
                            selectedOptions
                              ? selectedOptions.map((option) => option.value)
                              : []
                          );
                        }}
                        className="basic-multi-select"
                        classNamePrefix="select"
                      />
                    )}
                  </Field>
                  <ErrorMessage
                    name="skills"
                    component="div"
                    className="text-danger"
                  />
                </div>

                <div className="form-group mb-3">
                  <label htmlFor="education" className="form-label">
                    Education
                  </label>
                  <Field
                  type="text"
                    id="education"
                    name="education"
                    className="form-control"
                  />
                  <ErrorMessage
                    name="education"
                    component="div"
                    className="text-danger"
                  />
                </div>

                <div className="row mb-3">
                  <div className="col-md-6">
                    <label htmlFor="github" className="form-label">
                      GitHub URL
                    </label>
                    <Field
                      type="url"
                      id="github"
                      name="github"
                      className="form-control"
                    />
                    <ErrorMessage
                      name="github"
                      component="div"
                      className="text-danger"
                    />
                  </div>
                  <div className="col-md-6">
                    <label htmlFor="linkedin" className="form-label">
                      LinkedIn URL
                    </label>
                    <Field
                      type="url"
                      id="linkedin"
                      name="linkedin"
                      className="form-control"
                    />
                    <ErrorMessage
                      name="linkedin"
                      component="div"
                      className="text-danger"
                    />
                  </div>
                </div>

               

                <div className="form-group mb-3">
                  <label htmlFor="noticePeriod" className="form-label">
                    Notice Period
                  </label>
                  <Field
                    as="select"
                    id="noticePeriod"
                    name="noticePeriod"
                    className="form-control"
                  >
                    <option value="">Select Notice Period</option>
                    <option value="Immediate">Immediate</option>
                    <option value="1 Month">1 Month</option>
                    <option value="2 Months">2 Months</option>
                    <option value="3 Months">3 Months</option>
                  </Field>
                  <ErrorMessage
                    name="noticePeriod"
                    component="div"
                    className="text-danger"
                  />
                </div>

                <div className="text-secondary">
                Kindly note: You may attach your resume and send it to <span className="text-primary">info@firstminer.in</span> for consideration.
                </div>

                <button
                  type="submit"
                  className="btn w-50 mt-3 d-block mx-auto formbutton"
                  disabled={isSubmitting}
                >
                  Submit
                </button>
              </Form>
            )}
          </Formik>
        </div>
      </div>
    </div>
  );
});

export default ContactForm;

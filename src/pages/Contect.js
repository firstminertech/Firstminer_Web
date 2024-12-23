import React, { useState } from "react";
import { Form, Button, Alert, Row, Col } from "react-bootstrap";
import { Formik } from "formik";
import * as Yup from "yup";
import Header from "../component/Header";
import websiteStore from "../store/WebsiteStore";

const ContactPage = () => {
    const [isSuccess, setIsSuccess] = useState(false);
    const [loading, setLoading] = useState(false);

    // Function to handle form submission
    const handleSubmit = async (values, { resetForm }) => {
        setLoading(true);
        console.log(values,"values");
        setIsSuccess(false); // Reset success state before submitting
        try {
            // Call the addContact function from the website store and pass form values
            await websiteStore.addContact(values, () => {
                setIsSuccess(true);  // On success, show success message
                resetForm();          // Reset form
            });
        } catch (error) {
            console.error("Error submitting contact:", error);
            // Handle errors if needed
        } finally {
            setLoading(false); // Stop the loading indicator
        }
    };

    return (
        <div>
            <Header />
            <section id="contact" className="wow fadeInUp py-5">
                <div className="container">
                    <div className="section-header text-center mb-4">
                        <h2>Contact Us</h2>
                        <p>Reach out to us for inquiries or assistance. We're here to help!</p>
                    </div>
                    <div className="row contact-info mb-5">
                        {/* Contact Info Section */}
                        <div className="col-md-4 mb-3">
                            <div className="contact-address">
                                <i className="ion-ios-location-outline display-4 mb-2" />
                                <h3>Address</h3>
                                <address>A108 Adam Street, NY 535022, USA</address>
                            </div>
                        </div>
                        <div className="col-md-4 mb-3">
                            <div className="contact-phone">
                                <i className="ion-ios-telephone-outline display-4 mb-2" />
                                <h3>Phone Number</h3>
                                <p><a href="tel:+155895548855">+1 5589 55488 55</a></p>
                            </div>
                        </div>
                        <div className="col-md-4 mb-3">
                            <div className="contact-email">
                                <i className="ion-ios-email-outline display-4 mb-2" />
                                <h3>Email</h3>
                                <p><a href="mailto:info@example.com">info@example.com</a></p>
                            </div>
                        </div>
                    </div>

                    <div className="contact-container">
                        <div className="col-md-6">
                            <div className="form-container">
                                <h2 className="form-title">Contact Us</h2>
                                {isSuccess && (
                                    <Alert variant="success" className="success-alert">
                                        Your message has been sent. Thank you!
                                    </Alert>
                                )}
                                <Formik
                                    initialValues={{
                                        name: "",
                                        email: "",
                                        subject: "",
                                        message: "",
                                    }}
                                    validationSchema={Yup.object({
                                        name: Yup.string()
                                            .min(4, "Name must be at least 4 characters")
                                            .required("Name is required"),
                                        email: Yup.string()
                                            .email("Invalid email address")
                                            .required("Email is required"),
                                        subject: Yup.string()
                                            .min(4, "Subject must be at least 4 characters")
                                            .required("Subject is required"),
                                        message: Yup.string().required("Message is required"),
                                    })}
                                    onSubmit={handleSubmit}  // Pass the handleSubmit function
                                >
                                    {formik => (
                                        <Form onSubmit={formik.handleSubmit}>
                                            <Row>
                                                <Col md={6} className="mt-1">
                                                    <Form.Group controlId="name">
                                                        <Form.Control
                                                            type="text"
                                                            name="name"
                                                            value={formik.values.name}
                                                            onChange={formik.handleChange}
                                                            onBlur={formik.handleBlur}
                                                            placeholder="Your Name"
                                                            className="form-input"
                                                            isInvalid={formik.touched.name && formik.errors.name}
                                                        />
                                                        <Form.Control.Feedback type="invalid">
                                                            {formik.errors.name}
                                                        </Form.Control.Feedback>
                                                    </Form.Group>
                                                </Col>
                                                <Col md={6} className="mt-1">
                                                    <Form.Group controlId="email">
                                                        <Form.Control
                                                            type="email"
                                                            name="email"
                                                            value={formik.values.email}
                                                            onChange={formik.handleChange}
                                                            onBlur={formik.handleBlur}
                                                            placeholder="Your Email"
                                                            className="form-input"
                                                            isInvalid={formik.touched.email && formik.errors.email}
                                                        />
                                                        <Form.Control.Feedback type="invalid">
                                                            {formik.errors.email}
                                                        </Form.Control.Feedback>
                                                    </Form.Group>
                                                </Col>
                                            </Row>
                                            <Form.Group controlId="subject" className="mt-1">
                                                <Form.Control
                                                    type="text"
                                                    name="subject"
                                                    value={formik.values.subject}
                                                    onChange={formik.handleChange}
                                                    onBlur={formik.handleBlur}
                                                    placeholder="Subject"
                                                    className="form-input"
                                                    isInvalid={formik.touched.subject && formik.errors.subject}
                                                />
                                                <Form.Control.Feedback type="invalid">
                                                    {formik.errors.subject}
                                                </Form.Control.Feedback>
                                            </Form.Group>
                                            <Form.Group controlId="message" className="mt-1">
                                                <Form.Control
                                                    as="textarea"
                                                    name="message"
                                                    rows={5}
                                                    value={formik.values.message}
                                                    onChange={formik.handleChange}
                                                    onBlur={formik.handleBlur}
                                                    placeholder="Message"
                                                    className="form-input"
                                                    isInvalid={formik.touched.message && formik.errors.message}
                                                />
                                                <Form.Control.Feedback type="invalid">
                                                    {formik.errors.message}
                                                </Form.Control.Feedback>
                                            </Form.Group>
                                            <div className="text-center">
                                                <Button type="submit" variant="primary" disabled={loading} className="submit-button">
                                                    {loading ? "Sending..." : "Send Message"}
                                                </Button>
                                            </div>
                                        </Form>
                                    )}
                                </Formik>
                            </div>
                        </div>

                        <div className="col-md-6">
                            <div id="google-map" className="map-container">
                                <iframe
                                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3696.730331263791!2d82.15783957474363!3d22.098113350194648!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a280b0e9ca001ed%3A0x86b6263922c5064d!2sE-DigitalBaba!5e0!3m2!1sen!2sin!4v1734764627163!5m2!1sen!2sin"
                                    className="map-iframe"
                                    allowFullScreen
                                    loading="lazy"
                                ></iframe>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default ContactPage;

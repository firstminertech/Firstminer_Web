import { observer } from "mobx-react";
import React from "react";
import { Formik, Field, Form } from "formik";
import websiteStore from "../../../store/WebsiteStore";
import AdminHeader from "../../../component/admin-component/AdminHeader";
import AdminSidebar from "../../../component/admin-component/Admin-Sidebar";

const AddClient = observer(() => {

    const initialValues = {
        name: '',
        image: null,
    };

    const handleSubmit = async (values) => {
        console.log(values, "values");

        const formData = new FormData();
        formData.append('name', values.name);
        formData.append('image', values.image);

        // Log the FormData content (you cannot directly log FormData, so check manually)
        console.log("FormData prepared:", formData);

        // Send FormData to the website store
        try {
            await websiteStore.addClient(formData);  // Assuming this sends the FormData to the server
        } catch (error) {
            console.error("Error submitting client:", error);
        }
    };

    return (
        <div>
            <AdminHeader />
            <div className="d-flex">
                <AdminSidebar />
                <div class="container">
                    <h1 class="mb-4 text-center">Add New Client</h1>
                    <Formik
                        initialValues={initialValues}
                        onSubmit={(values) => handleSubmit(values)}
                    >
                        {({ setFieldValue }) => (
                            <Form>
                                <div class="mb-3">
                                    <label htmlFor="name" class="form-label">Name</label>
                                    <Field
                                        id="name"
                                        name="name"
                                        placeholder="Enter client name"
                                        type="text"
                                        class="form-control"
                                    />
                                </div>

                                <div class="mb-3">
                                    <label htmlFor="image" class="form-label">Client Image</label>
                                    <input
                                        id="image"
                                        name="image"
                                        type="file"
                                        class="form-control"
                                        onChange={(event) => {
                                            const file = event.currentTarget.files[0];
                                            console.log("Selected file:", file);  // Log the file to see if it's correctly selected
                                            setFieldValue("image", file);
                                        }}
                                    />
                                </div>

                                <div class="d-flex justify-content-center">
                                    <button type="submit" class="btn btn-primary">Submit</button>
                                </div>
                            </Form>
                        )}
                    </Formik>
                </div>

            </div>
        </div>


    );
});

export default AddClient;

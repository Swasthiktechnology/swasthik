import React, { useState } from "react";
import axios from "axios";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";

function CntForm() {
  const [successMessage, setSuccessMessage] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const [loading, setLoading] = useState(false);

  const validationSchema = Yup.object().shape({
    name: Yup.string().required("Name is required"),
    email: Yup.string().email("Invalid email address").required("Email is required"),
    phone: Yup.string().required("Phone Number is required"),
  });

  const handleSubmit = async (values, { setSubmitting, resetForm }) => {
    try {
      setLoading(true); // Start loading

      const response = await axios.post("https://apoorvmathur.online/contact/submit_contact.php", values);
      setSuccessMessage("Form submitted successfully");
      setErrorMessage("");
      resetForm(); // Clear the form

      // Clear success message after 5 seconds
      setTimeout(() => {
        setSuccessMessage("");
      }, 5000);
    } catch (error) {
      console.error(error);
      setErrorMessage("An error occurred while submitting the form");
      setSuccessMessage("");
    } finally {
      setLoading(false); // Stop loading
      setSubmitting(false);
    }
  };

  return (
    <div className="swasthik-contact-form">
      <h2 className="font-weight-bold font-size-100 theme-fourthly text-center">Connect With Us</h2>
      <Formik
        initialValues={{ name: "", email: "", phone: "", message: "" }}
        validationSchema={validationSchema}
        onSubmit={handleSubmit}
      >
        <Form className="pt-3">
          <Field type="text" name="name" id="name" placeholder="Full Name*" />
          <ErrorMessage name="name" component="div" className="error-message" />

          <Field type="email" name="email" id="email" placeholder="Email Address*" />
          <ErrorMessage name="email" component="div" className="error-message" />

          <Field type="text" name="phone" id="phone" placeholder="Phone Number*" />
          <ErrorMessage name="phone" component="div" className="error-message" />

          <Field as="textarea" name="message" id="message" placeholder="Type Message" />
          <ErrorMessage name="message" component="div" className="error-message" />

          <div className="s-submit-btn">
            <button type="submit" disabled={loading}>
              {loading ? (
                <>
                  Submitting... <div className="preloader"><div className="spinner"></div></div>
                </>
              ) : (
                <>
                  Submit{" "}
                  <span className="svg-icon">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                      <path d="M502.6 278.6c12.5-12.5 12.5-32.8 0-45.3l-128-128c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L402.7 224 32 224c-17.7 0-32 14.3-32 32s14.3 32 32 32l370.7 0-73.4 73.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l128-128z"></path>
                    </svg>
                  </span>
                </>
              )}
            </button>
          </div>
        </Form>
      </Formik>
      {successMessage && <div className="success-message">{successMessage}</div>}
      {errorMessage && <div className="error-message">{errorMessage}</div>}
    </div>
  );
}

export default CntForm;

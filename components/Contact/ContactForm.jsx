"use client";
import { Formik, Field, Form, ErrorMessage } from "formik";
import * as Yup from "yup";

const validationSchema = Yup.object({
  message: Yup.string("Type a message").required("Message is required"),
  email: Yup.string("Type your email")
    .email("Email should be valid")
    .required("Email is required"),
});

const ContactForm = () => {
  const initialValues = {
    message: "",
    email: "",
  };

  const onSubmit = (values, { resetForm }) => {
    console.log(values);
  };

  return (
    <div className="h-1/2 lg:h-full lg:w-1/2 bg-red-50 rounded-xl text-xl flex flex-col gap-8 justify-center p-24">
      <Formik
        initialValues={initialValues}
        onSubmit={onSubmit}
        validationSchema={validationSchema}
      >
        <Form className="flex flex-col gap-8 w-full">
          <label className="flex flex-col gap-8">
            Message
            <Field
              as="textarea"
              name="message"
              className="bg-transparent border-b-2 border-b-black outline-none py-2 resize-none"
            />
          </label>

          <label className="flex flex-col gap-8">
            Email
            <Field
              name="email"
              className="bg-transparent border-b-2 border-b-black outline-none py-2"
            />
          </label>

          <button
            type="submit"
            className="bg-purple-200 rounded font-semibold text-gray-600 p-4"
          >
            Send
          </button>
        </Form>
      </Formik>
    </div>
  );
};

export default ContactForm;

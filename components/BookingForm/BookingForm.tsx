"use client";
import { Formik, Form, Field, FormikHelpers } from "formik";
import * as Yup from "yup";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import BookingDate from "../BookingDate/BookingDate";
import css from "./BookingForm.module.css";
import BookingButton from "../BookingButton/BookingButton";

export default function BookingForm() {
  const initialValues = {
    name: "",
    email: "",
    bookingDate: null as Date | null,
    comment: "",
  };

  const validationSchema = Yup.object({
    name: Yup.string().required("Name is required"),
    email: Yup.string()
      .email("Enter a valid email")
      .required("Email is required"),
    bookingDate: Yup.date().required("Booking date is required"),
    comment: Yup.string(),
  });

  const onSubmit = (
    values: typeof initialValues,
    formikHelpers: FormikHelpers<typeof initialValues>
  ) => {
    toast.success("Your campervan booking is submitted!");
    formikHelpers.resetForm();
  };

  return (
    <div className={css.container}>
      <h3 className={css.title}>Book your campervan now</h3>
      <p className={css.subtitle}>
        Stay connected! We are always ready to help you.
      </p>

      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={onSubmit}
        validateOnChange={true}
        validateOnBlur={true}
      >
        {({ setFieldValue, setFieldTouched, values, touched, errors }) => {
          const firstError =
            touched.name && errors.name
              ? "name"
              : touched.email && errors.email
                ? "email"
                : touched.bookingDate && errors.bookingDate
                  ? "bookingDate"
                  : null;

          return (
            <Form className={css.form}>
              <Field name="name" placeholder="Name*" className={css.input} />
              {firstError === "name" && (
                <div className={css.error}>{errors.name}</div>
              )}

              <Field
                name="email"
                type="email"
                placeholder="Email*"
                className={css.input}
              />
              {firstError === "email" && (
                <div className={css.error}>{errors.email}</div>
              )}

              <BookingDate
                name="bookingDate"
                value={values.bookingDate}
                onChange={(date) => {
                  setFieldValue("bookingDate", date);
                }}
                onBlur={() => {
                  setTimeout(() => {
                    setFieldTouched("bookingDate", true, true);
                  }, 0);
                }}
                touched={touched.bookingDate}
                error={errors.bookingDate}
              />
              {firstError === "bookingDate" && (
                <div className={css.error}>{errors.bookingDate}</div>
              )}

              <Field
                name="comment"
                as="textarea"
                placeholder="Comment"
                className={css.textarea}
              />

              <BookingButton type="submit" textBtn="Send"></BookingButton>
            </Form>
          );
        }}
      </Formik>

      <ToastContainer position="top-right" autoClose={3000} />
    </div>
  );
}

import React, { useState, useEffect } from 'react'
import './Home.scss'
import firebase from '../../firebase'
import { Formik, Form, Field, ErrorMessage } from 'formik';
import sha1 from 'sha1';
import dayjs from 'dayjs'
const initialFormValues = {
    name: '',
    phone: '',
    totalPax: 2,
}

export default () => {
    const bookingsDB = firebase.database().ref('bookings')
    const [restaurantName, setRestaurantName] = useState("Restaurant")
    const [bookings, setBookings] = useState([])
    useEffect(() => {
        getBookings()
    }, [])
    const validateForm = values => {
        let errors = {};
        if (!values.name) {
            errors.name = 'required';
        }
        if (!values.phone) {
            errors.phone = 'required';
        } else if (!/^(\+?6?01)[0-46-9]-*[0-9]{7,8}$/i.test(values.phone)) {
            errors.phone = 'Invalid phone number';
        }
        return errors;
    }
    const submitForm = (values, { setSubmitting }) => {
        setSubmitting(false);
        const key = sha1(values.phone + bookings.length).substring(0, 5)
        bookingsDB.child(key).set({ ...values, timestamp: dayjs().format() })
    }

    const getBookings = () => {
        bookingsDB
            .orderByChild('timestamp')
            .on('value', snap => {
                var data = []
                if (snap !== null) {
                    snap.forEach(item => {
                        console.log(item.val())

                        // data.push({
                        //     count: item.val().count,
                        //     key: item.key,
                        //     url: item.val().url,
                        // })
                    })
                }
            })
    }
    return (
        <div>
            <h1>Welcome to {restaurantName}</h1>
            <Formik
                initialValues={initialFormValues}
                validate={validateForm}
                onSubmit={submitForm}
            >
                {({ isSubmitting }) => (
                    <Form className="form">
                        <div>
                            <Field type="name" name="name" placeholder="Name" />
                            <ErrorMessage name="name" component="div" />
                        </div>
                        <div>
                            <Field placeholder="Phone Number" type="text" name="phone" />
                            <ErrorMessage name="phone" component="div" />
                        </div>
                        <Field component="select" name="totalPax">
                            {[...Array(11).keys()].slice(1).map(item => (
                                <option value={item}>{item}</option>
                            ))}
                        </Field>
                        <button type="submit" disabled={isSubmitting}>
                            Submit
                        </button>
                    </Form>
                )}
            </Formik>

        </div>
    )
}
import React, { useState, useEffect } from 'react'
import './Admin.scss'
import firebase from '../../firebase'


export default () => {
    const bookingsDB = firebase.database().ref('bookings')
    const [bookings, setBookings] = useState([])
    useEffect(() => {
        getBookings()
    }, [])

    const getBookings = () => {
        bookingsDB
            .orderByChild('timestamp')
            .on('value', snap => {
                var data = []
                if (snap !== null) {
                    snap.forEach(item => {
                        data.push({
                            name: item.val().name,
                            key: item.key,
                            totalPax: item.val().totalPax,
                            phone: item.val().phone,
                            timestamp: item.val().timestamp,
                        })
                    })
                    setBookings(data)
                }
            })
    }

    const multiples = () => [...Array(101).keys()].filter(i => i % 3 === 0 || i % 5 === 0)

    const palindrome = text => text.toLowerCase() === text.toLowerCase().split("").reverse().join("") ? "true" : "false"



    return (
        <div>
            <h1>Booking List</h1>
            <div>{palindrome('Hnah')}</div>

            {multiples().map((item) => (
                <div>{item}</div>
            ))}
            {bookings.map((item) => (
                <>
                    <div>{item.key}</div>
                    <div>{item.name}</div>
                    <div>{item.phone}</div>
                    <div>{item.timestamp}</div>
                </>
            ))}
        </div>
    )
}
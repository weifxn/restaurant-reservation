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
                console.log('ok')

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





    return (
        <div>
            <h1>Booking List</h1>

            {bookings.map((item) => (
                <div style={{ margin: 20 }}>
                    <div>{item.key}</div>
                    <div>{item.name}</div>
                    <div>{item.phone}</div>
                    <div>{item.timestamp}</div>
                </div>
            ))}
        </div>
    )
}
import React, { useState, useEffect } from 'react'
import Firebase from '../../firebase'
export default () => {
    const [exist, setExist] = useState(0)
    const [data, setData] = useState()
    useEffect(() => {
        getURL()
    }, [])
    const getURL = () => {
        const key = window.location.pathname.substr(1)
        console.log(key)
        Firebase.database()
            .ref('bookings')
            .child(key)
            .once('value')
            .then(snap => {
                if (snap.exists()) {
                    setExist(2)
                    setData(snap.val())
                } else setExist(1)
            })
    }

    return (
        <div>
            {exist === 0 &&
                <div>
                    <p>Checking your booking..</p>
                    <a href="/">Go Back?</a>
                </div>
            }
            {exist === 1 &&
                <div>
                    <p>Booking not found</p>
                    <a href="/">Go Back?</a>
                </div>
            }

            {data &&
                <>
                    <div>
                        Name: {data.name}
                    </div>
                    <div>
                        Total Person: {data.totalPax}
                    </div>
                    <div>
                        Booking Time: {data.date}
                    </div>
                    <div>
                        Code: {window.location.pathname.substr(1)}
                    </div>
                </>
            }
        </div>
    )
}
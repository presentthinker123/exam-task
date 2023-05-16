// eslint-disable-next-line no-unused-vars
import React, { useState } from 'react';

function RandomUser() {
    const [user, setUser] = useState({
        picture: 'https://randomuser.me/api/portraits/women/92.jpg',
        name: "geoff Sample",
        DOB: 'Area Manager',
        Idno: '1238626AB4',
        Issued: 'jan 2011',
        Expired: 'dec 2013'
    });

    const fetchRandomUser = () => {
        fetch('https://randomuser.me/api/')
            .then(response => response.json())
            .then(data => {
                const user = data.results[0];
                setUser({
                    picture: user.picture.large,
                    name: `${user.name.first} ${user.name.last}`,
                    DOB: user.D.O.B,
                    Idno: user.Idno,
                    Issued: user.Issued,
                    Expires: user.Expires
                });
            })
            .catch(error => {
                console.error('Error:', error);
            });
    };

    return (
        <div id="user-container">
            <div id="user-info">
                <img src={user.picture} alt={user.name} />
                <p>
                    <strong>Name:</strong> {user.name}
                </p>
                <p>
                    <strong>D.O.B:</strong> {user.D.O.B}
                </p>
                <p>
                    <strong>Idno:</strong> {user.IDno}
                </p>
                <p>
                    <strong>Issued:</strong> {user.Issued}

                </p>
                <p>
                    <strong>Expires:</strong> {user.Expires}

                </p>
            </div>

        </div>
    );
}

export default RandomUser;
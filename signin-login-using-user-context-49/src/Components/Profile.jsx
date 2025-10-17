import React, { use } from 'react';
import { AuthContext } from './AuthContext/AuthContext';

const Profile = () => {

    const {user} = use(AuthContext)
    console.log(user)

    return (
        <div>
            <h1>Profile</h1>
            <p>Name : {user.displayName}</p>
            <p>Email : {user.email}</p>
        </div>
    );
};

export default Profile;
import React, { useContext } from 'react';
import { VoterContext } from '../context/VoterContext';

const Profile = () => {
    const { user } = useContext(VoterContext);
    
    if (!user) {
        return <h1>Not registered</h1>;
    }

    return (
        <div>
            <h1>Profile</h1>
            <p><strong>First Name:</strong> {user.fname}</p>
            <p><strong>Middle Name:</strong> {user.mname}</p>
            <p><strong>Last Name:</strong> {user.lname}</p>
            <p><strong>Username:</strong> {user.username}</p>
            <p><strong>Email:</strong> {user.email}</p>
            <p><strong>Phone Number:</strong> {user.phone}</p>
            <p><strong>Date of Birth:</strong> {user.dob}</p>
            <p><strong>ID Number:</strong> {user.idno}</p>
            
            {/* Display profile picture */}
            {user.profilePicture ? (
                <div>
                    <strong>Profile Picture:</strong>
                    <img
                        src={user.profilePicture}
                        alt="Profile"
                        className="w-32 h-32 rounded-full object-cover"
                    />
                </div>
            ) : (
                <p>No profile picture uploaded</p>
            )}

            {/* Display ID picture */}
            {user.idPicture ? (
                <div>
                    <strong>Picture of ID:</strong>
                    <img
                        src={user.idPicture}
                        alt="ID"
                        className="w-32 h-32 rounded"
                    />
                </div>
            ) : (
                <p>No ID picture uploaded</p>
            )}
        </div>
    );
}

export default Profile;

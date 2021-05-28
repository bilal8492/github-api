import React from 'react'
import { Link } from 'react-router-dom'

const ProfileCard = ({ login, id, avatar_url }) => {
    return (
        <Link to={`/user/${login}`}>
            <div className="profile-container">
                <img className="profile" src={avatar_url} />
                <div className="p-span">
                    <p>Name: {login}</p>
                    <span>id: {id}</span>
                </div>
            </div>
        </Link>
    )
}

export default ProfileCard

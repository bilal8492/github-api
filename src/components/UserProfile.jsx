import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router';
import Repository from './InsideProfile';

const UserProfile = () => {
    const [userProfile, setuserProfile] = useState([]);

    let { userName } = useParams();

    useEffect(() => {
        fetchuser().then((userProfile) => {
            setuserProfile(userProfile);
        });
    }, [])
    const fetchuser = async () => {
        const res = await fetch(`https://api.github.com/users/${userName}/repos`)
        const data = await res.json();
        return data;
    };
    fetchuser();
    return (
        <div>
            {userProfile?.map((a) => {
                return <Repository {...a} avatar_url={a.owner.avatar_url} login={a.owner.login} />
            })

            }
        </div>
    )
}

export default UserProfile

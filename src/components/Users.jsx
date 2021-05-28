import React, { useState, useEffect } from "react";
import ProfileCard from "./ProfileCard";

const Users = () => {
    const [Profile, setProfile] = useState([]);

    useEffect(async () => {
        // fetchUsers().then((Profile) => {
        //     setProfile(Profile);
        // });
        const res = await fetch("https://api.github.com/users");
        const data = await res.json();
        setProfile(data)
    }, []);
    // const fetchUsers = async () => {
    //     const res = await fetch("https://api.github.com/users");
    //     const data = await res.json();
    //     return data;
    //     // console.log(data);
    // };
    // fetchUsers();
    return (
        <div>
            {Profile?.map((e) => {
                // return <Post key={e.id} title={e.title} body={e.body} />;
                return <ProfileCard {...e} />
            })}
            {/* {posts[0]?} */}
        </div>
    );
};
export default Users;

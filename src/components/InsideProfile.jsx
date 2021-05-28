import React from 'react'

const Repository = ({ avatar_url, login, name, id, language }) => {
    return (
        <div className="profile-container inside-container">
            <img className="profile" src={avatar_url} />
            <div className="p-span">
                <p>Name: {login}</p>
                <p>repo: {name}</p>
                <span>id: {id}</span>
                {/* <p>private: {private}</p> */}
                <p>Language: {language}</p>
            </div>
        </div>
    )
}

export default Repository

import React from 'react'

const SingleImageContainer = ({imageURL, imageName}) => {
    return (
        <div className="image-container">
            <div>
            <img src={imageURL}></img>
            </div>
            <div>
                <input disabled placeholder={imageName}></input>
                <input placeholder="Write a description"></input>
            </div>
        </div>
    )
}

export default SingleImageContainer

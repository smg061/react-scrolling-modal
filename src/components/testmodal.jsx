import React from 'react'
import ImageList from './ImageList'
import SingleImageContainer from './SingleImageContainer'
import ReactDom from 'react-dom'
const TestModal = () => {
    return ReactDom.createPortal (
        <div>
            <div className="container">
                <div className="header">header</div>
                    <div className="body">
                        <ImageList>
                        <SingleImageContainer imageName="" imageURL="/logo192.png"/>
                        <SingleImageContainer imageName="" imageURL="/logo192.png"/>
                        <SingleImageContainer imageName="" imageURL="/logo192.png"/>
                        <SingleImageContainer imageName="" imageURL="/logo192.png"/>
                        <SingleImageContainer imageName="" imageURL="/logo192.png"/>
                        <SingleImageContainer imageName="" imageURL="/logo192.png"/>
                        <SingleImageContainer imageName="" imageURL="/logo192.png"/>
                        <SingleImageContainer imageName="" imageURL="/logo192.png"/>
                        <SingleImageContainer imageName="" imageURL="/logo192.png"/>
                        <SingleImageContainer imageName="" imageURL="/logo192.png"/>
                        <SingleImageContainer imageName="" imageURL="/logo192.png"/>
                        <SingleImageContainer imageName="" imageURL="/logo192.png"/>
                        <SingleImageContainer imageName="" imageURL="/logo192.png"/>
                        <SingleImageContainer imageName="" imageURL="/logo192.png"/>
                        <SingleImageContainer imageName="" imageURL="/logo192.png"/>
                        </ImageList>
                        <div className="sidebar"> this is a sidebar</div>
                    </div>
                    <div className="footer">
                        <button>Save</button>
                        <button>Come back later</button>
                    </div>
            </div>
            
        </div>, document.getElementById("portal")
    )
}

export default TestModal

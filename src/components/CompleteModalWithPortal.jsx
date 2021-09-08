import ImageList from "./ImageList";
import Modal from "./Modal";
import reactDom from "react-dom";
import React from 'react'
import SingleImageContainer from "./SingleImageContainer";

const CompleteModalWithPortal = () => {
    return reactDom.createPortal(
       <div className="modal">
            <Modal>
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
            </Modal>
        </div>
    , document.getElementById("portal"))
}

export default CompleteModalWithPortal

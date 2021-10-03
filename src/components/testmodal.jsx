import React, { useState, useEffect } from 'react'
import ImageList from './ImageList'
import SingleImageContainer from './SingleImageContainer'
import ReactDom from 'react-dom'
import LoadingModal from './LoadingModal'
const TestModal = () => {

    const [assets, setAssets] = useState([
        {
            isSelected: true,
            assetId: 1,
        },
        {
            isSelected: true,
            assetId: 2,
        },
        {
            isSelected: false,
            assetId: 3,
        },
        {
            isSelected: true,
            assetId: 4,
        }
    ])



    const [saving, setSaving] = useState(false)
    const [updatedAssetIds, setUpdatedAssetIds] = useState([])


    const submitAsset = async (asset) => {
        console.log(`Submiting asset ${asset.assetId}`)
        return new Promise((res, rej) => {
            let response
            setTimeout(() => {
                if (asset.assetId % 2 === 0) {
                    response = { isSuccess: true, assetId: asset.assetId };
                }
                else {
                    response = { isSuccess: false, assetId: asset.assetId };
                }
                res(response)
            }, 1800)
        })
    }

    const validateMetadata = (asset) => {
        return true;
    }

    const submitAssets = async (assets) => {
        const filteredAssets = assets.filter(asset => asset.isSelected)
        const responseArray = await Promise.all(filteredAssets.map((asset) => {
            if (asset.isSelected) {
                console.log(asset);
                return submitAsset(asset);
            }
        }))
        return responseArray;

    }

    const handleSubmit = async (assets) => {
        setSaving(true);
        await submitAssets(assets)
            .then((responseArray) => {
                console.log(responseArray);
                const resolveArray = responseArray.filter(response => response.isSuccess)
                setUpdatedAssetIds(resolveArray.map(response => response.assetId));
                setSaving(false);
            })
    }
    useEffect(() => {
        console.log(updatedAssetIds);
    }, [updatedAssetIds])

    return ReactDom.createPortal(
        <div>
            {saving && <LoadingModal />}
            <div className="container">
                <div className="header">header</div>
                <div className="body">
                    <ImageList>
                        <SingleImageContainer imageName="" imageURL="/logo192.png" />
                        <SingleImageContainer imageName="" imageURL="/logo192.png" />
                        <SingleImageContainer imageName="" imageURL="/logo192.png" />
                        <SingleImageContainer imageName="" imageURL="/logo192.png" />
                        <SingleImageContainer imageName="" imageURL="/logo192.png" />
                        <SingleImageContainer imageName="" imageURL="/logo192.png" />
                        <SingleImageContainer imageName="" imageURL="/logo192.png" />
                        <SingleImageContainer imageName="" imageURL="/logo192.png" />
                        <SingleImageContainer imageName="" imageURL="/logo192.png" />
                        <SingleImageContainer imageName="" imageURL="/logo192.png" />
                        <SingleImageContainer imageName="" imageURL="/logo192.png" />
                        <SingleImageContainer imageName="" imageURL="/logo192.png" />
                        <SingleImageContainer imageName="" imageURL="/logo192.png" />
                        <SingleImageContainer imageName="" imageURL="/logo192.png" />
                        <SingleImageContainer imageName="" imageURL="/logo192.png" />
                    </ImageList>
                    <div className="sidebar"> this is a sidebar</div>
                </div>
                <div className="footer">
                    <button onClick={() => {
                        handleSubmit(assets);
                    }}>Save</button>
                    <button>Come back later</button>
                </div>
            </div>

        </div>, document.getElementById("portal")
    )
}

export default TestModal

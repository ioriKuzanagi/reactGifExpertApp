import React from 'react'

export const GifGirdItem = ({ titleX, url }) => {
    //console.log(id, titleX, url);
    return (
        < div className="card animate__animated animate__zoomInDown">
            <img src={url} alt={titleX} />
            <p> {titleX}</p>
        </div >
    )
}

import React from 'react';
import Masonry, { ResponsiveMasonry } from 'react-responsive-masonry';
import gallerImage from "./galleryImage"
import "./masonry-image.css"
const MasonryImageGallery = () => {
    return (
        <ResponsiveMasonry columnsCountBreakPoints={{350:1, 768:3,992:4}} >
            <Masonry gutter='1rem'>
                {

                    gallerImage.map((item, index)=>(
                        <img className="masonry__img" src={item} key={index} alt="" style={{width:"100%", display:"block", borderRadius:"10px"}} />
                    ))
                }
            </Masonry>
        </ResponsiveMasonry>
    );
};

export default MasonryImageGallery;
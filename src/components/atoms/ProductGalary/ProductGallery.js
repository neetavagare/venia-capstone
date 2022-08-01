// Reusable Product Galary Component Component.
import "react-image-gallery/styles/css/image-gallery.css";
import ImageGallery from 'react-image-gallery';
import {isMobile} from 'react-device-detect';

export default function ProductGallery(props) {
    let fullScreen = props.showFullscreenButton ? true : false;
    // const isMobile = width < 900
    
    return (
        <ImageGallery showFullscreenButton={fullScreen} showBullets={isMobile ? true : false} thumbnailPosition= {isMobile ? "bottom" : "left"}  items={props.images}  showThumbnails={isMobile ? false : true} />
    )
}
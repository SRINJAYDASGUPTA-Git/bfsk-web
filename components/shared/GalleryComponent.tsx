
import getFileNames from '@/utils/getFileNames';
import ImageComponent from './ImageComponent';
// import LightGallery from 'lightgallery/react';
// import 'lightgallery/css/lightgallery.css';
// import 'lightgallery/css/lg-zoom.css';
// import 'lightgallery/css/lg-thumbnail.css';
// import lgThumbnail from 'lightgallery/plugins/thumbnail';
// import lgZoom from 'lightgallery/plugins/zoom';
const GalleryComponent = async () => {

    const onInit = () => {
        console.log('lightGallery has been initialized');
    };
    const fileNames = await getFileNames('assets/images/gallery')
    console.log(fileNames)
    return (
        <div className='flex flex-col items-center justify-between flex-wrap gap-2 lg:flex-row'>
            {
                fileNames.map((fileName) => (
                    // <LightGallery
                    //     onInit={onInit}
                    //     speed={500}
                    //     plugins={[lgThumbnail, lgZoom]}
                    // >
                    <ImageComponent fileName={fileName} />
                    // </LightGallery>

                ))
            }
        </div >
    )
}

export default GalleryComponent
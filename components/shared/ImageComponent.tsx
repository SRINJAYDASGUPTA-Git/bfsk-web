"use client"
import Image from 'next/image'
import LightGallery from 'lightgallery/react';
import 'lightgallery/css/lightgallery.css';
import 'lightgallery/css/lg-zoom.css';
import 'lightgallery/css/lg-thumbnail.css';
import lgThumbnail from 'lightgallery/plugins/thumbnail';
import lgZoom from 'lightgallery/plugins/zoom';
const ImageComponent = ({ fileName }: { fileName: String }) => {
    const onInit = () => {
        console.log('lightGallery has been initialized');
    };
    return (
        <div style={{ position: 'relative' }} className='w-[50%] h-[400px] lg:w-[15%]'>
            <LightGallery
                onInit={onInit}
                speed={500}
                plugins={[lgZoom]}
            >
                <Image
                    src={`/assets/images/gallery/${fileName}`}
                    alt="Image"
                    className='flex items-center justify-center flex-col shadow-lg shadow-slate-500   rounded-xl'
                    fill={true}
                    style={{ objectFit: 'contain' }}
                // onClick={() => window.open(`/assets/images/gallery/${fileName}`)}
                />
            </LightGallery>

        </div>
    )
}

export default ImageComponent
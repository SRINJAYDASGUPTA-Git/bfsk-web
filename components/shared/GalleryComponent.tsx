
import getFileNames from '@/utils/getFileNames';
import ImageComponent from './ImageComponent';
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
                    <ImageComponent fileName={fileName} />
                ))
            }
        </div >
    )
}

export default GalleryComponent
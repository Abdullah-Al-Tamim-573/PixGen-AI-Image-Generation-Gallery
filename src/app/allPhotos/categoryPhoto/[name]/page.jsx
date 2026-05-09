import AllPhotos from "../../page";


const DynamicCategoryPhoto = async({params}) => {
    let {name} = await params;
    console.log(name)
    return (
        <div>
            <AllPhotos></AllPhotos>
        </div>
    );
};

export default DynamicCategoryPhoto;
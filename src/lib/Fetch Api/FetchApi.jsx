// export let fetchPhotosData = async() => {
//     let res = await fetch('data.json');
//     let data = await res.json();
//     return data
// }

import ApiPhotosData from '../../Apis/data.json'

export let apiPhotosData = () => {
    return ApiPhotosData
}
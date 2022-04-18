import { useState } from 'react';



export const useUsers = (initialState = []) => {


    // const fetchFunction = async(url) => {
    //    const request = await fetch(url);
    //    const data = await request.json();
    //     console.log(data);
    //     return data;
    // }


    const [usuarios, setUsuarios] = useState([]);

    // const reset = () => {
    //     setUsuarios([]);
    // }
    
    return [usuarios , setUsuarios];
}
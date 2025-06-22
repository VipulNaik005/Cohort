import { useEffect } from "react";
import { useState } from "react";
import axios from 'axios';

export function useFetch(url,time){
    const [data,setData] = useState({});
    const [loading,setLoading] = useState(true);

    async function getData(){
        setLoading(true);
        const res = await axios.get(url);
        console.log(res.data.title);
        setData(res.data.title);
        setLoading(false);
    }
    useEffect(()=>{
        getData();
    },[url])
    //re-fetching
    useEffect(()=>{
        let interval = setInterval(getData,time*1000); //though setTimeout could be better
        return ()=> clearInterval(interval); //cleanup
    },[time,url])
    return {
        data,loading
    }
}
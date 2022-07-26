import React, {useState, useEffect} from "react";

const App = () => {
    const [imgUrl, setImgUrl] = useState('default');

    useEffect(() => {
        const fetchData = async () => {
            const req = await fetch('https://dog.ceo/api/breeds/image/random')
            const res = await req.json();
            console.log(res['message']);
            setImgUrl(res['message']);
        }
        fetchData();
    }, []);

    if(imgUrl==='default') {
        return (
            <p>Loading...</p>
        )
    } 
    
    return (
        <img src={imgUrl} alt="A Random Dog"/>
    )

}

export default App;
export  const fetchData = async(url) => {
    try{
        const res = await fetch(url);
        if(res.ok){
            let data = await res.json();
            return data;
        }
        throw new Error(res.statusText);
    }catch(err){
        console.log(err.message);
    }
};


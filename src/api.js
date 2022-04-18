import React, { useEffect, useState } from "react";



function API(){

     const [data,setData]=useState({});
     const [games,setGames]=useState({});

    

   /*  useEffect(()=>{

    fetch("https://id.twitch.tv/oauth2/token?client_id=qyouji2kmr05hxuoy8a2cfbrxtrcbu&client_secret=yvu8rov4vmedccg52myaxbfcmw1kv5&grant_type=client_credentials",{
        method:'POST',
        headers:{"Content-Type":"application/json"},
     
        body: JSON.stringify()
    }).then(response=>response.json()).then(data=>setData(data))
},[]) */
     


    

    //const access=xxx9ec0crqvrskynpk4bmqmb97es2g;
    //const clientID=qyouji2kmr05hxuoy8a2cfbrxtrcbu;


    useEffect(()=>{
        fetch("/games",{    
        method : 'POST',
        headers : {"Access-Control-Allow-Origin": "*",     "Content-Type":"application/json","Client-ID": "qyouji2kmr05hxuoy8a2cfbrxtrcbu", "Authorization": `Bearer xxx9ec0crqvrskynpk4bmqmb97es2g`}
        ,body: "fields name;"
    })
    },[])

    console.log(games);



    return (
        <div></div>


    )

}


export default API;
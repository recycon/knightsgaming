import React, { useEffect, useState } from "react";
import "./gg.css";
import AboutUs from "../component/AboutUs";
import NavBar from "../component/navBar";


function Games(){

  const [game,setGames]=useState([]);
  const [art,setArt]=useState([]);

  const [test,setTest]=useState([]);

  

  


  useEffect(()=>{
    fetch("https://recycon.herokuapp.com/https://api.igdb.com/v4/games",{    
    method : 'POST',
    headers : {"Access-Control-Allow-Origin": "*",     "Content-Type":"application/json","Client-ID": "qyouji2kmr05hxuoy8a2cfbrxtrcbu", "Authorization": `Bearer xxx9ec0crqvrskynpk4bmqmb97es2g`}
    ,body: "fields name;"
}).then(response=>response.json()).then(data=>setGames(data))
},[])


   

    
   
    useEffect(()=>{

     
    
    fetch("https://recycon.herokuapp.com/https://api.igdb.com/v4/covers",{    
    method : 'POST',
    headers : {"Access-Control-Allow-Origin": "*",     "Content-Type":"application/json","Client-ID": "qyouji2kmr05hxuoy8a2cfbrxtrcbu", "Authorization": `Bearer xxx9ec0crqvrskynpk4bmqmb97es2g`}
    ,body: `fields url;`
}).then(response=>response.json()).then(data=>setArt(data))


},[]);







    
    /*let myGames=[];

const gaming = async () => {
    let i=0;
    
    for(i;i< art.length;i++){
        const response = await fetch("https://recycon.herokuapp.com/https://api.igdb.com/v4/games",{    
            method : 'POST',
            headers : {"Access-Control-Allow-Origin": "*",     "Content-Type":"application/json","Client-ID": "qyouji2kmr05hxuoy8a2cfbrxtrcbu", "Authorization": `Bearer xxx9ec0crqvrskynpk4bmqmb97es2g`}
            ,body: `fields name;where id=${ids[i]}`
        })
        const json = await response.json()
        myGames.push(json)
        console.log(myGames);
        
      }
   }*/

   const ids=art.map((x)=>x.id);

   let myGames=[];
   

   console.log(ids[0]);
  

   useEffect(()=>{

    async function getName(id){
    
    const data = await fetch("https://recycon.herokuapp.com/https://api.igdb.com/v4/games",{    
    method : 'POST',
    headers : {"Access-Control-Allow-Origin": "*",     "Content-Type":"application/json","Client-ID": "qyouji2kmr05hxuoy8a2cfbrxtrcbu", "Authorization": `Bearer xxx9ec0crqvrskynpk4bmqmb97es2g`}
    ,body: `fields name;where id=${id};`
}).then(response=>response.json());

setTest(test=>[...test,data[0]]);
}
art.map((x)=>{

    getName(x.id);
});



   },[art])

console.log(test);

console.log(test[3]);
   

   /*(async () => {
    async function getName(id) {
      
  
      const response = await fetch("https://recycon.herokuapp.com/https://api.igdb.com/v4/games",{    
        method : 'POST',
        headers : {"Access-Control-Allow-Origin": "*",     "Content-Type":"application/json","Client-ID": "qyouji2kmr05hxuoy8a2cfbrxtrcbu", "Authorization": `Bearer xxx9ec0crqvrskynpk4bmqmb97es2g`}
        ,body: `fields name;where id=${id};`
    })
      const repositories = await response.json();

      g.push(repositories[0]);
  
      return repositories;
    }

    
  
    let repos = await getName(28001);

    
    myGames.push(repos[0]);
;
    //console.log(myGames[0]);
  // console.log(repos[0]);
  })();*/


  
















  

  //console.log(art);


 

  //console.log(art[0]);

   
























const element = game.map((x)=>{
    return art.map((y)=>{

        if(x.id===y.id){
          
            return <>

            
             <h4 className="hi">{x.name}</h4>
             <img src={`https:${y.url}`} alt="nope"/>
            
            </>
        }
    })
})







      



    
    

    return (

        <div className="yo">

    
        <div className="OverlappingImg">
            
        

       <NavBar/>

       


    
        <div className="Box">
            <div className="littleBox">
               
                <h4>name</h4>
                <h4 id="rating">Rating</h4>
            </div>
        </div>

        {element}
        
        

        
        </div>
        </div>
    
    )

}

export default Games;
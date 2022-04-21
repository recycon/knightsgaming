import React, { useEffect, useState } from "react";
import "./gg.css";
import AboutUs from "../component/AboutUs";
import NavBar from "../component/navBar";
import {Link,useLocation} from "react-router-dom";



function Games(){

  const [game,setGames]=useState([]);
  const [art,setArt]=useState([]);

  const [vids,setVids]=useState([]);

  

  

  


  useEffect(()=>{
    fetch("https://recycon.herokuapp.com/https://api.igdb.com/v4/games",{    
    method : 'POST',
    headers : {"Access-Control-Allow-Origin": "*",     "Content-Type":"application/json","Client-ID": "qyouji2kmr05hxuoy8a2cfbrxtrcbu", "Authorization": `Bearer xxx9ec0crqvrskynpk4bmqmb97es2g`}
    ,body: "`fields name,rating,url,summary;limit 10;where rating > 75;"
}).then(response=>response.json()).then(data=>setGames(data))
},[])


   

    
   /*
    useEffect(()=>{

     
    
    fetch("https://recycon.herokuapp.com/https://api.igdb.com/v4/covers",{    
    method : 'POST',
    headers : {"Access-Control-Allow-Origin": "*",     "Content-Type":"application/json","Client-ID": "qyouji2kmr05hxuoy8a2cfbrxtrcbu", "Authorization": `Bearer xxx9ec0crqvrskynpk4bmqmb97es2g`}
    ,body: `fields url,game;`
}).then(response=>response.json()).then(data=>setArt(data))


},[]);*/







    
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


   

  
   

 
  

   /*useEffect(()=>{

    async function getName(id){
    
    const data = await fetch("https://recycon.herokuapp.com/https://api.igdb.com/v4/games",{    
    method : 'POST',
    headers : {"Access-Control-Allow-Origin": "*",     "Content-Type":"application/json","Client-ID": "qyouji2kmr05hxuoy8a2cfbrxtrcbu", "Authorization": `Bearer xxx9ec0crqvrskynpk4bmqmb97es2g`}
    ,body: `fields name,rating,url,summary;limit 10;where rating > 75;where id=${id};`
}).then(response=>response.json());

setTest(test=>[...test,data[0]]);
}
art.map((x)=>{

    getName(x.game);
});



   },[art]) */

  /* useEffect(()=>{

     
    
    fetch("https://recycon.herokuapp.com/https://api.igdb.com/v4/covers",{    
    method : 'POST',
    headers : {"Access-Control-Allow-Origin": "*",     "Content-Type":"application/json","Client-ID": "qyouji2kmr05hxuoy8a2cfbrxtrcbu", "Authorization": `Bearer xxx9ec0crqvrskynpk4bmqmb97es2g`}
    ,body: `fields url,game;`
}).then(response=>response.json()).then(data=>setArt(data))


},[]);*/



   useEffect(()=>{

    async function getName(id){
    
    const data = await fetch("https://recycon.herokuapp.com/https://api.igdb.com/v4/covers",{    
    method : 'POST',
    headers : {"Access-Control-Allow-Origin": "*",     "Content-Type":"application/json","Client-ID": "qyouji2kmr05hxuoy8a2cfbrxtrcbu", "Authorization": `Bearer xxx9ec0crqvrskynpk4bmqmb97es2g`}
    ,body: `fields url,game;where game=${id};`
}).then(response=>response.json());

setArt(test=>[...test,data[0]]);
}
game.map((x)=>{

    getName(x.id);
});



   },[game])

   useEffect(()=>{

    async function getVid(id){
    
    const data = await fetch("https://recycon.herokuapp.com/https://api.igdb.com/v4/game_videos",{    
    method : 'POST',
    headers : {"Access-Control-Allow-Origin": "*",     "Content-Type":"application/json","Client-ID": "qyouji2kmr05hxuoy8a2cfbrxtrcbu", "Authorization": `Bearer xxx9ec0crqvrskynpk4bmqmb97es2g`}
    ,body: `fields video_id,game;where game=${id};`
}).then(response=>response.json());

setVids(test=>[...test,data[0]]);
}
game.map((x)=>{

    getVid(x.id);
});



   },[game])

  



  



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


  

 /*
 let employee = {
    ...person,
    ...job
};
 */


console.log(game);















  


   






const element = game.map((x)=>{
    return art.map((y)=>{

        

        if(x.id===y.game){
            

          
            return <div className="game-contain">

            
            
             <img src={`https:${y.url}`} alt="nope"/>
             <Link to="games/details" 
            
            ><h4 className="hi">{x.name}</h4></Link>
             
            
            </div>
        }
    })
})

//state:{name:x.name,summary:x.summary,rating:x.rating,url:x.url

/*search field
state{
    monster=[]
    searchfiled=""
}
const filterMonst=monsters.filter((momsters)=>{
    return monsters.name.toLocaleLowerCase.includes(searchfiled)
        //returns true or false
});

//below is in return 

<input type="search" placeholder="search games" onchange((event)=>{
    const searchfiled=event.target.value.toLocateLowerCase();
   
   setState(()=>{
       return {searchfiled}; //key and value same 
   })
})/> //onchnage call back is for when it chnages 

{filterMonst.map((monster)=>{
    return (
        <h1>{monster.name}</h1>
    )
})}*/







      



    
    

    return (

        <div className="yo">


         <NavBar/>
    
        <div className="OverlappingImg">
            
        

       

       


    
        

        <div className="game-spot">

        <div className="card-list">

        {element}
        </div>
        </div>
        
        

        
        </div>
        </div>
    
    )

}

export default Games;
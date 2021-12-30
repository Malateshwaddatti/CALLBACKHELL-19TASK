
let resturi1=`https://restcountries.eu/rest/v2/all`;
async function getdata(){
   let restcont=await fetch(resturi1);
   let restcontdata=await restcont.json();
   console.log(restcontdata);
let cc=restcontdata[1].name;
   console.log(cc);
   let openweather1=await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${cc}&appid=f16acc01f1241904e9acfaa9b30d0c58`);
   let openweatherdata2=await openweather1.json();
   console.log(openweatherdata2);
   
  
}
getdata();

/*
function createdata(){
    let data={
      name:"Malatesh",
      email:"malateshwaddatti@gmail.com"
    };
    fetch(url,{
        method:"POST",
        body:JSON.stringify(data),
        headers:{
            "Content-type":application/json,
        },
    }).then((result)=>result.json).
       then((data)=>console.log(data)).
       catch((error)=>console.log(error));
}

createdata();8*/
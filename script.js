


var url='https://cataas.com/api/cats';

function getdata(){
    fetch(url)
    .then((result) => result.json())
    .then((data)=>console.log(data))
    .catch((error)=>console.log(error));
}
getdata();
var url='https://cataas.com/api/cats?tags=cat';

function getdata(){

    fetch(url)
    .then((result) => result.json())
    .then((data)=>console.log(data))
    .catch((error)=>console.log(error));
}
getdata();

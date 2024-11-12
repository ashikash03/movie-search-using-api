async function fetchDateTime() {
    try{
        let response = await fetch('https://worldtimeapi.org/api/timezone');
        let jsonData = await response.json();
        console.log(jsonData)
    }
    catch(error){
        console.error(error);
    }
    
}
fetchDateTime()
// 4 APIs in Rest.    Get API, POST API, DEL API 

// GET API 
async function getdata () {

const response = await fetch("https://jsonplaceholder.typicode.com/todos/1") ;
console.log("response = ", response) ;

const data = response.json() ;
console.log("data = ", data) ;

}

async function postdata () {

    const response = await fetch("https://jsonplaceholder.typicode.com/posts",
    // JSON Object
    {
        method: "POST" ,
        body: JSON.stringify({
                title: 'My Info' ,
                body : 'data' ,
                userId: 4 }),
        headers: { "content-type" : "application/json; charset=UTF-8 " }
    }// JSON Object ends
    ) ;
    
    
    console.log("response = ", response) ;
    
    const data = response.json() ;
    console.log("data = ", data) ;
    
}
    
// getdata () ;
postdata () ;

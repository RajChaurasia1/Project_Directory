
async function getPosts(){
    return await fetch('http://localhost:2000/posts')        
                            .then((response) => response.json())
                            .then((data) => data);
}
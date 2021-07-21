let createForm =document.querySelector('.create-post-form');
let createName = document.querySelector('.cname');
let createEmail = document.querySelector('.email');
let createAnonymous = document.querySelector('.anonymous');
let createTitle = document.querySelector('.title');
let createField = document.querySelector('.field');
let createDescription = document.querySelector('.description');
let createSources = document.querySelector('.sources');
let createOutput = document.querySelector('.output');

createForm.addEventListener('submit', function(e){
    e.preventDefault();
    fetch('http://localhost:2000/posts',{
        method:'POST',
        headers:{
            'Content-Type': 'application/json'
        },
        body:JSON.stringify({
            name: createName.value,
            email: createEmail.value,
            anonymous: createAnonymous.value,
            title: createTitle.value,
            field: createField.value,
            description: createDescription.value,
            sources: createSources.value,
            output: createOutput.value

        })
    }).then((response) =>response.text())
    .then((data)=>console.log(data));

})
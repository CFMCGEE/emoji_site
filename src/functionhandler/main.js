export function fetchCatImage() {
    return fetch('https://aws.random.cat/meow').then(response => response.json());
    //{"file":"https:\/\/purr.objects-us-east-1.dream.io\/i\/GQXOl.png"}
}

export function fetchDogImage() {
    return fetch('https://random.dog/woof.json').then(response => response.json());
    //{"fileSizeBytes":81302,"url":"https://random.dog/5d9b4f1f-ed47-47d2-95b4-ac58ac0834b7.jpg"}
}

export function fetchMemeTemplate() {

    return fetch(`https://api.imgflip.com/get_memes`, 
    {method: 'GET' }).then(response => response.json());
    //too long...
    
}


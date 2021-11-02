export function fetchJokeSentence() {
    return fetch('https://v2.jokeapi.dev/joke/Dark?type=single&amount=10').then(response => response.json());
    //too long
}


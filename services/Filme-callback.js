const toke = 'eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIwMzRjNWZkZmUwOThkOGNiMzc0YzIxNTJjZjQ0YzJlNyIsIm5iZiI6MTYyMjgxMjA5NS4zNjIsInN1YiI6IjYwYmEyNWJmZWM4YTQzMDAyOTkwMzkxMyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.4bPOegbKTJSexGWKFgzPmjf6jqNEtLpItk0UJ0Q2VCE';


const buscarPopulares = (page, callBack)=>{
    const url = 'https://api.themoviedb.org/3/movie/popular?language=pt-BR&page='+page;
    const options = {
        method: 'GET',
        headers: {
            accept: 'application/json',
            Authorization: `Bearer ${toke}`
        }
    };
    fetch(url, options)
    .then(res => res.json())
    .then(json => callBack(json))
    .catch(err => console.error(err));
}

const buscarPorNome = (nome, page, callBack)=>{
    const url = `https://api.themoviedb.org/3/search/movie?include_adult=false&language=pt-BR&page=${page}&query=${nome}`;
    const options = {
        method: 'GET',
        headers: {
            accept: 'application/json',
            Authorization: `Bearer ${toke}`
        }
    };

    fetch(url, options)
    .then(res => res.json())
    .then(json => callBack(json))
    .catch(err => console.error(err));
}

export const buscar = (nome='', page=1, callBack)=>{
    if(nome.trim().length > 2){
        buscarPorNome(nome,page,callBack);
    }
    else{
        buscarPopulares(page, callBack);
    }
}
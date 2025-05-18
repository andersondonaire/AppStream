import config from "./config.json";

import * as helpers from './helpers.js';

//
// const toke = Config.TOKEN_API;


export const buscarPopulares = async (page) => {
    const toke = process.env.EXPO_PUBLIC_TOKEN_API;
    console.log('toke', toke);

    
    const lang = helpers.getLangue();
    const url = `${config.url_api}/movie/popular?language=${lang}&page=${page}`;
    const options = {
        method: 'GET',
        headers: {
            accept: 'application/json',
            Authorization: `Bearer ${toke}`
        }
    };

    try {
        const response = await fetch(url, options);
        const data = await response.json();
        return data;
    } catch (err) {
        console.error(err);
        throw err;
    }
};

const buscarPorNome = async (nome, page) => {
    const url = `https://api.themoviedb.org/3/search/movie?include_adult=false&language=pt-BR&page=${page}&query=${nome}`;
    const options = {
        method: 'GET',
        headers: {
            accept: 'application/json',
            Authorization: `Bearer ${toke}`
        }
    };

    try {
        const response = await fetch(url, options);
        const data = await response.json();
        return data;
    } catch (err) {
        console.error(err);
        throw err;
    }
};

export const buscar = async (nome = '', page = 1) => {
    try {
        if (nome.trim().length > 2) {
            return await buscarPorNome(nome, page);
        } else {
            return await buscarPopulares(page);
        }
    } catch (error) {
        console.error(error);
        throw error;
    }
};
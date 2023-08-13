import { writable} from "svelte/store";  //스벨트 문법

export const arrPokemon = writable([]);


const fetchPokemon  =  async() => {
    const url = 'https://pokeapi.co/api/v2/pokemon?limit=1281';
    const res = await fetch(url);
    const data = await res.json(); // 자바스크립트 객체로 변환
                        //map 배열을 바꾸는 함수
    const loadedPokemon = data.results.map((pokemon,index) =>{
        return{
            name: pokemon.name ,
            id: index+1,
            image : `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${index + 1}.png`
        };
    });
    arrPokemon.set(loadedPokemon);
};
fetchPokemon();
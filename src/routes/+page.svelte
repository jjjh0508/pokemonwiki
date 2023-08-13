<script>
    import { arrPokemon } from '../stores/pokestore'
    // console.log($arrPokemon);
    import PokemonCard from '../components/pokemonCard.svelte';

    let searchTetm = '';
    let filteredPokemon= [];

    //reactivity
    $:{
        if(searchTetm){
          filteredPokemon=  $arrPokemon.filter(pokemon=> pokemon.name.includes(searchTetm));
        }else{
            filteredPokemon = [...$arrPokemon];
        }
    }
</script>


<svelte:head>
    <title>포켓몬 위키</title>
</svelte:head>

<h1 class="text-4xl text-center my-8 font-bold underline">
   포켓몬 위키
</h1>

<input class="w-full rounded-md text-lg p-4 md-8 border-2 border-gray-200"  
type="text" bind:value={searchTetm} placeholder="포켓몬 검색"/>

<div class="grid gap-4 md:grid-cols-3 grid-cols-2">
    {#each filteredPokemon as pokemon}
<PokemonCard pokemon={pokemon}/>
{/each}
</div>
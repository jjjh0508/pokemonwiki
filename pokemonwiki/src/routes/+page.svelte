<script>
    import { arrPokemon } from '../stores/pokestore'
    console.log($arrPokemon);
</script>


<svelte:head>
    <title>포켓몬 위키</title>
</svelte:head>

<h1 class="text-4xl text-center my-8 font-bold underline">
   포켓몬 위키
</h1>

{#each $arrPokemon as pokemon}
<p>{pokemon.name}</p>
{/each}
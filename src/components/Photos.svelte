<script>
  import { onMount } from "svelte";
  let photos = [];

  onMount(async () => {
    console.log("Hola");
    const response = await fetch('https://fakestoreapi.com/products');
    photos = await response.json();
  });
</script>

<style>
  figure img{
    width: 100%;
  }

  .Photos{
    display: grid;
    gap: 1rem;
    grid-template-columns: repeat(3, 1fr);
  }
</style>

<div class="Photos">
  {#each photos as photo}
    <figure>
      <img src={photo.image}>
      <figcaption>{photo.title}</figcaption>
    </figure>
    {:else}
      <h1>Loading...</h1>
  {/each}
</div>

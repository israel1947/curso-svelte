<script>
    import { text } from "svelte/internal";


  let texto = `Frontend Developer`;
	let contador = 0;

  function clicks() {
    contador += 1;
  }

</script>

<style>
  p{
    color: var(--colo-prueba);
  }
</style>

<div class="About">
  <p>{texto}</p>
  <button on:click={clicks}>Contador clicks {contador === 0 ? '': contador}</button>
</div>
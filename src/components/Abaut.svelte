<script>
  import Button from "./Button.svelte";

  let texto = `Frontend Developer`;
  let contador = 0;
  let style = { darkMode: false };

  function clicks() {
    contador += 1;
  }

  function darkModeTogle() {
    style.darkMode = !style.darkMode;
    window.document.body.classList.toggle("dark-mode");
  }
</script>

<div class="About">
  {#if !style.darkMode}
    <p>{texto}</p>
  {:else}
    <p>Hello Dark Mode</p>
  {/if}

  <!-- <button on:click={clicks}>Contador clicks {contador === 0 ? "" : contador}</button> -->
  <!-- <button on:click={darkModeTogle}>darkode</button> -->
  <Button on:click={darkModeTogle} text="Dark Mode"/>
  <Button text="Click" {contador} on:click={clicks} />
</div>

<style>
  p {
    color: var(--colo-prueba);
  }
</style>

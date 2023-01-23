<script>
  import {contador}  from "./store/store.js";

  function handleClick() {
    contador.update(n => n + 1);
  }
</script>


<style>
  button {
    background-color: rgb(132, 185, 185);
    color: white;
    padding: 1rem;
    cursor: pointer;
    border-radius: 5px;
    border: none;
  }
</style>

<button on:click={handleClick}>Click desde Bottoncount {$contador === 0 ? '' : $contador}</button>


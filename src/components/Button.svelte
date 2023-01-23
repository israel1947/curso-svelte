<script>
  export let contador = 0;
  export let text;
</script>

  <button on:click>{text} {contador === 0 ? "" : contador}</button>
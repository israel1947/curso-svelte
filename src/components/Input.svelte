<script>
  export let nombre = 'Word'
</script>

<div class="Input">
  <input type="text" bind:value={nombre}>
  <p>Hello {nombre}!</p>
</div>
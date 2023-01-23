<script>
  let skills = [
    {
      id: 1,
      nombre: "HTML",
    },
    {
      id: 2,
      nombre: "CSS",
    },
    {
      id: 3,
      nombre: "JavaScript",
    },
  ];
</script>

<div class="Skills">
  <h3>Habilidades</h3>
  {#each skills as skill, i}
    <ul>{skill.nombre}</ul>
  {/each}
</div>

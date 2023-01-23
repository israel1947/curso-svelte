<script>
	import Abaut from "./components/Abaut.svelte";

	export let name;
	export let apellido;
</script>

<main>
	<h1>Hello {name} {apellido}!</h1>
	<Abaut></Abaut>
</main>

<style>
	:global(:root) {
		--colo-prueba: #880488;
	}

	p{
		color: var(--colo-prueba);
	}

	main {
		text-align: center;
		padding: 1em;
		max-width: 240px;
		margin: 0 auto;
	}

	h1 {
		color: #ff3e00;
		text-transform: uppercase;
		font-size: 4em;
		font-weight: 100;
	}

	@media (min-width: 640px) {
		main {
			max-width: none;
		}
	}
</style>

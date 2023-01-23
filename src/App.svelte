<script>
	import Abaut from "./components/Abaut.svelte";
	import BottonCount from "./components/BottonCount.svelte";
	import Input from "./components/Input.svelte";
	import Person from "./components/Person.svelte";
	import Photos from "./components/Photos.svelte";
	import Skills from "./components/Skills.svelte";
	import Text from "./components/Text.svelte";

	export let name;
	export let apellido;

	const data = {
		nombre: "Israel",
		apellido: "Polo",
		edad: 25,
	};
</script>

<main>
	<h1>Hello {name} {apellido}!</h1>
	<Abaut />
	<Text otroTexto="Hola Mundo" />
	<Person {...data} />
	<Skills />
	<Input />
	<BottonCount />
	<Photos />
</main>

<style>
	:global(:root) {
		--colo-prueba: #880488;
	}

	:global(body) {
		color: #f02df0;
	}
	:global(body.dark-mode) {
		background-color: #4d4d4d;
		color: #707070;
	}

	p {
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

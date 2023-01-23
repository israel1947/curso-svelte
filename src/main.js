import App from './App.svelte';

const app = new App({
	target: document.body,
	props: {
		name: 'Israel',
		apellido:'Polo'
	}
});

export default app;
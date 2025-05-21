<script lang="ts">
	import type { PageProps } from './$types';

	let { data }: PageProps = $props();
</script>

<h1>Why Ugg have headache today?</h1>
<div>The U/V rating today is: {data.weather.sun}</div>
<div>Barometric pressure: {data.weather.barometer}</div>
<div>Temperature: {data.weather.temperature}</div>

<form>
	<fieldset>
		<legend>A few questions for you:</legend>
		<label for="water">Water?</label>
		<input id="water" type="checkbox" />
		<label for="food">Food?</label>
		<input id="food" type="checkbox" />
		<label for="caffiene">Usual amount of go juice?</label>
		<input id="caffiene" type="checkbox" />
	</fieldset>
</form>

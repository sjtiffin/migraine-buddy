<script lang="ts">
	import * as Button from '$lib/components/ui/button/index.js';
	import * as Card from '$lib/components/ui/card/index.js';
	import * as Carousel from '$lib/components/ui/carousel/index.js';
	import * as Empty from '$lib/components/ui/empty/index.js';
	import { onMount } from 'svelte';

	let data = $state([]);
	let now = $state(new Date());
	let currentDate = $derived(now.toLocaleDateString());
	let currentTime = $derived(now.toLocaleTimeString());

	onMount(() => {
		const interval = setInterval(() => (now = new Date()), 1000);
		return () => clearInterval(interval);
	});
</script>

<h1 class="mb-4 text-center">{currentDate}</h1>

<p class="text-center">{currentTime}</p>

<Carousel.Root class="mx-auto max-w-xs">
	<Carousel.Content>
		{#each data, i}
			<Carousel.Item>
				<div class="p-1">
					<Card.Root>
						<Card.Content class="flex aspect-square items-center justify-center p-6">
							<span class="text-4xl font-semibold">{i + 1}</span>
						</Card.Content>
					</Card.Root>
				</div>
			</Carousel.Item>
		{:else}
			<Carousel.Item>
				<div class="p-1">
					<Empty.Root>
						<Empty.Title>No Data</Empty.Title>
						<Empty.Description>There are no items to display.</Empty.Description>
					</Empty.Root>
				</div>
			</Carousel.Item>
		{/each}
	</Carousel.Content>
	<div class="mt-4 flex justify-center gap-2">
		<Carousel.Previous class="static" />
		<Carousel.Next class="static" />
	</div>
</Carousel.Root>

<Button.Root class="mt-4 w-full">Add Item</Button.Root>

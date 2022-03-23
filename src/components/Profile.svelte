<script>
	export let name = null,
		username = null,
		description = null,
		avatar = null;
</script>

<div class="w-10/12 min-h-36 h-40 max-h-48 ml-16">
	<div class="inline-block h-24 w-24">
		<img src="{avatar}" class="h-24 w-24 rounded-lg" loading="lazy" draggable="false" alt="Profile of {name}">
	</div>
	<div class="absolute inline-block ml-4 h-24">
		<span class="text-2xl block">{name}</span>
		<span class="text-sm text-gray-6 block">@{username}</span>
		<span class="mt-2 block">{description}</span>
	</div>
</div>

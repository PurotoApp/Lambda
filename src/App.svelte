<script>
	import Logo from './components/Logo.svelte';
	import Profile from './components/Profile.svelte';
	import * as staffList from './staffList.json';
	let wide;
	let list = staffList.default.sort(() => Math.random() - 0.5);
	let lg = 1024;
</script>

<svelte:window bind:innerWidth={wide} />

<main>
	<div class="lg:ml-12 flex flex-nowrap justify-center lg:justify-start items-center select-none mt-20">
		<div class="w-[96px] h-[96px] sm:w-[112px] sm:h-[112px] mr-6">
			<Logo color="#6D6BED"/>
		</div>
		<span class="text-5xl sm:text-8xl font-bold inline-block">Puroto</span>
	</div>
	<h1
		class="lg:ml-12 relative text-[2rem] sm:text-[3rem] text-center sm:text-center lg:max-w-[40%] lg:text-left font-semibold select-none mt-6 mb-12"
	>
		A future social network for furries.
	</h1>

	<!-- Buttons -->
	<div
		class="absolute flex flex-wrap justify-center lg:justify-start left-1/2 -translate-x-1/2 lg:left-[0] lg:ml-12 lg:mb-8 lg:bottom-0 lg:translate-x-[-0.69rem] w-10/12 lg:w-[42rem]"
	>
		<a
			tabindex="-1"
			class="lg:my-1 my-2 min-w-full lg:min-w-[0px] mx-1"
			rel="noopener"
			target="_blank"
			href="https://apply.puroto.net/"
			><div
				class="group border-4 border-purple rounded-[12px] min-w-full mx-1 py-2 hover:bg-purple transition duration-200 ease-in-out"
				><p
					class="text-center select-none text-purple text-2xl lg:text-3xl lg:px-[3rem] font-semibold group-hover:text-background transition duration-100"
					>Apply</p
				></div
			></a
		>
		<a
			tabindex="-1"
			class="lg:my-1 my-2 min-w-full lg:min-w-[0px] mx-1"
			rel="noopener"
			target="_blank"
			href="https://discord.puroto.net/"
			><div
				class="group border-4 border-discord rounded-[12px] min-w-full mx-1 py-2 hover:bg-discord transition duration-200 ease-in-out"
				><p
					class="text-center select-none text-discord text-2xl lg:text-3xl lg:px-[2.8rem] font-semibold group-hover:text-background transition duration-100"
					>Join our Discord</p
				></div
			></a
		>
		<a
			tabindex="-1"
			class="lg:my-1 my-2 min-w-full lg:min-w-[0px] mx-1"
			rel="noopener"
			target="_blank"
			href="https://patreon.com/purotoapp"
			><div
				class="group border-4 border-patreon rounded-[12px] min-w-full mx-1 py-2 hover:bg-patreon transition duration-200 ease-in-out"
				><p
					class="text-center select-none text-patreon text-2xl lg:text-3xl lg:px-[2rem] font-semibold group-hover:text-background transition duration-100"
					>Support Us</p
				></div
			></a
		>
		<a
			tabindex="-1"
			class="lg:my-1 my-2 min-w-full lg:min-w-[0px] mx-1"
			rel="noopener"
			target="_blank"
			href="https://twitter.com/purotoapp"
			><div
				class="group border-4 border-twitter rounded-[12px] min-w-full mx-1 py-2 hover:bg-twitter transition duration-200 ease-in-out"
				><p
					class="text-center select-none text-twitter text-2xl lg:text-3xl lg:px-[0.6rem] font-semibold group-hover:text-background transition duration-100"
					>Follow our Twitter</p
				></div
			></a
		>
		<a
			tabindex="-1"
			class="lg:my-1 my-2 min-w-full lg:min-w-[0px] mx-1"
			rel="noopener"
			target="_blank"
			href="https://github.com/purotoapp"
			><div
				class="group border-4 border-github rounded-[12px] min-w-full mx-1 py-2 hover:bg-github transition duration-200 ease-in-out"
				><p
					class="text-center select-none text-github text-2xl lg:text-3xl lg:px-[6.65rem] font-semibold group-hover:text-background transition duration-100"
					>Check out our GitHub</p
				></div
			></a
		>
	</div>

	{#if wide >= lg}
		<div id="lg:inline lgb:hidden">
			<div class="absolute w-[40vw] h-screen top-0 right-0 overflow-hidden pr-4">
				<div id="card">
					{#each list as data}
						<Profile {...data} />
					{/each}
				</div>
			</div>
		</div>
	{/if}
</main>

<style lang="postcss" global>
	@tailwind base;
	@tailwind components;
	@tailwind utilities;

	@media (min-width: 1024px) {
		#card {
			-webkit-animation-name: scrolling;
			-webkit-animation-duration: 60s;
			-webkit-animation-iteration-count: infinite;
			-webkit-animation-direction: alternate;
			-webkit-animation-timing-function: linear;
		}
	}

	@-webkit-keyframes scrolling {
		0% {
			transform: translateY(0);
		}
		100% {
			transform: translateY(calc(-100% + 90vh));
		}
	}
</style>

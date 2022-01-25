<script>
	import Profile from './components/Profile.svelte';
	import * as staffList from './staffList.json';

	let list = staffList.default.sort(() => Math.random() - 0.5);
</script>

<main class="max-h-screen max-w-screen lg:ml-12">
	<div class="flex flex-nowrap justify-center lg:justify-start items-center select-none mt-20">
		<div class="w-[96px] h-[96px] sm:w-[112px] sm:h-[112px] mr-6">
			<svg viewBox="0 0 1426 1406" fill="none" xmlns="http://www.w3.org/2000/svg">
				<path
					d="M436.82 1362L590.578 1198.64C591.741 1197.41 590.934 1195.38 589.241 1195.28L76.3896 1164.67C75.3889 1164.61 74.587 1163.82 74.5141 1162.82L64.0711 1019.71C64.0262 1019.1 64.2673 1018.5 64.7244 1018.09L427.405 690.157C428.167 689.468 428.283 688.313 427.674 687.486L382.777 626.582C382.2 625.799 382.27 624.714 382.944 624.011L465.382 538.043C466.054 537.343 466.125 536.261 465.552 535.478L393.155 436.536C392.401 435.505 392.794 434.04 393.964 433.525L578.819 352.168C579.682 351.788 580.162 350.858 579.972 349.935L562.2 263.426C561.84 261.672 563.789 260.365 565.275 261.363L733.818 374.65C734.415 375.051 735.18 375.101 735.824 374.781L1358.67 65.1532C1360.27 64.3595 1362.02 65.8939 1361.45 67.5834L1137.72 730.854C1137.48 731.568 1137.66 732.358 1138.19 732.895L1240.78 837.287C1241.59 838.111 1241.53 839.45 1240.65 840.204L1115.71 947.762C1115.04 948.343 1114.83 949.3 1115.2 950.11L1158.66 1045.08C1159.06 1045.94 1158.79 1046.96 1158.03 1047.52L1026.47 1143.87C1025.29 1144.74 1025.4 1146.53 1026.68 1147.24L1108.23 1192.17C1108.96 1192.57 1109.36 1193.38 1109.24 1194.21L1088.89 1335.98"
					stroke="white"
					stroke-width="128"
				/>
			</svg>
		</div>
		<span class="text-5xl sm:text-8xl font-bold inline-block">Puroto</span>
	</div>
	<h1
		class="relative text-[2rem] sm:text-[3rem] max-w-[80%] lg:max-w-[40%] left-[2.5rem] lg:left-[0rem] font-semibold select-none mt-6"
	>
		A future social network for furries.
	</h1>

	<div
		class="absolute flex flex-wrap justify-center lg:justify-start left-1/2 -translate-x-1/2 lg:left-[0] lg:ml-12 lg:mb-8 lg:bottom-0 lg:translate-x-[-0.69rem] w-10/12 lg:w-[42rem]"
	>
		<a
			tabindex="-1"
			class="min-w-full lg:min-w-[0px] mx-1"
			rel="noopener"
			target="_blank"
			href="https://apply.puroto.net/"
			><button
				type="button"
				class="group border-4 border-purple rounded-[12px] min-w-full mx-1 mb-4 lg:mb-2 py-2 hover:bg-purple transition duration-200 ease-in-out"
				><span
					class="w-full h-full select-none text-purple text-2xl lg:text-3xl lg:px-[3rem] font-semibold group-hover:text-background transition duration-100"
					>Apply</span
				></button
			></a
		>
		<a
			tabindex="-1"
			class="min-w-full lg:min-w-[0px] mx-1"
			rel="noopener"
			target="_blank"
			href="https://discord.puroto.net/"
			><button
				type="button"
				class="group border-4 border-discord rounded-[12px] min-w-full mx-1 mb-4 lg:mb-2 py-2 hover:bg-discord transition duration-200 ease-in-out"
				><span
					class="w-full h-full select-none text-discord text-2xl lg:text-3xl lg:px-[2.8rem] font-semibold group-hover:text-background transition duration-100"
					>Join our Discord</span
				></button
			></a
		>
		<a
			tabindex="-1"
			class="min-w-full lg:min-w-[0px] mx-1"
			rel="noopener"
			target="_blank"
			href="https://patreon.com/purotoapp"
			><button
				type="button"
				class="group border-4 border-patreon rounded-[12px] min-w-full mx-1 mb-4 lg:mb-2 py-2 hover:bg-patreon transition duration-200 ease-in-out"
				><span
					class="w-full h-full select-none text-patreon text-2xl lg:text-3xl lg:px-[2rem] font-semibold group-hover:text-background transition duration-100"
					>Support Us</span
				></button
			></a
		>
		<a
			tabindex="-1"
			class="min-w-full lg:min-w-[0px] mx-1"
			rel="noopener"
			target="_blank"
			href="https://twitter.com/purotoapp"
			><button
				type="button"
				class="group border-4 border-twitter rounded-[12px] min-w-full mx-1 mb-4 lg:mb-2 py-2 hover:bg-twitter transition duration-200 ease-in-out"
				><span
					class="w-full h-full select-none text-twitter text-2xl lg:text-3xl lg:px-[0.6rem] font-semibold group-hover:text-background transition duration-100"
					>Follow our Twitter</span
				></button
			></a
		>
		<a
			tabindex="-1"
			class="min-w-full lg:min-w-[0px] mx-1"
			rel="noopener"
			target="_blank"
			href="https://github.com/purotoapp"
			><button
				type="button"
				class="group border-4 border-github rounded-[12px] min-w-full mx-1 mb-4 lg:mb-2 py-2 hover:bg-github transition duration-200 ease-in-out"
				><span
					class="w-full h-full select-none text-github text-2xl lg:text-3xl lg:px-[6.65rem] font-semibold group-hover:text-background transition duration-100"
					>Check out our GitHub</span
				></button
			></a
		>
	</div>

	<div id="staff-list">
		<div class="absolute w-1/2 h-screen top-0 right-0 overflow-hidden">
			<div id="post">
				{#each list as data}
					<Profile {...data} />
				{/each}
			</div>
		</div>
	</div>
</main>

<style lang="postcss" global>
	@tailwind base;
	@tailwind components;
	@tailwind utilities;

	/* Doesn't show up in the browser for mobiles only */
	@media (max-width: 1024px) {
		#staff-list {
			display: none;
		}
	}

	@media (min-width: 1024px) {
		#staff-list {
			display: inline;
		}

		#post {
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

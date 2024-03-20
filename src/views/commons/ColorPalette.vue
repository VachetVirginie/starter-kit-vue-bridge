<template>
	<AppHeader/>
	<PageContainer>
		<BackBtn to="/"/>
		<V-Alert
			class="mx-6 my-4"
			border="start"
			color="primary"
			title="Font:"
			variant="tonal"
		>
			<p>font-family: "Source Sans 3", "Source Sans Pro", sans-serif</p>
		</V-Alert>
		<h1 class="py-8">Heading:</h1>
		<div :style="{ color: selectedColor, backgroundColor: '#e0e7f2' }" class="text-center">
			<h1 class="my-1">h1. Design system heading</h1>
			<h2 class="my-1">h2. Design system heading</h2>
			<h3 class="my-1">h3. Design system heading</h3>
			<h4 class="my-1">h4. Design system heading</h4>
			<h5 class="my-1">h5. Design system heading</h5>
			<h6 class="my-1">h6. Design system heading</h6>
		</div>
		<v-row class="mx-auto">
			<div
				v-for="(color, index) in colors"
				:key="index"
				:aria-label="`Select ${color.name} color`"
				:style="{ backgroundColor: color.color, color: isDarkColor(color.color) ? 'white' : 'black' }"
				class="text-center my-auto ml-4 mr-2 color-box mt-6"
				role="button"
				@click="selectColor(color.color)"
			>
				{{ color.name }}
			</div>
		</v-row>
		<h1 class="py-8">Color Palette du theme Vuetify:</h1>
		<v-row v-for="(colorGroup, group) in groupedColors" :key="group">
			<v-col
				v-for="(color, name) in colorGroup"
				:key="name"
				class="d-flex child-flex color-box"
				:style="{ backgroundColor: color, color: isDarkColor(color) ? 'white' : 'black' }"
			>
				<div class="text-center">
					{{ name }}
				</div>
			</v-col>
		</v-row>
	</PageContainer>
	<FooterBar
		hide-a11y-link
		hide-cgu-link
		hide-cookies-link
		hide-legal-notice-link
		hide-sitemap-link
	>
		<p class="text-secondary">Contenu supplémentaire.</p>
	</FooterBar>
</template>

<script lang="ts">
import {defineComponent} from 'vue';
import {BackBtn, FooterBar, PageContainer} from "@cnamts/synapse-bridge";
import AppHeader from "@/views/commons/AppHeader.vue";

export default defineComponent({
	name: 'ColorPalette',
	components: {AppHeader, BackBtn, FooterBar, PageContainer},
	data() {
		return {
			colors: [
				{color: '#1F50A2', name: 'Primary'},
				{color: '#146F8F', name: 'Secondary'},
				{color: '#1F50A2', name: 'Info'},
				{color: '#56c271', name: 'Sucess'},
				{color: '#f0b323', name: 'Warning'},
				{color: '#b33f2e', name: 'Error'},
				{color: '#00a5df', name: 'Accent'},
				{color: '#ffffff', name: 'Light'},
				{color: '#ffffff', name: 'Dark'},
				{color: '#cd545b', name: 'Risque Pro'},
				{color: '#482D50', name: 'Violet INVA'},
			],
			selectedColor: '',
		};
	},
	computed: {
		groupedColors() {
			const colors: Record<string, any> = this.$vuetify.theme.themes.light ? this.$vuetify.theme.themes.light.colors : {};
			const grouped: Record<string, any> = {};
			for (const color in colors) {
				if (color) {
					const group = color.split('-')[0]; // Get the group name (e.g., 'blue', 'cyan')
					if (group && !grouped[group]) {
						grouped[group] = {};
					}
					if (group) {
						grouped[group][color] = colors[color];
					}
				}
			}
			return grouped;
		},
	},
	methods: {
		selectColor(color: string) {
			this.selectedColor = color;
			this.$emit('color-selected', color);
		},
		isDarkColor(color: any) {
			const c = color.substring(1);  // strip #
			const rgb = parseInt(c, 16);   // convert rrggbb to decimal
			const r = (rgb >> 16) & 0xff;  // extract red
			const g = (rgb >>  8) & 0xff;  // extract green
			const b = (rgb >>  0) & 0xff;  // extract blue

			const luma = 0.2126 * r + 0.7152 * g + 0.0722 * b; // per ITU-R BT.709

			return luma < 128;
		}
	},
});
</script>

<style scoped>
.color-box {
	width: 120px;
	min-height: 50px;
	margin: 10px;
	padding: 10px;
	cursor: pointer;
	border: black 1px solid;
	border-radius: 15px;
	box-shadow: 2px 2px 5px rgba(0, 0, 0, 0.2);
	transition: all 0.3s;
	display: flex;
	justify-content: center;
	align-items: center;
}
</style>

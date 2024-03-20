<template>
	<V-Alert
		class="mx-6 my-4"
		border="start"
		color="primary"
		title="Changement de theme"
		variant="tonal"
	>
	<p>Pour tester le changement de theme, il faut modifier la valeur theme dans le fichier : public/json/config.env.json (vuetify ou bootstrap)</p>
	</V-Alert>
	<PageContainer>
		<BackBtn to="/"/>
		<h1 class="text-primary">{{ $config.public.title }}</h1>
		<HelloWorld :msg="$config.public.message"/>
		<VBtn color="primary">
			Primary
		</VBtn>
		<VBtn color="secondary">
			secondary
		</VBtn>
		<VBtn color="info">
			Info
		</VBtn>
		<VBtn color="success">
			Success
		</VBtn>
		<VBtn color="warning">
			Warning
		</VBtn>
		<VBtn color="error">
			Error
		</VBtn>
		<VBtn color="accent">
			Accent
		</VBtn>
		<VBtn color="light">
			Light
		</VBtn>
		<VBtn color="dark">
			Dark
		</VBtn>
		<VBtn color="risquePro">
			Risque Pro
		</VBtn>
		<VBtn class="inva">
			Violet inva
		</VBtn>

		<br /><br />

		<SubHeader
			sub-title-text="1 69 08 75 125 456 75"
			title-text="Paul Dupont"
		/>

		<br /><br />

		<v-alert type="success">
			Message de succès
		</v-alert>
	</PageContainer>
	<FooterBar
		hide-a11y-link
		hide-cgu-link
		hide-cookies-link
		hide-legal-notice-link
		hide-sitemap-link
	>
		<p class="text-secondary mb-0">Contenu supplémentaire.</p>
	</FooterBar>
</template>

<script lang="ts">
import {BackBtn, PageContainer, HeaderBar, FooterBar, SubHeader} from "@cnamts/synapse-bridge";
import AppHeader from "@/views/commons/AppHeader.vue";
export default defineNuxtComponent({
	components: {
		AppHeader,
		BackBtn,
		PageContainer,
		HeaderBar,
		FooterBar,
		SubHeader
	},
	data () {
		return {
			theme: 'bootstrap', // default theme
		}
	},
	methods: {
	},
});
</script>

<style lang="scss" scoped>
@import '@cnamts/design-tokens/dist/tokens';
// custom styles
.warning {
	color: black !important;
}
.dark {
	color: white !important;
}
.inva {
	background-color: $vd-mauve-darken-60 !important;
	color: white;
}
</style>

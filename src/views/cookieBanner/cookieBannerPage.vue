<template>
	<PageContainer>
		<CookieBanner
			v-if="active1"
			cookies-route="/templates/cookies-page"
			@reject="active1 = false"
			@accept="active1 = false"
		/>

		<CookieBanner
			v-if="active2"
			:vuetify-options="vuetifyOptions"
			cookies-route="/templates/cookies-page"
			@reject="active2 = false"
			@accept="active2 = false"
		/>

		<CookieBanner
			v-if="active3"
			cookies-route="/templates/cookies-page"
			@reject="active3 = false"
			@accept="active3 = false"
		>
			Ce téléservice utilise des cookies en enregistrant certaines informations lors de votre navigation.
		</CookieBanner>

		<VBtn
			v-if="!active1"
			color="primary"
			@click="active1 = true"
		>
			Réinitialiser 1
		</VBtn>
		<VBtn
			v-if="!active3"
			color="primary"
			@click="active2 = !active2"
		>
			Réinitialiser 2
		</VBtn>
		<VBtn
			v-if="!active3"
			color="primary"
			@click="active3 = !active2"
		>
			Réinitialiser 3
		</VBtn>
	</PageContainer>
	<FooterBar
		hide-a11y-link
		hide-cgu-link
		hide-cookies-link
		hide-legal-notice-link
		hide-sitemap-link
	>
		<p class="text--secondary mb-0">Contenu supplémentaire.</p>
	</FooterBar>
</template>

<script lang="ts">
import {defineComponent} from "vue";
import {
	PageContainer,
	HeaderBar,
	FooterBar,
	CookieBanner,
} from "@cnamts/synapse-bridge";
import AppHeader from "@/views/commons/AppHeader.vue";

export default defineComponent({
	components: {
		AppHeader,
		PageContainer,
		HeaderBar,
		CookieBanner,
	},
	data() {
		return {
			vuetifyOptions: {
				sheet: {
					elevation: 5
				},
				customizeBtn: {
					variant: 'text',
					outlined: false
				},
				rejectBtn: {
					outlined: true
				},
				acceptBtn: {
					outlined: true
				}
			},
			active1:true,
			active2: false,
			active3: false
		}
	},
	computed: {
	},
	methods: {
	}
});
</script>

<style>
</style>

<template>
	<VApp>
		<AppHeader/>
		<PageContainer>
			<BackBtn to="/"/>
			<slot />
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
	</VApp>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import { PageContainer, FooterBar, BackBtn } from '@cnamts/synapse-bridge'
import AppHeader from "../src/views/commons/AppHeader.vue";
export default defineComponent({
	components: {
		AppHeader,
		PageContainer,
		FooterBar,
		BackBtn
	},
	data() {
		return {
			navigationItems: [
				{
					label: 'Accueil',
					to: '/home',
				},
				{
					label: 'Tokens',
					to: '/tokens',
				},
				{
					label: 'Maintenance',
					to: '/maintenance',
				},
				{
					label: 'Erreur',
					to: '/not-found',
				},
			],
		}
	},
})
</script>

<script lang="ts" setup>
import { FooterBar } from '@cnamts/synapse-bridge'
const currentDate = new Date().getFullYear()
</script>

<template>
	<FooterBar
		a11y-compliance="partially-compliant"
		version="1.0.0"
		sitemap-route="/"
		cgu-route="/"
		cookies-route="/"
		legal-notice-route="/"
		a11y-statement-route="/"
	>
	  <template #prepend>
		<li class="my-3 mx-4"><a href="/" class="text--primary">Accueil</a></li>
	  </template>
	  <template #append>
		<li class="text--secondary my-3 mx-4">{{currentDate}} © CNAM</li>
	  </template>
	</FooterBar>
	<br><br>
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

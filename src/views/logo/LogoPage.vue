<template>
	<Logo />
	<Logo hide-signature />
	<Logo risque-pro />
	<Logo avatar />
	<Logo avatar size="small" />

	<br/><br/>

	<LogoBrandSection
		service-sub-title="Documentation du Design System"
		service-title="Design System"
		theme="risque-pro"
	/>

	<br/><br/>

	<LogoBrandSection
		home-href="http://www.google.fr"
		theme="ameli-pro"
	/>

	<br/><br/>

	<LogoBrandSection home-href="http://www.google.fr">
		<img
			src="@/assets/images/logo-msa.svg"
			alt="MSA : Santé, Famille, Retraite, Services"
			width="115px"
			height="52px"
			class="ml-8 my-auto"
		>
	</LogoBrandSection>
</template>

<script lang="ts">
import {Logo, LogoBrandSection} from "@cnamts/synapse-bridge";
import { defineComponent } from "vue";
export default defineComponent({
	components: {
		Logo,
		LogoBrandSection,
	}
});
</script>

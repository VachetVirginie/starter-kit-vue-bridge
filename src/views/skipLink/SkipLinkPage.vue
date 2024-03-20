<template>
	<SkipLink label="Contenu principal" />

	click Tab

	<div
		id="main"
		style="margin-top: 2000px"
	>
		Content
	</div>
</template>

<script lang="ts">
import {defineComponent} from "vue";
import {
	SkipLink,
} from "@cnamts/synapse-bridge";
export default defineComponent({
	components: {
		SkipLink,
	}
});
</script>

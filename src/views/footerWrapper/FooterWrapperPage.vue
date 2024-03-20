<template>
	<FooterWrapper>
		<FooterBtn>
			Mentions légales
		</FooterBtn>

		<FooterBtn>
			CGU
		</FooterBtn>

		<FooterBtn inert>
			Version 1.0.0
		</FooterBtn>
	</FooterWrapper>

	<FooterWrapper>
		<FooterBtn>
			CGU
		</FooterBtn>

		<FooterBtn inert>
			Version 1
		</FooterBtn>

		<FooterBtn inert>
			28/05/2020
		</FooterBtn>
	</FooterWrapper>

	<FooterWrapper>
		<VRow>
			<VSpacer />

			<p class="mb-0">
				Version 1
			</p>
		</VRow>
	</FooterWrapper>
</template>

<script lang="ts">
import {defineComponent} from "vue";
import { FooterWrapper, FooterBtn} from '@cnamts/synapse-bridge';
export default defineComponent({
	components: {
		FooterWrapper,
		FooterBtn,
	},
});
</script>

<style lang="scss" scoped>
.v-layout + .v-layout {
	margin-top: 60px;
}
</style>

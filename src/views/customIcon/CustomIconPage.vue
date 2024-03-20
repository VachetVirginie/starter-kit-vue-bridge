<template>
	<PageContainer>
		<div class="d-flex justify-sm-space-around my-12">
			<CustomIcon icon="digital" :color="color" x-large />
			<CustomIcon icon="digital" :color="color" large />
			<CustomIcon icon="digital" :color="color" medium />
			<CustomIcon icon="digital" :color="color" small />
			<CustomIcon icon="digital" :color="color" size="100px" />
			<CustomIcon icon="digital" :color="color" label="toto" />
			<CustomIcon icon="digital" :color="'red'" x-large />
			<CustomIcon size="38px">
				<svg viewBox="0 0 400 400">
					<path
						fill="#4dba87"
						d="M237.42 86.66L207.19 139l-30.22-52.35H76.3l130.9 226.69L338.07 86.66z"
					/>

					<path
						fill="#435466"
						d="M237.42 86.66L207.19 139l-30.22-52.35h-48.3l78.52 136 78.53-136z"
					/>
				</svg>
			</CustomIcon>
			<CustomIcon size="38px" color="red">
				<svg viewBox="0 0 400 400">
					<path
						fill="currentcolor"
						d="M237.42 86.66L207.19 139l-30.22-52.35H76.3l130.9 226.69L338.07 86.66z"
					/>

					<path
						fill="#435466"
						d="M237.42 86.66L207.19 139l-30.22-52.35h-48.3l78.52 136 78.53-136z"
					/>
				</svg>
			</CustomIcon>
		</div>


<div class="d-flex justify-sm-space-around my-12">
	<CustomIcon icon="recap_check" :color="color" large />
	<CustomIcon icon="user_ps" :color="color" large />
	<CustomIcon icon="user" :color="color" large />
	<CustomIcon icon="arrow_down" :color="color" large />
	<CustomIcon icon="calendar" :color="color" large />
	<CustomIcon icon="helpon" :color="color" large />
	<CustomIcon icon="helpoff" :color="color" large />
	<CustomIcon icon="info" :color="color" large />
	<CustomIcon icon="warning" :color="color" large />
	<CustomIcon icon="separator" :color="color" large />
	<CustomIcon icon="delete" :color="color" large />
	<CustomIcon icon="arrow_right" :color="color" large />
	<CustomIcon icon="arrow_drop_down" :color="color" large />
	<CustomIcon icon="launch" :color="color" large />
	<CustomIcon icon="csv" :color="color" large />
</div>

	</PageContainer>
</template>

<script lang="ts">
import {defineComponent} from "vue";
import { tokens } from "@cnamts/design-tokens";
import {
	PageContainer,
	HeaderBar,
	CustomIcon,
} from "@cnamts/synapse-bridge";
import AppHeader from "@/views/commons/AppHeader.vue";

export default defineComponent({
	components: {
		CustomIcon,
		PageContainer,
		HeaderBar,
	},
	data() {
		return {
			color: tokens.colors.primary
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

<template>
	<RangeField v-model="rangeValue" :min="20" :max="100" />
	<p>Value: {{ rangeValue }}</p>
</template>

<script lang="ts">
import {defineComponent} from "vue";
import {
	RangeField,
} from "@cnamts/synapse-bridge";
export default defineComponent({
	components: {
		RangeField,
	},
	data() {
		return {
			rangeValue: [50, 80],
		}
	}
});
</script>

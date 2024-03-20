<template>
	<SearchListField
		:items="items"
		@update:modelValue="($event) => selectChoice($event)"
	/>
	<br />
	<pre>Selected: {{ value }}</pre>
</template>

<script lang="ts">
import {defineComponent} from "vue";
import {
	SearchListField,
} from "@cnamts/synapse-bridge";
import { SearchListItem } from '@cnamts/synapse-bridge/src/patterns/SearchListField/types';
export default defineComponent({
	components: {
		SearchListField,
	},
	data() {
		return {
			value: [] as string[],
			items: [
				{
					label: 'Chirurgien-dentiste',
					value: 'chirurgien-dentiste'
				},
				{
					label: 'Infirmier',
					value: 'infirmier'
				},
				{
					label: 'Orthophoniste',
					value: 'orthophoniste'
				},
				{
					label: 'Orthoptiste',
					value: 'orthoptiste'
				},
				{
					label: 'Pédicure-podologue',
					value: 'pedicure-podologue'
				},
				{
					label: 'Pharmacien',
					value: 'pharmacien'
				}
			] as SearchListItem[]
		};
	},
	methods: {
		selectChoice(val: string[]): void {
			this.value = val;
		}
	}
});
</script>

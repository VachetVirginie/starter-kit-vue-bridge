<template>
	<ChipList :items="items" />

	{{ removedElement }} {{ reseted}}
	<ChipList
		:items="items"
		:overflow-limit="2"
		@remove="remove($event)"
		@reset="reset"
	/>
</template>

<script lang="ts">
import {defineComponent} from "vue";
import {
	ChipList,
} from "@cnamts/synapse-bridge";
export default defineComponent({
	components: {
		ChipList,
	},
	data() {
		return {
			items: [
				{ text: 'Item 1', value: 'item1' },
				{ text: 'Item 2', value: 'item2' },
				{ text: 'Item 3', value: 'item3' },
			],
			removedElement: null,
			reseted: null as string | null
		}
	},
	methods: {
		remove(item: any) {
			this.removedElement = item
		},
		reset () {
			this.reseted = 'Reseted'
		}
	}
});
</script>

<template>
	<PhoneField
		v-model="phone1"
		required
		@update:modelValue="handleInputChange1"
	/>
	<br />
	<PhoneField
		v-model="phone2"
		outlined
		@update:modelValue="handleInputChange2"
	/>
</template>

<script lang="ts">
import {defineComponent} from "vue";
import {
	PhoneField,
} from "@cnamts/synapse-bridge";
export default defineComponent({
	components: {
		PhoneField,
	},
	data() {
		return {
			phone1: undefined as string | undefined,
			phone2: undefined as string | undefined,
		}
	},
	methods: {
		handleInputChange1() {
			if (this.phone1) {
				console.log(this.phone1);
			}
		},
		handleInputChange2() {
			if (this.phone2) {
				console.log(this.phone2);
			}
		}
	}
});
</script>

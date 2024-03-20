<template>
	<PageContainer>
		<div class="w-50 mx-auto">
			<v-col>
				Mot de passe: {{ password }}
				<PasswordField
					v-model="password"
					@update:model-value="getValue($event)"
				/>
			</v-col>
			<v-col>
				Mot de passe: {{ password2 }}
				<PasswordField
					v-model="password2"
					class="mt-2"
					required
					outlined
					@update:model-value="getValue($event)"
				/>
			</v-col>
			<v-col>
				Mot de passe: {{ password3 }}
				<PasswordField
					v-model="password3"
					class="mt-2"
					required
					outlined
					@update:model-value="getValue($event)"
				/>
			</v-col>
		</div>
	</PageContainer>
</template>

<script lang="ts">
import {defineComponent} from "vue";
import {
	PageContainer,
	PasswordField,
} from "@cnamts/synapse-bridge";

export default defineComponent({
	components: {
		PageContainer,
		PasswordField,
	},
	data() {
		return {
			password: null,
			password2: null,
			password3: 'jesuis1superm0tdepasse',
		}
	},
	computed: {
	},
	methods: {
		getValue(value: string): void {
			console.log(value);
		}
	}
});
</script>

<style scoped>
:deep(.v-field__field ){
	align-items: stretch !important;
}
</style>

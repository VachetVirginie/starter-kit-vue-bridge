<template>
	<PageContainer>
		<div class="d-flex justify-sm-space-around my-12">
			<VBtn
				color="primary"
				@click="dialog = true"
			>
				Afficher le composant
			</VBtn>

			<DialogBox
				v-model="dialog"
				:width="dialogWidth"
				title="Enregistrement"
				@cancel="dialog = false"
				@confirm="dialog = false"
			>
				<p>Souhaitez-vous procéder à l’enregistrement ?</p>
			</DialogBox>

			<br /><br />

			<VBtn
				color="primary"
				@click="dialog2 = true"
			>
				Afficher le composant
			</VBtn>

			<DialogBox
				v-model="dialog2"
				:width="dialogWidth2"
				title="Enregistrement"
				cancel-btn-text="Retour"
				confirm-btn-text="Enregistrer"
				@cancel="dialog2 = false"
				@confirm="dialog2 = false"
			>
				<p>Souhaitez-vous procéder à l’enregistrement ?</p>
			</DialogBox>

			<br /><br />

			<VBtn
				color="primary"
				@click="dialog3 = true"
			>
				Afficher le composant
			</VBtn>

			<DialogBox
				v-model="dialog3"
				title="Enregistrement"
				hide-actions
			>
				<p class="mb-1">
					Souhaitez-vous procéder à l’enregistrement ?
				</p>
			</DialogBox>
		</div>
	</PageContainer>
</template>

<script lang="ts">
import {defineComponent} from "vue";
import { tokens } from '@cnamts/design-tokens';
import {
	PageContainer,
	DialogBox,

} from "@cnamts/synapse-bridge";
import AppHeader from "@/views/commons/AppHeader.vue";

export default defineComponent({
	components: {
		AppHeader,
		PageContainer,
		DialogBox,
	},
	data() {
		return {
			dialog: false,
			dialogWidth: tokens.dialogWidth.dialogSmall,
			dialog2: false,
			dialogWidth2: tokens.dialogWidth.dialogMedium,
			dialog3: false,
		}
	},
	computed: {
	},
	methods: {
	}
});
</script>

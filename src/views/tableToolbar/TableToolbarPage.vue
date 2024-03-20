<template>
	<div>
		<VDataTable
			:headers="headers"
			:items="items"
			:search="search"
			:loading="loading ? 'primary' : false"
			loading-text="Chargement des patients"
		>
			<template #top>
				<TableToolbar
					v-model:search="search"
					:nb-total="items.length"
					:loading="loading"
					show-add-btn
					row-text="patient"
					add-btn-label="Ajouter un patient"
					search-label="Rechercher"
				>
					<template #search-left>
						<VBtn
							color="primary"
							variant="outlined"
							size="small"
							:class="$vuetify.display.name === 'xs' ? 'mx-0 mr-6' : 'mx-5'"
							:disabled="loading"
						>
							Exemple
						</VBtn>
					</template>
				</TableToolbar>
			</template>
			<template #bottom>
				<!-- Leave this slot empty to hide pagination controls -->
			</template>
		</VDataTable>
		<VSwitch v-model="loading"></VSwitch>
	</div>
</template>

<script lang="ts">
import {defineComponent} from "vue";
import { VDataTable } from "vuetify/components/VDataTable";
import {
	TableToolbar,
} from "@cnamts/synapse-bridge";
export default defineComponent({
	components: {
		TableToolbar,
		VDataTable
	},
	data() {
		return {
			search: undefined as string | undefined,
			loading: false,
			headers: [
				{
					title: "Nom",
					key: "lastname",
				},
				{
					title: "Prénom",
					key: "firstname",
				},
				{
					title: "Email",
					key: "email",
				},
			],
			items: [
				{
					firstname: "Virginie",
					lastname: "Beauchesne",
					email: "virginie.beauchesne@example.com",
				},
				{
					firstname: "Étienne",
					lastname: "Salois",
					email: "etienne.salois@example.com",
				},
			],
		};
	},
});
</script>

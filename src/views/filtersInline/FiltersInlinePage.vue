<template>
	{{ filters }}
	<FiltersInline v-model="filters">
		<template #name="{ attrs }">
			<VTextField
				v-bind="attrs"
				label="Nom"
				color="primary"
				variant="outlined"
				hide-details
			/>
		</template>

		<template #folder="{ attrs }">
			<p class="text-secondary mb-4">
				Vous pouvez filtrer entre les dossiers de type
				<b>Arrêt de Travail (AT)</b> et
				<b>Maladie Professionnelle (MP)</b> ou <b>Autre</b>.
			</p>
			<VSelect
				v-bind="attrs"
				:items="folderTypes"
				color="primary"
				label="Type de dossier"
				multiple
				variant="outlined"
				return-object
				hide-details
			/>
		</template>

		<template #checkbox="{ attrs }">
			<v-radio-group v-bind="attrs">
				<v-radio label="Option One" value="one" color="primary"></v-radio>
				<v-radio label="Option 2 (string)" value="2" color="primary"></v-radio>
				<v-radio :value="3" label="Option 3 (integer)" color="primary"></v-radio>
			</v-radio-group>
		</template>
	</FiltersInline>
</template>

<script lang="ts">
import {defineComponent} from "vue";
import {
	FiltersInline,
} from "@cnamts/synapse-bridge";
export default defineComponent({
	components: {
		FiltersInline,
	},
	data() {
		return {
			filters: [
				{
					name: "name",
					title: "Identité",
				},
				{
					name: "folder",
					title: "Type de dossier",
				},
				{
					name: "checkbox",
					title: "Checkbox",
				}
			],
			folderTypes: [
				{
					title: "AT",
					value: "at",
				},
				{
					title: "MP",
					value: "mp",
				},
				{
					title: "Autre",
					value: "other",
				},
			],
			professionList: [
				{
					label: "Chirurgien-dentiste",
					value: "chirurgien-dentiste",
				},
				{
					label: "Infirmier",
					value: "infirmier",
				},
				{
					label: "Orthophoniste",
					value: "orthophoniste",
				},
				{
					label: "Orthoptiste",
					value: "orthoptiste",
				},
				{
					label: "Pédicure-podologue",
					value: "pedicure-podologue",
				},
				{
					label: "Pharmacien",
					value: "pharmacien",
				},
			],
		};
	},
});
</script>

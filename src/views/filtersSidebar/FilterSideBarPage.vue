<template>
	{{ filters }}
	<FiltersSideBar v-model="filters">
		<template #name="{ attrs }">
			<VTextField
				v-bind="attrs"
				color="primary"
				label="Nom"
				variant="outlined"
				hide-details
			/>
		</template>

		<template #folder="{ attrs }">
			<p class="text-secondary">
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

		<template #updated-at="{ attrs }">
			<DatePicker
				v-bind="attrs"
				v-model="date"
				label="Date de mise à jour"
				outlined
			/>
		</template>

		<template #period="{ attrs }">
			<PeriodField v-bind="attrs" outlined />
		</template>

		<template #profession="{ attrs }">
			<SearchListField
				v-bind="attrs"
				:items="professionList"
			/>
		</template>
	</FiltersSideBar>
</template>

<script lang="ts">
import {defineComponent} from "vue";
import {
	FiltersSideBar,
	DatePicker,
	PeriodField,
	SearchListField
} from "@cnamts/synapse-bridge";
import { ChipItem } from "@cnamts/synapse-bridge/src/elements/ChipList/types";
import dayjs from "dayjs";
export default defineComponent({
	components: {
		FiltersSideBar,
		DatePicker,
		PeriodField,
		SearchListField
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
					name: 'updated-at',
					title: 'Mise à jour'
				},
				{
					name: "period",
					title: "Période",
					formatChip: ([min, max]: [number, number]): ChipItem[] => [
						{
							text: `Du ${min} au ${max}`,
							value: [min, max]
						}
					]
				},
				{
					name: "profession",
					title: "Profession",
				},
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
			date: dayjs().toDate(),
		};
	},
});
</script>

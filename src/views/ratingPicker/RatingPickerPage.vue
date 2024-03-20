<template>
	<PageContainer>
		<RatingPicker
			label="Êtes-vous satisfait de ce service ?"
			type="emotion"
			v-model="v"
		/>{{ v }}

		<br><br><br>

		<RatingPicker
			label="Êtes-vous satisfait de ce service ?"
			type="emotion"
			:twoEmotions='true'
			:itemLabels='["123"]'
			v-model="v1"
		/>{{ v1 }}

		<br><br><br>

		<RatingPicker
			label="Êtes-vous satisfait de ce service ?"
			type="number"
			v-model="v2"
			:item-labels="[
				'Plutôt inutile',
				'Très utile'
			]"
		/>{{ v2 }}

		<br><br><br>

		<RatingPicker
			label="Êtes-vous satisfait de ce service ?"
			type="stars"
			v-model="v3"
		/>{{ v3 }}

		<br><br><br>

		<RatingPicker
			v-model="v4"
			:item-labels="[
				'Plutôt inutile',
				'Très utile'
			]"
			label="Quelle note donnez-vous à ce service ?"
			type="number"
		>
			<VSelect
				:items="selectItems"
				label="Comment avez-vous connu ce service ?"
				hide-details
				variant="outlined"
				color="primary"
				class="mb-4"
			/>

			<div class="d-flex">
				<VSpacer />

				<VBtn
					right
					color="primary"
				>
					Terminé
				</VBtn>
			</div>
		</RatingPicker>{{ v4 }}
		<br><br><br>
		<RatingPicker
			v-model="v5"
			:item-labels="[
				'Plutôt inutile',
				'Très utile'
			]"
			label="Quelle note donnez-vous à ce service ?"
			type="number"
		>
			<VTextarea
				label="Que pouvons-nous améliorer ?"
				hide-details
				color="primary"
				variant="outlined"
				class="mb-4"
			/>

			<VSelect
				:items="selectItems"
				label="Comment avez-vous connu ce service ?"
				hide-details
				color="primary"
				variant="outlined"
				class="mb-6"
			/>

			<EmotionPicker
				v-model="finalRating"
				:item-labels="[
					'À améliorer',
					'Neutre',
					'Géniale'
				]"
				label="Que pensez-vous de notre enquête de satisfaction ?"
				class="mb-4"
			/>
			{{ finalRating }}

			<div class="d-flex">
				<VSpacer />

				<VBtn
					right
					color="primary"
				>
					Terminé
				</VBtn>
			</div>
		</RatingPicker>
	</PageContainer>
</template>

<script lang="ts">
import {defineComponent} from "vue";
import {
	PageContainer,
	RatingPicker
} from "@cnamts/synapse-bridge";
import AppHeader from "@/views/commons/AppHeader.vue";

export default defineComponent({
	components: {
		AppHeader,
		PageContainer,
		RatingPicker
	},
	data() {
		return {
			v: -1,
			v1: -1,
			v2: -1,
			v3: -1,
			v4: -1,
			v5: -1,
			selectItems: [
				'Via une recherche internet',
				'Via un professionnel de santé',
				'Via un ami'
			],
			finalRating: -1
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

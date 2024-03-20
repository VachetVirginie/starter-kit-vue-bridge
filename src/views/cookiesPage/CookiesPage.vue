<template>
	<CookiesPage :items="cookiesList" />
</template>

<script lang="ts">
import {defineComponent} from "vue";
import {
	CookiesPage, TypeEnum
} from "@cnamts/synapse-bridge";

import type { CookiesPageItems } from '@cnamts/synapse-bridge/src/templates/CookiesPage/types';

export default defineComponent({
	components: {
		CookiesPage,
	},
	data() {
		return {
			cookiesList: {
				[TypeEnum.ESSENTIALS]: [
					{
						name: 'session',
						description: 'Sauvegarde la session pour rester connecté.',
						conservation: '20 heures',
					},
					{
						name: 'cookie_policy',
						description: 'Sauvegarde les préférences de cookies.',
						conservation: '1 an',
					},
				],
				[TypeEnum.FUNCTIONAL]: [
					{
						name: 'contrast',
						description: 'Sauvegarde la personnalisation de l’affichage.',
						conservation: '1 an',
					},
				],
				[TypeEnum.ANALYTICS]: [
					{
						name: 'user_id',
						description: 'Sauvegarde l’identifiant unique de visiteur.',
						conservation: '6 mois',
					},
				]
			} satisfies CookiesPageItems
		}
	}
});
</script>

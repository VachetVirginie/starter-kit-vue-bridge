<template>
	<PaginatedTable
		:headers="headers"
		:items="peoples"
		:items-per-page="5"
		v-model:options="options"
	>
		<template v-slot:header.lastname="{ column }">
			{{ column.title.toUpperCase() }}
		</template>
	</PaginatedTable>

	<br /><br />

	<PaginatedTable
		:headers="headers"
		:items="users"
		v-model:options="options"
		:server-items-length="totalUsers"
		:loading="state === StateEnum.PENDING"
		suffix="api-example"
		@update:options="fetchData"
	/>
</template>

<script lang="ts">
import {defineComponent} from "vue";
import {
	PaginatedTable,
} from "@cnamts/synapse-bridge";

import { StateEnum } from '@cnamts/synapse-bridge/constants/enums/StateEnum';
import type { DataOptions } from "@cnamts/synapse-bridge/src/patterns/PaginatedTable/types";

interface User {
	[key: string]: string;
	firstname: string;
	lastname: string;
	email: string;
}

interface DataObj {
	items: User[];
	total: number;
}

export default defineComponent({
	components: {
		PaginatedTable,
	},
	data() {
		return {
			StateEnum: StateEnum,

			totalUsers: 0,
			users: [] as User[],
			options: {} as DataOptions,

			state: StateEnum.IDLE,

			headers: [
				{
					title: 'Nom',
					key: 'lastname'
				},
				{
					title: 'Prénom',
					key: 'firstname'
				},
				{
					title: 'Email',
					key: 'email'
				}
			],

			peoples: [
				{
					firstname: 'Virginie',
					lastname: 'Beauchesne',
					email: 'virginie.beauchesne@example.com'
				},
				{
					firstname: 'Simone',
					lastname: 'Bellefeuille',
					email: 'simone.bellefeuille@example.com'
				},
				{
					firstname: 'Étienne',
					lastname: 'Salois',
					email: 'etienne.salois@example.com'
				},
				{
					firstname: 'Bernadette',
					lastname: 'Langelier',
					email: 'bernadette.langelier@example.com'
				},
				{
					firstname: 'Agate',
					lastname: 'Roy',
					email: 'agate.roy@example.com'
				},
				{
					firstname: 'Louis',
					lastname: 'Denis',
					email: 'louis.denis@example.com'
				},
				{
					firstname: 'Édith',
					lastname: 'Cartier',
					email: 'edith.cartier@example.com'
				},
				{
					firstname: 'Alphonse',
					lastname: 'Bouvier',
					email: 'alphonse.bouvier@example.com'
				},
				{
					firstname: 'Eustache',
					lastname: 'Dubois',
					email: 'eustache.dubois@example.com'
				},
				{
					firstname: 'Rosemarie',
					lastname: 'Quessy',
					email: 'rosemarie.quessy@example.com'
				}
			]
		};
	},

	methods: {
		async fetchData(): Promise<void> {
			const { items, total } = await this.getDataFromApi(this.options);

			this.users = items;
			this.totalUsers = total;
		},

		async wait(ms: number) {
			return new Promise(resolve => {
				setTimeout(resolve, ms);
			});
		},

		/**
		 * This function returns a promise
		 * After 1 second, it will return an API-like object
		 *
		 * It handles sorting and pagination
		 */
		async getDataFromApi({ sortBy, sortDesc, page, itemsPerPage }: DataOptions): Promise<DataObj> {
			this.state = StateEnum.PENDING;

			await this.wait(1000);

			return new Promise((resolve) => {
				let items: User[] = this.getUsers();
				const total = items.length;

				// Sorting algorithm
				if (sortBy) {
					items = items.sort((a, b) => {
						const sortA = a[sortBy[0]];
						const sortB = b[sortBy[0]];

						if (sortDesc) {
							if (sortA < sortB) {
								return 1;
							}

							if (sortA > sortB) {
								return -1;
							}

							return 0;
						} else {
							if (sortA < sortB) {
								return -1;
							}

							if (sortA > sortB) {
								return 1;
							}

							return 0;
						}
					});
				}

				// Pagination
				if (itemsPerPage > 0) {
					items = items.slice((page - 1) * itemsPerPage, page * itemsPerPage);
				}

				resolve({
					items,
					total
				});

				this.state = StateEnum.RESOLVED;
			});
		},

		getUsers(): User[] {
			return [
				{
					firstname: 'Virginie',
					lastname: 'Beauchesne',
					email: 'virginie.beauchesne@example.com'
				},
				{
					firstname: 'Simone',
					lastname: 'Bellefeuille',
					email: 'simone.bellefeuille@example.com'
				},
				{
					firstname: 'Étienne',
					lastname: 'Salois',
					email: 'etienne.salois@example.com'
				},
				{
					firstname: 'Bernadette',
					lastname: 'Langelier',
					email: 'bernadette.langelier@example.com'
				},
				{
					firstname: 'Agate',
					lastname: 'Roy',
					email: 'agate.roy@example.com'
				},
				{
					firstname: 'Louis',
					lastname: 'Denis',
					email: 'louis.denis@example.com'
				},
				{
					firstname: 'Édith',
					lastname: 'Cartier',
					email: 'edith.cartier@example.com'
				},
				{
					firstname: 'Alphonse',
					lastname: 'Bouvier',
					email: 'alphonse.bouvier@example.com'
				},
				{
					firstname: 'Eustache',
					lastname: 'Dubois',
					email: 'eustache.dubois@example.com'
				},
				{
					firstname: 'Rosemarie',
					lastname: 'Quessy',
					email: 'rosemarie.quessy@example.com'
				},
				{
					firstname: 'Serge',
					lastname: 'Rivard',
					email: 'serge.rivard@example.com'
				},
				{
					firstname: 'Jacques',
					lastname: 'Demers',
					email: 'jacques.demers@example.com'
				},
				{
					firstname: 'Aimée',
					lastname: 'Josseaume',
					email: 'aimee.josseaume@example.com'
				},
				{
					firstname: 'Delphine',
					lastname: 'Robillard',
					email: 'delphine.robillard@example.com'
				},
				{
					firstname: 'Alexandre',
					lastname: 'Lazure',
					email: 'alexandre.lazure@example.com'
				}
			];
		}
	}
});
</script>

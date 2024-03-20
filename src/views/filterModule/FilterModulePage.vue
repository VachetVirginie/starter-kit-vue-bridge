<template>
	<VDataTable
		:headers="headers"
		:items="filteredItem"
		:search="search"
		hide-default-footer
	>
		<template #top>
			<TableToolbar
				v-model:search="search"
				:nb-total="items.length"
			>
				<template #search-left>
					<FilterModule
						:filters="filters"
						class="mr-4"
						@filter-list="displayFilters"
					/>
				</template>
			</TableToolbar>
		</template>
	</VDataTable>
	<FilterModule :filters="filters2"/>
</template>

<script lang="ts">
import {defineComponent} from "vue";
import {
	TableToolbar,
	FilterModule
} from "@cnamts/synapse-bridge";
import { Field } from '@cnamts/synapse-bridge/src/form-builder/FormField/types';
import { DataTableHeaders } from '@cnamts/synapse-bridge/src/patterns/PaginatedTable/types';
interface TableItem {
	[key: string]: string;
	firstname: string;
	lastname: string;
	email: string;
}
export default defineComponent({
	components: {
		TableToolbar,
		FilterModule
	},
	data() {
		return {
			search: '' as string | undefined,
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
			] as DataTableHeaders[],
			items: [
				{
					firstname: 'Virginie',
					lastname: 'Beauchesne',
					email: 'virginie.beauchesne@example.com'
				},
				{
					firstname: 'Étienne',
					lastname: 'Salois',
					email: 'etienne.salois@example.com'
				}
			] as TableItem[],
			filteredItem: [] as TableItem[],
			filters: [
				{
					type: 'text',
					value: null,
					fieldOptions: {
						variant: 'outlined',
						hideDetails: true,
						key: 'lastname',
						label: 'Nom',
						filterTitle: 'Nom'
					}
				},
				{
					type: 'text',
					value: null,
					fieldOptions: {
						variant: 'outlined',
						hideDetails: true,
						key: 'firstname',
						label: 'Prénom',
						filterTitle: 'Prénom'
					}
				}
			] as Field[],
			filters2: [
				{
					type: 'select',
					multiple: true,
					dynamic: true,
					items: [
						{
							text: 'Email',
							value: 'email'
						},
						{
							text: 'Courrier',
							value: 'mail'
						},
						{
							text: 'SMS',
							value: 'sms'
						}
					],
					value: null,
					fieldOptions: {
						variant: 'outlined',
						label: 'Moyen de contact',
						filterTitle: 'Moyen de contact'
					}
				},
				{
					type: 'range',
					min: 0,
					max: 100,
					value: null,
					fieldOptions: {
						variant: 'outlined',
						filterTitle: 'Intervalle'
					}
				},
				{
					type: 'text',
					value: null,
					fieldOptions: {
						variant: 'outlined',
						hideDetails: true,
						label: 'Nom',
						filterTitle: 'Nom'
					}
				}
			] as Field[],
		}
	},
	mounted() {
		this.filteredItem = this.items;
	},
	methods: {
		displayFilters(filters: Field[]): void {
			console.log('event', filters);
			if (filters.length === 0) {
				this.filteredItem = this.items;
				return;
			}
			filters.forEach(({ value, fieldOptions }: Field) => {
				if (value === null || !fieldOptions) {
					return;
				}
				this.filteredItem = this.items.filter(element => {
					const itemValue = element[fieldOptions.key as string];
					const filterValue = value as string;
					return itemValue?.toLowerCase().match(filterValue.toLowerCase());
				});
			});
		}
	}
});
</script>

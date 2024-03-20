<template>
	<h1>Basique</h1>
	<UploadWorkflow
		v-model="selectedFiles"
		:file-list-items="fileListItems"
	/>

	<br /><br />

	<h1>Un seul fichier</h1>
	<UploadWorkflow
		v-model="selectedFiles"
		:file-list-items="fileListItems2"
	/>

	<br /><br />

	<h1>Événements</h1>
	<UploadWorkflow
		v-model="selectedFiles"
		:file-list-items="fileListItems3"
		show-view-btn
		:vuetify-options="vuetifyOptions"
		@change="valueUpdated"
		@error="showError"
	/>

	<br /><br />

	<h1>Mode sélection libre</h1>
	<UploadWorkflow v-model="freeFiles" />

	<br /><br />

	<h1>Prévisualisation des fichiers</h1>
	<UploadWorkflow
		v-model="selectedFiles"
		:file-list-items="fileListItems"
		show-file-preview
		show-view-btn
	/>

	<br /><br />

	<h1>Slots</h1>
	<UploadWorkflow
		v-model="selectedFiles"
		:file-list-items="fileListItems"
		show-file-preview
	>
		<template #title>
			<h3 class="title font-weight-bold">
				Documents à sélectionner
			</h3>
		</template>

		<template #modal-title>
			<h4 class="title font-weight-bold">
				Sélectionnez le type du fichier
			</h4>
		</template>

		<template #modal-description>
			<p class="mb-6">Veuillez vérifier que le document correspond bien à l'assuré concerné.</p>
		</template>
	</UploadWorkflow>

	<VSnackbar
		v-model="snackbar"
		:color="snackbarColor"
	>
		{{ snackbarText }}

		<template v-slot:actions>
			<VBtn
				variant="text"
				@click="snackbar = false"
			>
				Fermer
			</VBtn>
		</template>
	</VSnackbar>
</template>

<script lang="ts">
import {defineComponent} from "vue";
import {
	UploadWorkflow,
} from "@cnamts/synapse-bridge";
import { FileListItem, SelectedFile } from '@cnamts/synapse-bridge/src/patterns/UploadWorkflow/types';
import { ErrorEvent, ErrorCodesType } from '@cnamts/synapse-bridge/src/patterns/FileUpload/types';
export default defineComponent({
	components: {
		UploadWorkflow,
	},
	data() {
		return {
			selectedFiles: [] as File[],
			fileListItems: [
				{
					id: 'rib',
					title: 'RIB'
				},
				{
					id: 'idCard',
					title: 'Carte d’identité recto / verso'
				},
				{
					id: 'passport',
					title: 'Passeport'
				}
			] as FileListItem[],
			fileListItems2: [
				{
					id: 'rib',
					title: 'RIB'
				}
			] as FileListItem[],
			fileListItems3: [
				{
					id: 'rib',
					title: 'RIB'
				},
				{
					id: 'idCard',
					title: 'Carte d’identité recto / verso',
					optional: true
				}
			] as FileListItem[],
			freeFiles: [] as File[],
			vuetifyOptions: {
				fileUpload: {
					allowedExtensions: [
						'png',
						'jpg',
						'jpeg'
					]
				}
			},
			snackbar: false,
			snackbarText: null as string | null | undefined,
			snackbarColor: 'success',
			errorsText: {
				MULTIPLE_FILES_SELECTED: 'Vous ne pouvez sélectionner qu’un seul fichier.',
				FILE_TOO_LARGE: 'Le fichier sélectionné est trop lourd.',
				FILE_EXTENSION_NOT_ALLOWED: 'L’extension du fichier n’est pas autorisée.'
			} as ErrorCodesType,
		};
	},
	methods: {
		showError(error: ErrorEvent): void {
			this.snackbarText = this.errorsText[error.code];
			this.snackbarColor = 'error';
			this.snackbar = true;
		},
		valueUpdated(fileList: SelectedFile[]): void {
			const file = fileList[fileList.length - 1];
			if (!file) {
				return;
			}
			this.snackbarText = `Le fichier "${file.title}" a été ajouté avec succès.`;
			this.snackbarColor = 'success';
			this.snackbar = true;
		}
	}
});
</script>

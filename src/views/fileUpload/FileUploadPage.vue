<template>
	<div>
		<FileUpload v-model="file1" :class="{ 'mb-8': file1 !== null }" />
		<FilePreview :file="file1" />
		<FilePreview :file="file2" :options="options" />
		<FilePreview :file="file3" />
		<FilePreview :file="file3">
			<template #default>
				Ce format ne convient pas.
			</template>
		</FilePreview>

		<br /><br />

		<FileUpload multiple @update:model-value="console.log" />
		<FileUpload v-model="file1" no-ripple />
		<FileUpload v-model="file1" disabled />

		<br /><br />

		<FileUpload
			v-model="file1"
			v-bind="props"
			@error="showError"
			@change="valueUpdated"
		/>

		<VSnackbar
			v-if="snackbarText"
			v-model="snackbar"
			:color="snackbarColor"
		>
			{{ snackbarText }}

			<template #actions>
				<VBtn
					variant="text"
					@click="snackbar = false"
				>
					Fermer
				</VBtn>
			</template>
		</VSnackbar>

		<br /><br />

		<FileUpload v-model="file1">
			<template #icon>
				<VIcon
					large
					color="primary"
				>
					{{ downloadIcon }}
				</VIcon>
			</template>

			<template #action-text>
				Glissez un fichier ici
			</template>

			<template #or>
				Sinon
			</template>

			<template #button-text>
				Sélectionnez un fichier
			</template>

			<template #info-text>
				Fichier PDF de 1 Mo maximum accepté
			</template>
		</FileUpload>

		<br /><br />

		<FileUpload class="bg-accent elevation-3 px-4 py-3">
			<template #placeholder>
				<span class="d-flex align-center text-white">
					<VIcon
						size="25"
						color="white"
						class="icon mr-4"
					>
						{{ uploadIcon }}
					</VIcon>

					Sélectionner un fichier
				</span>
			</template>
		</FileUpload>
	</div>
</template>

<script lang="ts">
import {defineComponent} from "vue";
import {
	FileUpload,
	FilePreview
} from "@cnamts/synapse-bridge";
import { ErrorEvent, ErrorCodesType } from '@cnamts/synapse-bridge/src/patterns/FileUpload/types';
import { mdiFileUpload, mdiCloudUpload } from '@mdi/js';
export default defineComponent({
	components: {
		FileUpload,
		FilePreview
	},
	data() {
		return {
			file1: null as File | null,
			file2: null as Blob | null,
			file3: new File(['exemple'], 'example.txt'),
			options: {
				image: {
					alt: "Photo de paysage montagneux du site Picsum.",
					width: "100%"
				},
			},
			snackbar: false as boolean,
			snackbarText: null as string | null,
			snackbarColor: 'success',
			props: {
				fileSizeMax: 4096 * 1024,
				fileSizeUnits: [
					'o',
					'Ko',
					'Mo'
				],
				allowedExtensions: [
					'pdf'
				]
			},
			errorsText: {
				MULTIPLE_FILES_SELECTED: 'Vous ne pouvez sélectionner qu’un seul fichier.',
				FILE_TOO_LARGE: 'Le fichier sélectionné est trop volumineux.',
				FILE_EXTENSION_NOT_ALLOWED: 'L’extension du fichier sélectionné n’est pas autorisée.'
			} as ErrorCodesType,
			downloadIcon: mdiFileUpload,
			uploadIcon: mdiCloudUpload
		};
	},
	mounted() {
		fetch("https://picsum.photos/seed/picsum/750/350")
			.then((res) => res.blob())
			.then((blob) => (this.file2 = blob));
	},
	methods: {
		showError(error: ErrorEvent): void {
			this.snackbarText = this.errorsText[error.code] || error.code;
			this.snackbarColor = 'error';
			this.snackbar = true;
		},
		valueUpdated(file: File): void {
			this.snackbarText =  `Le fichier "${file.name}" a été accepté.`;
			this.snackbarColor = 'success';
			this.snackbar = true;
		}
	}
});
</script>

<style lang="scss" scoped>
.icon {
	flex: none;
}
.text-white {
	color: white;
}
</style>

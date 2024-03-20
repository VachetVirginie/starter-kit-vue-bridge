<template>
	<PageContainer class="h-35">
		<h2>Back Btn</h2>
		<div class="d-flex justify-sm-space-between">
			<BackBtn />
			<VSheet color="primary" class="pa-4">
				<BackBtn dark />
			</VSheet>

			<BackBtn>
				<template #default> Précédent </template>

				<template #icon>
					<VIcon>
						{{ backIcon }}
					</VIcon>
				</template>
			</BackBtn>
		</div>
		<h2>User Menu Btn</h2>
		<div class="d-flex justify-sm-space-between">
			<UserMenuBtn
				additional-information="Information supplémentaire"
				full-name="Virginie Beauchesne"
			/>
			<UserMenuBtn full-name="Édith Cartier">
				<VListItem
					v-for="(item, index) in items"
					:key="index"
				>
					<VListItemTitle>{{ item }}</VListItemTitle>
				</VListItem>
			</UserMenuBtn>
			<br/><br/>
			<UserMenuBtn
				additional-information="Information supplémentaire"
				full-name="Virginie Beauchesne"
				mobile-version
			/>
			<br/><br/>
			<UserMenuBtn
				:vuetify-options="vuetifyOptionsUserMenuBtn"
				full-name="Édith Cartier"
			>
				<VListItem
					v-for="(item, index) in items"
					:key="index"
				>
					<VListItemTitle>{{ item }}</VListItemTitle>
				</VListItem>
			</UserMenuBtn>
		</div>
		<h2>France connect Btn</h2>
		<div class="d-flex justify-sm-space-between">
			<FranceConnectBtn href="https://app.franceconnect.gouv.fr/" />
			<br />
			<FranceConnectBtn
				connect-plus
				href="https://app.franceconnect.gouv.fr/"
			/>
		</div>
		<h2>CopyBtn</h2>
		<div class="d-flex justify-sm-space-between">
		<CopyBtn
			label="Copier le numéro de dossier"
			text-to-copy="example-2"
		/>
			<CopyBtn
				label="Copier le numéro de dossier"
				:text-to-copy="() => 'example-1'"
			/>

			<CopyBtn
				label="Copier le numéro de dossier"
				text-to-copy="example-2"
			/>

			<CopyBtn
				label="Copier le numéro de patient"
				text-to-copy="example-3"
				hide-tooltip
			/>

			<CopyBtn
				:tooltip-duration="5000"
				label="Copier le numéro de patient"
				text-to-copy="example-4"
			/>

			<CopyBtn
				label="Copier le numéro de ticket"
				text-to-copy="example-6"
			>
				<template #icon>
					<VIcon>
						{{ mdiContentDuplicate }}
					</VIcon>
				</template>

				<template #tooltip>
					Le texte a bien été copié
				</template>
			</CopyBtn>

			<CopyBtn
				:vuetify-options="vuetifyOptions"
				label="Copier le numéro d'utilisateur"
				text-to-copy="example-5"
			/>
		</div>
		<h2>DownLoad Btn</h2>
		<div>
			<DownloadBtn
				notification="Super !"
				:file-promise="getFileFromApi"
				:fallback-filename="fallbackFilename"
			>
				Télécharger mon attestation
			</DownloadBtn>

			<DownloadBtn
				:file-promise="getFileFromApi"
				:vuetify-options="vuetifyOptions"
				:outlined="false"
				tile
				color="white"
				width="396px"
				class="text-primary"
			>
				<VIcon
					color="grey"
					class="flex-shrink-0 mr-2"
					:class="{ 'd-none': $vuetify.display.smAndDown }"
				>
					{{ fileIcon }}
				</VIcon>

				justificatif.txt

				<VSpacer class="ml-2" />

				<VIcon
					color="primary"
					class="flex-shrink-0"
				>
					{{ downloadIcon }}
				</VIcon>
			</DownloadBtn>

			<NotificationBar />
		</div>
	</PageContainer>
	<FooterBar
		hide-a11y-link
		hide-cgu-link
		hide-cookies-link
		hide-legal-notice-link
		hide-sitemap-link
	>
		<p class="text--secondary mb-0">Contenu supplémentaire.</p>
	</FooterBar>
</template>

<script lang="ts">
import {defineComponent} from "vue";
import { mdiContentDuplicate, mdiChevronLeft, mdiDownload, mdiFile } from "@mdi/js";
import {
	PageContainer,
	UserMenuBtn,
	BackBtn,
	FranceConnectBtn,
	CopyBtn,
	BackToTopBtn,
	DownloadBtn,
	NotificationBar
} from "@cnamts/synapse-bridge";
import {AxiosResponse} from "axios";

const file: AxiosResponse<Blob> = {
	data: new Blob(['test'], { type: 'text/plain' }),
	status: 200,
	statusText: 'OK',
	headers: {
		'content-type': 'text/plain'
	},
	config: {
		headers: {
			'Accept': 'application/json, text/plain, */*'
		} as any
	}
};
export default defineComponent({
	components: {
		PageContainer,
		UserMenuBtn,
		BackBtn,
		FranceConnectBtn,
		CopyBtn,
		BackToTopBtn,
		DownloadBtn,
		NotificationBar
	},
	data() {
		return {
			downloadIcon: mdiDownload,
			fileIcon: mdiFile,

			vuetifyOptions: {
				icon: {
					class: 'd-none'
				},
				btn: {
					height: 'auto',
					minHeight: '56px'
				}
			},
			useFallback: true,
			backIcon:mdiChevronLeft,
			items: [
				'Administration',
				'Profil',
				'Paramètres'
			],
			vuetifyOptions: {
				menu: {
					location: 'bottom center',
					offset: 2
				},
				btn: {
					density: 'default'
				},
				icon: {
					color: 'indigo'
				}
			},
			vuetifyOptionsUserMenuBtn: {
				menu: {
					minWidth: '264px',
					maxWidth: '264px'
				},
				btn: {
					variant: 'outlined',
				},
				icon: {
					color: 'primary'
				},
				logoutIcon: {
					class: 'd-none'
				}
			},
		}
	},
	computed: {
		fallbackFilename(): string {
			return this.useFallback ? 'test.txt' : '';
		}
	},
	methods: {
		getFileFromApi(): Promise<AxiosResponse<Blob>> {
			return new Promise((resolve) => {
				setTimeout(() => resolve(file), 1500);
			});
		},
	}
});
</script>

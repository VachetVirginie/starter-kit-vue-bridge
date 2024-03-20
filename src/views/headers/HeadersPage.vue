<template>
<h3>Loading</h3>
	<HeaderLoading />
	<br />
	<HeaderLoading width="300px" />
	<br />

	<HeaderBar>
		<template #brand-content>
			<h1 class="text-caption text-md-h6 font-weight-medium text-green">
				Pharmacies de garde
			</h1>
		</template>
	</HeaderBar>
	<HeaderBar theme="risque-pro" />
	<HeaderBar theme="compte-entreprise" />
	<HeaderBar theme="cnam" />
	<HeaderBar theme="ameli" />
	<HeaderBar theme="ameli-pro" />
	<HeaderBar theme="compte-ameli" />
	<HeaderBar service-sub-title="Documentation du Design System" service-title="Design System" />
	<HeaderBar>
		<template #brand-content>
			<h1 class="text-caption text-md-h6 font-weight-medium text-green">
				Pharmacies de garde
			</h1>
		</template>
	</HeaderBar>
	<HeaderBar mobile-version />
	<HeaderBar :vuetify-options="vuetifyOptions" />
	<HeaderBar>
		<template #navigation-bar-content>
			<h1 class="text-body-2 text-sm-subtitle-1">
				Déclaration de maintien à domicile
			</h1>
		</template>
	</HeaderBar>
	<HeaderBar>
		<template #secondary-logo>
			<img src="https://www.msa.fr/lfp/o/z80-msa-rwd-theme/images/logo.svg" alt="MSA : Santé, Famille, Retraite, Services" width="115px" height="52px" class="ml-8 my-auto">
		</template>
	</HeaderBar>
	<HeaderBar>
		<UserMenuBtn full-name="Édith Cartier">
			<VListItem v-for="(item, index) in menuBtnItems" :key="index">
				<VListItemTitle>{{ item }}</VListItemTitle>
			</VListItem>
		</UserMenuBtn>
	</HeaderBar>
	<HeaderBar>
		<template #navigation-bar-secondary-content>
			<VBtn color="white" variant="text" class="px-1">
				Besoin d’aide ?
			</VBtn>
		</template>
	</HeaderBar>
	<HeaderBar mobile-version>
		<template #navigation-drawer-prepend>
			<BackBtn dark class="mb-6" />
		</template>

		<template #navigation-drawer-append>
			<VSpacer />

			<VBtn color="white" variant="outlined" class="w-100">
				Connexion
			</VBtn>
		</template>
	</HeaderBar>
	<HeaderBar sticky />
	<p class="pa-8">
		{{ generateFakeWords(4000).join(' ')}}
	</p>
	<FooterBar hide-a11y-link hide-cgu-link hide-cookies-link hide-legal-notice-link hide-sitemap-link>
		<p class="text--secondary mb-0">Contenu supplémentaire.</p>
	</FooterBar>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import {
	BackBtn,
	FooterBar,
	HeaderBar,
	HeaderLoading,
	UserMenuBtn
} from "@cnamts/synapse-bridge";

export default defineComponent({
	components: {
		HeaderBar,
		HeaderLoading,
		FooterBar,
		UserMenuBtn,
		BackBtn,
	},
	data() {
		return {
			menuBtnItems: [
				'Profil',
				'Paramètres',
				'Administration'
			],
			vuetifyOptions: {
				appBar: {
					rounded: true,
				}
			},
		}
	},
	computed: {
	},
	methods: {
		generateFakeWords(count: number) {
			return Array.from({ length: count }, () => Array.from({ length: Math.floor(Math.random() * 3) + 1 }, () => ['b', 'c', 'd', 'f', 'g', 'h', 'j', 'k', 'l', 'm', 'n', 'p', 'q', 'r', 's', 't', 'v', 'w', 'x', 'y', 'z'][Math.floor(Math.random() * 21)] + ['a', 'e', 'i', 'o', 'u'][Math.floor(Math.random() * 5)]).join(''));
		}
	}
});
</script>

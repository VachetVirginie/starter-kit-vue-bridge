<template>
	<PageContainer>
		<div class="d-flex flex-wrap align-center justify-center ma-n2">
			<NotificationBar v-show="showNotificationBar1">
				<template #action>
					<VBtn
						variant="outlined"
						color="white"
						@click="removeNotification1"
					>
						2ème action
					</VBtn>
				</template>
			</NotificationBar>

			<NotificationBar
				v-show="showNotificationBar2"
				type="error"
				bottom
			/>

			<VBtn
				color="primary"
				class="ma-2 mt-12"
				@click="createNotification1"
			>
				Envoyer une notification 1
			</VBtn>

			<VBtn
				color="primary"
				class="ma-2 mt-12"
				@click="createNotification2"
			>
				Envoyer une notification 2
			</VBtn>

			<VBtn
				color="primary"
				variant="outlined"
				class="ma-2 mt-12"
				@click="removeNotification"
			>
				Supprimer les notifications
			</VBtn>
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

import {
	PageContainer,
	HeaderBar,
	FooterBar,
	DataList,
	DataListGroup,
	UserMenuBtn,
	DialogBox,
	FooterWrapper,
	SubHeader,
	FranceConnectBtn,
	CopyBtn,
	Logo,
	HeaderLoading,
	BackToTopBtn,
	CookieBanner,
	CookiesPage,
	LogoBrandSection,
	ChipList,
	NotificationBar,
	ErrorPage,
	MaintenancePage,
	NotFoundPage,
	PasswordField,
	DatePicker,
	PeriodField
} from "@cnamts/synapse-bridge";
import {mapActions, mapGetters} from "vuex";
import AppHeader from "@/views/commons/AppHeader.vue";

export default defineComponent({
	components: {
		AppHeader,
		PageContainer,
		HeaderBar,
		FooterBar,
		UserMenuBtn,
		DialogBox,
		DataList,
		DataListGroup,
		FooterWrapper,
		SubHeader,
		FranceConnectBtn,
		CopyBtn,
		Logo,
		HeaderLoading,
		BackToTopBtn,
		CookieBanner,
		CookiesPage,
		LogoBrandSection,
		ChipList,
		NotificationBar,
		ErrorPage,
		MaintenancePage,
		NotFoundPage,
		PasswordField,
		DatePicker,
		PeriodField
	},
	data() {
		return {
		}
	},
	computed: {
		...mapGetters('notification', {
			notification: 'notification',
		}),
		showNotificationBar1(): boolean {
			return this.notification?.ref === "1";
		},
		showNotificationBar2(): boolean {
			return this.notification?.ref === "2";
		}
	},
	methods: {
		...mapActions('notification', {
			dispatchNotification: 'addNotification',
			dispatchClearNotification: 'clearNotification',
		}),
		createNotification1(): void {
			this.dispatchNotification({
				ref: "1",
				type: 'info',
				message: 'Exemple de notification 1.',
			})
		},
		createNotification2(): void {
			this.dispatchNotification({
				ref: "2",
				type: 'warning',
				message: 'Exemple de notification 2.',
			})
		},
		removeNotification(): void {
			this.dispatchClearNotification();
		},
		removeNotification1(): void {
			this.dispatchClearNotification();
		}
	}
});
</script>

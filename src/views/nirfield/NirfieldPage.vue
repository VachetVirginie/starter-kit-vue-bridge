<template>
	<PageContainer>
		<v-row class="mx-12 my-12">
			<v-col cols="6">
				<NirField
					:nir-length="13"
					outlined
					required
					tooltip="Tooltip infos"
				/>
				<NirField
					:nir-length="13"
					required
					tooltip="Tooltip infos"
				/>
				<NirField
					:nir-length="13"
					tooltip="Tooltip infos"
				/>
				<NirField
					@update:model-value="getValue"
					:nir-length="13"
				/>
				Value: {{ value }}
			</v-col>
			<v-col cols="6">
				<NirField
					required
					tooltip="Tooltip infos"
					outlined
				/>
				<NirField
					required
					tooltip="Tooltip infos"
				/>
				<NirField
					tooltip="Tooltip infos"
				/>
				<NirField @update:model-value="getValue" />
				<p>Value:{{ value }}</p>
			</v-col>
		</v-row>
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
	PeriodField, NirField
} from "@cnamts/synapse-bridge";
import AppHeader from "@/views/commons/AppHeader.vue";

export default defineComponent({
	components: {
		AppHeader,
		NirField,
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
			value: "",
		}
	},
	computed: {
	},
	methods: {
		getValue(event: string) {
			this.value = event;
		},
	}
});
</script>

<template>
	<PageContainer>
		<div class="mt-4 my-4 d-flex justify-sm-space-around">
			<div>
				<h3>Basique</h3>
				<PeriodField v-model="date"/>
				<p>Date saisie : {{ date }}</p>
				<h3>No-prepend-icon</h3>
				<PeriodField v-model="date" no-prepend-icon />
				<p>Date saisie : {{ date }}</p
				>
				<h3>Append</h3>
				<PeriodField v-model="date" append-icon />
				<p>Date saisie : {{ date }}</p>
				<h3>Outlined</h3>
				<PeriodField v-model="date" outlined/>
				<p>Date saisie : {{ date }}</p>
			</div>
			<div>
				<h3>Label</h3>
				<PeriodField v-model="date" label="Periode"/>
				<p>Date saisie : {{ date }}</p>
				<h3>Disabled</h3>
				<PeriodField v-model="date" disabled/>
				<p>Date saisie : {{ date }}</p>
				<PeriodField v-model="date2"/>
				<p>Date saisie : {{ date2 }}</p>
				<p>Date saisie : {{ date3 }}</p>
				<h3>Change Format DD/MM/YYYY to YYYY/MM/DD</h3>
				<PeriodField v-model="changingDate" date-format="DD/MM/yyyy" date-format-return="yyyy/MM/dd"/>
				<p>Date saisie : {{ changingDate }}</p>
			</div>
		</div>
	</PageContainer>
	<FooterBar
		hide-a11y-link
		hide-cgu-link
		hide-cookies-link
		hide-legal-notice-link
		hide-sitemap-link
	>
		<p class="text-secondary mb-0">Contenu supplémentaire.</p>
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
import dayjs from "dayjs";
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
			periodFieldDate: ['01/05/2024', '13/05/2024'],
			datePickerdate: null,
			date:[dayjs().format('DD/MM/YYYY'), dayjs().add(12, 'day').format('DD/MM/YYYY')],
			date2: [dayjs().format('DD/MM/YYYY'), dayjs().add(3, 'day').format('DD/MM/YYYY')],
			date3: [dayjs().format('DD/MM/YYYY'), dayjs().add(5, 'day').format('DD/MM/YYYY')],
			changingDate: [dayjs().format('YYYY/MM/DD'), dayjs().add(5, 'day').format('YYYY/MM/DD')]
		}
	},
	computed: {
	},
	methods: {
	}
});
</script>

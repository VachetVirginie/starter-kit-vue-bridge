<template>
<!--	<SubHeader-->
  <!--		hide-back-btn-->
  <!--		title-text="Welcome !"-->
  <!--		sub-title-text="1 69 08 75 125 456 75"/>-->
	<PageContainer>
		<div>
			<img src="../views/assets/images/synapse.webp" alt="Synapse design system illustration"/>
<!--			<div class="mt-4">-->
<!--				<h2>Logo</h2>-->
<!--				<Logo/>-->
<!--			</div>-->
<!--			<div class="bg-grey-lighten-1 mt-4 my-4">-->
<!--				<h2>HeaderLoading</h2>-->
<!--				<HeaderLoading width="300px" height="30px"/>-->
<!--			</div>-->
<!--			<div class="mt-4 my-4">-->
<!--				<h2>Logo Brand Section</h2>-->
<!--				<LogoBrandSection-->
<!--					service-sub-title="Documentation du Design System"-->
<!--					service-title="Design System"-->
<!--				/>-->
<!--			</div>-->
<!--			<div class="mt-4 my-4 bg-grey-lighten-1">-->
<!--				<h2>ChipList</h2>-->
<!--				<ChipList :items="chipItems"/>-->
<!--			</div>-->
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
	<FooterWrapper>
		<VBtn variant="tonal" class="mr-6">
			Mentions légales
		</VBtn>

		<VBtn variant="tonal" class="mr-6">
			CGU
		</VBtn>

		<VBtn variant="tonal" inert>
			Version 1.0.0
		</VBtn>
	</FooterWrapper>
</template>

<script lang="ts">
import {defineComponent} from "vue";
import { mapActions, mapGetters } from "vuex";
import { required } from "@cnamts/synapse-bridge/rules/required";
import { notAfterToday } from "@cnamts/synapse-bridge/rules/notAfterToday";
import { notBeforeToday } from "@cnamts/synapse-bridge/rules/notBeforeToday";
import dayjs from "dayjs";
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
	BackBtn,
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
		BackBtn,
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
			validRules: [required],
			warningRules: [notAfterToday, notBeforeToday],
			hint: 'Date de hint',
			active: true,
			dialog: false,
			chipItems: [
				{text: 'Item 1', value: 'item1'},
				{text: 'Item 2', value: 'item2'},
				{text: 'Item 3', value: 'item3'},
			],
			dataListItems: [
				{
					key: 'Nom',
					value: 'Dupont',
				},
				{
					key: 'Prénom',
					value: 'Paul',
				},
				{
					key: 'Date de naissance',
					value: '24/09/1970',
				},
			],
			dataListGroupItems: [
				{
					title: 'Informations patient',
					items: [
						{
							key: 'Nom',
							value: 'Dupont',
							icon: 'accountIcon',
							chip: true
						},
						{
							key: 'Prénom',
							value: 'Paul',
							icon: 'accountIcon'
						},
						{
							key: 'Date de naissance',
							value: '24/09/1970',
							icon: 'calendarIcon',
							action: 'Modifier'
						}
					]
				},
				{
					title: 'Médecin traitant',
					items: [
						{
							key: 'Nom du praticien',
							value: 'Gérard Leblanc',
							icon: 'doctorIcon'
						},

						{
							key: 'N° RPPS',
							value: 'XXXXX',
							icon: 'cardAccountIcon'
						}
					]
				},
				{
					title: 'Autres informations',
					items: [
						{
							key: 'Dernière modification',
							value: '04/06/2020',
							icon: 'editIcon'
						}
					]
				}
			],
			password: null as string | null,
			periodFieldDate: ['01/05/2024', '13/05/2024'],
			datePickerdate: null,
			date:[dayjs().format('DD/MM/YYYY'), dayjs().add(12, 'day').format('DD/MM/YYYY')],
			date2: [dayjs().format('DD/MM/YYYY'), dayjs().add(3, 'day').format('DD/MM/YYYY')],
			date3: [dayjs().format('DD/MM/YYYY'), dayjs().add(5, 'day').format('DD/MM/YYYY')],
			changingDate: [dayjs().format('YYYY/MM/DD'), dayjs().add(5, 'day').format('YYYY/MM/DD')]
		}
	},
	computed: {
		...mapGetters('notification', {
			notification: 'notification',
		}),
	},
	methods: {
		...mapActions('notification', {
			dispatchNotification: 'addNotification',
			dispatchClearNotification: 'clearNotification',
		}),
		createNotification(): void {
			this.dispatchNotification({
				type: 'info',
				message: 'Exemple de notification.',
			})
		},
		removeNotification(): void {
			this.dispatchClearNotification();
		},
		getValue(value: string): void {
			console.log(value);
		}
	}
});
</script>

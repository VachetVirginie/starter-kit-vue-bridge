const routes = [
	{
		path: '/',
		name: 'home',
		component: () => import('@/views/HomePage.vue'),
	},
	{
		name: 'tokens',
		path: '/tokens',
		component: () => import('@/views/Tokens.vue'),
	},
	{
		name: 'maintenance',
		path: '/maintenance',
		component: () => import('@/views/Maintenance.vue'),
	},
	{
		path: '/test-inva',
		name: 'Test Inva',
		component: () => import('@/views/TestInva.vue')
	},
	{
		path: '/header',
		name: 'header',
		component: () => import('@/views/headers/HeadersPage.vue')
	},
	{
		path: '/footer',
		name: 'footer',
		component: () => import('@/views/footers/FootersPage.vue')
	},
	{
		path: '/error',
		name: 'error',
		component: () => import('@/views/error/ErrorPage.vue')
	},
	{
		path: '/maintenance',
		name: 'maintenance',
		component: () => import('@/views/maintenance/MaintenancePage.vue')
	},
	{
		path: '/not-found',
		name: 'not-found',
		component: () => import('@/views/notFound/NotFoundPage.vue')
	},
	{
		path: '/btns',
		name: 'btns',
		component: () => import('@/views/buttons/ButtonsPage.vue')
	},
	{
		path: '/dialog-box',
		name: 'dialog-box',
		component: () => import('@/views/dialogBox/DialogBoxPage.vue')
	},
	{
		path: '/nirfield',
		name: 'nirfield',
		component: () => import('@/views/nirfield/NirfieldPage.vue')
	},
	{
		path: '/notification-bar',
		name: 'notification-bar',
		component: () => import('@/views/notificationBar/NotificationBarPage.vue')
	},
	{
		path: '/period-field',
		name: 'period-field',
		component: () => import('@/views/periodField/PeriodFieldPage.vue')
	},
	{
		path: '/date-picker',
		name: 'date-picker',
		component: () => import('@/views/datePicker/DatePickerPage.vue')
	},
	{
		path: '/data-list',
		name: 'data-list',
		component: () => import('@/views/dataList/dataListPage.vue')
	},
	{
		path: '/cookie-banner',
		name: 'cookie-banner',
		component: () => import('@/views/cookieBanner/cookieBannerPage.vue')
	},
	{
		path: '/cookies-page',
		name: 'cookies-page',
		component: () => import('@/views/cookiesPage/CookiesPage.vue')
	},
	{
		path: '/password-field',
		name: 'password-field',
		component: () => import('@/views/password/PasswordPage.vue')
	},
	{
		path:'/colors',
		name:'colors',
		component: () => import('@/views/colors/ColorsPage.vue')
	},
	{
		path:'/rating-picker',
		name:'rating',
		component: () => import('@/views/ratingPicker/RatingPickerPage.vue')
	},
	{
		path:'/alert-wrapper',
		name:'alert-wrapper',
		component: () => import('@/views/alertWrapper/AlertWrapperPage.vue')
	},
	{
		path:'/custom-icon',
		name:'custom-icon',
		component: () => import('@/views/customIcon/CustomIconPage.vue')
	},
	{
		path:'/external-link',
		name:'external-link',
		component: () => import('@/views/externalLink/ExternalLinkPage.vue')
	},
	{
		path:'/file-list',
		name:'file-list',
		component: () => import('@/views/fileList/FileListPage.vue')
	},
	{
		path:'/paginated-table',
		name:'paginated-table',
		component: () => import('@/views/paginatedTable/PaginatedTablePage.vue')
	},
	{
		path:'/filter-inline',
		name:'filter-inline',
		component: () => import('@/views/filtersInline/FiltersInlinePage.vue')
	},
	{
		path:'/chip-list',
		name:'chip-list',
		component: () => import('@/views/chipList/ChipListPage.vue')
	},
	{
		path:'/file-upload',
		name:'file-upload',
		component: () => import('@/views/fileUpload/FileUploadPage.vue')
	},
	{
		path:'/filter-module',
		name:'Filter module',
		component: () => import('@/views/filterModule/FilterModulePage.vue')
	},
	{
		path:'/filter-side-bar',
		name:'Filter Side Bar',
		component: () => import('@/views/filtersSidebar/FilterSideBarPage.vue')
	},
	{
		path:'/filter-side-bar',
		name:'Filter Side Bar',
		component: () => import('@/views/filtersSidebar/FilterSideBarPage.vue')
	},
	{
		path: '/footer-wrapper',
		name: 'footer-wrapper',
		component: () => import('@/views/footerWrapper/FooterWrapperPage.vue')
	},
	{
		path: '/logo',
		name: 'Logo',
		component: () => import('@/views/logo/LogoPage.vue')
	},
	{
		path: '/phone-field',
		name: 'Phone Field',
		component: () => import('@/views/phoneField/PhoneFieldPage.vue')
	},
	{
		path: '/range-field',
		name: 'Range Field',
		component: () => import('@/views/rangeField/RangeFieldPage.vue')
	},
	{
		path: '/search-list-field',
		name: 'Search List Field',
		component: () => import('@/views/searchListField/SearchListFieldPage.vue')
	},
	{
		path: '/skip-link',
		name: 'Skip Link',
		component: () => import('@/views/skipLink/SkipLinkPage.vue')
	},
	{
		path: '/subHeader',
		name: 'subHeader',
		component: () => import('@/views/subHeader/SubHeaderPage.vue')
	},
	{
		path: '/tableToolbar',
		name: 'tableToolbar',
		component: () => import('@/views/tableToolbar/TableToolbarPage.vue')
	},
	{
		path: '/uploadWorflow',
		name: 'uploadWorflow',
		component: () => import('@/views/uploadWorkflow/UploadWorkflowPage.vue')
	},
];

export default routes

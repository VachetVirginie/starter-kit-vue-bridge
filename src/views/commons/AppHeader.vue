<template>
	<HeaderBar
		service-title="Design System"
		service-sub-title="Documentation du Design System"
		:navigation-items="navigationItems"
	/>
</template>
<script setup lang="ts">
import { HeaderBar } from "@cnamts/synapse-bridge";
import routes from '@/router/';

const generateNavigationItems = () => {
	return routes.map(route => ({
		label: route.name.replace(/-/g, ' ').replace(/\b\w/g, l => l.toUpperCase()),
		to: route.path
	})).filter(item => item.to !== '/')
		.sort((a, b) => a.label.localeCompare(b.label));
};

const navigationItems = generateNavigationItems();
</script>

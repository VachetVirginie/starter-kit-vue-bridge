<template>
	<PageContainer>
		<AlertWrapper type="info">
			Il semble qu’une date de naissance erronée a été saisie,
			renseignez-vous auprès du centre qui vous a vacciné.
		</AlertWrapper>

		<br />

		<AlertWrapper type="info" outlined>
			Il semble qu’une date de naissance erronée a été saisie,
			renseignez-vous auprès du centre qui vous a vacciné.
		</AlertWrapper>

		<br />

		<AlertWrapper type="success">
			Il semble qu’une date de naissance erronée a été saisie,
			renseignez-vous auprès du centre qui vous a vacciné.
		</AlertWrapper>

		<br />

		<AlertWrapper type="success" outlined>
			Il semble qu’une date de naissance erronée a été saisie,
			renseignez-vous auprès du centre qui vous a vacciné.
		</AlertWrapper>

		<br />

		<AlertWrapper type="error" v-model="alert" dismissible>
			Il semble qu’une date de naissance erronée a été saisie,
			renseignez-vous auprès du centre qui vous a vacciné.
		</AlertWrapper>

		<br />

		<AlertWrapper type="error" outlined>
			Il semble qu’une date de naissance erronée a été saisie,
			renseignez-vous auprès du centre qui vous a vacciné.
		</AlertWrapper>

		<br />

		<AlertWrapper type="warning">
			Il semble qu’une date de naissance erronée a été saisie,
			renseignez-vous auprès du centre qui vous a vacciné.
		</AlertWrapper>

		<br />

		<AlertWrapper
			v-model="alert"
			dismissible
			outlined
			type="warning"
			class="mb-0"
		>
			Il semble qu’une date de naissance erronée a été saisie,
			renseignez-vous auprès du centre qui vous a vacciné.
		</AlertWrapper>

		<VBtn v-if="!alert" color="primary" @click="alert = true">
			Réinitialiser
		</VBtn>
	</PageContainer>
</template>

<script lang="ts">
import {defineComponent} from "vue";
import {
	PageContainer,
	HeaderBar,
	AlertWrapper,
} from "@cnamts/synapse-bridge";
import AppHeader from "@/views/commons/AppHeader.vue";

export default defineComponent({
	components: {
		AppHeader,
		PageContainer,
		HeaderBar,
		AlertWrapper,
	},
	data() {
		return {
			alert: true,
		}
	},
});
</script>

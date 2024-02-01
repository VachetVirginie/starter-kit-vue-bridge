import type { Config } from '@jest/types'

const config: Config.InitialOptions = {
	testEnvironment: 'jsdom',
	testEnvironmentOptions: {
		customExportConditions: ['node', 'node-addons']
	},
	testMatch: [
		'<rootDir>/**/tests/*.spec.ts',
		'<rootDir>/tests/unit/**/*.spec.ts'
	],
	moduleNameMapper: {
		'^@/(.*)$': '<rootDir>/$1'
	},
	transform: {
		'^.+\\.(js)$': 'babel-jest',
		'^.+\\.(ts)$': 'ts-jest',
		'^.+\\.(css|scss|png|jpg|svg)$': 'jest-transform-stub',
		'^.+\\.(vue)$': '@vue/vue3-jest'
	},
	coverageReporters: [
		'text',
		'html',
		'lcov',
		'text-summary'
	],
	coverageDirectory: '<rootDir>/tests/unit/coverage',
	collectCoverage: true,
	collectCoverageFrom: [
		'**/*.{ts,vue}',
		'!**/node_modules/**',
		'!**/*.d.ts',
		'!**/*.config.ts',
		'!**/decorators.ts',
		'!**/constants/**',
		'!**/router/**',
		'!**/main.ts',
		'!**/theme/**',
		'!**/plugins/**',
		'!**/i18n.ts',
		'!**/store/**',
		'!**/services/**',
		'!**/tests/**',
		'!**/translations/**'
	],
	globals: {
		API_URL: 'http://localhost:8080'
	}
}

export default config
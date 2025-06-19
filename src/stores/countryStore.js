// Centralized store for UI state

import { writable } from 'svelte/store';

export const countryStore = writable({
    country: null,
    isLoading: false,
    error: null,
});
// Business logic

import { countryStore } from '../stores/countryStore.js';
import * as countriesApi from '../api/countriesApi.js';

export const findCountry = async (name) => {
    if (!name || name.trim() === '') {
        countryStore.set({
            country: null,
            isLoading: false,
            error: 'Please enter country name.',
        });
        return;
    }

    countryStore.update(store => ({
        ...store,
        isLoading: true,
        error: null,
        country: null,
    }));

    try {
        const countries = await countriesApi.searchCountryByName(name.trim());

        const foundCountry = countries[0];

        countryStore.update(store => ({
            ...store,
            country: foundCountry,
        }));

    } catch (err) {
        console.error('Service: Caught error ->', err.message);
        countryStore.update(store => ({
            ...store,
            country: null,
            error: err.message,
        }));

    } finally {
        countryStore.update(store => ({ ...store, isLoading: false }));
    }
}
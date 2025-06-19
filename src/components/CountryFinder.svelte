<script>
    import { countryStore } from '../stores/countryStore.js';
    import { findCountry } from '../services/countryService.js';

    // default country
    let searchTerm = 'Ukraine';

    const handleSubmit = () => {
        findCountry(searchTerm);
    }

    import { onMount } from 'svelte';
    onMount(() => {
        handleSubmit();
    });
</script>

<div class="finder-container">
    <h1>Country finder</h1>
    <p>Enter country name and press "Find"</p>

    <form on:submit|preventDefault={handleSubmit}>
        <input
                type="text"
                bind:value={searchTerm}
                placeholder="For example, Poland"
        />
        <button type="submit" disabled={$countryStore.isLoading}>
            {#if $countryStore.isLoading}
                Searching...
            {:else}
                Find
            {/if}
        </button>
    </form>

    <div class="result-container">
        {#if $countryStore.isLoading}
            <div class="loader">Loading...</div>
        {:else if $countryStore.error}
            <div class="error">Error: {$countryStore.error}</div>
        {:else if $countryStore.country}
            <div class="country-card">
                <img src={$countryStore.country.flags.svg} alt="Прапор {$countryStore.country.name.official}" />
                <h2>{$countryStore.country.name.official}</h2>
                <p><strong>Capital:</strong> {$countryStore.country.capital[0]}</p>
                <p><strong>Population:</strong> {$countryStore.country.population.toLocaleString('uk-UA')}</p>
                <p><strong>Region:</strong> {$countryStore.country.region}</p>
            </div>
        {/if}
    </div>
</div>

<style>
    .finder-container {
        max-width: 500px;
        margin: 2rem auto;
        padding: 2rem;
        font-family: sans-serif;
        text-align: center;
        background-color: #f9f9f9;
        border-radius: 8px;
        box-shadow: 0 4px 8px rgba(0,0,0,0.1);
    }
    form {
        display: flex;
        gap: 10px;
        margin-bottom: 1.5rem;
    }
    input {
        flex-grow: 1;
        padding: 10px;
        border: 1px solid #ccc;
        border-radius: 4px;
    }
    button {
        padding: 10px 15px;
        border: none;
        background-color: #007bff;
        color: white;
        border-radius: 4px;
        cursor: pointer;
    }
    button:disabled {
        background-color: #a0a0a0;
    }
    .result-container {
        margin-top: 20px;
    }
    .error {
        color: #d9534f;
    }
    .country-card {
        text-align: left;
        border: 1px solid #eee;
        padding: 1rem;
        border-radius: 8px;
    }
    .country-card img {
        width: 100%;
        max-width: 200px;
        display: block;
        margin: 0 auto 1rem;
        border: 1px solid #ddd;
    }
</style>
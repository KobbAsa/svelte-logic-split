// Network interaction

const API_BASE_URL = 'https://restcountries.com/v3.1';

export const searchCountryByName = async (name) => {
    console.log(`API: Sending request for "${name}"...`);

    const response = await fetch(`${API_BASE_URL}/name/${name}`);

    if (!response.ok) {
        if (response.status === 404) {
            console.error('API: Server returned 404.');
            throw new Error('Country not found. Verify that you have entered the correct name.');
        }
        throw new Error('An error occurred on the server. Try again later.');
    }

    const data = await response.json();
    console.log('API: Received a successful response.');
    return data;
}
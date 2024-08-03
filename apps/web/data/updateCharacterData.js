const fs = require('fs');
const axios = require('axios');
const { JSDOM } = require('jsdom');

// Load existing character data
const filePath = 'C:\\Users\\swara\\OneDrive\\Desktop\\Theta Networks\\privroleplay1\\apps\\web\\data\\characterdata.json';
let characterData;

try {
    const fileContent = fs.readFileSync(filePath, 'utf-8');
    characterData = JSON.parse(fileContent);
} catch (err) {
    console.error('Error reading or parsing JSON file:', err);
    process.exit(1);
}

// Function to fetch character details
async function fetchCharacterDetails(characterID) {
    const url = `https://openroleplay.ai/my-characters/create?remixId=${characterID}`;
    try {
        const response = await axios.get(url);

        // Log the URL and response status
        console.log(`Fetching URL: ${url}`);
        console.log(`Response status: ${response.status}`);

        if (response.status !== 200) {
            console.error(`Failed to fetch details for characterID ${characterID}. Status: ${response.status}`);
            return { instructions: '', greetings: '' };
        }

        const dom = new JSDOM(response.data);
        const instructionsElement = dom.window.document.querySelector('textarea[name="instructions"]');
        const greetingsElement = dom.window.document.querySelector('textarea[name="greetings"]');

        // Verify if elements are found
        if (!instructionsElement) {
            console.error(`Instructions element not found for characterID ${characterID}`);
        }
        if (!greetingsElement) {
            console.error(`Greetings element not found for characterID ${characterID}`);
        }

        const instructions = instructionsElement ? instructionsElement.value : '';
        const greetings = greetingsElement ? greetingsElement.value : '';

        // Debugging statements
        console.log(`Extracted instructions for characterID ${characterID}: ${instructions}`);
        console.log(`Extracted greetings for characterID ${characterID}: ${greetings}`);

        return { instructions, greetings };
    } catch (err) {
        console.error(`Error fetching details for characterID ${characterID}:`, err);
        return { instructions: '', greetings: '' };
    }
}

// Update character data with instructions and greetings
async function updateCharacterData() {
    for (let character of characterData) {
        if (character.characterID) {
            console.log(`Fetching details for characterID: ${character.characterID}`);
            const details = await fetchCharacterDetails(character.characterID);
            character.instructions = details.instructions;
            character.greetings = details.greetings;

            // Wait for 10 seconds before processing the next character
            await new Promise(resolve => setTimeout(resolve, 10000));
        }
    }

    // Write the updated data back to the JSON file
    try {
        fs.writeFileSync(filePath, JSON.stringify(characterData, null, 4), 'utf-8');
        console.log("Updated characterdata.json successfully.");
    } catch (err) {
        console.error('Error writing to JSON file:', err);
    }
}

// Run the update
updateCharacterData();
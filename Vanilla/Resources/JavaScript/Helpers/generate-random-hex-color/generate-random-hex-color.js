/* Snippet Name: Generate Random Hex Color | Use Case: Generate a random hex color code | Description: A one-liner to generate a random hex color code. */
const randomHexColor = () => `#${Math.floor(Math.random() * 0xffffff).toString(16).padEnd(6, '0')}`;

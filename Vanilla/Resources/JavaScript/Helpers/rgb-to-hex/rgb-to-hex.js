/* Snippet Name: RGB to Hex | Use Case: Convert RGB color values to a hex string | Description: Converts RGB color values to a hex color string. */
const rgbToHex = (r, g, b) => "#" + ((1 << 24) + (r << 16) + (g << 8) + b).toString(16).slice(1);

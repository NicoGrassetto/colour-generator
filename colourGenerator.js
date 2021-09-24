/**
 * Utility function that generates equally distributed colour points on the RGB spectrum.
 * e.g. create role colours for Discord that are equally spaced and thus more distinguishable.
 * @param {Number} n The number of equally distributed colour points you want to generate.
 * @param {Number} saturation The saturation between 0 and 255.
 * @param {Number} value
 * @return {Array<String>} An array containing n strings representing hexadecimal colour values.
 */
exports.generateColours = function (n, saturation, value) {
    if (!(n >= 0 && n % 1 === 0 && Number(n) === n)) {
        throw new Error("n must be a positive integer");
    }

    const colours = [];
        for (let i = 0; i < n; i++) {
            const point_rads = i*(2*Math.PI)/n;
            const RGB_VALUES = HSVtoRGB(point_rads, saturation, value);
            colours.push(rgbToHex(RGB_VALUES.r, RGB_VALUES.g, RGB_VALUES.b))
        }
        return colours;
}

/**
 * Helper function to converts from HSV to RGB.
 * @author Parthik Gosar's with slight modification made at this address https://newbedev.com/javascript-convert-hsb-hsv-color-to-rgb-accurately
 * @param {Number} h the hue between 0 and 1.
 * @param {Number} s the saturation between 0 and 1.
 * @param {Number} v the value between 0 and 1.
 */
function HSVtoRGB (h, s, v) {
    let r, g, b, i, f, p, q, t;
    i = Math.floor(h * 6);
    f = h * 6 - i;
    p = v * (1 - s);
    q = v * (1 - f * s);
    t = v * (1 - (1 - f) * s);
    switch (i % 6) {
        case 0: r = v, g = t, b = p; break;
        case 1: r = q, g = v, b = p; break;
        case 2: r = p, g = v, b = t; break;
        case 3: r = p, g = q, b = v; break;
        case 4: r = t, g = p, b = v; break;
        case 5: r = v, g = p, b = q; break;
    }
    return {
        r: Math.round(r * 255),
        g: Math.round(g * 255),
        b: Math.round(b * 255)
    };
}

/**
 * Helper function that converts rgb values to hexadecimal format.
 * @author https://stackoverflow.com/questions/5623838/rgb-to-hex-and-hex-to-rgb/5624139#5624139
 * @param {Number} r 
 * @param {Number} g 
 * @param {Number} b 
 */
function rgbToHex(r, g, b) {
    return "#" + ((1 << 24) + (r << 16) + (g << 8) + b).toString(16).slice(1);
}
  
  
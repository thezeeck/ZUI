export const hexToRgba = (color, opacity) => {
  const newColor = color.substring(1);
  const calculate = (hex) => {
    const r = parseInt(hex.substring(0, 2), 16);
    const g = parseInt(hex.substring(2, 4), 16);
    const b = parseInt(hex.substring(4, 6), 16);
    return `rgba(${r}, ${g}, ${b}, ${opacity})`;
  }

  if (!newColor.match(/^([0-9A-Fa-f]){3}\s*$|^([0-9A-Fa-f]){6}\s*$/)) {
    console.error(`hexToRgba: the hex number ${color} is not a hex number valid ${newColor}`);
    return "red";
  }

  if (parseInt(opacity, 10) > 1) {
    console.error(`hexToRgba: the opacity must be a decimal number between 0 and 1`);
    return "red";
  }
  
  if (newColor.length === 6) {
    return calculate(newColor, opacity);
  } else {
    const completeColor = newColor.split("").reduce((acc, curr) => {
      acc += curr.repeat(2); return acc;
    }, "");
    return calculate(completeColor);
  }
}
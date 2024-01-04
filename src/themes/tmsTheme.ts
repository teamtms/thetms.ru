import { BrandVariants, Theme, createDarkTheme, createLightTheme } from '@fluentui/react-components';

const tmsTheme: BrandVariants = {
	10: "#060201",
	20: "#27100E",
	30: "#431617",
	40: "#5A191C",
	50: "#721B22",
	60: "#8B1C28",
	70: "#A51C2F",
	80: "#C01935",
	90: "#DB143B",
	100: "#E43E4D",
	110: "#EB5B5F",
	120: "#F17373",
	130: "#F68A87",
	140: "#FA9F9B",
	150: "#FEB5B0",
	160: "#FFCAC6"
}

export const tmsLightTheme: Theme = {
	...createLightTheme(tmsTheme)
}

export const tmsDarkTheme: Theme = {
	...createDarkTheme(tmsTheme)
}

tmsDarkTheme.colorBrandForeground1 = tmsTheme[110];
tmsDarkTheme.colorBrandForeground2 = tmsTheme[120];
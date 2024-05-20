export interface itheme  {
colors:{
    primaryColor:string,
    secondaryColor:string,
    primaryTextColor:string,
    secondaryTextColor:string, 
    tertiaryTextColor:string,
}
}

export interface iThemeMap{
    light:itheme;
    dark:itheme;
}

export const theme :iThemeMap={
    light:  {colors:{
        primaryColor: '#003b49',
        secondaryColor:'#f5f5f5',
        primaryTextColor:'#003b49',
        secondaryTextColor:'#f5f5f5',
        tertiaryTextColor:'#f5f5f5',
        },
    },
    dark: {
        colors:{
        primaryColor: '#f5f5f5',
        secondaryColor:'#003b49',
        primaryTextColor:'violet',
        secondaryTextColor:'lavender',
        tertiaryTextColor:'#f5f5f5',
        },
    }
};

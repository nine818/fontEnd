import React from 'react';

const ThemeContext = React.createContext({textColor: 'green'});
const {Provider: ThemProvider, Consumer: ThemeConsumer} = ThemeContext;
export {
    ThemeConsumer,
    ThemProvider
};
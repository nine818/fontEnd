import React from 'react';
import {ThemeConsumer} from './ThemeContext';

const Paragraph = (props, context) => {
    return (
        <ThemeConsumer>
            {
                (theme) => (
                    <p style={{color: theme.textColor}}>
                        {props.children}
                    </p>
                )

            }
        </ThemeConsumer>
    );
};

export default Paragraph;
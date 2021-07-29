import 'styled-components';

declare module 'styled-components' {
    export interface DefaultTheme{
        title: string;

        colors: {
            background: string,
            text: string,
            header: {
                background: string
            },
            switch: {
                primary: string,
                secondary: string
            },
            card: {
                background: string
            }
        }
    }
}
import "./App.css";

import * as React from "react";
import {CssBaseline, Grid} from "@material-ui/core";
import {createMuiTheme, MuiThemeProvider} from "@material-ui/core/styles";
import Scaffolder from "./Scaffolder";

const theme = createMuiTheme({
    palette: {
        primary: {main: "#30ACEF"},
        secondary: {main: "#a09f9f"},
        // type: 'dark',
    },
    typography: {
        allVariants: {
            color: "white"
        },
    },
});

class App extends React.PureComponent {

    public render() {
        return (
            <MuiThemeProvider theme={theme}>
                <CssBaseline/>
                <Scaffolder>
                    <Grid container={true} spacing={3}>
                    </Grid>
                </Scaffolder>
            </MuiThemeProvider>
        );
    }
}

export default App;

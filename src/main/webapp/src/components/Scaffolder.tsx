import * as React from "react";
import {AppBar, createStyles, Theme, Toolbar, Typography, withStyles, WithStyles} from "@material-ui/core";
import IconButton from "@material-ui/core/IconButton";
import GitHubIcon from '@material-ui/icons/GitHub';
import Divider from "@material-ui/core/Divider";

const styles = (theme: Theme) =>
    createStyles({
        content: {
            height: "calc(100%-64px)",
            padding: 40,
        }
    })

class Scaffolder extends React.PureComponent<WithStyles> {

    public render() {
        const {classes} = this.props;
        return (
            <React.Fragment>
                <AppBar elevation={0} position={"static"}>
                    <Toolbar>
                        <Typography variant="h4">
                            parquetViewer
                        </Typography>
                        <Divider orientation="vertical" flexItem={true}/>
                        <IconButton color={"inherit"} href={"https://github.com/TimotheBarbe/parquetViewer"}
                                    target={"_blank"}>
                            <GitHubIcon/>
                        </IconButton>
                    </Toolbar>
                </AppBar>
                <main className={classes.content}>
                    {this.props.children}
                </main>
            </React.Fragment>
        );
    }
}

export default withStyles(styles, {withTheme: true})(Scaffolder);

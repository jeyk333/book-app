import { Theme } from "@material-ui/core/styles/createMuiTheme";
export const Styles = (theme: Theme) => ({
  root: {
    width: "70%",
    margin: "30px auto",
    [theme.breakpoints.down("sm")]: {
      width: "97%",
    },
  },
  intro: {
    textAlign: "center" as const,
  },
  name: {
    fontWeight: 600,
    fontSize: 30,
  },
  subTitle: {
    fontSize: 20,
    fontWeight: 600,
    marginBottom: 20,
  },
  booksList: {
    marginTop: 30,
  },
  container: {
    display: "flex" as const,
    flexDirection: "column" as const,
    alignItems: "center" as const,
    justifyContent: "center" as const,
    position: "relative" as const,
  },
  back: {
    position: "absolute" as const,
    top: 0,
    left: 0,
    display: "flex" as const,
    alignItems: "center" as const,
    textDecoration: "none" as const,
    [theme.breakpoints.down("sm")]: {
      top: -24,
    },
  },
});

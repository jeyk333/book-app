import { Theme } from "@material-ui/core/styles/createMuiTheme";
export const Styles = (theme: Theme) => ({
  root: {
    width: "70%",
    margin: "30px auto",
    [theme.breakpoints.down("sm")]: {
      width: "97%",
    },
  },
  content: {
    width: "80%",
    margin: "0 auto",
    marginTop: 20,
    [theme.breakpoints.down("sm")]: {
      width: "100%",
    },
  },
  total: {
    borderBottom: "1px solid #ccc",
    marginBottom: 5,
  },
  heading: {
    marginBottom: 30,
    fontWeight: 600,
    fontSize: 30,
    textAlign: "center" as const,
  },
});

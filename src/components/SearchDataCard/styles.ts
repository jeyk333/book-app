import { Theme } from "@material-ui/core/styles/createMuiTheme";
export const Styles = (theme: Theme) => ({
  root: {
    display: "flex",
    alignItems: "center",
    marginBottom: 20,
  },
  details: {
    marginLeft: 10,
  },
  value: {
    fontWeight: 600,
  },
  rating: {
    "& .fa-star": {
      color: "#e8cd2e",
      fontSize: 15,
      margin: "0 2px",
    },
  },
});

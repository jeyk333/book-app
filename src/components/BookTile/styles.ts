import { Theme } from "@material-ui/core/styles/createMuiTheme";
export const Styles = (theme: Theme) => ({
  root: {
    display: "flex" as const,
    alignItems: "center" as const,
    flexDirection: "column" as const,
    justifyContent: "center" as const,
    border: "1px solid #ccc",
    padding: 10,
    "& img": {
      marginBottom: 10,
    },
    "& .fa-star": {
      color: "#e8cd2e",
      fontSize: 10,
      margin: "0 2px",
    },
  },
  description: {
    overflow: "hidden" as const,
    textOverflow: "ellipsis" as const,
    display: "-webkit-box",
    "-webkit-line-clamp": 2,
    "-webkit-box-orient": "vertical",
    width: 250,
  },
  value: {
    fontWeight: 600,
  },
});

import { Theme } from "@material-ui/core/styles/createMuiTheme";
export const Styles = (theme: Theme) => ({
  root: {
    display: "flex" as const,
    alignItems: "center" as const,
    flexDirection: "column" as const,
    justifyContent: "center" as const,
    border: "1px solid #ccc",
    padding: 10,
  },
  description: {
    // whiteSpace: "nowrap" as const,
    overflow: "hidden" as const,
    textOverflow: "ellipsis" as const,
    display: "-webkit-box",
    "-webkit-line-clamp": 2 /* number of lines to show */,
    "-webkit-box-orient": "vertical",
  },
});

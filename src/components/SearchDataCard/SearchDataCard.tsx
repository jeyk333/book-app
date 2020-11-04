import React from "react";
import { withStyles, Paper, Typography } from "@material-ui/core";
import { get } from "lodash";
import moment from "moment";
import { Styles } from "./styles";
import { dateFormat } from "../../utils";

const SearchDataCard = ({ classes, result }) => {
  return (
    <Paper key={result.id} className={classes.root}>
      <img
        src={get(result, "best_book.small_image_url")}
        alt={get(result, "best_book.title")}
      />
      <div className={classes.details}>
        <Typography className={classes.title}>
          Book Title:{" "}
          <span className={classes.value}>
            {get(result, "best_book.title")}
          </span>
        </Typography>
        <Typography className={classes.authorName}>
          Author Name:{" "}
          <span className={classes.value}>
            {get(result, "best_book.author.name")}
          </span>
        </Typography>
        <Typography className={classes.rating}>
          Rating:{" "}
          <span className={classes.value}>{get(result, "average_rating")}</span>
        </Typography>
        <Typography>
          Published on:{" "}
          <span className={classes.value}>
            {dateFormat(
              get(result, "original_publication_year"),
              get(result, "original_publication_month"),
              get(result, "original_publication_day")
            )}
          </span>
        </Typography>
      </div>
    </Paper>
  );
};

export default withStyles(Styles)(SearchDataCard);

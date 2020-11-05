import React from "react";
import { withStyles, Paper, Typography } from "@material-ui/core";
import { get } from "lodash";
import { Link } from "react-router-dom";
import { Styles } from "./styles";
import { dateFormat } from "../../utils";
import Rating from "react-rating";

type MyProps = {
  classes: any;
  result: any;
};

const SearchDataCard: React.FC<MyProps> = ({ classes, result }) => {
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
          <Link
            className={classes.value}
            to={`/author/${get(result, "best_book.author.id")}`}
          >
            {get(result, "best_book.author.name")}
          </Link>
        </Typography>
        <Typography className={classes.rating}>
          Rating:{" "}
          <Rating
            stop={5}
            emptySymbol="far fa-star fa-2x"
            fullSymbol="fas fa-star fa-2x"
            initialRating={Number(get(result, "average_rating"))}
            readonly
          />
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

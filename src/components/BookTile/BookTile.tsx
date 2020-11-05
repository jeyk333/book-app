import React from "react";
import { Typography, withStyles } from "@material-ui/core";
import { get } from "lodash";
import { Styles } from "./styles";
import Rating from "react-rating";

//Types Definition
type Book = {
  average_rating?: number;
  description?: string;
  format?: string;
  id: number;
  num_pages: number;
};

type MyType = {
  classes: any;
  book: Book;
};

const BookTile: React.FC<MyType> = ({ classes, book }) => {
  return (
    <div className={classes.root}>
      <img src={get(book, "image_url")} alt={get(book, "title")} />
      <Rating
        stop={5}
        emptySymbol="far fa-star fa-2x"
        fullSymbol="fas fa-star fa-2x"
        initialRating={Number(get(book, "average_rating"))}
        readonly
      />
      <Typography className={classes.description}>
        {get(book, "description") ? get(book, "description") : "NA"}
      </Typography>
      <a href={get(book, "link")} target="_blank">
        Read the book
      </a>

      <Typography>
        <span className={classes.value}>
          {" "}
          {get(book, "ratings_count") ? get(book, "ratings_count") : "NA"}
        </span>{" "}
        Ratings
      </Typography>
      <Typography>
        ISBN:{" "}
        <span className={classes.value}>
          {get(book, "isbn") ? get(book, "isbn") : "NA"}
        </span>
      </Typography>
      <Typography>
        <span className={classes.value}>
          {" "}
          {get(book, "text_reviews_count")
            ? get(book, "text_reviews_count")
            : "NA"}{" "}
        </span>
        Reviews
      </Typography>
      <Typography>
        Pages:{" "}
        <span className={classes.value}>
          {get(book, "num_pages") ? get(book, "num_pages") : "NA"}
        </span>
      </Typography>
      <Typography>
        Format:{" "}
        <span className={classes.value}>
          {get(book, "format") ? get(book, "format") : "NA"}
        </span>
      </Typography>
      <Typography>
        Published Year:{" "}
        <span className={classes.value}>
          {get(book, "publication_year") ? get(book, "publication_year") : "NA"}
        </span>
      </Typography>
    </div>
  );
};

export default withStyles(Styles)(BookTile);

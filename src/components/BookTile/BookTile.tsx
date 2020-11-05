import React from "react";
import { Typography, withStyles } from "@material-ui/core";
import { get } from "lodash";
import { Styles } from "./styles";

const BookTile = ({ classes, book }) => {
  return (
    <div className={classes.root}>
      <img src={get(book, "image_url")} alt={get(book, "title")} />
      <a href={get(book, "link")} target="_blank">
        Read the book
      </a>
      <Typography>{get(book, "average_rating")}</Typography>
      <Typography>{get(book, "ratings_count")}</Typography>
      <Typography className={classes.description}>
        {get(book, "description")}
      </Typography>
      <Typography>ISBN: {get(book, "isbn")}</Typography>
      <Typography>{get(book, "text_reviews_count")} Reviews</Typography>
      <Typography>Pages: {get(book, "num_pages")}</Typography>
      <Typography>Format: {get(book, "format")}</Typography>
      <Typography>Published Year: {get(book, "publication_year")}</Typography>
    </div>
  );
};

export default withStyles(Styles)(BookTile);

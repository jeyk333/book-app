import React, { useEffect } from "react";
import { Typography, withStyles, Grid } from "@material-ui/core";
import { ArrowBack } from "@material-ui/icons";
import { connect } from "react-redux";
import { get } from "lodash";
import { Link } from "react-router-dom";
import { getAuthorDetails } from "../../store/getBooks/action";
import { Styles } from "./styles";
import Header from "../../components/Header";
import { getFirstName } from "../../utils";
import BookTile from "../../components/BookTile";
import { RootState } from "../../store/reducer";

type MyProps = {
  classes: any;
  match: string;
  getAuthorDetails: () => void;
  author: any;
  loading: boolean;
};

const AuthorPage: React.FC<MyProps> = ({
  classes,
  match,
  getAuthorDetails,
  author,
  loading,
}) => {
  useEffect(() => {
    let id = match && match.params.id;
    getAuthorDetails(id);
  }, []);
  return (
    <div>
      <Header />
      <div className={classes.root}>
        {loading ? (
          <Typography align="center">Loading...</Typography>
        ) : (
          <div className={classes.container}>
            <Link to="/" className={classes.back}>
              <ArrowBack /> Go back
            </Link>
            <img
              src={get(author, "large_image_url.__cdata")}
              alt={get(author, "name")}
            />
            <div className={classes.intro}>
              <Typography className={classes.name}>
                {get(author, "name")}
              </Typography>
              <Typography>Total Fans: {get(author, "fans_count")}</Typography>
              <Typography>
                Total Followers: {get(author, "author_followers_count")}
              </Typography>
              <div
                dangerouslySetInnerHTML={{
                  __html: get(author, "about.__cdata"),
                }}
              />
              {get(author, "hometown") && (
                <Typography>Hometown: {get(author, "hometown")}</Typography>
              )}
            </div>
            <div className={classes.booksList}>
              {get(author, "name") && (
                <Typography className={classes.subTitle}>
                  {getFirstName(get(author, "name"))}'s Books
                </Typography>
              )}
              <Grid container spacing={3}>
                {get(author, "books.book") &&
                get(author, "books.book").length > 0 ? (
                  get(author, "books.book").map((book) => (
                    <Grid item xs={12} sm={12} md={6} lg={4} key={book.id}>
                      <BookTile book={book} />
                    </Grid>
                  ))
                ) : (
                  <Typography>No Books to display</Typography>
                )}
              </Grid>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

const mapStateToProps = (state: RootState) => ({
  author: state.books.Author,
  loading: state.books.AuthorLoading,
});
const mapDispatchToProps = (dispatch) => ({
  getAuthorDetails: (id: number) => dispatch(getAuthorDetails(id)),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withStyles(Styles)(AuthorPage));

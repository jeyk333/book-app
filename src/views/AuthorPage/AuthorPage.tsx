import React, { useEffect } from "react";
import { Typography, withStyles, Grid } from "@material-ui/core";
import { connect } from "react-redux";
import { get } from "lodash";
import { getAuthorDetails } from "../../store/getBooks/action";
import { Styles } from "./styles";
import Header from "../../components/Header";
import { getFirstName } from "../../utils";
import BookTile from "../../components/BookTile";

const AuthorPage = ({ classes, match, getAuthorDetails, author, loading }) => {
  useEffect(() => {
    let id = match && match.params.id;
    getAuthorDetails(id);
  }, []);
  console.log(author);
  return (
    <div>
      <Header />
      <div className={classes.root}>
        {loading ? (
          <Typography align="center">Loading...</Typography>
        ) : (
          <div>
            <Grid container spacing={3}>
              <Grid item xs={3}>
                <img
                  src={get(author, "large_image_url.__cdata")}
                  alt={get(author, "name")}
                />
              </Grid>
              <Grid item xs={9}>
                <div>
                  <Typography className={classes.name}>
                    {get(author, "name")}
                  </Typography>
                  <Typography>
                    Total Fans: {get(author, "fans_count")}
                  </Typography>
                  <Typography>
                    Total Followers: {get(author, "author_followers_count")}
                  </Typography>
                  {/* {val} */}
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
                        <Grid item xs={4} key={book.id}>
                          <BookTile book={book} />
                        </Grid>
                      ))
                    ) : (
                      <Typography>No Books to display</Typography>
                    )}
                  </Grid>
                </div>
              </Grid>
            </Grid>
          </div>
        )}
      </div>
    </div>
  );
};

const mapStateToProps = (state) => ({
  author: state.books.Author,
  loading: state.books.AuthorLoading,
});
const mapDispatchToProps = (dispatch) => ({
  getAuthorDetails: (id) => dispatch(getAuthorDetails(id)),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withStyles(Styles)(AuthorPage));

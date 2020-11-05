import React, { useEffect } from "react";
import { Typography, withStyles } from "@material-ui/core";
import { connect } from "react-redux";
import { getAuthorDetails } from "../../store/getBooks/action";
import { Styles } from "./styles";
import Header from "../../components/Header";

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
        {loading ? <Typography align="center">Loading...</Typography> : "cool"}
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

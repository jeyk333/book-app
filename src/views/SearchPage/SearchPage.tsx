import React, { useEffect, useState } from "react";
import { TextField, withStyles } from "@material-ui/core";
import { connect } from "react-redux";
import { getBooks } from "../../store/getBooks/action";
import { Styles } from "./styles";
import Header from "../../components/Header";

const SearchPage = ({ getBooks }) => {
  const [Search, setSearch] = useState("");
  useEffect(() => {
    getBooks();
  }, []);
  return (
    <div>
      <Header />
      <div>
        <TextField placeholder="Search by Book Title, Author or ISBN" />
      </div>
    </div>
  );
};

const mapStateToProps = (state) => ({
  details: state.books.Books,
});
const mapDispatchToProps = (dispatch) => ({
  getBooks: (value: string) => dispatch(getBooks(value)),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withStyles(Styles)(SearchPage));
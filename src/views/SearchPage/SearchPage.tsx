import React, { useState, useCallback } from "react";
import { TextField, Typography, withStyles } from "@material-ui/core";
import { connect } from "react-redux";
import { debounce, get } from "lodash";
import { getBooks } from "../../store/getBooks/action";
import { Styles } from "./styles";
import Header from "../../components/Header";
import SearchDataCard from "../../components/SearchDataCard";

const SearchPage = ({ classes, getBooks, details, loading }) => {
  const [Search, setSearch] = useState("");
  //   useEffect(() => {
  //     getBooks(Search);
  //   }, []);

  let debouncedSearch = useCallback(
    debounce((query) => getBooks(query), 1000),
    []
  );

  const handleChange = (e) => {
    console.log(e.target.value);
    setSearch(e.target.value);
    debouncedSearch(e.target.value);
  };

  let totalResult = get(details, "results-end");
  let results = get(details, "results.work");
  console.log(results);
  return (
    <div>
      <Header />
      <div className={classes.root}>
        <TextField
          placeholder="Search by Book Title, Author or ISBN"
          value={Search}
          onChange={handleChange}
          variant="outlined"
          fullWidth
        />
        <div className={classes.content}>
          {loading ? (
            <Typography align="center">Loading...</Typography>
          ) : (
            <>
              {results && (
                <div className={classes.results}>
                  <Typography className={classes.total}>
                    Total {totalResult} Results
                  </Typography>
                  <div className={classes.result}>
                    {results.map((result) => (
                      <SearchDataCard key={result.id} result={result} />
                    ))}
                  </div>
                </div>
              )}
            </>
          )}
        </div>
      </div>
    </div>
  );
};

const mapStateToProps = (state) => ({
  details: state.books.Books,
  loading: state.books.Loading,
});
const mapDispatchToProps = (dispatch) => ({
  getBooks: (value: string) => dispatch(getBooks(value)),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withStyles(Styles)(SearchPage));

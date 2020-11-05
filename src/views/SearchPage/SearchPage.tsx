import React, { useState, useEffect, useCallback } from "react";
import { TextField, Typography, withStyles } from "@material-ui/core";
import { connect } from "react-redux";
import { debounce, get } from "lodash";
import { getBooks, resetData } from "../../store/getBooks/action";
import { Styles } from "./styles";
import Header from "../../components/Header";
import SearchDataCard from "../../components/SearchDataCard";
import { RootState } from "../../store/reducer";

type MyProps = {
  classes: any;
  getBooks: () => void;
  details: any;
  loading: boolean;
  resetData: () => void;
};

const SearchPage: React.FC<MyProps> = ({
  classes,
  getBooks,
  details,
  loading,
  resetData,
}) => {
  const [Search, setSearch] = useState<String>("");

  useEffect(() => {
    return () => {
      resetData();
    };
  }, []);

  let debouncedSearch = useCallback(
    debounce((query) => getBooks(query), 1000),
    []
  );

  const handleChange = (e: React.SyntheticEvent<EventTarget>): void => {
    setSearch(e.target.value);
    debouncedSearch(e.target.value);
  };

  let totalResult = get(details, "results-end");
  let results = get(details, "results.work");
  return (
    <div>
      <Header />
      <div className={classes.root}>
        <Typography className={classes.heading}>
          {" "}
          Find Best Books Here
        </Typography>
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

const mapStateToProps = (state: RootState) => ({
  details: state.books.Books,
  loading: state.books.Loading,
});
const mapDispatchToProps = (dispatch) => ({
  getBooks: (value: string) => dispatch(getBooks(value)),
  resetData: () => dispatch(resetData()),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withStyles(Styles)(SearchPage));

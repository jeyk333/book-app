import { GET_BOOKS_LOADING, GET_BOOKS_SUCCESS, GET_BOOKS_ERROR } from "./types";
import axios from "axios";
import { parse } from "fast-xml-parser";

const getBooksLoading = () => ({
  type: GET_BOOKS_LOADING,
});

const getBooksSuccess = (data) => ({
  type: GET_BOOKS_SUCCESS,
  data,
});

const getBooksError = (err: any) => ({
  type: GET_BOOKS_ERROR,
  err,
});

var options = {
  attributeNamePrefix: "@_",
  attrNodeName: "attr", //default is 'false'
  textNodeName: "#text",
  ignoreAttributes: true,
  ignoreNameSpace: false,
  allowBooleanAttributes: false,
  parseNodeValue: true,
  parseAttributeValue: false,
  trimValues: true,
  cdataTagName: "__cdata", //default is 'false'
  cdataPositionChar: "\\c",
  parseTrueNumberOnly: false,
  arrayMode: false, //"strict"
  // attrValueProcessor: (val, attrName) => he.decode(val, {isAttributeValue: true}),//default is a=>a
  // tagValueProcessor : (val, tagName) => he.decode(val), //default is a=>a
  stopNodes: ["parse-me-as-string"],
};

export const getBooks = (value) => {
  return (dispatch) => {
    dispatch(getBooksLoading());
    axios
      .get(
        `https://cors-anywhere.herokuapp.com/https://www.goodreads.com/search.xml?key=RYiwC8VqkEMOz7bbwvV7A&q=${value}`
      )
      .then((resp) => {
        let parsedData = parse(resp.data, options);
        dispatch(getBooksSuccess(parsedData.GoodreadsResponse.search));
      })
      .catch((err) => {
        getBooksError(err);
        console.log(err);
      });
  };
};

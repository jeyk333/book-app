import {
  GET_BOOKS_LOADING,
  GET_BOOKS_SUCCESS,
  GET_BOOKS_ERROR,
  GET_AUTHOR_LOADING,
  GET_AUTHOR_SUCCESS,
  GET_AUTHOR_ERROR,
  RESET_DATA,
} from "./types";
import axios from "axios";
import { parse } from "fast-xml-parser";

const getBooksLoading = () => ({
  type: GET_BOOKS_LOADING,
});

const getBooksSuccess = (data: any) => ({
  type: GET_BOOKS_SUCCESS,
  data,
});

const getBooksError = (err: any) => ({
  type: GET_BOOKS_ERROR,
  err,
});

const getAuthorLoading = () => ({
  type: GET_AUTHOR_LOADING,
});

const getAuthorSuccess = (data: any) => ({
  type: GET_AUTHOR_SUCCESS,
  data,
});

const getAuthorError = (err: any) => ({
  type: GET_AUTHOR_ERROR,
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

export const getBooks = (value: string) => {
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

export const getAuthorDetails = (id: number) => {
  return (dispatch) => {
    dispatch(getAuthorLoading());
    axios
      .get(
        `https://cors-anywhere.herokuapp.com/https://www.goodreads.com/author/show/${id}?format=xml&key=RYiwC8VqkEMOz7bbwvV7A`
      )
      .then((resp) => {
        let parsedData = parse(resp.data, options);
        dispatch(getAuthorSuccess(parsedData.GoodreadsResponse.author));
      })
      .catch((err) => {
        getAuthorError(err);
        console.log(err);
      });
  };
};

export const resetData = () => ({
  type: RESET_DATA,
});

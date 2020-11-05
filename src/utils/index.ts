import moment from "moment";

type ValueType = {
  year?: number | string;
  month?: number | string;
  date?: number | string;
};

// to display published date in format
export const dateFormat = (
  year: ValueType,
  month: ValueType,
  date: ValueType
) => {
  if (year && month && date) {
    return moment(`${year}-${month}-${date}`).format("MMM Do YYYY");
  } else if (year && month) {
    return moment(`${year}-${month}`).format("MMM YYYY");
  } else if (year) {
    return year;
  } else {
    return "NA";
  }
};

//To get first name of the author
export const getFirstName = (value) => {
  let fName = value.split(" ")[0];
  return fName;
};

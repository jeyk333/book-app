import moment from "moment";

type ValueType = {
  year?: number | string;
  month?: number | string;
  date?: number | string;
};

export const dateFormat = (
  year: ValueType,
  month: ValueType,
  date: ValueType
) => {
  console.log(year, month, date);
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

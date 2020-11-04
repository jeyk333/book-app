import moment from "moment";

export const dateFormat = (year: number, month: number, date: number) => {
  console.log(year, month, date);
  if (year && month && date) {
    return moment(`${year}-${month}-${date}}`).format("MMM Do YYYY");
  } else if (year && month) {
    return moment(`${year}-${month}`).format("MMM YYYY");
  } else {
    return year;
  }
};

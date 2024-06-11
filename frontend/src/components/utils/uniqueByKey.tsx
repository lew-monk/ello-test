import { Book } from "../../data/graphModels";

export const uniqueByKey = (arr: Book[], key: keyof Book): Book[] => {
  const seen = new Set();
  return arr.filter((item) => {
    const keyValue = item[key];
    if (seen.has(keyValue)) {
      return false;
    } else {
      seen.add(keyValue);
      return true;
    }
  });
};

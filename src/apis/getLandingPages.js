import landingPages from "../db/landingPages";

const getLandingPages = () => {
  return new Promise((res, rej) => {
    if (Object.keys(landingPages).length > 0) {
      let data = [];
      Object.keys(landingPages).forEach((k) => {
        data.push(landingPages[k]);
      });
      res({ data: data, isSuccess: true });
    } else {
      rej({ data: [], isSuccess: false, message: "Unable to find courses" });
    }
  });
};

export default getLandingPages;

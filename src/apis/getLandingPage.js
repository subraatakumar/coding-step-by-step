import landingPages from "../db/landingPages";

const getLandingPage = (id) => {
  return new Promise((res, rej) => {
    const keys = Object.keys(landingPages);
    if (keys.includes(id)) {
      res({ data: landingPages[id], isSuccess: true });
    } else {
      rej({
        data: {},
        isSuccess: false,
        message: "Unable to find landing page",
      });
    }
  });
};

export default getLandingPage;

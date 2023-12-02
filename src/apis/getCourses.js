import courses from "../db/courses";

const getCourses = () => {
  return new Promise((res, rej) => {
    if (Object.keys(courses).length > 0) {
      let data = [];
      Object.keys(courses).forEach((k) => {
        data.push(courses[k]);
      });
      res({ data: data, isSuccess: true });
    } else {
      rej({ data: [], isSuccess: false, message: "Unable to find courses" });
    }
  });
};

export default getCourses;

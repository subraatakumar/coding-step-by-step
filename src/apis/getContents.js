import courseContents from "../db/courseContents";

const getContents = (courseId) => {
  return new Promise((res, rej) => {
    if (
      Object.keys(courseContents).length > 0 &&
      Object.keys(courseContents[courseId]).length > 0
    ) {
      let data = [];
      let course = courseContents[courseId];
      Object.keys(course).forEach((k) => {
        data.push(course[k]);
      });
      res({ data: data, isSuccess: true });
    } else {
      rej({
        data: [],
        isSuccess: false,
        message: "Unable to find course content",
      });
    }
  });
};

export default getContents;

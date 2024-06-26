import getUserCoursesHandler from "./apis/get_user_courses_handler";

export default {
  id: "course",
  handler: (router, directusContext) => {
    router.get("/", getUserCoursesHandler(directusContext));
  },
};

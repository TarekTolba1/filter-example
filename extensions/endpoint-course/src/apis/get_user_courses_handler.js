export default function getUserCoursesHandler(directusContext) {
  const { ItemsService } = directusContext.services;

  return async function getCourses(req, res, next) {
    try {
      const courseService = new ItemsService("course", {
        schema: req.schema,
      });
      const filter = {
        transfer_languages: {
          _or: [
            {
              publishing_status: { _eq: "published" },
            },
            {
              publishing_status: { _eq: "available_for_testing" },
            },
          ],
        },
      };

      const fields = [
        "id",
        "name",
        "transfer_languages.language",
      ];
      let courses = await courseService.readByQuery({
        filter,
        fields,
      });
      res.json(courses);
    } catch (e) {
      next(e);
    }
  };
}

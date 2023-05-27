import useCourseStore from "../app/courseStore";

const AddCourse = () => {
  const { addCourse, courses } = useCourseStore((state) => ({
    addCourse: state.addCourse,
    courses: state.courses,
  }));
  const handleAddCourse = () => {
    addCourse({
      id: 2,
      title: "english",
    });
  };
  return (
    <>
      <button onClick={handleAddCourse}>addCourse</button>
      <span>
        {courses.map((item: any, i) => {
          return <span>{item?.title}</span>;
        })}
      </span>
    </>
  );
};

export default AddCourse;

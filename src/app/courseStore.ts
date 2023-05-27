import { create } from "zustand";
import { devtools, persist } from "zustand/middleware";

const courseStore = (set: (arg0: (state: any) => any) => void) => ({
  courses: [],
  addCourse: (course: any) => {
    set((state: any) => ({
      courses: [course, ...state.courses],
    }));
  },
});

const useCourseStore = create(
  devtools(persist(courseStore, { name: "course" }))
);
export default useCourseStore;

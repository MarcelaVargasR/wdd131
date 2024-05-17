const aCourse = {
  code: "CSE121B",
  name: "Javascript Language",
  section: [
    {
      sectionNum: 1,
      roomNum: "STC 353",
      enrolled: 26,
      days: "TTh",
      instructor: "Bro T",
    },
    {
      sectionNum: 2,
      roomNum: "STC 347",
      enrolled: 28,
      days: "TTh",
      instructor: "Sis A",
    },
  ],
};

function setCourse(course) {
  aCourse.code = course.code;
  aCourse.name = course.name;
}

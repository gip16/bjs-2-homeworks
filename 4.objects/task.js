function Student(name, gender, age) {
  return {
    name,
    gender,
    age,
    marks: [],
  }
};

Student.prototype.setSubject = function(subjectName) {
  return this.subject = subjectName;
};

Student.prototype.addMarks = function(...marks) {
  if (this.hasOwnProperty(marks)) {
    return this.marks.push(...marks);
  }
};

Student.prototype.getAverage = function() {
  if (!this.hasOwnProperty(marks) || this.marks.length === 0) {
    return 0;
  }
  return this.marks.reduce((acc, mark) => acc + mark, 0) / this.marks.length;
};

Student.prototype.exclude = function(reason) {
  delete this.subject && this.marks;
  return this.excluded = reason;
};

let student1 = new Student("Василиса", "женский", 19);
console.log(student1);
student1.setSubject("Algebra");
console.log(student1.getAverage()); // 0
student1.addMarks(4, 5, 4, 5);
console.log(student1.getAverage()); // 4.5
console.log(student1);

let student2 = new Student("Артём", "мужской", 25);
student2.setSubject("Geometry");
student2.exclude('плохая учёба')
console.log(student2)
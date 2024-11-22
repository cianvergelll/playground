function studentMsg(totalScores, studentScore) {
    const average = getAverage(totalScores);
    const grade = getGrade(studentScore);
    const pass = hasPassingGrade(studentScore);
  
    if (pass === true) {
      return "Class average: " + average + ". " +  "Your grade: " + grade + ". " + "You passed the course.";
    } else {
      return "Class average: " + average + ". " +  "Your grade: " + grade + ". " + "You failed the course.";
    }
  }
  console.log(studentMsg([92, 88, 12, 77, 57, 100, 67, 38, 97, 89], 37));
  console.log(studentMsg([56, 23, 89, 42, 75, 11, 68, 34, 91, 19], 100));
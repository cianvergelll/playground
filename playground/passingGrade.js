function hasPassingGrade(score) {
    const grade = getGrade(score);
    if (grade === "A++" || grade === "A" || grade === "B" || grade === "C" || grade === "D") {
      return true;
    } else {
      return false;
    }
  }
  
  
  console.log(hasPassingGrade(100));
  console.log(hasPassingGrade(53));
  console.log(hasPassingGrade(87));
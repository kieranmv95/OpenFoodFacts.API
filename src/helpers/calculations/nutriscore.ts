import { NutriScoreGrade } from "../../types";

const nutriscore = (nutriscore: any, grade: NutriScoreGrade) => {
  return {
    grade: grade || null,
    negative_points: nutriscore?.negative_points || null,
    positive_points: nutriscore?.positive_points || null,
  };
};

export default nutriscore;

const questions = [
{
  text: "Let A = {1,2,3,4} and B = {3,4,5,6}. Find A ∩ B.",
  options: ["{1,2}", "{3,4}", "{5,6}", "{1,6}"],
  correct: 1,
  explanation: "Intersection = common elements → {3,4}"
},
{
  text: "If U = {1,2,3,4,5,6} and A = {2,4,6}, find A'.",
  options: ["{1,3,5}", "{2,4}", "{1,2,3}", "{3,5,6}"],
  correct: 0,
  explanation: "Complement = elements not in A"
},
{
  text: "Solve: x + 3 > 7",
  options: ["x > 4", "x < 4", "x ≥ 4", "x ≤ 4"],
  correct: 0,
  explanation: "x > 4"
},
{
  text: "Solve: 2x - 5 ≤ 9",
  options: ["x ≤ 7", "x ≥ 7", "x ≤ 2", "x ≥ 2"],
  correct: 0,
  explanation: "2x ≤ 14 → x ≤ 7"
},
{
  text: "If A ⊆ B and B ⊆ C, then:",
  options: ["A ⊆ C", "C ⊆ A", "A = C", "None"],
  correct: 0,
  explanation: "Transitive property"
},
{
  text: "Solve: x² - 4 < 0",
  options: ["-2 < x < 2", "x > 2", "x < -2", "All real"],
  correct: 0,
  explanation: "Between roots"
},
{
  text: "A class has 20 students: 12 like math, 8 like physics, 5 like both. How many like at least one?",
  options: ["15", "20", "25", "10"],
  correct: 0,
  explanation: "12+8-5=15"
},
{
  text: "Solve: (x-1)(x-3) ≥ 0",
  options: ["x ≤1 or x ≥3", "1<x<3", "x≥1", "x≤3"],
  correct: 0,
  explanation: "Outside roots"
},
{
  text: "If n(A)=10, n(B)=8, n(A∩B)=3, find n(A∪B)",
  options: ["15", "21", "11", "5"],
  correct: 0,
  explanation: "10+8-3=15"
},
{
  text: "Solve: |x| < 5",
  options: ["-5 < x < 5", "x>5", "x<-5", "All real"],
  correct: 0,
  explanation: "Absolute inequality"
},

// HARD WORD PROBLEM
{
  text: "In a survey, 40 students: 25 like math, 20 like physics, 10 like both. How many like neither?",
  options: ["5", "10", "15", "0"],
  correct: 0,
  explanation: "25+20-10=35 → 40-35=5"
},

{
  text: "Solve: x² - 5x + 6 ≥ 0",
  options: ["x ≤2 or x ≥3", "2<x<3", "x≥2", "x≤3"],
  correct: 0,
  explanation: "Factor → (x-2)(x-3)"
},

{
  text: "Which is empty set?",
  options: ["{0}", "{}", "{1}", "{-1}"],
  correct: 1,
  explanation: "Empty set = {}"
},

{
  text: "If A={x|x<3} and B={x|x>1}, find A∩B",
  options: ["1<x<3", "x>3", "x<1", "All real"],
  correct: 0,
  explanation: "Overlap region"
},

{
  text: "Solve: 1/(x-2) > 0",
  options: ["x>2", "x<2", "x≠2", "All real"],
  correct: 0,
  explanation: "Positive when x>2"
},

{
  text: "If A={1,2,3}, number of subsets?",
  options: ["8", "6", "3", "9"],
  correct: 0,
  explanation: "2^n = 8"
},

{
  text: "Solve: x² ≤ 9",
  options: ["-3 ≤ x ≤ 3", "x ≥3", "x ≤ -3", "All"],
  correct: 0,
  explanation: "Between roots"
},

{
  text: "Union of A and empty set is:",
  options: ["A", "Empty", "Universal", "None"],
  correct: 0,
  explanation: "A ∪ ∅ = A"
},

{
  text: "Solve: 3x+2 > 11",
  options: ["x>3", "x<3", "x≥3", "x≤3"],
  correct: 0,
  explanation: "x>3"
},

{
  text: "If A={1,2}, B={2,3}, then A-B = ?",
  options: ["{1}", "{2}", "{3}", "{}"],
  correct: 0,
  explanation: "Elements only in A"
},
{
  text: "In a class of 60 students, 35 study Mathematics, 28 study Physics, and 15 study both subjects. If every student studies at least one of the two subjects, how many students study only Physics?",
  options: ["13", "15", "20", "25"],
  correct: 0,
  explanation: "Students who study only Physics = 28 - 15 = 13."
},
{
  text: "In a survey of 80 students, 42 like football, 36 like basketball, and 18 like both. How many students like neither football nor basketball?",
  options: ["12", "18", "20", "24"],
  correct: 2,
  explanation: "n(F ∪ B) = 42 + 36 - 18 = 60. Therefore neither = 80 - 60 = 20."
},
{
  text: "Let U = {1,2,3,...,20}, A = multiples of 2 in U, and B = multiples of 3 in U. How many elements are in A ∩ B?",
  options: ["2", "3", "4", "5"],
  correct: 1,
  explanation: "A ∩ B are multiples of 6 in U: {6,12,18}. So there are 3 elements."
},
{
  text: "If A = {x | x is an integer and -2 ≤ x ≤ 5} and B = {x | x is an integer and x² < 10}, how many elements are in A ∩ B?",
  options: ["4", "5", "6", "7"],
  correct: 2,
  explanation: "A = {-2,-1,0,1,2,3,4,5}. B = {-3,-2,-1,0,1,2,3}. Intersection = {-2,-1,0,1,2,3}, which has 6 elements."
},
{
  text: "Suppose n(A)=25, n(B)=18, and n(A ∪ B)=33. How many elements are in A ∩ B?",
  options: ["8", "10", "12", "14"],
  correct: 1,
  explanation: "n(A ∩ B) = n(A) + n(B) - n(A ∪ B) = 25 + 18 - 33 = 10."
},
{
  text: "If n(U)=50, n(A)=28, n(B)=20, and n(A ∩ B)=9, how many elements are outside A ∪ B?",
  options: ["9", "10", "11", "12"],
  correct: 2,
  explanation: "n(A ∪ B) = 28 + 20 - 9 = 39. Outside = 50 - 39 = 11."
},
{
  text: "Solve the inequality 3x - 7 > 2x + 5 and choose the correct interval for x.",
  options: ["x > 12", "x < 12", "x > -12", "x < -12"],
  correct: 0,
  explanation: "3x - 7 > 2x + 5 gives x > 12."
},
{
  text: "Solve the inequality 2(3x - 1) - 5 ≤ 7x + 4.",
  options: ["x ≥ -11", "x ≤ -11", "x ≥ 11", "x ≤ 11"],
  correct: 0,
  explanation: "6x - 2 - 5 ≤ 7x + 4 gives 6x - 7 ≤ 7x + 4. Subtract 6x: -7 ≤ x + 4. Subtract 4: -11 ≤ x, so x ≥ -11."
},
{
  text: "Solve the quadratic inequality x² - 5x + 6 < 0.",
  options: ["x < 2 or x > 3", "2 < x < 3", "x ≤ 2 or x ≥ 3", "x < 1 or x > 6"],
  correct: 1,
  explanation: "x² - 5x + 6 = (x-2)(x-3). Since the parabola opens upward, it is negative between the roots. So 2 < x < 3."
},
{
  text: "Solve the quadratic inequality x² - 4x - 5 ≥ 0.",
  options: ["-1 ≤ x ≤ 5", "x ≤ -1 or x ≥ 5", "-5 ≤ x ≤ 1", "x < -1 or x < 5"],
  correct: 1,
  explanation: "x² - 4x - 5 = (x-5)(x+1). For an upward-opening parabola, expression is nonnegative outside the roots. So x ≤ -1 or x ≥ 5."
},
{
  text: "Solve the inequality |2x - 3| < 5.",
  options: ["-1 < x < 4", "-4 < x < 1", "x < -1 or x > 4", "x > -1 and x > 4"],
  correct: 0,
  explanation: "|2x-3|<5 means -5 < 2x - 3 < 5. Add 3: -2 < 2x < 8. Divide by 2: -1 < x < 4."
},
{
  text: "Solve the inequality |x + 4| ≥ 7.",
  options: ["-3 ≤ x ≤ 11", "x ≥ 3 or x ≤ -11", "x > -4 only", "x < 7 only"],
  correct: 1,
  explanation: "|x+4| ≥ 7 means x+4 ≥ 7 or x+4 ≤ -7. Hence x ≥ 3 or x ≤ -11."
},
{
  text: "Solve the rational inequality (x - 2)/(x + 1) > 0.",
  options: ["x > 2 or x < -1", "-1 < x < 2", "x > -1", "x < 2"],
  correct: 0,
  explanation: "Critical points are x = -1 and x = 2. The fraction is positive when numerator and denominator have the same sign: x > 2 or x < -1."
},
{
  text: "Solve the rational inequality (x + 3)/(x - 4) ≤ 0.",
  options: ["-3 ≤ x < 4", "x ≤ -3 or x > 4", "-3 < x < 4", "x < -3 or x ≥ 4"],
  correct: 0,
  explanation: "Critical points are -3 and 4. Test intervals: expression is negative on (-3,4), and zero at x=-3. Exclude x=4. So solution is -3 ≤ x < 4."
},
{
  text: "A school offers three clubs: Music, Debate, and Drama. 18 students are in Music, 14 in Debate, 12 in Drama, 5 in both Music and Debate, 4 in both Music and Drama, 3 in both Debate and Drama, and 2 in all three. How many students are in at least one club?",
  options: ["30", "32", "34", "36"],
  correct: 2,
  explanation: "Using inclusion-exclusion: 18 + 14 + 12 - 5 - 4 - 3 + 2 = 34."
},
{
  text: "In a town survey, 70 families use electricity, 55 use gas, and 25 use both. If 10 families use neither, how many families were surveyed in total?",
  options: ["100", "110", "120", "130"],
  correct: 1,
  explanation: "Using inclusion-exclusion, use at least one = 70 + 55 - 25 = 100. Adding 10 using neither gives total 110."
},
{
  text: "If A has 4 elements, how many proper subsets does A have?",
  options: ["8", "15", "16", "14"],
  correct: 1,
  explanation: "A set with 4 elements has 2^4 = 16 subsets. Proper subsets exclude the set itself, so 15."
},
{
  text: "Find the number of subsets of the set {1,2,3,4,5} that contain the element 1.",
  options: ["8", "16", "24", "32"],
  correct: 1,
  explanation: "Once 1 is included, each of the other 4 elements may be either included or not. So 2^4 = 16."
},
{
  text: "Solve the simultaneous inequalities 2x + 1 > 5 and 3x - 4 ≤ 8.",
  options: ["2 < x ≤ 4", "x > 2 and x ≤ 4", "x ≥ 2 and x < 4", "2 ≤ x ≤ 4"],
  correct: 1,
  explanation: "First gives x > 2. Second gives 3x ≤ 12, so x ≤ 4. Together: x > 2 and x ≤ 4."
},
{
  text: "For what values of x does x² - 6x + 8 > 0 hold?",
  options: ["2 < x < 4", "x < 2 or x > 4", "x ≤ 2 or x ≥ 4", "x > 2 only"],
  correct: 1,
  explanation: "x² - 6x + 8 = (x-2)(x-4). It is positive outside the roots, so x < 2 or x > 4."
},
{
  text: "Solve the inequality 4 - x ≥ 2x + 1.",
  options: ["x ≤ 1", "x ≥ 1", "x ≤ 3", "x ≥ 3"],
  correct: 0,
  explanation: "4 - x ≥ 2x + 1 gives 3 ≥ 3x, so x ≤ 1."
},
{
  text: "A container holds integers from 1 to 30. Set A contains all multiples of 2, set B all multiples of 5, and set C all multiples of 3. How many integers belong to A ∩ (B ∪ C)?",
  options: ["5", "6", "7", "8"],
  correct: 2,
  explanation: "A ∩ B are multiples of 10 up to 30: 10,20,30 (3 numbers). A ∩ C are multiples of 6 up to 30: 6,12,18,24,30 (5 numbers). Common to both are multiples of 30: 30 (1 number). Total = 3 + 5 - 1 = 7."
}
];
export default questions;
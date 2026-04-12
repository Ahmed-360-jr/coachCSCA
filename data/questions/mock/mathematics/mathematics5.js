const mathematics5 = [
  {
    text: "Let A = {x | x is an integer and -2 ≤ x ≤ 3} and B = {x | x is an integer and x² < 5}. Then A ∩ B equals:",
    options: ["{-2, -1, 0, 1, 2}", "{-1, 0, 1}", "{-2, -1, 0, 1, 2, 3}", "{0, 1, 2}"],
    correct: 0,
    explanation: "From x² < 5, the integer values are -2, -1, 0, 1, 2. All are also in A."
  },
  {
    text: "If U = {1, 2, 3, 4, 5, 6, 7}, A = {1, 3, 5, 7}, and B = {2, 3, 5, 6}, then (A ∪ B)' equals:",
    options: ["{3, 5}", "{1, 2, 6, 7}", "{4}", "{2, 4, 6}"],
    correct: 2,
    explanation: "A ∪ B = {1, 2, 3, 5, 6, 7}, so its complement in U is {4}."
  },
  {
    text: "If A = {1, 2, 3}, B = {2, 3, 4}, and C = {3, 4, 5}, then (A ∩ B) ∪ C equals:",
    options: ["{2, 3, 4, 5}", "{3, 4, 5}", "{2, 3}", "{1, 2, 3, 4, 5}"],
    correct: 0,
    explanation: "A ∩ B = {2, 3}, then union with C gives {2, 3, 4, 5}."
  },
  {
    text: "Solve the inequality: 2x - 3 < x + 4.",
    options: ["x < 7", "x > 7", "x < 1", "x > 1"],
    correct: 0,
    explanation: "2x - x < 4 + 3 gives x < 7."
  },
  {
    text: "Solve the inequality: x² - x - 6 ≤ 0.",
    options: ["x ≤ -2 or x ≥ 3", "-2 ≤ x ≤ 3", "-3 ≤ x ≤ 2", "x < -2 or x > 3"],
    correct: 1,
    explanation: "Factor as (x - 3)(x + 2) ≤ 0, so x lies between the roots."
  },
  {
    text: "Solve the inequality: (x - 2)(x - 5) > 0.",
    options: ["2 < x < 5", "x < 2 or x > 5", "x ≤ 2 or x ≥ 5", "x > 2"],
    correct: 1,
    explanation: "A product of two factors is positive outside the roots."
  },
  {
    text: "Solve the inequality: (x + 1)/(x - 3) < 0.",
    options: ["x < -1", "-1 < x < 3", "x > 3", "x < -1 or x > 3"],
    correct: 1,
    explanation: "The fraction is negative when numerator and denominator have opposite signs."
  },
  {
    text: "If x satisfies -1 < 2x + 1 ≤ 5, then x belongs to:",
    options: ["(-1, 2]", "(-1, 3]", "(-2, 2]", "(0, 2]"],
    correct: 0,
    explanation: "Subtract 1: -2 < 2x ≤ 4, then divide by 2."
  },
  {
    text: "If n(A) = 8, n(B) = 5, and n(A ∩ B) = 2, then n(A ∪ B) equals:",
    options: ["11", "13", "15", "10"],
    correct: 0,
    explanation: "Use n(A ∪ B) = n(A) + n(B) - n(A ∩ B) = 8 + 5 - 2."
  },
  {
    text: "Which of the following sets is empty?",
    options: ["{x | x² = 4}", "{x | x is an integer and x² + 1 = 0}", "{x | x is a natural number less than 2}", "{0}"],
    correct: 1,
    explanation: "No integer satisfies x² + 1 = 0."
  },
  {
    text: "If f(x) = 3x² - 2x + 1, then f(-1) equals:",
    options: ["6", "4", "2", "0"],
    correct: 0,
    explanation: "f(-1) = 3(1) - 2(-1) + 1 = 6."
  },
  {
    text: "The domain of f(x) = √(5 - x) is:",
    options: ["x ≥ 5", "x ≤ 5", "x < 5", "all real numbers"],
    correct: 1,
    explanation: "The expression inside the square root must be nonnegative."
  },
  {
    text: "The domain of f(x) = (x + 1)/(x² - 9) is:",
    options: ["x ≠ 3", "x ≠ -3", "x ≠ ±3", "all real numbers"],
    correct: 2,
    explanation: "The denominator is zero when x = 3 or x = -3."
  },
  {
    text: "Which of the following functions is odd?",
    options: ["f(x) = x² + 1", "f(x) = x³ - x", "f(x) = x² - x", "f(x) = |x|"],
    correct: 1,
    explanation: "Both x³ and -x are odd, and the sum of odd functions is odd."
  },
  {
    text: "Which of the following functions is even?",
    options: ["f(x) = x³ + 1", "f(x) = x² - 4", "f(x) = 2x + 3", "f(x) = x³ - x"],
    correct: 1,
    explanation: "x² - 4 satisfies f(-x) = f(x)."
  },
  {
    text: "If f(x) = 2x + 3 and g(x) = x² - 1, then (g ∘ f)(2) equals:",
    options: ["48", "47", "24", "35"],
    correct: 0,
    explanation: "f(2) = 7, then g(7) = 49 - 1 = 48."
  },
  {
    text: "If f(x) = x - 1 and g(x) = 3x + 2, then (f ∘ g)(x) equals:",
    options: ["3x + 1", "3x + 2", "3x - 1", "x + 1"],
    correct: 0,
    explanation: "f(g(x)) = (3x + 2) - 1 = 3x + 1."
  },
  {
    text: "Solve: 2^(x+1) = 16.",
    options: ["2", "3", "4", "5"],
    correct: 1,
    explanation: "16 = 2⁴, so x + 1 = 4 and x = 3."
  },
  {
    text: "Solve: log₃ 27 =",
    options: ["2", "3", "6", "9"],
    correct: 1,
    explanation: "Since 3³ = 27, log₃ 27 = 3."
  },
  {
    text: "If log₂ x = 5, then x equals:",
    options: ["10", "16", "25", "32"],
    correct: 3,
    explanation: "x = 2⁵ = 32."
  },
  {
    text: "The 8th term of the arithmetic sequence 5, 8, 11, 14, ... is:",
    options: ["24", "26", "27", "29"],
    correct: 1,
    explanation: "a₈ = 5 + 7×3 = 26."
  },
  {
    text: "The sum of the first 10 terms of the arithmetic sequence 1, 3, 5, 7, ... is:",
    options: ["90", "100", "110", "120"],
    correct: 1,
    explanation: "The sum of the first 10 odd numbers is 10² = 100."
  },
  {
    text: "The 6th term of the geometric sequence 2, 6, 18, 54, ... is:",
    options: ["324", "486", "162", "216"],
    correct: 1,
    explanation: "The common ratio is 3, so a₆ = 2 × 3⁵ = 486."
  },
  {
    text: "The sum of the first 5 terms of the geometric sequence 1, 2, 4, 8, ... is:",
    options: ["31", "30", "32", "16"],
    correct: 0,
    explanation: "1 + 2 + 4 + 8 + 16 = 31."
  },
  {
    text: "If f(x) = x³ - 2x, then f'(x) equals:",
    options: ["3x² - 2", "x² - 2", "3x - 2", "x³"],
    correct: 0,
    explanation: "Differentiate term by term."
  },
  {
    text: "If f(x) = x² + 4x - 1, then f'(x) equals:",
    options: ["x + 4", "2x + 4", "2x - 1", "x² + 4"],
    correct: 1,
    explanation: "The derivative of x² is 2x, of 4x is 4, and of -1 is 0."
  },
  {
    text: "The slope of the line through (-1, 2) and (3, 10) is:",
    options: ["1", "2", "3", "4"],
    correct: 1,
    explanation: "Slope = (10 - 2)/(3 - (-1)) = 8/4 = 2."
  },
  {
    text: "Which equation represents a line parallel to y = 2x - 5?",
    options: ["y = -2x + 1", "y = 2x + 3", "y = x + 2", "2y = x - 1"],
    correct: 1,
    explanation: "Parallel lines have the same slope."
  },
  {
    text: "The circle x² + y² - 4x + 6y + 9 = 0 has center:",
    options: ["(2, -3)", "(-2, 3)", "(4, -6)", "(-4, 6)"],
    correct: 0,
    explanation: "Rewrite as (x - 2)² + (y + 3)² = 4."
  },
  {
    text: "The radius of the circle x² + y² - 4x + 6y + 9 = 0 is:",
    options: ["1", "2", "3", "4"],
    correct: 1,
    explanation: "After completing the square, the equation becomes (x - 2)² + (y + 3)² = 4."
  },
  {
    text: "Which equation represents a parabola?",
    options: ["x² = 4y", "x² + y² = 4", "x²/4 + y²/9 = 1", "x² - y² = 1"],
    correct: 0,
    explanation: "x² = 4y is the standard form of a parabola."
  },
  {
    text: "Which equation represents an ellipse?",
    options: ["x² - y² = 1", "x²/9 + y²/4 = 1", "y = x²", "x² + y² = 9 and x ≠ 0"],
    correct: 1,
    explanation: "An ellipse has the form x²/a² + y²/b² = 1."
  },
  {
    text: "If vector a = (2, -1) and vector b = (3, 4), then 2a - b equals:",
    options: ["(1, -6)", "(1, 2)", "(4, -2)", "(7, 2)"],
    correct: 0,
    explanation: "2a = (4, -2), so 2a - b = (4 - 3, -2 - 4)."
  },
  {
    text: "The magnitude of vector (-5, 12) is:",
    options: ["13", "17", "12", "25"],
    correct: 0,
    explanation: "Magnitude = √(25 + 144) = √169 = 13."
  },
  {
    text: "If z = 4 - 3i, then z + (2 + i) equals:",
    options: ["6 - 2i", "2 - 4i", "6 + 4i", "2 + 2i"],
    correct: 0,
    explanation: "Add real and imaginary parts separately."
  },
  {
    text: "If z = 1 + i, then z² equals:",
    options: ["2i", "2", "-2", "1 + 2i"],
    correct: 0,
    explanation: "(1 + i)² = 1 + 2i + i² = 2i."
  },
  {
    text: "The distance between points (2, -1) and (5, 3) is:",
    options: ["4", "5", "6", "7"],
    correct: 1,
    explanation: "Distance = √[(5 - 2)² + (3 - (-1))²] = √(9 + 16) = 5."
  },
  {
    text: "A rectangular box has length 3, width 4, and height 5. Its volume is:",
    options: ["47", "50", "55", "60"],
    correct: 3,
    explanation: "Volume = length × width × height = 3×4×5 = 60."
  },
  {
    text: "A fair die is rolled twice. What is the probability that the same number appears both times?",
    options: ["1/36", "1/6", "5/36", "1/3"],
    correct: 1,
    explanation: "There are 6 favorable outcomes: (1,1), ..., (6,6), out of 36 total."
  },
  {
    text: "A bag contains 4 red balls and 6 blue balls. One ball is chosen at random. The probability of choosing a red ball is:",
    options: ["2/5", "3/5", "4/9", "1/2"],
    correct: 0,
    explanation: "Probability = 4/(4 + 6) = 4/10 = 2/5."
  },
  
  {
    text: "The variance of the data set 2, 2, 2, 2 is:",
    options: ["0", "1", "2", "4"],
    correct: 0,
    explanation: "All values are equal, so there is no spread."
  },
  {
    text: "If P(A) = 2/5 and P(B) = 1/2, and A and B are independent, then P(A ∩ B) equals:",
    options: ["1/5", "2/5", "1/2", "9/10"],
    correct: 0,
    explanation: "For independent events, multiply the probabilities."
  },
  {
    text: "If x + 1/x = 5, then x² + 1/x² equals:",
    options: ["21", "23", "25", "27"],
    correct: 1,
    explanation: "Square both sides: (x + 1/x)² = x² + 1/x² + 2. So 25 = x² + 1/x² + 2."
  },
  {
    text: "If a + b = 8 and ab = 12, then a² + b² equals:",
    options: ["28", "32", "40", "52"],
    correct: 2,
    explanation: "a² + b² = (a + b)² - 2ab = 64 - 24 = 40."
  },
   {
    text: "If f(x) = x² - 6x + 5, then the minimum value of f(x) is:",
    options: ["-5", "-4", "-3", "-2"],
    correct: 1,
    explanation: "Complete the square: x² - 6x + 5 = (x - 3)² - 4. Since (x - 3)² ≥ 0, the minimum value is -4."
  },
  {
    text: "Two fair dice are rolled. What is the probability that the sum is greater than 9?",
    options: ["1/6", "1/4", "5/18", "1/3"],
    correct: 0,
    explanation: "Sums greater than 9 are 10, 11, 12. They occur in 3 + 2 + 1 = 6 ways out of 36, so 1/6."
  },
  {
    text: "A class has 5 boys and 4 girls. Two students are chosen at random without replacement. What is the probability that both are girls?",
    options: ["1/9", "1/6", "2/9", "1/3"],
    correct: 1,
    explanation: "Probability = (4/9) × (3/8) = 12/72 = 1/6."
  },
  {
    text: "A box contains 3 red balls, 2 blue balls, and 1 green ball. Two balls are drawn one after another without replacement. What is the probability that both balls drawn are of the same color?",
    options: ["4/15", "1/5", "7/15", "1/3"],
    correct: 0,
    explanation: "Only red-red or blue-blue work. Red-red: (3/6)(2/5)=1/5. Blue-blue: (2/6)(1/5)=1/15. Total = 4/15."
  }
];

export default mathematics5;
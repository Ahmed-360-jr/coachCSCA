const mathematicsMock = [
  {
    text: "Let A = {1, 2, 3, 4} and B = {3, 4, 5, 6}. What is A ∩ B?",
    options: ["{1, 2}", "{3, 4}", "{5, 6}", "{1, 2, 3, 4, 5, 6}"],
    correct: 1,
    explanation: "The common elements in A and B are 3 and 4."
  },
  {
    text: "If U = {1, 2, 3, 4, 5, 6} and A = {2, 4, 6}, what is the complement of A in U?",
    options: ["{1, 3, 5}", "{2, 4, 6}", "{1, 2, 3}", "{4, 5, 6}"],
    correct: 0,
    explanation: "The complement contains elements in U that are not in A: 1, 3, 5."
  },
  {
    text: "If A = {1, 2} and B = {2, 3, 4}, what is A ∪ B?",
    options: ["{2}", "{1, 2, 3, 4}", "{1, 3, 4}", "{1, 2, 2, 3, 4}"],
    correct: 1,
    explanation: "The union contains all distinct elements from both sets."
  },
  {
    text: "Solve the inequality: 3x - 5 > 7.",
    options: ["x > 4", "x < 4", "x > 3", "x < 3"],
    correct: 0,
    explanation: "3x > 12, so x > 4."
  },
  {
    text: "Solve the inequality: x² - 5x + 6 < 0.",
    options: ["x < 2 or x > 3", "2 < x < 3", "x < 2", "x > 3"],
    correct: 1,
    explanation: "x² - 5x + 6 = (x - 2)(x - 3). The product is negative between the roots."
  },
  {
    text: "Solve the inequality: (x - 1)(x + 2) ≥ 0.",
    options: ["-2 ≤ x ≤ 1", "x ≤ -2 or x ≥ 1", "-2 < x < 1", "x ≥ -2"],
    correct: 1,
    explanation: "The product is nonnegative outside the roots, including the roots."
  },
  {
    text: "Solve the inequality: (x + 1)/(x - 2) > 0.",
    options: ["-1 < x < 2", "x < -1 or x > 2", "x > -1", "x < 2"],
    correct: 1,
    explanation: "The fraction is positive when numerator and denominator have the same sign."
  },
  {
    text: "If A ⊂ B and n(A) = 3, n(B) = 5, then n(B \\ A) equals:",
    options: ["8", "5", "3", "2"],
    correct: 3,
    explanation: "B \\ A contains elements in B not in A, so 5 - 3 = 2."
  },
  {
    text: "Which of the following is an empty set?",
    options: ["{x | x² = 1}", "{x | x is a positive integer less than 3}", "{x | x is an integer and 2 < x < 3}", "{0}"],
    correct: 2,
    explanation: "There is no integer strictly between 2 and 3."
  },
  {
    text: "If x satisfies 2 ≤ 3x + 1 ≤ 8, then x lies in:",
    options: ["[1/3, 7/3]", "[1, 7]", "[0, 3]", "[2/3, 8/3]"],
    correct: 0,
    explanation: "Subtract 1: 1 ≤ 3x ≤ 7, then divide by 3."
  },
  {
    text: "For f(x) = 2x + 3, find f(4).",
    options: ["8", "10", "11", "13"],
    correct: 2,
    explanation: "f(4) = 2(4) + 3 = 11."
  },
  {
    text: "The domain of f(x) = 1/(x - 5) is:",
    options: ["x ≠ 0", "x ≠ 5", "x > 5", "all real numbers"],
    correct: 1,
    explanation: "The denominator cannot be zero, so x ≠ 5."
  },
  {
    text: "The range of f(x) = x² is:",
    options: ["all real numbers", "x ≥ 0", "y ≥ 0", "y ≤ 0"],
    correct: 2,
    explanation: "For f(x) = x², outputs are never negative, so y ≥ 0."
  },
  {
    text: "Which function is even?",
    options: ["f(x) = x³", "f(x) = x + 1", "f(x) = x² + 2", "f(x) = 2x - 3"],
    correct: 2,
    explanation: "An even function satisfies f(-x) = f(x)."
  },
  {
    text: "Which function is odd?",
    options: ["f(x) = x³", "f(x) = x²", "f(x) = x² + 1", "f(x) = x + 2"],
    correct: 0,
    explanation: "For x³, f(-x) = -f(x), so it is odd."
  },
  {
    text: "If f(x) = 3x - 2 and g(x) = x², then (g ∘ f)(1) equals:",
    options: ["1", "4", "9", "16"],
    correct: 0,
    explanation: "f(1) = 1, then g(1) = 1."
  },
  {
    text: "Solve: 2^x = 8.",
    options: ["x = 2", "x = 3", "x = 4", "x = 8"],
    correct: 1,
    explanation: "8 = 2³, so x = 3."
  },
  {
    text: "Solve: log₂ 8 =",
    options: ["2", "3", "4", "8"],
    correct: 1,
    explanation: "Since 2³ = 8, log₂ 8 = 3."
  },
  {
    text: "The 5th term of the arithmetic sequence 2, 5, 8, 11, ... is:",
    options: ["12", "13", "14", "15"],
    correct: 2,
    explanation: "This sequence has common difference 3. The 5th term is 2 + 4×3 = 14."
  },
  {
    text: "The sum of the first 5 terms of the arithmetic sequence 1, 3, 5, 7, ... is:",
    options: ["20", "25", "30", "35"],
    correct: 1,
    explanation: "The first five odd numbers are 1, 3, 5, 7, 9; their sum is 25."
  },
  {
    text: "The 4th term of the geometric sequence 3, 6, 12, 24, ... is:",
    options: ["12", "18", "24", "48"],
    correct: 2,
    explanation: "The terms are 3, 6, 12, 24, so the 4th term is 24."
  },
  {
    text: "The sum of the first 4 terms of the geometric sequence 1, 2, 4, 8, ... is:",
    options: ["12", "14", "15", "16"],
    correct: 2,
    explanation: "1 + 2 + 4 + 8 = 15."
  },
  {
    text: "If f(x) = x², then f'(x) equals:",
    options: ["x", "2x", "x²", "2"],
    correct: 1,
    explanation: "The derivative of x² is 2x."
  },
  {
    text: "If f(x) = 5x - 1, then f'(x) equals:",
    options: ["0", "1", "5", "5x"],
    correct: 2,
    explanation: "The derivative of a linear function ax + b is a."
  },
  {
    text: "The slope of the line passing through (1, 2) and (3, 6) is:",
    options: ["1", "2", "3", "4"],
    correct: 1,
    explanation: "Slope = (6 - 2)/(3 - 1) = 4/2 = 2."
  },
  {
    text: "Which equation represents a line with slope 3 and y-intercept -2?",
    options: ["y = 3x - 2", "y = -2x + 3", "y = 3x + 2", "y = x - 2"],
    correct: 0,
    explanation: "Slope-intercept form is y = mx + b."
  },
  {
    text: "The equation x² + y² = 9 represents a:",
    options: ["line", "circle", "parabola", "ellipse"],
    correct: 1,
    explanation: "x² + y² = r² is a circle centered at the origin with radius 3."
  },
  {
    text: "The radius of the circle x² + y² = 16 is:",
    options: ["2", "4", "8", "16"],
    correct: 1,
    explanation: "Since r² = 16, the radius is 4."
  },
  {
    text: "Which equation represents a parabola?",
    options: ["x² + y² = 1", "y = x²", "x²/4 + y²/9 = 1", "x/2 + y/3 = 1"],
    correct: 1,
    explanation: "y = x² is the standard shape of a parabola."
  },
  {
    text: "Which equation represents a hyperbola?",
    options: ["x² + y² = 4", "y = 2x + 1", "x²/9 - y²/4 = 1", "x²/9 + y²/4 = 1"],
    correct: 2,
    explanation: "A hyperbola has subtraction in its standard form."
  },
  {
    text: "Which equation represents an ellipse?",
    options: ["x²/4 + y²/9 = 1", "x² - y² = 1", "y = x²", "x + y = 1"],
    correct: 0,
    explanation: "An ellipse has the form x²/a² + y²/b² = 1."
  },
  {
    text: "If vector a = (2, 3) and vector b = (1, -1), then a + b equals:",
    options: ["(3, 2)", "(1, 4)", "(2, -3)", "(3, -2)"],
    correct: 0,
    explanation: "Add corresponding components: (2+1, 3+(-1)) = (3, 2)."
  },
  {
    text: "The magnitude of vector (3, 4) is:",
    options: ["5", "6", "7", "25"],
    correct: 0,
    explanation: "Magnitude = √(3² + 4²) = √25 = 5."
  },
  {
    text: "If z = 3 + 4i, then its real part is:",
    options: ["4", "3", "i", "-4"],
    correct: 1,
    explanation: "In z = a + bi, the real part is a."
  },
  {
    text: "If z = 2 + 3i and w = 1 - i, then z + w equals:",
    options: ["3 + 2i", "1 + 4i", "3 + 4i", "2 + 2i"],
    correct: 0,
    explanation: "Add real parts and imaginary parts separately."
  },
  {
    text: "Compute i².",
    options: ["1", "-1", "i", "-i"],
    correct: 1,
    explanation: "By definition, i² = -1."
  },
  {
    text: "The distance between points (0, 0) and (6, 8) is:",
    options: ["10", "12", "14", "15"],
    correct: 0,
    explanation: "Distance = √(6² + 8²) = √100 = 10."
  },
  {
    text: "In three-dimensional coordinates, the point (2, -1, 3) has z-coordinate:",
    options: ["2", "-1", "3", "0"],
    correct: 2,
    explanation: "The z-coordinate is the third number."
  },
  {
    text: "A box has length 2, width 3, and height 4. Its volume is:",
    options: ["9", "18", "24", "48"],
    correct: 2,
    explanation: "Volume = length × width × height = 2×3×4 = 24."
  },
  {
    text: "A fair coin is tossed once. The probability of getting heads is:",
    options: ["0", "1/4", "1/2", "1"],
    correct: 2,
    explanation: "A fair coin has two equally likely outcomes."
  },
  {
    text: "A fair die is rolled once. What is the probability of getting an even number?",
    options: ["1/6", "1/3", "1/2", "2/3"],
    correct: 2,
    explanation: "Even outcomes are 2, 4, 6, so 3 out of 6 outcomes."
  },
  {
    text: "A bag contains 3 red balls and 2 blue balls. One ball is chosen at random. What is the probability it is red?",
    options: ["2/5", "3/5", "1/2", "3/2"],
    correct: 1,
    explanation: "There are 3 red balls out of 5 total."
  },
  {
    text: "The mean of 2, 4, 6, 8 is:",
    options: ["4", "5", "6", "7"],
    correct: 1,
    explanation: "Mean = (2 + 4 + 6 + 8)/4 = 20/4 = 5."
  },
 
  {
    text: "The mode of 2, 3, 3, 4, 5 is:",
    options: ["2", "3", "4", "5"],
    correct: 1,
    explanation: "The most frequent value is 3."
  },
  {
    text: "If the variance of a data set is 0, then:",
    options: ["all values are equal", "all values are positive", "the mean is 0", "there are two values only"],
    correct: 0,
    explanation: "Variance 0 means there is no spread, so all values are the same."
  },
  {
    text: "If events A and B are mutually exclusive, then P(A ∩ B) equals:",
    options: ["0", "1", "P(A)", "P(B)"],
    correct: 0,
    explanation: "Mutually exclusive events cannot happen together."
  },
  {
    text: "For a normal distribution, the graph is generally:",
    options: ["triangular", "bell-shaped and symmetric", "a straight line", "rectangular"],
    correct: 1,
    explanation: "The normal distribution is bell-shaped and symmetric about the mean."
  },
  {
    text: "If the probability of an event is 0.2, then the probability that it does not occur is:",
    options: ["0.2", "0.5", "0.8", "1.2"],
    correct: 2,
    explanation: "Complement probability = 1 - 0.2 = 0.8."
  }
];

export default mathematicsMock;
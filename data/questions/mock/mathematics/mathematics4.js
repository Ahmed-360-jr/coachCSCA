const mathematics4 = [
  {
    text: "If A = {x | x is an integer, 1 ≤ x ≤ 5} and B = {2, 4, 6}, find A ∩ B.",
    options: ["{2, 4}", "{1, 2, 3}", "{4, 6}", "{2, 6}"],
    correct: 0,
    explanation: "Common elements are 2 and 4."
  },
  {
    text: "If A = {1, 3, 5} and B = {1, 2, 3, 4}, find A ∪ B.",
    options: ["{1, 2, 3, 4, 5}", "{1, 3}", "{2, 4}", "{1, 2, 3, 4}"],
    correct: 0,
    explanation: "Union combines all unique elements."
  },
  {
    text: "Solve: 2x + 3 ≤ 11.",
    options: ["x ≤ 4", "x ≥ 4", "x ≤ 3", "x ≥ 3"],
    correct: 0,
    explanation: "2x ≤ 8 → x ≤ 4."
  },
  {
    text: "Solve: x² - 4 < 0.",
    options: ["-2 < x < 2", "x > 2", "x < -2", "x ≥ 2"],
    correct: 0,
    explanation: "x² < 4 → -2 < x < 2."
  },
  {
    text: "Solve: (x - 3)(x + 1) ≥ 0.",
    options: ["x ≤ -1 or x ≥ 3", "-1 ≤ x ≤ 3", "x ≥ -1", "x ≤ 3"],
    correct: 0,
    explanation: "Product ≥ 0 outside roots."
  },
  {
    text: "If f(x) = x² - 1, find f(2).",
    options: ["2", "3", "4", "5"],
    correct: 1,
    explanation: "2² - 1 = 3."
  },
  {
    text: "Domain of f(x) = √(x - 2).",
    options: ["x ≥ 2", "x > 2", "x ≤ 2", "all real x"],
    correct: 0,
    explanation: "Inside root ≥ 0."
  },
  {
    text: "If f(x) = 1/x, domain is:",
    options: ["x ≠ 0", "x ≥ 0", "x > 0", "all real"],
    correct: 0,
    explanation: "Denominator ≠ 0."
  },
  {
    text: "Which is increasing?",
    options: ["f(x)=x", "f(x)=x²", "f(x)=-x", "f(x)=-x²"],
    correct: 0,
    explanation: "x increases everywhere."
  },
  {
    text: "Solve: 3^x = 27.",
    options: ["x=2", "x=3", "x=4", "x=5"],
    correct: 1,
    explanation: "27 = 3³."
  },

  // ---------- FUNCTIONS ----------
  {
    text: "If f(x)=2x+1 and g(x)=x², find g(f(1)).",
    options: ["9", "4", "1", "16"],
    correct: 0,
    explanation: "f(1)=3 → g(3)=9."
  },
  {
    text: "Which function is even?",
    options: ["x²", "x³", "x+1", "2x"],
    correct: 0,
    explanation: "Even: f(-x)=f(x)."
  },
  {
    text: "Arithmetic sequence: 3,6,9,... Find 6th term.",
    options: ["15", "18", "21", "24"],
    correct: 1,
    explanation: "a6 = 3 + 5×3 = 18."
  },
  {
    text: "Sum of first 4 terms: 2,4,6,8.",
    options: ["16", "18", "20", "24"],
    correct: 2,
    explanation: "Sum = 20."
  },
  {
    text: "Geometric: 2,4,8,... Find 5th term.",
    options: ["16", "32", "64", "128"],
    correct: 1,
    explanation: "2×2⁴ = 32."
  },
  {
    text: "If f(x)=x³, derivative is:",
    options: ["3x²", "x²", "3x", "x³"],
    correct: 0,
    explanation: "Power rule."
  },

  // ---------- GEOMETRY ----------
  {
    text: "Slope between (1,2) and (3,6).",
    options: ["1", "2", "3", "4"],
    correct: 1,
    explanation: "(6-2)/(3-1)=2."
  },
  {
    text: "Equation of circle radius 5:",
    options: ["x²+y²=25", "x²+y²=10", "x²+y²=5", "x²+y²=50"],
    correct: 0,
    explanation: "r²=25."
  },
  {
    text: "Vector (3,4) magnitude:",
    options: ["5", "6", "7", "25"],
    correct: 0,
    explanation: "√(9+16)=5."
  },
  {
    text: "i² equals:",
    options: ["1", "-1", "i", "-i"],
    correct: 1,
    explanation: "Definition."
  },

  // ---------- PROBABILITY ----------
  {
    text: "Probability of even from die:",
    options: ["1/3", "1/2", "2/3", "1"],
    correct: 1,
    explanation: "3/6 = 1/2."
  },
  {
    text: "Mean of 1,3,5:",
    options: ["2", "3", "4", "5"],
    correct: 1,
    explanation: "Mean = 3."
  },

  // ---------- THINKER SECTION (42–48) ----------
  {
    text: "If P(A)=1/2, P(B)=1/3 and independent, find P(A∩B).",
    options: ["1/6", "2/3", "1/5", "1/2"],
    correct: 0,
    explanation: "Multiply independent events."
  },
  {
    text: "If x + 1/x = 3, find x² + 1/x².",
    options: ["5", "7", "9", "11"],
    correct: 1,
    explanation: "(x+1/x)² = x²+1/x²+2 → 9 = x²+1/x²+2."
  },
  {
    text: "A sequence satisfies aₙ = 2aₙ₋₁, a₁=1. Find a₅.",
    options: ["8", "16", "32", "64"],
    correct: 1,
    explanation: "Geometric: 2⁴=16."
  },
  {
    text: "If f(x)=x²−4x+3, minimum value is:",
    options: ["-1", "0", "1", "2"],
    correct: 0,
    explanation: "Vertex gives -1."
  },
  {
    text: "Two dice: probability sum = 7.",
    options: ["1/6", "1/12", "1/36", "1/3"],
    correct: 0,
    explanation: "6 favorable outcomes."
  },
  {
    text: "If log₂(x)=3, find x.",
    options: ["6", "8", "9", "12"],
    correct: 1,
    explanation: "2³=8."
  },
  {
    text: "If a+b=5 and ab=6, find a²+b².",
    options: ["13", "25", "17", "19"],
    correct: 0,
    explanation: "(a+b)²-2ab=25-12=13."
  },
  {
    text: "Equation x²/9 + y²/4 = 1 represents:",
    options: ["Circle", "Ellipse", "Hyperbola", "Parabola"],
    correct: 1,
    explanation: "Sum of squares = ellipse."
  },
  {
    text: "Equation x² - y² = 1 represents:",
    options: ["Ellipse", "Circle", "Hyperbola", "Line"],
    correct: 2,
    explanation: "Difference of squares = hyperbola."
  },
  {
    text: "Vector (1,2) + (3,4) equals:",
    options: ["(4,6)", "(3,6)", "(4,5)", "(2,6)"],
    correct: 0,
    explanation: "Add components."
  },
  {
    text: "If z = 2 + 3i and w = 1 + i, find z - w.",
    options: ["1 + 2i", "3 + 4i", "1 + i", "2 + 2i"],
    correct: 0,
    explanation: "(2-1) + (3-1)i = 1+2i."
  },
  {
    text: "Distance between (1,1) and (4,5):",
    options: ["3", "4", "5", "6"],
    correct: 2,
    explanation: "√[(3)²+(4)²]=5."
  },
  {
    text: "Volume of cube side 3:",
    options: ["9", "18", "27", "36"],
    correct: 2,
    explanation: "3³ = 27."
  },

  // ---- PROBABILITY ----
  {
    text: "Probability of getting head twice in two coin tosses:",
    options: ["1/2", "1/3", "1/4", "1/8"],
    correct: 2,
    explanation: "HH only → 1/4."
  },
  {
    text: "Probability of odd number from die:",
    options: ["1/6", "1/2", "2/3", "3/4"],
    correct: 1,
    explanation: "3 odd outcomes."
  },
  {
    text: "Mean of 2,4,6,8:",
    options: ["4", "5", "6", "7"],
    correct: 1,
    explanation: "Mean = 5."
  },
  {
    text: "Median of 3,5,7:",
    options: ["3", "5", "7", "6"],
    correct: 1,
    explanation: "Middle value."
  },
  {
    text: "Mode of 1,2,2,3:",
    options: ["1", "2", "3", "0"],
    correct: 1,
    explanation: "2 appears most."
  },

  // ---- THINKER ZONE (42–48) 🔥 ----
  {
    text: "If P(A)=1/2 and P(B)=1/2 and independent, find P(A∪B).",
    options: ["1/4", "1/2", "3/4", "1"],
    correct: 2,
    explanation: "P(A)+P(B)-P(A)P(B)=1/2+1/2-1/4=3/4."
  },
  {
    text: "If x + 1/x = 4, find x² + 1/x².",
    options: ["14", "16", "18", "20"],
    correct: 0,
    explanation: "(x+1/x)² = x²+1/x²+2 → 16 = x²+1/x²+2."
  },
  {
    text: "If a+b=7 and ab=10, find a²+b².",
    options: ["29", "39", "49", "19"],
    correct: 0,
    explanation: "(a+b)²-2ab = 49-20 = 29."
  },
  {
    text: "If f(x)=x²-6x+9, minimum value is:",
    options: ["0", "1", "3", "9"],
    correct: 0,
    explanation: "(x-3)² ≥ 0."
  },
  {
    text: "Sum of first 5 terms of 2,4,8,...",
    options: ["30", "62", "60", "64"],
    correct: 1,
    explanation: "2+4+8+16+32=62."
  },
  {
    text: "Two dice: probability sum = 8.",
    options: ["1/6", "5/36", "1/12", "1/9"],
    correct: 1,
    explanation: "5 combinations."
  },
  {
    text: "If log₃(x)=2, find x.",
    options: ["6", "8", "9", "12"],
    correct: 2,
    explanation: "3²=9."
  },
  {
  text: "A box contains 3 red balls, 2 blue balls, and 1 green ball. Two balls are drawn one after another without replacement. What is the probability that both balls drawn are of the same color?",
  options: ["4/15", "1/5", "7/15", "1/3"],
  correct: 0,
  explanation: "Total ways = 6×5. Favorable: red-red (3×2)=6, blue-blue (2×1)=2. Total favorable = 8. Probability = 8/30 = 4/15."
}
];

export default mathematics4;
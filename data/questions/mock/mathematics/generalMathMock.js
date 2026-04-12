const questions = [
    {
        text: "Solve the inequality x² - 7x + 10 > 0.",
        options: ["(2, 5)", "(-∞, 2) ∪ (5, +∞)", "(-∞, 2] ∪ [5, +∞)", "[2, 5]"],
        correct: 1,
        explanation: "Factor the quadratic: x² - 7x + 10 = (x - 2)(x - 5). A product is positive outside the roots, so x < 2 or x > 5."
    },
    {
        text: "If log₂(x - 1) = 3, find x.",
        options: ["7", "8", "9", "10"],
        correct: 2,
        explanation: "log₂(x - 1) = 3 means x - 1 = 2³ = 8, so x = 9."
    },
    {
        text: "Find the value of sin²30° + cos²30°.",
        options: ["0", "1/2", "1", "2"],
        correct: 2,
        explanation: "Using the identity sin²θ + cos²θ = 1 for any angle θ, the value is 1."
    },
    {
        text: "If f(x) = 2x² - 3x + 1, find f(2).",
        options: ["1", "2", "3", "4"],
        correct: 2,
        explanation: "Substitute x = 2: f(2) = 2(2²) - 3(2) + 1 = 8 - 6 + 1 = 3."
    },
{
text: "Find the sum of the first 20 terms of the arithmetic sequence 3, 7, 11, ...",
options: ["760", "820", "860", "900"],
correct: 1,
explanation: "a = 3, d = 4, n = 20. The 20th term is 3 + 19×4 = 79. Sum = n/2(a + l) = 20/2(3 + 79) = 10×82 = 820."
},
{
        text: "Which of the following is the correct value of tan 45°?",
        options: ["0", "1", "√2", "undefined"],
        correct: 1,
        explanation: "tan 45° = 1."
    },
    {
        text: "If 3x - 5 = 16, find x.",
        options: ["5", "6", "7", "8"],
        correct: 2,
        explanation: "Add 5 to both sides: 3x = 21. Divide by 3: x = 7."
    },
    {
        text: "Find the domain of y = √(5 - x).",
        options: ["x < 5", "x ≤ 5", "x > 5", "x ≥ 5"],
        correct: 1,
        explanation: "For a square root, the expression inside must be non-negative: 5 - x ≥ 0, so x ≤ 5."
    },
    {
        text: "If the nth term of an arithmetic sequence is aₙ = 4n - 1, find a₁₀.",
        options: ["35", "36", "37", "39"],
        correct: 3,
        explanation: "Substitute n = 10: a₁₀ = 4(10) - 1 = 39."
    },
    {
        text: "Find the equation of the line with slope 3 passing through (1, 2).",
        options: ["y = 3x - 1", "y = 3x + 1", "y = x + 3", "y = 2x + 1"],
        correct: 0,
        explanation: "Use point-slope form: y - 2 = 3(x - 1). Simplify to y = 3x - 1."
    },
    {
        text: "If cos θ = 4/5 and θ is acute, find sin θ.",
        options: ["3/5", "4/5", "5/4", "1/5"],
        correct: 0,
        explanation: "Use sin²θ + cos²θ = 1. sin θ = √(1 - 16/25) = √(9/25) = 3/5."
    },
    {
        text: "Solve x² = 49.",
        options: ["7 only", "-7 only", "±7", "0"],
        correct: 2,
        explanation: "If x² = 49, then x = ±7."
    },
    {
        text: "Find the midpoint of the line segment joining (2, 3) and (6, 7).",
        options: ["(4, 5)", "(3, 4)", "(8, 10)", "(2, 2)"],
        correct: 0,
        explanation: "Midpoint = ((2+6)/2, (3+7)/2) = (4, 5)."
    },
    {
        text: "If log₁₀ 1000 = x, find x.",
        options: ["2", "3", "10", "1000"],
        correct: 1,
        explanation: "10³ = 1000, so log₁₀ 1000 = 3."
    },
    {
        text: "Find the common ratio of the geometric sequence 5, 15, 45, ...",
        options: ["2", "3", "5", "15"],
        correct: 1,
        explanation: "Divide a term by the previous one: 15/5 = 3 and 45/15 = 3."
    },
    {
        text: "If y = x³, find y when x = -2.",
        options: ["-8", "-6", "6", "8"],
        correct: 0,
        explanation: "(-2)³ = -8."
    },
    {
        text: "Find the distance between (0, 0) and (3, 4).",
        options: ["4", "5", "6", "7"],
        correct: 1,
        explanation: "Distance = √(3² + 4²) = √25 = 5."
    },
    {
        text: "If 2ˣ = 32, find x.",
        options: ["4", "5", "6", "7"],
        correct: 1,
        explanation: "Since 2⁵ = 32, x = 5."
    },
    {
        text: "Simplify (x²y³)(xy²).",
        options: ["x²y⁵", "x³y⁵", "x³y⁶", "x²y⁶"],
        correct: 1,
        explanation: "Add exponents of like bases: x²·x = x³ and y³·y² = y⁵."
    },
    {
        text: "Find the area of a triangle with base 10 cm and height 8 cm.",
        options: ["18 cm²", "40 cm²", "80 cm²", "20 cm²"],
        correct: 1,
        explanation: "Area of triangle = 1/2 × base × height = 1/2 × 10 × 8 = 40 cm²."
    },
    {
        text: "If f(x) = 3x + 2, find f⁻¹(x).",
        options: ["(x - 2)/3", "(x + 2)/3", "3x - 2", "x/3 + 2"],
        correct: 0,
        explanation: "Let y = 3x + 2. Then x = (y - 2)/3, so f⁻¹(x) = (x - 2)/3."
    },
    {
        text: "What is the value of sec 60°?",
        options: ["1/2", "1", "2", "√3"],
        correct: 2,
        explanation: "sec 60° = 1/cos 60° = 1/(1/2) = 2."
    },
    {
        text: "Solve the equation 2x² - 8x = 0.",
        options: ["x = 0 or x = 4", "x = 0 or x = -4", "x = 2 only", "x = 4 only"],
        correct: 0,
        explanation: "Factor: 2x(x - 4) = 0, so x = 0 or x = 4."
    },
    {
        text: "Find the 6th term of the geometric sequence 2, 4, 8, ...",
        options: ["16", "32", "64", "128"],
        correct: 2,
        explanation: "a = 2, r = 2. a₆ = ar⁵ = 2×2⁵ = 64."
    },
    {
        text: "If θ is acute and tan θ = 3/4, find sec θ.",
        options: ["3/5", "4/5", "5/4", "5/3"],
        correct: 2,
        explanation: "Use a right triangle with opposite = 3 and adjacent = 4, so hypotenuse = 5. Then cos θ = 4/5, so sec θ = 5/4."
    },
    {
        text: "Expand (x + 3)².",
        options: ["x² + 9", "x² + 6x + 9", "x² + 3x + 9", "x² + 6x"],
        correct: 1,
        explanation: "(x + 3)² = x² + 2(x)(3) + 3² = x² + 6x + 9."
    },
    {
        text: "Find the radius of a circle whose diameter is 14 cm.",
        options: ["28 cm", "14 cm", "7 cm", "3.5 cm"],
        correct: 2,
        explanation: "Radius is half of diameter, so 14/2 = 7 cm."
    },
    {
        text: "If x + 1/x = 5, find x² + 1/x².",
        options: ["21", "23", "25", "27"],
        correct: 1,
        explanation: "Square both sides: (x + 1/x)² = x² + 2 + 1/x² = 25. So x² + 1/x² = 25 - 2 = 23."
    },
    {
        text: "Find the slope of the line joining (2, 5) and (6, 13).",
        options: ["1", "2", "3", "4"],
        correct: 1,
        explanation: "Slope = (13 - 5)/(6 - 2) = 8/4 = 2."
    },
    {
        text: "If sin A = 1 and 0° ≤ A ≤ 180°, find A.",
        options: ["0°", "45°", "90°", "180°"],
        correct: 2,
        explanation: "sin A = 1 at A = 90° in the given interval."
    },
    {
        text: "Solve the equation x² + x - 6 = 0.",
        options: ["x = 2 or x = -3", "x = -2 or x = 3", "x = 1 or x = -6", "x = 6 or x = -1"],
        correct: 0,
        explanation: "Factor: (x + 3)(x - 2) = 0, so x = -3 or x = 2."
    },
    {
        text: "If the angles of a triangle are in the ratio 2:3:4, find the largest angle.",
        options: ["40°", "60°", "80°", "90°"],
        correct: 2,
        explanation: "The total ratio is 2+3+4 = 9 parts. Each part is 180/9 = 20°. Largest angle = 4×20 = 80°."
    },
    {
        text: "Simplify √72.",
        options: ["6√2", "8√2", "4√2", "3√2"],
        correct: 0,
        explanation: "72 = 36×2, so √72 = √36 × √2 = 6√2."
    },
    {
        text: "If f(x) = x² - 4, find the value of f(-3).",
        options: ["5", "9", "13", "-13"],
        correct: 0,
        explanation: "f(-3) = (-3)² - 4 = 9 - 4 = 5."
    },
    {
        text: "Find the equation of the circle centered at the origin with radius 5.",
        options: ["x² + y² = 5", "x² + y² = 10", "x² + y² = 25", "x + y = 25"],
        correct: 2,
        explanation: "Equation of circle centered at origin is x² + y² = r². Here r = 5, so r² = 25."
    },
    {
        text: "If 5ˣ = 125, find x.",
        options: ["2", "3", "4", "5"],
        correct: 1,
        explanation: "125 = 5³, so x = 3."
    },
    {
        text: "Evaluate cos 0°.",
        options: ["0", "1/2", "1", "-1"],
        correct: 2,
        explanation: "cos 0° = 1."
    },
    {
        text: "Find the sum of the roots of x² - 9x + 14 = 0.",
        options: ["9", "14", "-9", "-14"],
        correct: 0,
        explanation: "For ax² + bx + c = 0, sum of roots = -b/a. Here b = -9, so sum = 9."
    },
    {
        text: "Which of the following is equivalent to x⁻³?",
        options: ["-x³", "1/x³", "x³", "1/3x"],
        correct: 1,
        explanation: "A negative exponent means reciprocal: x⁻³ = 1/x³."
    },
    
    {
        text: "Find the value of 3!.",
        options: ["3", "6", "9", "12"],
        correct: 1,
        explanation: "3! = 3×2×1 = 6."
    },
    {
        text: "If P(A) = 0.4, what is P(A')?",
        options: ["0.4", "0.6", "1.4", "0"],
        correct: 1,
        explanation: "Complement rule: P(A') = 1 - P(A) = 1 - 0.4 = 0.6."
    },
    {
        text: "Find the gradient of the line 2x + y - 7 = 0.",
        options: ["2", "-2", "1/2", "-1/2"],
        correct: 1,
        explanation: "Rewrite as y = -2x + 7. The gradient is -2."
    },
    {
        text: "If nPr = 20 and n = 5, find r.",
        options: ["1", "2", "3", "4"],
        correct: 1,
        explanation: "5P2 = 5!/(5-2)! = 5×4 = 20, so r = 2."
    },
    {
        text: "Find the angle between the positive x-axis and the line y = x.",
        options: ["30°", "45°", "60°", "90°"],
        correct: 1,
        explanation: "The slope is 1, so tan θ = 1 and θ = 45°."
    },
    {
        text: "If z = 3 + 4i, find |z|.",
        options: ["4", "5", "7", "25"],
        correct: 1,
        explanation: "|z| = √(3² + 4²) = √25 = 5."
    },
    {
        text: "Find the derivative of y = x².",
        options: ["x", "2x", "x²", "2"],
        correct: 1,
        explanation: "Using the power rule, d/dx(x²) = 2x."
    },
    {
        text: "If the mean of 2, 4, 6, 8, 10 is m, find m.",
        options: ["5", "6", "7", "8"],
        correct: 1,
        explanation: "Mean = (2+4+6+8+10)/5 = 30/5 = 6."
    },
   
    {
        text: "If a fair die is thrown once, what is the probability of getting an even number?",
        options: ["1/6", "1/3", "1/2", "2/3"],
        correct: 2,
        explanation: "Even outcomes are 2, 4, 6. That is 3 out of 6 outcomes, so probability = 3/6 = 1/2."
    }
];

export default questions;
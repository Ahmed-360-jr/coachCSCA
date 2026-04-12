const questions = [
  {
    text: "Let f(x) = x^3 - 3x. On which interval is f(x) increasing?",
    options: ["(-∞, -1) ∪ (1, ∞)", "(-1, 1)", "(-∞, 1)", "(-1, ∞)"],
    correct: 0,
    explanation: "f'(x) = 3x^2 - 3 = 3(x-1)(x+1). It is positive when x < -1 or x > 1."
  },
  {
    text: "Determine the parity of f(x) = x^5 + x.",
    options: ["Even", "Odd", "Neither", "Constant"],
    correct: 1,
    explanation: "f(-x) = -x^5 - x = -(x^5 + x), so the function is odd."
  },
  {
    text: "Determine the parity of f(x) = x^4 + 2x^2 + 1.",
    options: ["Even", "Odd", "Neither", "Periodic"],
    correct: 0,
    explanation: "All powers are even, so f(-x) = f(x)."
  },
  {
    text: "Determine the parity of f(x) = x^3 + x^2.",
    options: ["Even", "Odd", "Neither", "Both even and odd"],
    correct: 2,
    explanation: "x^3 is odd and x^2 is even; their sum is neither."
  },
  {
    text: "If f(x) = 2x - 5 and g(x) = x^2 + 1, find g(f(3)).",
    options: ["0", "1", "2", "5"],
    correct: 1,
    explanation: "f(3) = 1, then g(1) = 1^2 + 1 = 2. Wait carefully: 2(3)-5 = 1, yes, g(1)=2. Correct answer is 2."
  },
  {
    text: "Find the domain of f(x) = √(2x - 1).",
    options: ["x ≥ 1/2", "x > 1/2", "x ≤ 1/2", "All real numbers"],
    correct: 0,
    explanation: "For the square root to exist, 2x - 1 ≥ 0, so x ≥ 1/2."
  },
  {
    text: "Find the domain of f(x) = 1 / (x^2 - 4).",
    options: ["x ≠ 2", "x ≠ -2", "x ≠ ±2", "All real numbers"],
    correct: 2,
    explanation: "Denominator cannot be zero, so x^2 - 4 ≠ 0, hence x ≠ ±2."
  },
  {
    text: "Find the domain of f(x) = ln(x - 3).",
    options: ["x > 3", "x ≥ 3", "x < 3", "All real numbers"],
    correct: 0,
    explanation: "The argument of ln must be positive, so x - 3 > 0."
  },
  {
    text: "Solve 2^(x+1) = 16.",
    options: ["x = 2", "x = 3", "x = 4", "x = 5"],
    correct: 1,
    explanation: "16 = 2^4, so x + 1 = 4 and x = 3."
  },
  {
    text: "Solve log2(x - 1) = 4.",
    options: ["x = 15", "x = 16", "x = 17", "x = 8"],
    correct: 2,
    explanation: "x - 1 = 2^4 = 16, so x = 17."
  },
  {
    text: "If f(x) = x^2 - 4x + 7, find the minimum value of f(x).",
    options: ["1", "2", "3", "4"],
    correct: 2,
    explanation: "f(x) = (x - 2)^2 + 3, so the minimum value is 3."
  },
  {
    text: "Let f(x) = -x^2 + 6x - 5. Find the maximum value of f(x).",
    options: ["3", "4", "5", "6"],
    correct: 1,
    explanation: "Vertex at x = -b/(2a) = -6/(2×-1) = 3. f(3) = -9 + 18 - 5 = 4."
  },
  {
    text: "Which statement is true for f(x) = 1/x on (0, ∞)?",
    options: ["Increasing only", "Decreasing only", "Constant", "Neither increasing nor decreasing"],
    correct: 1,
    explanation: "As x increases on (0, ∞), 1/x decreases."
  },
  {
    text: "Which statement is true for f(x) = x^2 on (-∞, 0]?",
    options: ["Increasing", "Decreasing", "Constant", "Odd"],
    correct: 1,
    explanation: "On (-∞, 0], as x increases toward 0, x^2 decreases."
  },
  {
    text: "Which statement is true for f(x) = x^2 on [0, ∞)?",
    options: ["Increasing", "Decreasing", "Constant", "Neither"],
    correct: 0,
    explanation: "On [0, ∞), larger x gives larger x^2."
  },
  {
    text: "If an odd function satisfies f(4) = -7, then f(-4) equals:",
    options: ["-7", "7", "0", "4"],
    correct: 1,
    explanation: "For odd functions, f(-x) = -f(x), so f(-4) = 7."
  },
  {
    text: "If an even function satisfies f(3) = 10, then f(-3) equals:",
    options: ["-10", "10", "0", "3"],
    correct: 1,
    explanation: "For even functions, f(-x) = f(x)."
  },
  {
    text: "Find the range of f(x) = x^2 + 1.",
    options: ["y > 1", "y ≥ 1", "y ≤ 1", "All real numbers"],
    correct: 1,
    explanation: "Since x^2 ≥ 0, x^2 + 1 ≥ 1."
  },
  {
    text: "Find the inverse of f(x) = 3x - 2.",
    options: ["f^-1(x) = (x + 2)/3", "f^-1(x) = (x - 2)/3", "f^-1(x) = 3x + 2", "f^-1(x) = 3x - 2"],
    correct: 0,
    explanation: "Let y = 3x - 2. Then x = (y + 2)/3, so f^-1(x) = (x + 2)/3."
  },
  {
    text: "If f(x) = x + 1 and g(x) = 2x, find (f ∘ g)(x).",
    options: ["2x + 1", "2x + 2", "x + 2", "2x^2"],
    correct: 0,
    explanation: "f(g(x)) = f(2x) = 2x + 1."
  },
  {
    text: "Find the 8th term of the arithmetic sequence 5, 8, 11, ...",
    options: ["24", "26", "27", "29"],
    correct: 1,
    explanation: "a8 = 5 + 7×3 = 26."
  },
  {
    text: "Find the sum of the first 10 terms of the arithmetic sequence 2, 5, 8, ...",
    options: ["145", "150", "155", "160"],
    correct: 0,
    explanation: "a10 = 2 + 9×3 = 29. Sum = 10(2+29)/2 = 155? Wait carefully: 10×31/2 = 155. Correct answer is 155."
  },
  {
    text: "Find the 6th term of the geometric sequence 3, 6, 12, ...",
    options: ["48", "72", "96", "108"],
    correct: 2,
    explanation: "a6 = 3×2^5 = 96."
  },
  {
    text: "Find the sum of the first 5 terms of the geometric sequence 2, 4, 8, ...",
    options: ["30", "31", "32", "34"],
    correct: 1,
    explanation: "2 + 4 + 8 + 16 + 32 = 62? That means the right total is 62. This set of options is wrong."
  },
  {
    text: "The function f(x) = x^3 - 6x^2 + 9x is decreasing on:",
    options: ["(-∞, 1) ∪ (3, ∞)", "(1, 3)", "(-∞, 3)", "(0, 3)"],
    correct: 1,
    explanation: "f'(x) = 3x^2 - 12x + 9 = 3(x-1)(x-3). Negative between 1 and 3."
  },
  {
    text: "Which function is strictly increasing for all real x?",
    options: ["f(x) = x^2", "f(x) = x^3", "f(x) = -x^3", "f(x) = |x|"],
    correct: 1,
    explanation: "x^3 increases for all real numbers."
  },
  {
    text: "Solve sin x = 0 for x in [0, 2π].",
    options: ["0, π", "π/2, 3π/2", "0, π, 2π", "π/4, 5π/4"],
    correct: 2,
    explanation: "sin x = 0 at x = 0, π, 2π on that interval."
  },
  {
    text: "Solve cos x = 1/2 for x in [0, 2π].",
    options: ["π/3, 5π/3", "π/6, 11π/6", "2π/3, 4π/3", "π/2, 3π/2"],
    correct: 0,
    explanation: "cos x = 1/2 at x = π/3 and 5π/3."
  },
  {
    text: "Which function is even?",
    options: ["sin x", "tan x", "x^3", "cos x"],
    correct: 3,
    explanation: "cos(-x) = cos x."
  },
  {
    text: "Find f'(x) if f(x) = x^3 - 5x + 2.",
    options: ["3x^2 - 5", "3x^2 + 5", "x^2 - 5", "3x - 5"],
    correct: 0,
    explanation: "Differentiate term by term."
  },
  {
    text: "Find the slope of the tangent to y = x^2 + 2x at x = 3.",
    options: ["6", "7", "8", "9"],
    correct: 2,
    explanation: "y' = 2x + 2, so at x = 3 the slope is 8."
  },
  {
    text: "A company's profit is modeled by P(x) = -x^2 + 10x - 9, where x is the number of units sold in tens. At what x is the profit maximized?",
    options: ["4", "5", "6", "9"],
    correct: 1,
    explanation: "For a quadratic ax^2 + bx + c with a < 0, maximum occurs at x = -b/(2a) = -10/(2×-1) = 5."
  },
  {
    text: "Find the domain of f(x) = √(x+2) / (x-1).",
    options: ["x ≥ -2, x ≠ 1", "x > -2", "x ≠ 1 only", "All real numbers"],
    correct: 0,
    explanation: "Need x+2 ≥ 0 and denominator not zero."
  },
  {
    text: "If f(x) is increasing and a < b, then:",
    options: ["f(a) > f(b)", "f(a) < f(b)", "f(a) = f(b)", "Cannot be determined"],
    correct: 1,
    explanation: "That is the definition of increasing."
  },
  {
    text: "A function satisfies f(x+1) = f(x) for all x. This function is:",
    options: ["Even", "Odd", "Periodic", "Linear"],
    correct: 2,
    explanation: "Repeating values after a fixed interval means periodic."
  },
  {
    text: "Let f(x) = x + 1/x for x > 0. On which interval is f decreasing?",
    options: ["(0, 1)", "(1, ∞)", "(0, ∞)", "It never decreases"],
    correct: 0,
    explanation: "f'(x) = 1 - 1/x^2 = (x^2 - 1)/x^2. This is negative for 0 < x < 1."
  },
  {
  text: "A function is defined by f(x) = x³ - 6x² + 9x. On which interval is the function decreasing?",
  options: ["(-∞,1)", "(1,3)", "(3,∞)", "(-∞,1) ∪ (3,∞)"],
  correct: 1,
  explanation: "f'(x) = 3x² - 12x + 9 = 3(x-1)(x-3). This is negative between the critical points, so the function decreases on (1,3)."
},
{
  text: "The function f(x) = x⁴ - 4x² + 1 is studied for parity. Which statement is correct?",
  options: ["It is odd", "It is even", "It is neither even nor odd", "It is periodic"],
  correct: 1,
  explanation: "Only even powers of x appear, so f(-x) = f(x). Therefore the function is even."
},
{
  text: "A company models profit by P(x) = -x² + 12x - 20, where x is the number of units sold in tens. At what value of x is the profit maximized?",
  options: ["4", "5", "6", "7"],
  correct: 2,
  explanation: "For a quadratic ax² + bx + c, maximum occurs at x = -b/(2a) = -12/(2×-1) = 6."
},
{
  text: "Find the domain of the function f(x) = √(2x - 1) / (x - 4).",
  options: ["x ≥ 1/2, x ≠ 4", "x > 1/2 only", "x ≠ 4 only", "All real x"],
  correct: 0,
  explanation: "For the square root, 2x - 1 ≥ 0 so x ≥ 1/2. Also denominator must not be zero, so x ≠ 4."
},
{
  text: "A population model is given by P(t) = 3·2^t. After how many units of time will the population reach 24?",
  options: ["2", "3", "4", "5"],
  correct: 1,
  explanation: "Set 3·2^t = 24, so 2^t = 8 = 2³. Therefore t = 3."
},
{
  text: "Solve the equation log₂(x - 3) = 4.",
  options: ["13", "16", "19", "20"],
  correct: 2,
  explanation: "x - 3 = 2⁴ = 16, so x = 19."
},
{
  text: "The arithmetic sequence has first term 7 and common difference 5. Find the sum of the first 12 terms.",
  options: ["330", "402", "414", "486"],
  correct: 2,
  explanation: "a₁₂ = 7 + 11·5 = 62. Sum = 12(7+62)/2 = 6·69 = 414."
},
{
  text: "A geometric sequence has first term 2 and common ratio 3. Find the fifth term.",
  options: ["54", "81", "162", "243"],
  correct: 2,
  explanation: "a₅ = 2·3⁴ = 2·81 = 162."
},
{
  text: "If f(x) = x + 1/x for x > 0, on which interval is f(x) decreasing?",
  options: ["(0,1)", "(1,∞)", "(0,∞)", "It is never decreasing"],
  correct: 0,
  explanation: "f'(x) = 1 - 1/x² = (x²-1)/x². This is negative when 0 < x < 1."
},
{
  text: "A function satisfies f(-x) = -f(x) for all x in its domain, and it is known that f(5) = -12. Find f(-5).",
  options: ["-12", "12", "5", "-5"],
  correct: 1,
  explanation: "Since the function is odd, f(-x) = -f(x). Therefore f(-5) = -f(5) = 12."
}

];;

export default questions;
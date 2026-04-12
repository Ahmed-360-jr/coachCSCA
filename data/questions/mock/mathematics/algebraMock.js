const questions = [
    {
        text: "Let A = {1, 2} and B = {1, 2, 3}. Which statement is correct?",
        options: ["B ⊂ A", "A = B", "1 ∈ B", "A ∩ B = ∅"],
        correct: 2,
        explanation: "Since 1 is an element of set B, the statement 1 ∈ B is true. B is not a subset of A, A is not equal to B, and A ∩ B is not empty."
    },
    {
        text: "Let A = (-1, 3) and B = [2, 4). Find A ∩ B.",
        options: ["[2, 3]", "(2, 3)", "(2, 3]", "[2, 3)"],
        correct: 3,
        explanation: "The common values are from 2 up to 3. Since 2 is included in both sets and 3 is excluded from A, the intersection is [2, 3)."
    },
    {
        text: "Solve the inequality x² - 5x + 4 < 0.",
        options: ["(-4, -1)", "(-∞, 1) ∪ (4, +∞)", "(1, 4)", "(-∞, 1) ∪ (1, +∞)"],
        correct: 2,
        explanation: "Factor: x² - 5x + 4 = (x - 1)(x - 4). A product of two factors is negative between the roots, so the solution is (1, 4)."
    },
    {
        text: "Find the domain of y = 1 / √(x + 1).",
        options: ["[-1, +∞)", "(-1, +∞)", "(0, +∞)", "(-∞, -1)"],
        correct: 1,
        explanation: "Because the square root is in the denominator, x + 1 must be strictly greater than 0. So x > -1 and the domain is (-1, +∞)."
    },
    {
        text: "In an arithmetic sequence, if a₁ = 2 and d = 3, find a₁₀₀.",
        options: ["302", "305", "299", "298"],
        correct: 2,
        explanation: "Use aₙ = a₁ + (n - 1)d. So a₁₀₀ = 2 + 99 × 3 = 299."
    },
    {
        text: "The point (-1, 3) lies in which quadrant?",
        options: ["First quadrant", "Second quadrant", "Third quadrant", "Fourth quadrant"],
        correct: 1,
        explanation: "The x-coordinate is negative and the y-coordinate is positive, so the point lies in Quadrant II."
    },
    {
        text: "Calculate (sin(π/4) + cos(π/4)) tan(π/4).",
        options: ["2√2", "2", "√2", "1"],
        correct: 2,
        explanation: "sin(π/4) = √2/2, cos(π/4) = √2/2, and tan(π/4) = 1. So (√2/2 + √2/2) × 1 = √2."
    },
    {
        text: "Which of the following is an odd function?",
        options: ["y = x sin x", "y = x²", "y = cos x", "y = x + x³"],
        correct: 3,
        explanation: "x and x³ are both odd functions, and the sum of two odd functions is odd. x sin x is even because odd × odd = even."
    },
    {
        text: "The inverse function of y = x³ is:",
        options: ["y = x/3", "y = 3ˣ", "y = x³", "y = ∛x"],
        correct: 3,
        explanation: "To invert y = x³, swap x and y to get x = y³, then solve for y: y = ∛x."
    },
    {
        text: "Which of the following functions is increasing for all real x?",
        options: ["y = (1/2)ˣ", "y = logₐx where 0 < a < 1", "y = 2x + 1", "y = sin x"],
        correct: 2,
        explanation: "A linear function with positive slope is increasing for all real x. The others are not increasing for all real numbers."
    },
    {
        text: "Which point lies in the third quadrant?",
        options: ["(-1, -2)", "(-1, 2)", "(1, 2)", "(1, -2)"],
        correct: 0,
        explanation: "In the third quadrant, both coordinates are negative."
    },
    {
        text: "Solve (x - 1)/(x - 2) ≤ 1.",
        options: ["x < 2", "x > 2", "x = 2", "All real numbers"],
        correct: 0,
        explanation: "Move 1 to the left: (x - 1)/(x - 2) - 1 ≤ 0. This becomes 1/(x - 2) ≤ 0. Since 1/(x - 2) is never 0, it is negative only when x - 2 < 0, so x < 2."
    },
    {
        text: "If a, b, c form an arithmetic sequence and a + c = 20, find b.",
        options: ["10", "5", "20", "40"],
        correct: 0,
        explanation: "In an arithmetic sequence, the middle term is the average of the first and third terms. So b = (a + c)/2 = 20/2 = 10."
    },
    {
        text: "Find the angle of inclination of the line y = √3x + 10.",
        options: ["60°", "30°", "45°", "120°"],
        correct: 0,
        explanation: "The slope is √3. Since tan θ = √3, the angle of inclination is 60°."
    },
    {
        text: "Which inequality is correct?",
        options: ["0.75 - 0.2 > 0.75 - 0.4", "3⁴/⁵ > 3³", "3⁴/⁵ = 3³", "3⁴/⁵ < 0"],
        correct: 0,
        explanation: "0.75 - 0.2 = 0.55 and 0.75 - 0.4 = 0.35, so 0.55 > 0.35. The first statement is correct."
    },
    {
        text: "If point P(1, y) lies on the terminal side of an angle and tan α = 2, find y.",
        options: ["1", "1/2", "√3", "2"],
        correct: 3,
        explanation: "For point (x, y) on the terminal side, tan α = y/x. Since x = 1 and tan α = 2, we get y = 2."
    },
    {
        text: "For the geometric sequence with a₁ = 1 and common ratio 2, find a₂₀₂₅.",
        options: ["2", "2025", "2024", "2²⁰²⁴"],
        correct: 3,
        explanation: "For a geometric sequence, aₙ = a₁rⁿ⁻¹. So a₂₀₂₅ = 1 × 2²⁰²⁴ = 2²⁰²⁴."
    },
    {
        text: "The center of a circle is (-3, 2) and the radius is 4. Find its equation.",
        options: ["(x + 3)² + (y - 2)² = 4", "(x - 3)² + (y + 2)² = 4", "(x - 3)² + (y + 2)² = 16", "(x + 3)² + (y - 2)² = 16"],
        correct: 3,
        explanation: "The standard form is (x - h)² + (y - k)² = r². Here h = -3, k = 2, and r = 4, so the equation is (x + 3)² + (y - 2)² = 16."
    },
    {
        text: "If sin α = 3/5 and α is acute, find cos α.",
        options: ["4/5", "-4/5", "3/4", "-3/4"],
        correct: 0,
        explanation: "Using sin² α + cos² α = 1, we get cos α = √(1 - 9/25) = √(16/25) = 4/5. Since α is acute, cosine is positive."
    },
    {
        text: "Find the domain of y = √(x - 1).",
        options: ["[1, +∞)", "(1, +∞)", "(-∞, 1]", "(-∞, 1)"],
        correct: 0,
        explanation: "For a square root, the expression inside must be non-negative: x - 1 ≥ 0, so x ≥ 1."
    },
    {
        text: "Find the radius of the circle x² + y² + 2x - 2y = 0.",
        options: ["2", "1/2", "√2", "1"],
        correct: 2,
        explanation: "Complete the square: x² + 2x + y² - 2y = 0 becomes (x + 1)² - 1 + (y - 1)² - 1 = 0, so (x + 1)² + (y - 1)² = 2. Therefore the radius is √2."
    },
    {
        text: "If α is acute and sin α = 1/2, find tan α.",
        options: ["2", "√3", "1/√3", "1/3"],
        correct: 2,
        explanation: "If sin α = 1/2 and α is acute, then α = 30°. So tan α = tan 30° = 1/√3."
    },
    {
        text: "In a geometric sequence the first three terms are 1, 2, 4. Find the general term.",
        options: ["aₙ = 2ⁿ", "aₙ = 8", "aₙ = 2ⁿ⁻¹", "aₙ = 2ⁿ + 1"],
        correct: 2,
        explanation: "The sequence doubles each time, so the common ratio is 2. With a₁ = 1, the formula is aₙ = 1 × 2ⁿ⁻¹ = 2ⁿ⁻¹."
    },
    {
        text: "If a > b, which statement must be true?",
        options: ["1/a < 1/b", "a² > b²", "5a > 5b", "sin a > sin b"],
        correct: 2,
        explanation: "Multiplying an inequality by a positive number keeps the same direction, so from a > b we get 5a > 5b."
    },
    {
        text: "Find the distance between P(-1, 2) and Q(3, 1).",
        options: ["√17", "√13", "√5", "5"],
        correct: 0,
        explanation: "Distance = √[(3 - (-1))² + (1 - 2)²] = √[4² + (-1)²] = √17."
    },
    {
        text: "Which statement about y = (1/2)ˣ is correct?",
        options: ["It is symmetric about the origin", "It is symmetric about the y-axis", "It is periodic", "It is decreasing"],
        correct: 3,
        explanation: "An exponential function with base between 0 and 1 is decreasing."
    },
    {
        text: "If sin α = -1/4, find cos 2α.",
        options: ["-7/8", "1/8", "7/8", "-1/8"],
        correct: 2,
        explanation: "Use cos 2α = 1 - 2sin² α. Since sin² α = 1/16, cos 2α = 1 - 2/16 = 1 - 1/8 = 7/8."
    },
    {
        text: "Find the intersection of y = 2x + 1 and x + y + 1 = 0.",
        options: ["(1/3, 3)", "(2/3, -1/3)", "(-1/3, -2/3)", "(-2/3, -1/3)"],
        correct: 3,
        explanation: "Substitute y = 2x + 1 into x + y + 1 = 0: x + 2x + 1 + 1 = 0, so 3x + 2 = 0 and x = -2/3. Then y = 2(-2/3) + 1 = -1/3."
    },
    {
        text: "The foci of the hyperbola x² - y² = 1 are:",
        options: ["(±√2, 0)", "(0, ±2)", "(0, ±√2)", "(±2, 0)"],
        correct: 0,
        explanation: "Write it as x²/1 - y²/1 = 1. For a hyperbola, c² = a² + b² = 1 + 1 = 2, so c = √2. The foci are (±√2, 0)."
    },
    {
        text: "Calculate log₂ 32.",
        options: ["-5", "10", "0", "5"],
        correct: 3,
        explanation: "Since 2⁵ = 32, log₂ 32 = 5."
    },
    {
        text: "Which statement about y = cos x is correct?",
        options: ["cos(x + π) = cos x", "Its domain is (0, ∞)", "Its period is 2π", "It is increasing on (0, π)"],
        correct: 2,
        explanation: "The cosine function repeats every 2π, so its period is 2π."
    },
    {
        text: "A parabola has vertex (1, 0) and opens to the right. Which equation represents it?",
        options: ["y² = 4x", "(y - 0)² = 4(x - 1)", "(x - 1)² = 4y", "x = (y - 1)²"],
        correct: 1,
        explanation: "The standard form of a parabola opening right with vertex (h, k) is (y - k)² = 4p(x - h). With vertex (1, 0), it becomes y² = 4(x - 1)."
    },
    {
        text: "Rewrite x + y + 3 = 0 in slope-intercept form.",
        options: ["y = -2x + 1", "y = x + 3", "y = 1 - x", "y = -x - 3"],
        correct: 3,
        explanation: "Solve for y: y = -x - 3."
    },
    {
        text: "If cos α = -1/2 and α ∈ (π/2, π), find sin α.",
        options: ["-√3/2", "√3/2", "1/2", "-1"],
        correct: 1,
        explanation: "The angle is in Quadrant II, where sine is positive. Using sin² α + cos² α = 1 gives sin α = √3/2."
    },
    {
        text: "Given sin(π/4) = √2/2 and sin(π/6) = 1/2, find cos(π/12).",
        options: ["√6/4", "(√6 + √2)/4", "(√6 - √2)/4", "√6/2"],
        correct: 1,
        explanation: "Since π/12 = π/4 - π/6, use cos(A - B) = cos A cos B + sin A sin B. This gives (√2/2)(√3/2) + (√2/2)(1/2) = (√6 + √2)/4."
    },
    {
        text: "Which function equals y = √(x²)?",
        options: ["y = √(x³)", "y = (√x)²", "y = x", "y = |x|"],
        correct: 3,
        explanation: "For all real x, √(x²) = |x|, not just x."
    },
    {
        text: "If cos α = 1/2 and α is acute, find sin(α/2).",
        options: ["1/2", "√2/2", "√3/2", "1"],
        correct: 0,
        explanation: "Use the half-angle formula: sin(α/2) = √[(1 - cos α)/2] = √[(1 - 1/2)/2] = √(1/4) = 1/2."
    },
    {
        text: "Which identity is correct?",
        options: ["tan(π + α) = -tan α", "tan(π + α) = tan α", "sin(π - α) = -sin α", "sin(π - α) = cos α"],
        correct: 1,
        explanation: "Tangent has period π, so tan(π + α) = tan α."
    },
    {
        text: "Solve 2x + 3 = 5.",
        options: ["x = 1", "x = -1", "x = 4", "x = 2"],
        correct: 0,
        explanation: "Subtract 3 from both sides to get 2x = 2, then divide by 2 to get x = 1."
    },
    {
        text: "Solve 3cos x - 3sin x = 0 for the principal acute solution.",
        options: ["π/2", "π/4", "2π/3", "π/6"],
        correct: 1,
        explanation: "Divide by 3: cos x - sin x = 0, so cos x = sin x. Then tan x = 1, giving x = π/4 as the acute principal solution."
    },
    {
        text: "If aₙ = 1/n, find a₁₀₀.",
        options: ["50", "1/100", "1", "100"],
        correct: 1,
        explanation: "Substitute n = 100 into aₙ = 1/n to get a₁₀₀ = 1/100."
    },
    {
        text: "Which statement about y = logₐ x is correct when 0 < a < 1?",
        options: ["Its domain is all real numbers", "It is increasing", "It is constant", "It is decreasing"],
        correct: 3,
        explanation: "A logarithmic function with base between 0 and 1 is decreasing, and its domain is x > 0."
    },
    {
        text: "For the ellipse x²/4 + y²/16 = 1, find the foci.",
        options: ["(0, ±2√3)", "(±2√3, 0)", "(0, ±4)", "(±4, 0)"],
        correct: 0,
        explanation: "The larger denominator is under y², so the major axis is vertical. Here a² = 16 and b² = 4, so c² = a² - b² = 12, hence c = 2√3. The foci are (0, ±2√3)."
    },
    {
        text: "Find the intersection point of the lines x + y = 5 and x - y = 1.",
        options: ["(3, 2)", "(2, 3)", "(1, 4)", "(4, 1)"],
        correct: 0,
        explanation: "Add the equations: 2x = 6, so x = 3. Substitute into x + y = 5 to get y = 2."
    },
    {
        text: "If P is the midpoint of AB, which vector relation is correct?",
        options: ["OP = 1/2(OA + OB)", "OP = OA + OB", "OP = OB - OA", "OP = 1/2(OB - OA)"],
        correct: 0,
        explanation: "The position vector of the midpoint is the average of the two endpoint position vectors."
    },
    {
        text: "If z is a non-real cube root of unity, find 1 + z + z² + z³ + ⋯ + z⁹⁹⁹.",
        options: ["1", "z", "z²", "0"],
        correct: 1,
        explanation: "Since z³ = 1 and 1 + z + z² = 0, group the terms as (1 + z + z²) repeatedly. From z⁰ to z⁹⁹⁸ there are 333 full groups summing to 0, leaving only z⁹⁹⁹ = z³³³ = z."
    },
    {
        text: "In an arithmetic sequence, a₁ = 2 and d = 2. Find S₁₃.",
        options: ["182", "169", "156", "143"],
        correct: 0,
        explanation: "Use Sₙ = n/2[2a₁ + (n - 1)d]. So S₁₃ = 13/2[4 + 24] = 13/2 × 28 = 182."
    },
    {
        text: "A fair 12-sided spinner is labeled with 12 different animals. What is the probability that three independent spins all show the same animal?",
        options: ["1/12", "1/36", "1/144", "1/1728"],
        correct: 2,
        explanation: "After the first spin, the second must match it with probability 1/12, and the third must also match with probability 1/12. So the probability is 1/12 × 1/12 = 1/144."
    }
];

export default questions;
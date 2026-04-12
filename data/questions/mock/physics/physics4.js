const physics4 = [
  {
    text: "A body starts from rest and accelerates at 3 m/s². What is its velocity after 4 s?",
    options: ["6 m/s", "8 m/s", "10 m/s", "12 m/s"],
    correct: 3,
    explanation: "v = u + at = 0 + 3×4 = 12 m/s."
  },
  {
    text: "A car moving at 20 m/s comes to rest in 5 s. What is its acceleration?",
    options: ["-2 m/s²", "-3 m/s²", "-4 m/s²", "-5 m/s²"],
    correct: 2,
    explanation: "a = (0 - 20)/5 = -4 m/s²."
  },
  {
    text: "Distance traveled under constant velocity 7 m/s in 6 s is:",
    options: ["30 m", "36 m", "42 m", "48 m"],
    correct: 2,
    explanation: "s = vt = 7×6 = 42 m."
  },
  {
    text: "If acceleration is zero, the motion is:",
    options: ["uniform", "accelerated", "retarded", "circular"],
    correct: 0,
    explanation: "Zero acceleration means constant velocity."
  },
  {
    text: "Force is defined as:",
    options: ["mass × velocity", "mass × acceleration", "velocity × time", "mass × time"],
    correct: 1,
    explanation: "F = ma."
  },
  {
    text: "A 4 kg object experiences 8 N force. Acceleration is:",
    options: ["1 m/s²", "2 m/s²", "3 m/s²", "4 m/s²"],
    correct: 1,
    explanation: "a = 8/4 = 2 m/s²."
  },
  {
    text: "Momentum depends on:",
    options: ["mass only", "velocity only", "mass and velocity", "time only"],
    correct: 2,
    explanation: "p = mv."
  },
  {
    text: "A 2 kg body moving at 5 m/s has momentum:",
    options: ["5", "7", "10", "15"],
    correct: 2,
    explanation: "p = 2×5 = 10."
  },
  {
    text: "Work done when force is perpendicular to displacement is:",
    options: ["maximum", "minimum", "zero", "infinite"],
    correct: 2,
    explanation: "W = Fd cos90° = 0."
  },
  {
    text: "Power is the rate of:",
    options: ["force", "energy", "work", "momentum"],
    correct: 2,
    explanation: "Power = work/time."
  },
  {
    text: "KE depends on:",
    options: ["mass only", "velocity only", "mass and square of velocity", "time"],
    correct: 2,
    explanation: "KE = 1/2 mv²."
  },
  {
    text: "PE depends on:",
    options: ["mass, g, height", "mass only", "velocity", "time"],
    correct: 0,
    explanation: "PE = mgh."
  },
  {
    text: "Total mechanical energy in absence of friction:",
    options: ["increases", "decreases", "constant", "zero"],
    correct: 2,
    explanation: "Energy conservation."
  },
  {
    text: "Centripetal force acts:",
    options: ["outward", "inward", "upward", "downward"],
    correct: 1,
    explanation: "Toward center."
  },
  {
    text: "If speed doubles, KE becomes:",
    options: ["2×", "3×", "4×", "8×"],
    correct: 2,
    explanation: "KE ∝ v²."
  },
  {
    text: "Gravitational force depends on:",
    options: ["distance", "mass", "both", "none"],
    correct: 2,
    explanation: "F ∝ m₁m₂/r²."
  },
  {
    text: "Frequency is measured in:",
    options: ["Hz", "J", "N", "m"],
    correct: 0,
    explanation: "Unit of frequency."
  },
  {
    text: "Wave speed =",
    options: ["f/λ", "λ/f", "fλ", "f²"],
    correct: 2,
    explanation: "v = fλ."
  },
  {
    text: "Two like charges:",
    options: ["attract", "repel", "neutralize", "oscillate"],
    correct: 1,
    explanation: "Like charges repel."
  },
  {
    text: "Electric current is flow of:",
    options: ["protons", "neutrons", "electrons", "atoms"],
    correct: 2,
    explanation: "Charge carriers."
  },
  {
    text: "Unit of current:",
    options: ["Volt", "Ampere", "Ohm", "Watt"],
    correct: 1,
    explanation: "SI unit."
  },
  {
    text: "Ohm’s law:",
    options: ["V=IR", "V=I/R", "I=VR", "R=VI"],
    correct: 0,
    explanation: "Ohm’s law."
  },
  {
    text: "Series resistance:",
    options: ["adds", "reduces", "multiplies", "divides"],
    correct: 0,
    explanation: "R total = sum."
  },
  {
    text: "Parallel resistance:",
    options: ["adds", "reduces", "same", "infinite"],
    correct: 1,
    explanation: "Equivalent reduces."
  },
  {
    text: "Magnetic force depends on:",
    options: ["charge", "velocity", "angle", "all"],
    correct: 3,
    explanation: "F = qvB sinθ."
  },
  {
    text: "Induction requires:",
    options: ["constant field", "changing flux", "zero field", "heat"],
    correct: 1,
    explanation: "Changing flux."
  },
  {
    text: "Temperature relates to:",
    options: ["speed", "energy", "KE", "mass"],
    correct: 2,
    explanation: "Average KE."
  },
  {
    text: "Boyle’s law:",
    options: ["P∝V", "P∝1/V", "P∝T", "none"],
    correct: 1,
    explanation: "Inverse relation."
  },
  {
    text: "First law:",
    options: ["Q=W", "Q=ΔU+W", "W=ΔU", "none"],
    correct: 1,
    explanation: "Thermodynamics."
  },
  {
    text: "Isothermal:",
    options: ["constant P", "constant V", "constant T", "constant Q"],
    correct: 2,
    explanation: "Constant T."
  },
  {
    text: "Light slows in:",
    options: ["air", "vacuum", "glass", "space"],
    correct: 2,
    explanation: "Denser medium."
  },
  {
    text: "Reflection law:",
    options: ["i=r", "i≠r", "i>r", "i<r"],
    correct: 0,
    explanation: "Law of reflection."
  },
  {
    text: "Convex lens:",
    options: ["diverges", "converges", "reflects", "absorbs"],
    correct: 1,
    explanation: "Converging."
  },
  {
    text: "Interference shows:",
    options: ["particle", "wave", "matter", "force"],
    correct: 1,
    explanation: "Wave nature."
  },
  {
    text: "Photoelectric effect depends on:",
    options: ["frequency", "intensity", "distance", "angle"],
    correct: 0,
    explanation: "Threshold frequency."
  },
  {
    text: "Nucleus contains:",
    options: ["e-", "p+ & n", "n only", "e & p"],
    correct: 1,
    explanation: "Protons & neutrons."
  },

  // 🔥 LOGICAL / WORD PROBLEMS (40–48)

  {
    text: "A body moves 10 m/s for 5 s then stops. Total distance?",
    options: ["25", "50", "75", "100"],
    correct: 1,
    explanation: "10×5 = 50 m."
  },
  {
    text: "A 2 kg object pushed by 6 N for 3 s. Final velocity?",
    options: ["3", "6", "9", "12"],
    correct: 2,
    explanation: "a=3, v=3×3=9."
  },
  {
    text: "A stone dropped from rest for 2 s (g=10). Distance?",
    options: ["10", "20", "30", "40"],
    correct: 1,
    explanation: "s=1/2gt²=20."
  },
  {
    text: "Two resistors 2Ω and 4Ω in series. Current at 12V?",
    options: ["1A", "2A", "3A", "4A"],
    correct: 1,
    explanation: "R=6Ω, I=12/6=2A."
  },
  {
  text: "The same resistors of 2 Ω and 4 Ω are connected in parallel to a 12 V source. What is the total current?",
  options: ["3 A", "6 A", "9 A", "12 A"],
  correct: 2,
  explanation: "For parallel connection, 1/R = 1/2 + 1/4 = 3/4, so R = 4/3 Ω. Then I = V/R = 12 ÷ (4/3) = 9 A."
},
  {
    text: "Gas volume halves. Pressure becomes?",
    options: ["half", "same", "double", "quadruple"],
    correct: 2,
    explanation: "Boyle’s law."
  },
  {
    text: "Mirror: object 20 cm away. Distance object-image?",
    options: ["20", "30", "40", "60"],
    correct: 2,
    explanation: "2×20 = 40 cm."
  },
  {
    text: "Light intensity increases, frequency same. Effect?",
    options: ["KE increases", "more electrons", "none", "threshold changes"],
    correct: 1,
    explanation: "More electrons only."
  },
  {
    text: "Walk 10 m east then 10 m west. Displacement?",
    options: ["0", "10", "20", "-10"],
    correct: 0,
    explanation: "Returns to start."
  }
];

export default physics4;
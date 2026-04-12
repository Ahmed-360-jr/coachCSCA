const physics3 = [
  {
    text: "A car starts from rest and accelerates uniformly at 4 m/s² for 3 s. What is its final velocity?",
    options: ["8 m/s", "10 m/s", "12 m/s", "14 m/s"],
    correct: 2,
    explanation: "v = u + at = 0 + 4×3 = 12 m/s."
  },
  {
    text: "A body moving at 18 m/s slows down uniformly to 6 m/s in 4 s. Its acceleration is:",
    options: ["-2 m/s²", "-3 m/s²", "-4 m/s²", "-6 m/s²"],
    correct: 1,
    explanation: "a = (v - u)/t = (6 - 18)/4 = -3 m/s²."
  },
  {
    text: "A particle moves with constant velocity of 9 m/s for 7 s. The distance covered is:",
    options: ["56 m", "63 m", "72 m", "81 m"],
    correct: 1,
    explanation: "s = vt = 9×7 = 63 m."
  },
  {
    text: "An object starts from rest and accelerates at 2 m/s². How far does it move in 5 s?",
    options: ["10 m", "20 m", "25 m", "50 m"],
    correct: 2,
    explanation: "s = 1/2 at² = 1/2 × 2 × 25 = 25 m."
  },
  {
    text: "A force of 15 N acts on a 3 kg body. The acceleration produced is:",
    options: ["3 m/s²", "4 m/s²", "5 m/s²", "6 m/s²"],
    correct: 2,
    explanation: "a = F/m = 15/3 = 5 m/s²."
  },
  {
    text: "A 6 kg object has an acceleration of 2 m/s². The net force on it is:",
    options: ["3 N", "8 N", "12 N", "18 N"],
    correct: 2,
    explanation: "F = ma = 6×2 = 12 N."
  },
  {
    text: "The momentum of a 4 kg object moving at 5 m/s is:",
    options: ["9 kg·m/s", "20 kg·m/s", "25 kg·m/s", "40 kg·m/s"],
    correct: 1,
    explanation: "p = mv = 4×5 = 20 kg·m/s."
  },
  {
    text: "If the velocity of an object doubles, its momentum becomes:",
    options: ["half", "double", "four times", "unchanged"],
    correct: 1,
    explanation: "Momentum is directly proportional to velocity."
  },
  {
    text: "A force of 20 N moves an object through 4 m in the direction of the force. Work done is:",
    options: ["5 J", "16 J", "24 J", "80 J"],
    correct: 3,
    explanation: "W = Fs = 20×4 = 80 J."
  },
  {
    text: "A machine does 120 J of work in 6 s. Its power is:",
    options: ["12 W", "18 W", "20 W", "24 W"],
    correct: 2,
    explanation: "Power = Work/Time = 120/6 = 20 W."
  },
  {
    text: "The kinetic energy of a 4 kg body moving at 3 m/s is:",
    options: ["6 J", "12 J", "18 J", "24 J"],
    correct: 2,
    explanation: "KE = 1/2 mv² = 1/2 × 4 × 9 = 18 J."
  },
  {
    text: "A 5 kg object is lifted through 2 m. Taking g = 10 m/s², the gain in potential energy is:",
    options: ["25 J", "50 J", "75 J", "100 J"],
    correct: 3,
    explanation: "PE = mgh = 5×10×2 = 100 J."
  },
  {
    text: "If no external force acts on a moving body, it will:",
    options: ["stop immediately", "keep moving with constant velocity", "move in a circle", "accelerate"],
    correct: 1,
    explanation: "Newton’s first law."
  },
  {
    text: "The centripetal force acting on a body in circular motion is directed:",
    options: ["away from the center", "tangentially", "toward the center", "upward"],
    correct: 2,
    explanation: "Centripetal force always points toward the center."
  },
  {
    text: "A body moves in a circle of radius 3 m with speed 6 m/s. Its centripetal acceleration is:",
    options: ["6 m/s²", "9 m/s²", "12 m/s²", "18 m/s²"],
    correct: 2,
    explanation: "a = v²/r = 36/3 = 12 m/s²."
  },
  {
    text: "If the distance between two masses is doubled, the gravitational force becomes:",
    options: ["twice", "half", "one-quarter", "four times"],
    correct: 2,
    explanation: "F ∝ 1/r², so doubling r makes force one-quarter."
  },
  {
    text: "The time period of a wave is the reciprocal of its:",
    options: ["speed", "amplitude", "frequency", "wavelength"],
    correct: 2,
    explanation: "T = 1/f."
  },
  {
    text: "A wave has frequency 5 Hz and wavelength 4 m. Its speed is:",
    options: ["1.25 m/s", "9 m/s", "20 m/s", "25 m/s"],
    correct: 2,
    explanation: "v = fλ = 5×4 = 20 m/s."
  },
  {
    text: "When two unlike charges are brought near each other, they:",
    options: ["repel", "attract", "become neutral", "lose mass"],
    correct: 1,
    explanation: "Unlike charges attract."
  },
  {
    text: "The unit of electric charge is:",
    options: ["Ampere", "Volt", "Coulomb", "Ohm"],
    correct: 2,
    explanation: "SI unit of charge is coulomb."
  },
  {
    text: "If 12 C of charge flows in 4 s, the current is:",
    options: ["2 A", "3 A", "4 A", "48 A"],
    correct: 1,
    explanation: "I = Q/t = 12/4 = 3 A."
  },
  {
    text: "A resistor of 8 Ω is connected to a 16 V source. The current is:",
    options: ["0.5 A", "2 A", "4 A", "8 A"],
    correct: 1,
    explanation: "I = V/R = 16/8 = 2 A."
  },
  {
    text: "The equivalent resistance of 3 Ω and 5 Ω connected in series is:",
    options: ["1.9 Ω", "2 Ω", "8 Ω", "15 Ω"],
    correct: 2,
    explanation: "Series resistance adds: 3 + 5 = 8 Ω."
  },
  {
    text: "The equivalent resistance of 6 Ω and 6 Ω connected in parallel is:",
    options: ["2 Ω", "3 Ω", "6 Ω", "12 Ω"],
    correct: 1,
    explanation: "For equal resistors in parallel: R/2 = 3 Ω."
  },
  {
    text: "Electrical power in a circuit is given by:",
    options: ["P = IV", "P = IR", "P = V/R", "P = QV"],
    correct: 0,
    explanation: "Electrical power = current × voltage."
  },
  {
    text: "A current-carrying conductor experiences force in a magnetic field when it is:",
    options: ["parallel to the field", "perpendicular to the field", "at rest only", "uncharged"],
    correct: 1,
    explanation: "Force is maximum when the wire is perpendicular to the magnetic field."
  },
  {
    text: "Electromagnetic induction occurs when there is a change in:",
    options: ["temperature", "magnetic flux", "mass", "resistance only"],
    correct: 1,
    explanation: "Induced emf arises due to changing magnetic flux."
  },
  {
    text: "Lenz’s law is used to determine the:",
    options: ["magnitude of current", "resistance of wire", "direction of induced current", "color of light"],
    correct: 2,
    explanation: "Lenz’s law gives the direction of induced current."
  },
  {
    text: "At constant temperature, the pressure of a fixed mass of gas is inversely proportional to its:",
    options: ["mass", "volume", "density", "temperature"],
    correct: 1,
    explanation: "Boyle’s law."
  },
  {
    text: "The SI unit of temperature is:",
    options: ["°C", "°F", "K", "J"],
    correct: 2,
    explanation: "SI unit is kelvin."
  },
  {
    text: "The first law of thermodynamics can be written as:",
    options: ["Q = ΔU + W", "Q = W - ΔU", "Q = P/V", "Q = mcΔT"],
    correct: 0,
    explanation: "Heat supplied = increase in internal energy + work done."
  },
  {
    text: "A process in which no heat enters or leaves a system is called:",
    options: ["isothermal", "isobaric", "adiabatic", "isochoric"],
    correct: 2,
    explanation: "Adiabatic process."
  },
  {
    text: "When light travels from air into glass, it bends:",
    options: ["away from the normal", "toward the normal", "into a circle", "without changing direction"],
    correct: 1,
    explanation: "Light bends toward the normal in a denser medium."
  },
  {
    text: "The image formed by a plane mirror is:",
    options: ["real and inverted", "real and upright", "virtual and upright", "virtual and inverted"],
    correct: 2,
    explanation: "Plane mirror forms a virtual, upright image."
  },
  {
    text: "A convex lens is thicker at the:",
    options: ["edges", "center", "top", "bottom"],
    correct: 1,
    explanation: "A convex lens is thicker at the center."
  },
  {
    text: "The phenomenon that proves the wave nature of light is:",
    options: ["reflection", "refraction", "interference", "photoelectric effect"],
    correct: 2,
    explanation: "Interference is a wave property."
  },
  {
    text: "In the photoelectric effect, the number of emitted electrons mainly depends on:",
    options: ["intensity of incident light", "speed of light", "mass of electrons", "color of metal only"],
    correct: 0,
    explanation: "Higher intensity gives more photoelectrons if frequency is above threshold."
  },
  {
    text: "The nucleus of an atom is made of:",
    options: ["electrons and protons", "protons and neutrons", "electrons and neutrons", "electrons only"],
    correct: 1,
    explanation: "Nucleus contains protons and neutrons."
  },
  {
    text: "Radioactivity is a process in which unstable nuclei:",
    options: ["gain electrons", "emit radiation spontaneously", "become magnets", "stop moving"],
    correct: 1,
    explanation: "Radioactive nuclei emit radiation naturally."
  },

  {
    text: "A boy runs 12 m east and then 5 m west. What is his displacement?",
    options: ["7 m east", "7 m west", "17 m east", "17 m west"],
    correct: 0,
    explanation: "Displacement = 12 - 5 = 7 m east."
  },
  {
    text: "A 2 kg block is pulled by a force of 8 N on a smooth surface for 4 s starting from rest. What is its final speed?",
    options: ["8 m/s", "12 m/s", "16 m/s", "20 m/s"],
    correct: 2,
    explanation: "a = F/m = 8/2 = 4 m/s², then v = at = 4×4 = 16 m/s."
  },
  {
    text: "A stone is thrown vertically upward with speed 20 m/s. Taking g = 10 m/s², what maximum height does it reach?",
    options: ["10 m", "20 m", "30 m", "40 m"],
    correct: 1,
    explanation: "Using v² = u² - 2gh, 0 = 400 - 20h, so h = 20 m."
  },
  {
    text: "Two resistors of 4 Ω and 8 Ω are connected in series across a 24 V battery. The current in the circuit is:",
    options: ["1 A", "2 A", "3 A", "4 A"],
    correct: 1,
    explanation: "R = 4 + 8 = 12 Ω, so I = 24/12 = 2 A."
  },
  {
    text: "Two resistors of 6 Ω and 3 Ω are connected in parallel across a 6 V battery. The total current is:",
    options: ["1 A", "2 A", "3 A", "4 A"],
    correct: 2,
    explanation: "Equivalent resistance = 2 Ω, so total current = 6/2 = 3 A."
  },
  {
    text: "A gas occupies 10 L at constant temperature. If its pressure is doubled, the new volume is:",
    options: ["2 L", "5 L", "10 L", "20 L"],
    correct: 1,
    explanation: "By Boyle’s law, doubling pressure halves the volume."
  },
  {
    text: "An object is placed 25 cm in front of a plane mirror. The distance between the object and its image is:",
    options: ["25 cm", "50 cm", "75 cm", "100 cm"],
    correct: 1,
    explanation: "Image is 25 cm behind mirror, so separation = 25 + 25 = 50 cm."
  },
  {
    text: "In a photoelectric experiment, light of suitable frequency is used. If the intensity is increased, what changes?",
    options: ["Maximum kinetic energy increases", "Number of emitted electrons increases", "Threshold frequency increases", "Speed of light changes"],
    correct: 1,
    explanation: "Higher intensity means more electrons emitted, not higher maximum KE."
  },
  {
    text: "A cyclist travels 6 m/s north for 10 s and then 8 m/s south for 5 s. What is the final displacement?",
    options: ["20 m north", "20 m south", "100 m north", "100 m south"],
    correct: 0,
    explanation: "First distance = 60 m north, second = 40 m south, so displacement = 20 m north."
  }
];

export default physics3;
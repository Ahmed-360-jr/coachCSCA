const physics5 = [
  {
    text: "A car starts from rest and moves with constant acceleration of 2 m/s². What is its speed after 5 s?",
    options: ["5 m/s", "10 m/s", "12 m/s", "15 m/s"],
    correct: 1,
    explanation: "Using v = u + at = 0 + 2×5 = 10 m/s."
  },
  {
    text: "An object is thrown vertically upward with speed 20 m/s. Taking g = 10 m/s², how long does it take to reach the highest point?",
    options: ["1 s", "2 s", "3 s", "4 s"],
    correct: 1,
    explanation: "At the highest point, v = 0. So 0 = 20 - 10t, hence t = 2 s."
  },
  {
    text: "A body moves with constant velocity of 6 m/s for 8 s. What distance does it travel?",
    options: ["24 m", "36 m", "48 m", "56 m"],
    correct: 2,
    explanation: "Distance = vt = 6 × 8 = 48 m."
  },
  {
    text: "If the velocity of a particle changes from 4 m/s east to 10 m/s east in 3 s, its acceleration is:",
    options: ["2 m/s² east", "3 m/s² east", "4 m/s² east", "14 m/s² east"],
    correct: 0,
    explanation: "Acceleration = (10 - 4)/3 = 2 m/s² east."
  },
  {
    text: "A force of 12 N acts on a body of mass 3 kg. What is the acceleration?",
    options: ["2 m/s²", "3 m/s²", "4 m/s²", "5 m/s²"],
    correct: 2,
    explanation: "By Newton’s second law, a = F/m = 12/3 = 4 m/s²."
  },
  {
    text: "The inertia of an object depends on its:",
    options: ["speed", "mass", "shape", "volume"],
    correct: 1,
    explanation: "Inertia is the resistance to change in motion and depends on mass."
  },
  {
    text: "A 2 kg body and a 6 kg body are acted on by the same net force. The acceleration of the 2 kg body is:",
    options: ["one-third that of the 6 kg body", "the same as that of the 6 kg body", "three times that of the 6 kg body", "six times that of the 6 kg body"],
    correct: 2,
    explanation: "For the same force, acceleration is inversely proportional to mass."
  },
  {
    text: "The momentum of a 5 kg object moving at 4 m/s is:",
    options: ["1.25 kg·m/s", "9 kg·m/s", "20 kg·m/s", "25 kg·m/s"],
    correct: 2,
    explanation: "Momentum p = mv = 5 × 4 = 20 kg·m/s."
  },
  {
    text: "Impulse is equal to change in:",
    options: ["force", "velocity", "momentum", "acceleration"],
    correct: 2,
    explanation: "Impulse equals the change in momentum."
  },
  {
    text: "A constant force of 10 N acts through a distance of 3 m in its own direction. The work done is:",
    options: ["7 J", "13 J", "30 J", "60 J"],
    correct: 2,
    explanation: "Work = Fs = 10 × 3 = 30 J."
  },
  {
    text: "The kinetic energy of a 2 kg body moving at 3 m/s is:",
    options: ["3 J", "6 J", "9 J", "18 J"],
    correct: 2,
    explanation: "KE = 1/2 mv² = 1/2 × 2 × 3² = 9 J."
  },
  {
    text: "A body of mass 2 kg is raised vertically by 5 m. Taking g = 10 m/s², the gain in gravitational potential energy is:",
    options: ["10 J", "25 J", "50 J", "100 J"],
    correct: 3,
    explanation: "PE = mgh = 2 × 10 × 5 = 100 J."
  },
  {
    text: "In the absence of air resistance, when a stone falls freely, which quantity remains constant?",
    options: ["velocity", "kinetic energy", "mechanical energy", "momentum"],
    correct: 2,
    explanation: "During free fall without air resistance, total mechanical energy remains constant."
  },
  {
    text: "For uniform circular motion, the centripetal force is always directed:",
    options: ["tangentially", "outward", "toward the center", "vertically upward"],
    correct: 2,
    explanation: "Centripetal force always acts toward the center of the circle."
  },
  {
    text: "A body moves in a circle of radius 2 m with speed 4 m/s. Its centripetal acceleration is:",
    options: ["2 m/s²", "4 m/s²", "8 m/s²", "16 m/s²"],
    correct: 2,
    explanation: "Centripetal acceleration = v²/r = 16/2 = 8 m/s²."
  },
  {
    text: "The gravitational force between two masses becomes how many times larger if the distance between them is halved?",
    options: ["2 times", "4 times", "6 times", "8 times"],
    correct: 1,
    explanation: "Gravitational force is inversely proportional to the square of distance."
  },
  {
    text: "In simple harmonic motion, acceleration is always directed:",
    options: ["along the velocity", "toward the equilibrium position", "away from equilibrium", "vertically downward"],
    correct: 1,
    explanation: "In SHM, acceleration is proportional to displacement and directed toward equilibrium."
  },
  {
    text: "When the frequency of a wave increases but its speed remains constant, the wavelength:",
    options: ["increases", "decreases", "stays the same", "becomes zero"],
    correct: 1,
    explanation: "Since v = fλ, if v is constant and f increases, λ decreases."
  },
  {
    text: "Two charges +q and +q are separated by a fixed distance. The force between them is:",
    options: ["attractive", "repulsive", "zero", "sometimes attractive"],
    correct: 1,
    explanation: "Like charges repel according to Coulomb’s law."
  },
  {
    text: "The SI unit of electric field strength is:",
    options: ["N/C", "C/N", "J/C", "V·C"],
    correct: 0,
    explanation: "Electric field strength is measured in newtons per coulomb."
  },
  {
    text: "If 6 C of charge flows through a conductor in 3 s, the current is:",
    options: ["0.5 A", "2 A", "3 A", "18 A"],
    correct: 1,
    explanation: "Current I = Q/t = 6/3 = 2 A."
  },
  {
    text: "A resistor of 4 Ω is connected to a 12 V battery. The current is:",
    options: ["2 A", "3 A", "4 A", "48 A"],
    correct: 1,
    explanation: "By Ohm’s law, I = V/R = 12/4 = 3 A."
  },
  {
    text: "Two resistors of 2 Ω and 3 Ω are connected in series. Their equivalent resistance is:",
    options: ["1.2 Ω", "5 Ω", "6 Ω", "8 Ω"],
    correct: 1,
    explanation: "For series connection, resistances add: 2 + 3 = 5 Ω."
  },
  {
    text: "Two resistors of 6 Ω and 3 Ω are connected in parallel. Their equivalent resistance is:",
    options: ["2 Ω", "3 Ω", "4 Ω", "9 Ω"],
    correct: 0,
    explanation: "For parallel: 1/R = 1/6 + 1/3 = 1/2, so R = 2 Ω."
  },
  {
    text: "Electrical power is given by:",
    options: ["P = IV", "P = IR", "P = V/R", "P = Q/t"],
    correct: 0,
    explanation: "Electrical power is P = IV."
  },
  {
    text: "A wire carrying current is placed perpendicular to a magnetic field. The force on the wire is maximum when the angle is:",
    options: ["0°", "30°", "60°", "90°"],
    correct: 3,
    explanation: "Magnetic force is maximum when the conductor is perpendicular to the field."
  },
  {
    text: "A charged particle moving parallel to magnetic field lines experiences:",
    options: ["maximum force", "minimum force", "zero force", "changing force"],
    correct: 2,
    explanation: "Magnetic force is zero when velocity is parallel to the field."
  },
  {
    text: "The direction of induced current in a circuit is given by:",
    options: ["Ohm’s law", "Lenz’s law", "Newton’s law", "Joule’s law"],
    correct: 1,
    explanation: "Lenz’s law gives the direction of induced current."
  },
  {
    text: "Electromagnetic induction occurs when there is a change in:",
    options: ["resistance", "magnetic flux", "mass", "temperature only"],
    correct: 1,
    explanation: "Induced emf is produced when magnetic flux changes."
  },
  {
    text: "The temperature of an ideal gas is mainly related to the average:",
    options: ["size of molecules", "mass of molecules", "kinetic energy of molecules", "color of molecules"],
    correct: 2,
    explanation: "Temperature is proportional to the average kinetic energy of gas molecules."
  },
  {
    text: "For a fixed amount of ideal gas at constant temperature, if pressure doubles, volume becomes:",
    options: ["double", "half", "four times", "unchanged"],
    correct: 1,
    explanation: "By Boyle’s law, PV = constant, so doubling pressure halves volume."
  },
  {
    text: "For an ideal gas, PV/T is proportional to:",
    options: ["mass only", "amount of gas", "pressure only", "temperature only"],
    correct: 1,
    explanation: "For a fixed gas sample, PV/T = nR, depending on amount of gas."
  },
  {
    text: "According to the first law of thermodynamics, the heat supplied to a system is used to:",
    options: ["increase internal energy only", "do work only", "increase internal energy and do work", "decrease pressure only"],
    correct: 2,
    explanation: "First law: Q = ΔU + W."
  },
  {
    text: "Which process takes place at constant temperature?",
    options: ["isobaric", "isochoric", "isothermal", "adiabatic"],
    correct: 2,
    explanation: "Isothermal means constant temperature."
  },
  {
    text: "When light passes from air into glass, its speed:",
    options: ["increases", "decreases", "becomes zero", "remains the same"],
    correct: 1,
    explanation: "Light slows down in a denser medium like glass."
  },
  {
    text: "The angle of incidence is equal to the angle of reflection for:",
    options: ["refraction only", "reflection", "diffraction", "interference"],
    correct: 1,
    explanation: "This is the law of reflection."
  },
  {
    text: "A lens that can converge parallel rays of light is called:",
    options: ["concave lens", "convex lens", "plane mirror", "glass slab"],
    correct: 1,
    explanation: "A convex lens converges parallel rays."
  },
  {
    text: "Interference of light proves that light behaves as:",
    options: ["particles only", "a wave", "matter only", "a magnetic field"],
    correct: 1,
    explanation: "Interference is a wave phenomenon."
  },
  {
    text: "In the photoelectric effect, electrons are emitted when light has frequency:",
    options: ["below the threshold", "equal to zero", "above the threshold", "independent of threshold"],
    correct: 2,
    explanation: "Emission occurs only if frequency exceeds the threshold frequency."
  },
  {
    text: "The nucleus of an atom contains:",
    options: ["electrons only", "protons and neutrons", "protons only", "neutrons and electrons"],
    correct: 1,
    explanation: "The nucleus is made of protons and neutrons."
  },
  {
    text: "A 3 kg block initially at rest is pulled by a horizontal force of 9 N on a smooth surface for 4 s. How far does it move?",
    options: ["8 m", "16 m", "24 m", "32 m"],
    correct: 2,
    explanation: "Acceleration a = F/m = 9/3 = 3 m/s². Distance from rest: s = 1/2 at² = 1/2 × 3 × 16 = 24 m."
  },
  {
    text: "A ball is thrown vertically upward with speed 30 m/s. Taking g = 10 m/s², what maximum height does it reach?",
    options: ["30 m", "40 m", "45 m", "60 m"],
    correct: 2,
    explanation: "Using v² = u² - 2gh, with v = 0: h = u²/(2g) = 900/20 = 45 m."
  },
  {
    text: "Two bodies of masses 2 kg and 3 kg move toward each other with speeds 4 m/s and 2 m/s respectively. Taking the first direction as positive, what is the total momentum?",
    options: ["14 kg·m/s", "2 kg·m/s", "-2 kg·m/s", "-14 kg·m/s"],
    correct: 1,
    explanation: "Total momentum = 2×4 + 3×(-2) = 8 - 6 = 2 kg·m/s."
  },
  {
    text: "A 10 Ω resistor and a 20 Ω resistor are connected in series to a 12 V supply. What is the current in the circuit?",
    options: ["0.2 A", "0.4 A", "0.6 A", "1.2 A"],
    correct: 1,
    explanation: "Equivalent resistance = 10 + 20 = 30 Ω. Current I = V/R = 12/30 = 0.4 A."
  },
  {
    text: "A 6 V battery is connected across two parallel resistors of 6 Ω and 3 Ω. What is the total current drawn from the battery?",
    options: ["1 A", "2 A", "3 A", "4 A"],
    correct: 2,
    explanation: "Equivalent resistance is 2 Ω. Total current = 6/2 = 3 A."
  },
  {
    text: "A gas occupies 8 L at constant temperature. If its pressure is doubled, what is the new volume?",
    options: ["2 L", "4 L", "8 L", "16 L"],
    correct: 1,
    explanation: "By Boyle’s law, pressure doubles so volume halves: 8 L becomes 4 L."
  },
  {
    text: "An object is placed 30 cm in front of a plane mirror. What is the distance between the object and its image?",
    options: ["15 cm", "30 cm", "45 cm", "60 cm"],
    correct: 3,
    explanation: "In a plane mirror, image distance equals object distance. Total separation = 30 + 30 = 60 cm."
  },
  {
    text: "A student uses light of frequency above the threshold frequency in a photoelectric experiment, then increases the light intensity while keeping frequency unchanged. Which statement is correct?",
    options: ["The maximum kinetic energy of emitted electrons increases", "No electrons are emitted", "More electrons are emitted, but maximum kinetic energy stays the same", "The threshold frequency increases"],
    correct: 2,
    explanation: "Increasing intensity increases number of emitted electrons, while maximum kinetic energy depends on frequency, not intensity."
  },
  {
    text: "A cyclist rides at 5 m/s east for 20 s, then 5 m/s west for 20 s. What is the total distance traveled and the final displacement?",
    options: ["100 m and 0 m", "200 m and 0 m", "100 m and 100 m east", "200 m and 100 m west"],
    correct: 1,
    explanation: "Distance = 5×20 + 5×20 = 200 m. Since the cyclist returns to the start, displacement = 0 m."
  }
];

export default physics5;
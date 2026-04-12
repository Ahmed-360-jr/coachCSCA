const questions = [
  {
    text: "A body starts from rest and accelerates uniformly at 5 m/s² for 4 s. Its final velocity is:",
    options: ["10 m/s", "15 m/s", "20 m/s", "25 m/s"],
    correct: 2,
    explanation: "v = u + at = 0 + 5×4 = 20 m/s."
  },
  {
    text: "A car moving at 24 m/s slows uniformly to 8 m/s in 4 s. Its acceleration is:",
    options: ["-2 m/s²", "-3 m/s²", "-4 m/s²", "-5 m/s²"],
    correct: 2,
    explanation: "a = (8 - 24)/4 = -4 m/s²."
  },
  {
    text: "A particle moves at constant speed 12 m/s for 6 s. The distance covered is:",
    options: ["60 m", "72 m", "84 m", "96 m"],
    correct: 1,
    explanation: "s = vt = 12×6 = 72 m."
  },
  {
    text: "A body starts from rest and accelerates at 4 m/s² for 3 s. Distance covered is:",
    options: ["12 m", "16 m", "18 m", "24 m"],
    correct: 2,
    explanation: "s = 1/2 at² = 1/2 × 4 × 9 = 18 m."
  },
  {
    text: "A force of 18 N acts on a mass of 3 kg. The acceleration is:",
    options: ["3 m/s²", "4 m/s²", "5 m/s²", "6 m/s²"],
    correct: 3,
    explanation: "a = F/m = 18/3 = 6 m/s²."
  },
  {
    text: "A 5 kg body has acceleration 3 m/s². The net force on it is:",
    options: ["8 N", "10 N", "15 N", "20 N"],
    correct: 2,
    explanation: "F = ma = 5×3 = 15 N."
  },
  {
    text: "The momentum of a 6 kg body moving at 4 m/s is:",
    options: ["10 kg·m/s", "20 kg·m/s", "24 kg·m/s", "30 kg·m/s"],
    correct: 2,
    explanation: "p = mv = 6×4 = 24 kg·m/s."
  },
  {
    text: "If the mass of an object doubles while velocity stays constant, its momentum:",
    options: ["halves", "doubles", "quadruples", "stays the same"],
    correct: 1,
    explanation: "Momentum is directly proportional to mass."
  },
  {
    text: "A force of 15 N moves an object 6 m in its direction. Work done is:",
    options: ["45 J", "60 J", "75 J", "90 J"],
    correct: 3,
    explanation: "W = Fs = 15×6 = 90 J."
  },
  {
    text: "A machine does 200 J of work in 5 s. Its power is:",
    options: ["20 W", "30 W", "40 W", "50 W"],
    correct: 2,
    explanation: "P = W/t = 200/5 = 40 W."
  },
  {
    text: "The kinetic energy of a 4 kg object moving at 5 m/s is:",
    options: ["25 J", "40 J", "50 J", "60 J"],
    correct: 2,
    explanation: "KE = 1/2 mv² = 1/2 × 4 × 25 = 50 J."
  },
  {
    text: "A 3 kg body is raised through 7 m. Taking g = 10 m/s², the gain in potential energy is:",
    options: ["120 J", "180 J", "210 J", "240 J"],
    correct: 2,
    explanation: "PE = mgh = 3×10×7 = 210 J."
  },
  {
    text: "If no resultant force acts on a moving body, it continues moving with:",
    options: ["increasing speed", "constant velocity", "decreasing speed", "zero momentum"],
    correct: 1,
    explanation: "Newton’s first law."
  },
  {
    text: "For a body in uniform circular motion, the velocity is always:",
    options: ["toward the center", "away from the center", "tangential to the path", "zero"],
    correct: 2,
    explanation: "Velocity is tangential in circular motion."
  },
  {
    text: "A body moves in a circle of radius 4 m with speed 8 m/s. Its centripetal acceleration is:",
    options: ["8 m/s²", "12 m/s²", "16 m/s²", "20 m/s²"],
    correct: 2,
    explanation: "a = v²/r = 64/4 = 16 m/s²."
  },
  {
    text: "If the distance between two masses becomes three times larger, gravitational force becomes:",
    options: ["3 times", "1/3", "1/6", "1/9"],
    correct: 3,
    explanation: "Force varies inversely with square of distance."
  },
  {
    text: "The time period of a wave is:",
    options: ["1/f", "f/λ", "fλ", "v/f"],
    correct: 0,
    explanation: "T = 1/f."
  },
  {
    text: "A wave has frequency 4 Hz and wavelength 5 m. Its speed is:",
    options: ["9 m/s", "20 m/s", "25 m/s", "40 m/s"],
    correct: 1,
    explanation: "v = fλ = 4×5 = 20 m/s."
  },
  {
    text: "Two charges +q and -q placed near each other will:",
    options: ["repel", "attract", "have zero force", "rotate only"],
    correct: 1,
    explanation: "Unlike charges attract."
  },
  {
    text: "The SI unit of electric field strength is:",
    options: ["N/C", "C/N", "J/C", "A/s"],
    correct: 0,
    explanation: "Electric field is measured in newton per coulomb."
  },
  {
    text: "If 15 C of charge flows in 5 s, the current is:",
    options: ["2 A", "3 A", "4 A", "5 A"],
    correct: 1,
    explanation: "I = Q/t = 15/5 = 3 A."
  },
  {
    text: "A resistor of 10 Ω is connected to a 20 V battery. The current is:",
    options: ["1 A", "2 A", "3 A", "4 A"],
    correct: 1,
    explanation: "I = V/R = 20/10 = 2 A."
  },
  {
    text: "The equivalent resistance of 4 Ω and 6 Ω in series is:",
    options: ["2.4 Ω", "5 Ω", "10 Ω", "24 Ω"],
    correct: 2,
    explanation: "Series resistances add."
  },
  {
    text: "The equivalent resistance of 4 Ω and 4 Ω in parallel is:",
    options: ["1 Ω", "2 Ω", "4 Ω", "8 Ω"],
    correct: 1,
    explanation: "Equal parallel resistors give half the value."
  },
  {
    text: "Electrical power can also be written as:",
    options: ["P = IV", "P = IR", "P = Q/t", "P = V/I"],
    correct: 0,
    explanation: "Power = current × voltage."
  },
  {
    text: "A charged particle moving perpendicular to a magnetic field experiences:",
    options: ["maximum force", "minimum force", "zero force", "no motion"],
    correct: 0,
    explanation: "Force is maximum when velocity is perpendicular to field."
  },
  {
    text: "A particle moving parallel to magnetic field lines experiences:",
    options: ["maximum force", "zero force", "double force", "variable force"],
    correct: 1,
    explanation: "Magnetic force is zero when motion is parallel to field."
  },
  {
    text: "Electromagnetic induction is produced by change in:",
    options: ["mass", "flux linkage", "volume", "density"],
    correct: 1,
    explanation: "Induction comes from changing magnetic flux."
  },
  {
    text: "Lenz’s law is a consequence of conservation of:",
    options: ["mass", "momentum", "energy", "charge only"],
    correct: 2,
    explanation: "Lenz’s law opposes the change, consistent with energy conservation."
  },
  {
    text: "The temperature of an ideal gas depends on average molecular:",
    options: ["volume", "mass", "kinetic energy", "color"],
    correct: 2,
    explanation: "Temperature is proportional to average kinetic energy."
  },
  {
    text: "For a fixed mass of gas at constant temperature, if pressure becomes half, volume becomes:",
    options: ["half", "double", "triple", "unchanged"],
    correct: 1,
    explanation: "Boyle’s law: pressure inversely proportional to volume."
  },
  {
    text: "The first law of thermodynamics is best written as:",
    options: ["Q = ΔU + W", "Q = IV", "Q = mc", "Q = PV"],
    correct: 0,
    explanation: "Heat supplied = increase in internal energy + work done."
  },
  {
    text: "A process where no heat enters or leaves a gas is:",
    options: ["isothermal", "adiabatic", "isobaric", "isochoric"],
    correct: 1,
    explanation: "Adiabatic process."
  },
  {
    text: "When light passes from water into air, it bends:",
    options: ["toward the normal", "away from the normal", "not at all", "into a circle"],
    correct: 1,
    explanation: "Light bends away from the normal when moving to a less dense medium."
  },
  {
    text: "The image in a plane mirror is:",
    options: ["real and magnified", "virtual and upright", "real and inverted", "virtual and inverted"],
    correct: 1,
    explanation: "Plane mirror forms a virtual upright image."
  },
  {
    text: "A concave lens is generally:",
    options: ["converging", "diverging", "reflecting", "polarizing"],
    correct: 1,
    explanation: "Concave lens diverges light rays."
  },
  {
    text: "Diffraction is evidence that light behaves as:",
    options: ["a wave", "a particle only", "a charge", "matter only"],
    correct: 0,
    explanation: "Diffraction is a wave property."
  },
  {
    text: "In the photoelectric effect, maximum kinetic energy of emitted electrons depends on:",
    options: ["intensity", "frequency", "size of surface", "time only"],
    correct: 1,
    explanation: "Maximum KE depends on frequency of incident light."
  },
  {
    text: "The nucleus of hydrogen-1 contains:",
    options: ["1 proton only", "1 proton and 1 neutron", "1 neutron only", "1 electron only"],
    correct: 0,
    explanation: "Hydrogen-1 nucleus has one proton."
  },

  {
    text: "A body moves at 10 m/s for 3 s and then 4 m/s for 5 s in the same direction. Total distance is:",
    options: ["30 m", "40 m", "50 m", "60 m"],
    correct: 2,
    explanation: "Distance = 10×3 + 4×5 = 30 + 20 = 50 m."
  },
  {
    text: "A 3 kg block is pulled by a force of 12 N on a smooth surface for 2 s from rest. Final speed is:",
    options: ["4 m/s", "6 m/s", "8 m/s", "10 m/s"],
    correct: 2,
    explanation: "a = 12/3 = 4 m/s², then v = at = 4×2 = 8 m/s."
  },
  {
    text: "A stone is thrown vertically upward with speed 30 m/s. Taking g = 10 m/s², the time to reach maximum height is:",
    options: ["1 s", "2 s", "3 s", "4 s"],
    correct: 2,
    explanation: "t = u/g = 30/10 = 3 s."
  },
  {
    text: "A 24 V supply is connected to two resistors of 4 Ω and 8 Ω in series. The current is:",
    options: ["1 A", "2 A", "3 A", "4 A"],
    correct: 1,
    explanation: "R = 12 Ω, so I = 24/12 = 2 A."
  },
  {
    text: "Two resistors 6 Ω and 6 Ω are connected in parallel to a 12 V source. Total current is:",
    options: ["2 A", "3 A", "4 A", "6 A"],
    correct: 2,
    explanation: "Equivalent resistance = 3 Ω, so I = 12/3 = 4 A."
  },
  {
    text: "A gas occupies 12 L at constant temperature. If its pressure is tripled, the new volume is:",
    options: ["2 L", "3 L", "4 L", "6 L"],
    correct: 2,
    explanation: "Volume becomes one-third: 12/3 = 4 L."
  },
  {
    text: "An object is placed 20 cm in front of a plane mirror. The distance between the object and image is:",
    options: ["20 cm", "30 cm", "40 cm", "50 cm"],
    correct: 2,
    explanation: "Object-image separation = 2×20 = 40 cm."
  },
  {
    text: "In a photoelectric experiment, light frequency is kept above threshold and intensity is increased. What changes?",
    options: ["Maximum kinetic energy increases", "Number of emitted electrons increases", "Threshold frequency changes", "Speed of electrons becomes zero"],
    correct: 1,
    explanation: "Intensity affects the number of emitted electrons."
  },
  {
    text: "A man walks 15 m north and then 9 m south. His final displacement is:",
    options: ["6 m north", "6 m south", "24 m north", "24 m south"],
    correct: 0,
    explanation: "Net displacement = 15 - 9 = 6 m north."
  }
];
export default questions;

const questions = [
  {
    text: "A body starts from rest and accelerates at 2 m/s² for 5 s. Its final velocity is:",
    options: ["5 m/s", "10 m/s", "12 m/s", "15 m/s"],
    correct: 1,
    explanation: "v = u + at = 0 + 2×5 = 10 m/s."
  },
  {
    text: "A car moving at 15 m/s comes to rest in 3 s. Its acceleration is:",
    options: ["-3 m/s²", "-4 m/s²", "-5 m/s²", "-6 m/s²"],
    correct: 2,
    explanation: "a = (0 - 15)/3 = -5 m/s²."
  },
  {
    text: "A particle moving at constant speed 8 m/s for 4 s covers:",
    options: ["24 m", "32 m", "36 m", "40 m"],
    correct: 1,
    explanation: "s = vt = 8×4 = 32 m."
  },
  {
    text: "A body starts from rest and moves with acceleration 3 m/s² for 2 s. Distance covered is:",
    options: ["3 m", "6 m", "9 m", "12 m"],
    correct: 1,
    explanation: "s = 1/2 at² = 1/2 × 3 × 4 = 6 m."
  },
  {
    text: "The SI unit of force is:",
    options: ["Joule", "Newton", "Watt", "Pascal"],
    correct: 1,
    explanation: "Force is measured in newtons."
  },
  {
    text: "A force of 20 N acts on a mass of 4 kg. The acceleration is:",
    options: ["2 m/s²", "4 m/s²", "5 m/s²", "6 m/s²"],
    correct: 2,
    explanation: "a = F/m = 20/4 = 5 m/s²."
  },
  {
    text: "Inertia depends on:",
    options: ["shape", "mass", "speed", "volume"],
    correct: 1,
    explanation: "Inertia depends on mass."
  },
  {
    text: "The momentum of a 3 kg body moving at 6 m/s is:",
    options: ["9 kg·m/s", "12 kg·m/s", "18 kg·m/s", "24 kg·m/s"],
    correct: 2,
    explanation: "p = mv = 3×6 = 18 kg·m/s."
  },
  {
    text: "Impulse is equal to change in:",
    options: ["acceleration", "force", "momentum", "mass"],
    correct: 2,
    explanation: "Impulse equals change in momentum."
  },
  {
    text: "Work done by a 10 N force over 5 m in the same direction is:",
    options: ["15 J", "25 J", "50 J", "60 J"],
    correct: 2,
    explanation: "W = Fs = 10×5 = 50 J."
  },
  {
    text: "Power is defined as:",
    options: ["work done per unit time", "force per unit area", "energy stored", "mass × velocity"],
    correct: 0,
    explanation: "Power = work/time."
  },
  {
    text: "The kinetic energy of a 2 kg body moving at 4 m/s is:",
    options: ["8 J", "12 J", "16 J", "20 J"],
    correct: 2,
    explanation: "KE = 1/2 mv² = 1/2 × 2 × 16 = 16 J."
  },
  {
    text: "The gravitational potential energy gained by a 4 kg body raised 3 m is (g = 10 m/s²):",
    options: ["40 J", "80 J", "100 J", "120 J"],
    correct: 3,
    explanation: "PE = mgh = 4×10×3 = 120 J."
  },
  {
    text: "The law of conservation of energy states that energy:",
    options: ["can be destroyed", "can be created", "cannot be created or destroyed", "always decreases"],
    correct: 2,
    explanation: "Energy is conserved."
  },
  {
    text: "In uniform circular motion, the centripetal force acts:",
    options: ["outward", "toward the center", "tangentially", "upward"],
    correct: 1,
    explanation: "It always points toward the center."
  },
  {
    text: "A body moving in a circle of radius 2 m with speed 4 m/s has centripetal acceleration:",
    options: ["4 m/s²", "6 m/s²", "8 m/s²", "10 m/s²"],
    correct: 2,
    explanation: "a = v²/r = 16/2 = 8 m/s²."
  },
  {
    text: "The frequency of a wave is measured in:",
    options: ["m", "Hz", "s", "N"],
    correct: 1,
    explanation: "Frequency is measured in hertz."
  },
  {
    text: "Wave speed is given by:",
    options: ["v = fλ", "v = f/λ", "v = λ/f", "v = ft²"],
    correct: 0,
    explanation: "Wave speed = frequency × wavelength."
  },
  {
    text: "Like charges:",
    options: ["attract", "repel", "cancel", "vibrate"],
    correct: 1,
    explanation: "Like charges repel."
  },
  {
    text: "Unlike charges:",
    options: ["repel", "attract", "disappear", "become neutral always"],
    correct: 1,
    explanation: "Unlike charges attract."
  },
  {
    text: "Electric current is the rate of flow of:",
    options: ["mass", "charge", "energy", "voltage"],
    correct: 1,
    explanation: "Current is rate of flow of charge."
  },
  {
    text: "The SI unit of current is:",
    options: ["Volt", "Ampere", "Ohm", "Coulomb"],
    correct: 1,
    explanation: "Current is measured in ampere."
  },
  {
    text: "According to Ohm’s law:",
    options: ["V = IR", "V = I/R", "R = I/V", "P = IV"],
    correct: 0,
    explanation: "Ohm’s law is V = IR."
  },
  {
    text: "Two resistors 2 Ω and 3 Ω connected in series have equivalent resistance:",
    options: ["1 Ω", "5 Ω", "6 Ω", "8 Ω"],
    correct: 1,
    explanation: "Series resistances add directly."
  },
  {
    text: "Two resistors 6 Ω and 3 Ω connected in parallel have equivalent resistance:",
    options: ["2 Ω", "3 Ω", "4 Ω", "9 Ω"],
    correct: 0,
    explanation: "1/R = 1/6 + 1/3 = 1/2, so R = 2 Ω."
  },
  {
    text: "Electrical power is given by:",
    options: ["P = IV", "P = IR", "P = V/R", "P = Q/t"],
    correct: 0,
    explanation: "Power = current × voltage."
  },
  {
    text: "A conductor carrying current in a magnetic field experiences maximum force when the angle is:",
    options: ["0°", "30°", "60°", "90°"],
    correct: 3,
    explanation: "Maximum force occurs at 90°."
  },
  {
    text: "Electromagnetic induction occurs due to change in:",
    options: ["temperature", "magnetic flux", "mass", "pressure"],
    correct: 1,
    explanation: "Induced emf is caused by change in magnetic flux."
  },
  {
    text: "The direction of induced current is determined by:",
    options: ["Ohm’s law", "Lenz’s law", "Newton’s law", "Boyle’s law"],
    correct: 1,
    explanation: "Lenz’s law gives the direction."
  },
  {
    text: "Temperature of a gas is related to average:",
    options: ["potential energy", "kinetic energy", "volume", "mass"],
    correct: 1,
    explanation: "Temperature measures average kinetic energy."
  },
  {
    text: "Boyle’s law states that for a fixed mass of gas at constant temperature, pressure is inversely proportional to:",
    options: ["mass", "volume", "density", "temperature"],
    correct: 1,
    explanation: "P ∝ 1/V."
  },
  {
    text: "The first law of thermodynamics is:",
    options: ["Q = ΔU + W", "Q = IV", "P = F/A", "V = IR"],
    correct: 0,
    explanation: "Heat supplied = increase in internal energy + work done."
  },
  {
    text: "A process at constant temperature is called:",
    options: ["isobaric", "isothermal", "isochoric", "adiabatic"],
    correct: 1,
    explanation: "Isothermal means constant temperature."
  },
  {
    text: "When light travels from air into glass, it bends:",
    options: ["away from the normal", "toward the normal", "not at all", "backward"],
    correct: 1,
    explanation: "Light bends toward the normal in a denser medium."
  },
  {
    text: "The law of reflection states:",
    options: ["angle of incidence = angle of reflection", "i > r", "i < r", "i = 0 always"],
    correct: 0,
    explanation: "Basic law of reflection."
  },
  {
    text: "A convex lens is:",
    options: ["diverging", "converging", "reflecting", "absorbing"],
    correct: 1,
    explanation: "A convex lens converges light."
  },
  {
    text: "Interference of light shows that light behaves as:",
    options: ["particle only", "wave", "matter only", "charge"],
    correct: 1,
    explanation: "Interference is a wave phenomenon."
  },
  {
    text: "Photoelectric emission occurs when incident light has frequency:",
    options: ["below threshold", "above threshold", "zero", "independent of threshold"],
    correct: 1,
    explanation: "Frequency must be above threshold."
  },
  {
    text: "The nucleus of an atom contains:",
    options: ["electrons only", "protons and neutrons", "protons only", "neutrons and electrons"],
    correct: 1,
    explanation: "Nucleus contains protons and neutrons."
  },

  {
    text: "A runner moves at 6 m/s for 5 s. What distance does he cover?",
    options: ["11 m", "20 m", "30 m", "35 m"],
    correct: 2,
    explanation: "s = vt = 6×5 = 30 m."
  },
  {
    text: "A 2 kg block is pulled by a force of 4 N on a smooth surface. Its acceleration is:",
    options: ["1 m/s²", "2 m/s²", "3 m/s²", "4 m/s²"],
    correct: 1,
    explanation: "a = F/m = 4/2 = 2 m/s²."
  },
  {
    text: "A stone dropped from rest falls for 2 s. Taking g = 10 m/s², the distance fallen is:",
    options: ["10 m", "15 m", "20 m", "25 m"],
    correct: 2,
    explanation: "s = 1/2 gt² = 1/2 × 10 × 4 = 20 m."
  },
  {
    text: "A 12 V battery is connected to a 4 Ω resistor. The current is:",
    options: ["2 A", "3 A", "4 A", "6 A"],
    correct: 1,
    explanation: "I = V/R = 12/4 = 3 A."
  },
  {
    text: "A gas occupies 8 L at constant temperature. If the pressure is doubled, the new volume is:",
    options: ["2 L", "4 L", "8 L", "16 L"],
    correct: 1,
    explanation: "Doubling pressure halves the volume."
  },
  {
    text: "An object is placed 15 cm in front of a plane mirror. The distance between object and image is:",
    options: ["15 cm", "20 cm", "30 cm", "45 cm"],
    correct: 2,
    explanation: "Object-image separation = 2 × 15 = 30 cm."
  },
  {
    text: "A man walks 20 m east and then 5 m west. His displacement is:",
    options: ["15 m east", "15 m west", "25 m east", "25 m west"],
    correct: 0,
    explanation: "Net displacement = 20 - 5 = 15 m east."
  },
  {
    text: "In the photoelectric effect, increasing light intensity while keeping frequency constant mainly increases:",
    options: ["maximum kinetic energy", "number of emitted electrons", "threshold frequency", "speed of light"],
    correct: 1,
    explanation: "Higher intensity gives more emitted electrons."
  },
  {
    text: "Two resistors of 2 Ω and 4 Ω are connected in series to a 12 V source. The current is:",
    options: ["1 A", "2 A", "3 A", "4 A"],
    correct: 1,
    explanation: "Total resistance = 6 Ω, so I = 12/6 = 2 A."
  }
];
export default questions;
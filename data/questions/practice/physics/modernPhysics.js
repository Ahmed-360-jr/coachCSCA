const questions = [
{
  text: "The work function of a metal is 2 eV. What is the minimum frequency of light required to eject electrons? (h = 4×10^-15 eV·s)",
  options: ["5×10^14 Hz", "4×10^14 Hz", "2×10^14 Hz", "1×10^14 Hz"],
  correct: 0,
  explanation: "f₀ = φ/h = 2 / (4×10^-15) = 5×10^14 Hz."
},
{
  text: "A photon of energy 6 eV strikes a metal with work function 2 eV. Maximum kinetic energy of emitted electron is:",
  options: ["2 eV", "3 eV", "4 eV", "6 eV"],
  correct: 2,
  explanation: "KE = hf - φ = 6 - 2 = 4 eV."
},
{
  text: "If frequency of incident light increases, the maximum kinetic energy of emitted electrons:",
  options: ["Decreases", "Increases", "Same", "Zero"],
  correct: 1,
  explanation: "KE = hf - φ."
},
{
  text: "A metal surface has a work function of 2.5 eV. It is illuminated with light of wavelength 400 nm. (hc = 1240 eV·nm). Calculate: (i) the energy of the photon, (ii) the maximum kinetic energy of emitted electrons, and (iii) the stopping potential.",
  options: ["3.1 eV, 0.6 eV, 0.6 V", "2.5 eV, 0.6 eV, 0.6 V", "3.1 eV, 1.6 eV, 1.6 V", "2.5 eV, 1.6 eV, 1.6 V"],
  correct: 0,
  explanation: "Photon energy = 1240/400 = 3.1 eV. KE = 3.1 - 2.5 = 0.6 eV. Stopping potential = 0.6 V."
},
{
  text: "Light of frequency 8×10^14 Hz falls on a metal with threshold frequency 5×10^14 Hz. Calculate the maximum kinetic energy of emitted electrons. (h = 4×10^-15 eV·s)",
  options: ["1.2 eV", "2.0 eV", "3.2 eV", "4.0 eV"],
  correct: 0,
  explanation: "KE = h(f - f₀) = 4×10^-15 × (3×10^14) = 1.2 eV."
},
{
  text: "An electron accelerated through a potential difference of 100 V acquires kinetic energy. Calculate its de Broglie wavelength. (h = 6.6×10^-34 Js, m = 9.1×10^-31 kg, e = 1.6×10^-19 C)",
  options: ["1.23×10^-10 m", "3.9×10^-10 m", "2.5×10^-10 m", "6.2×10^-10 m"],
  correct: 0,
  explanation: "λ = h/√(2meV). Substitute values → ≈1.23×10^-10 m."
},
{
  text: "A hydrogen atom electron jumps from energy level -1.5 eV to -3.4 eV. Find the wavelength of emitted photon. (hc = 1240 eV·nm)",
  options: ["656 nm", "820 nm", "1240 nm", "500 nm"],
  correct: 0,
  explanation: "Energy difference = 1.9 eV. λ = 1240/1.9 ≈ 653 nm ≈ 656 nm."
},
{
  text: "A radioactive substance has half-life of 5 days. If initial mass is 80 g, find the mass remaining after 20 days.",
  options: ["5 g", "10 g", "20 g", "40 g"],
  correct: 0,
  explanation: "20 days = 4 half-lives → 80 → 40 → 20 → 10 → 5 g."
},
{
  text: "A radioactive sample decreases to 1/8 of its original amount in 9 hours. What is its half-life?",
  options: ["2 hours", "3 hours", "4.5 hours", "6 hours"],
  correct: 1,
  explanation: "1/8 = (1/2)^3 → 3 half-lives = 9 hours → 1 half-life = 3 hours."
},
{
  text: "An electron in hydrogen atom moves from n=4 to n=2 level. If energies are Eₙ = -13.6/n² eV, calculate the energy of emitted photon.",
  options: ["2.55 eV", "3.4 eV", "4.2 eV", "1.9 eV"],
  correct: 0,
  explanation: "E4 = -0.85 eV, E2 = -3.4 eV → ΔE = 2.55 eV."
},
{
  text: "A nucleus undergoes alpha decay and then beta decay. What is the net change in atomic number (Z)?",
  options: ["-2", "-1", "0", "+1"],
  correct: 1,
  explanation: "Alpha: Z -2, Beta: Z +1 → net = -1."
},
{
  text: "A sample initially has activity 1600 counts/s. After some time, it reduces to 100 counts/s. How many half-lives have passed?",
  options: ["2", "3", "4", "5"],
  correct: 2,
  explanation: "1600 → 800 → 400 → 200 → 100 → 4 half-lives."
},
{
  text: "A photon has wavelength 250 nm. Calculate its energy in eV. (hc = 1240 eV·nm)",
  options: ["4.96 eV", "5.2 eV", "3.1 eV", "2.5 eV"],
  correct: 0,
  explanation: "E = 1240/250 = 4.96 eV."
},
{
  text: "Increasing intensity of light increases:",
  options: ["Energy of photons", "Number of photons", "Frequency", "Wavelength"],
  correct: 1,
  explanation: "Intensity affects number, not energy."
},
{
  text: "Threshold frequency depends on:",
  options: ["Intensity", "Material", "Temperature", "Voltage"],
  correct: 1,
  explanation: "Material property."
},

// LONG WORD
{
  text: "Light of wavelength 400 nm falls on a metal surface with work function 3 eV. Will photoelectric emission occur? (hc = 1240 eV·nm)",
  options: ["Yes", "No", "Only at high intensity", "Depends on temperature"],
  correct: 0,
  explanation: "Photon energy = 1240/400 = 3.1 eV > 3 eV → emission occurs."
},

{
  text: "Stopping potential depends on:",
  options: ["Intensity", "Frequency", "Area", "Material thickness"],
  correct: 1,
  explanation: "Depends on max KE."
},

{
  text: "Photon energy is given by:",
  options: ["E=mc²", "E=hf", "E=mv²", "E=qV"],
  correct: 1,
  explanation: "Planck relation."
},

{
  text: "An electron has KE of 3 eV. Stopping potential is:",
  options: ["3 V", "1.5 V", "6 V", "0.5 V"],
  correct: 0,
  explanation: "1 eV = 1 V stopping potential."
},

{
  text: "Which shows wave nature of matter?",
  options: ["Photoelectric effect", "Interference", "Diffraction of electrons", "Reflection"],
  correct: 2,
  explanation: "Electron diffraction."
},

{
  text: "De Broglie wavelength λ = h/p. If momentum doubles, λ:",
  options: ["Doubles", "Halves", "Same", "Quadruples"],
  correct: 1,
  explanation: "Inverse relation."
},

{
  text: "An electron moves faster. Its wavelength:",
  options: ["Increases", "Decreases", "Same", "Zero"],
  correct: 1,
  explanation: "Higher p → smaller λ."
},

// ATOMIC
{
  text: "Bohr model states electrons move in:",
  options: ["Random paths", "Fixed orbits", "Waves", "Circles only"],
  correct: 1,
  explanation: "Quantized orbits."
},

{
  text: "Energy levels in atom are:",
  options: ["Continuous", "Discrete", "Infinite", "Random"],
  correct: 1,
  explanation: "Quantized."
},

{
  text: "When electron jumps to higher orbit, energy:",
  options: ["Emitted", "Absorbed", "Zero", "Constant"],
  correct: 1,
  explanation: "Needs energy input."
},

{
  text: "When electron falls to lower level, energy:",
  options: ["Absorbed", "Emitted", "Zero", "Lost"],
  correct: 1,
  explanation: "Photon emitted."
},

// LONG WORD
{
  text: "An electron drops from energy level -3 eV to -5 eV. Energy of emitted photon is:",
  options: ["2 eV", "8 eV", "3 eV", "5 eV"],
  correct: 0,
  explanation: "Energy difference = 2 eV."
},

{
  text: "Which particle has no charge?",
  options: ["Proton", "Electron", "Neutron", "Alpha"],
  correct: 2,
  explanation: "Neutron is neutral."
},

{
  text: "Mass number =",
  options: ["Protons only", "Neutrons only", "Protons + neutrons", "Electrons"],
  correct: 2,
  explanation: "Definition."
},

{
  text: "Isotopes have same:",
  options: ["Mass", "Protons", "Neutrons", "Energy"],
  correct: 1,
  explanation: "Same atomic number."
},

// NUCLEAR
{
  text: "Alpha particle is:",
  options: ["Electron", "Helium nucleus", "Proton", "Neutron"],
  correct: 1,
  explanation: "2p + 2n."
},

{
  text: "Beta decay emits:",
  options: ["Helium", "Electron", "Photon", "Neutron"],
  correct: 1,
  explanation: "Beta particle = electron."
},

{
  text: "Gamma rays are:",
  options: ["Particles", "Waves", "Nuclei", "Electrons"],
  correct: 1,
  explanation: "Electromagnetic waves."
},

{
  text: "Half-life is:",
  options: ["Time to decay all", "Time for half to decay", "Time to double", "Time to react"],
  correct: 1,
  explanation: "Definition."
},

{
  text: "If half-life is 10 days, amount left after 20 days:",
  options: ["1/2", "1/4", "1/8", "1/16"],
  correct: 1,
  explanation: "Two half-lives → 1/4."
},

{
  text: "Nuclear fission is:",
  options: ["Joining nuclei", "Splitting nucleus", "Electron emission", "Photon emission"],
  correct: 1,
  explanation: "Heavy splits."
},

{
  text: "Fusion occurs at:",
  options: ["Low temp", "High temp", "Room temp", "Zero"],
  correct: 1,
  explanation: "Needs high energy."
},

// HARD WORD
{
  text: "A radioactive sample has initial activity 800 counts/s. After 3 half-lives, activity is:",
  options: ["400", "200", "100", "50"],
  correct: 2,
  explanation: "800 → 400 → 200 → 100."
},

{
  text: "Energy released in nuclear reactions is due to:",
  options: ["Charge", "Mass defect", "Heat", "Speed"],
  correct: 1,
  explanation: "E=mc²."
},

{
  text: "Which has highest penetration?",
  options: ["Alpha", "Beta", "Gamma", "Neutron"],
  correct: 2,
  explanation: "Gamma strongest."
},

{
  text: "Photoelectric effect proves light is:",
  options: ["Wave", "Particle", "Energy", "Field"],
  correct: 1,
  explanation: "Photon nature."
}
];
export default questions;
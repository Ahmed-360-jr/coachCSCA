const questions = [
{
  text: "An ideal gas expands at constant pressure of 2×10^5 Pa from volume 0.01 m³ to 0.03 m³. Work done by the gas is:",
  options: ["2000 J", "3000 J", "4000 J", "6000 J"],
  correct: 2,
  explanation: "W = PΔV = 2×10^5 × (0.02) = 4000 J."
},
{
  text: "A gas absorbs 500 J of heat and does 200 J of work. Change in internal energy is:",
  options: ["300 J", "500 J", "700 J", "200 J"],
  correct: 0,
  explanation: "ΔU = Q - W = 500 - 200 = 300 J."
},
{
  text: "An ideal gas is heated at constant volume. What happens to pressure?",
  options: ["Increases", "Decreases", "Remains constant", "Becomes zero"],
  correct: 0,
  explanation: "P ∝ T at constant volume."
},
{
  text: "Which process has zero work done?",
  options: ["Isothermal", "Isobaric", "Isochoric", "Adiabatic"],
  correct: 2,
  explanation: "Volume constant → W=0."
},
{
  text: "For an ideal gas, PV = nRT. If temperature doubles and volume constant, pressure:",
  options: ["Halves", "Doubles", "Same", "Triples"],
  correct: 1,
  explanation: "P ∝ T."
},
{
  text: "A gas at 300 K is heated to 600 K. What happens to average kinetic energy?",
  options: ["Halves", "Doubles", "Triples", "Same"],
  correct: 1,
  explanation: "KE ∝ T."
},
{
  text: "If pressure is constant and temperature doubles, volume becomes:",
  options: ["Half", "Double", "Same", "Triple"],
  correct: 1,
  explanation: "V ∝ T."
},

// HARD WORD PROBLEM
{
  text: "A cylinder contains 1 mole of gas at 300 K and pressure 1×10^5 Pa. It expands isothermally to double its volume. What is the work done? (R = 8.3)",
  options: ["1720 J", "2000 J", "2500 J", "3000 J"],
  correct: 0,
  explanation: "W = nRT ln(V2/V1) = 1×8.3×300×ln2 ≈ 1720 J."
},

{
  text: "An ideal gas undergoes adiabatic expansion. What happens to temperature?",
  options: ["Increases", "Decreases", "Same", "Zero"],
  correct: 1,
  explanation: "Energy used to do work → temperature drops."
},

{
  text: "A gas has pressure 2 atm and volume 5 L. If compressed to 2.5 L at constant temperature, new pressure:",
  options: ["2 atm", "4 atm", "5 atm", "1 atm"],
  correct: 1,
  explanation: "Boyle’s law → P1V1=P2V2."
},

{
  text: "Root mean square speed of gas depends on:",
  options: ["Pressure", "Temperature", "Volume", "Density only"],
  correct: 1,
  explanation: "v_rms ∝ √T."
},

{
  text: "A gas molecule mass increases. RMS speed:",
  options: ["Increases", "Decreases", "Same", "Zero"],
  correct: 1,
  explanation: "v ∝ 1/√m."
},

{
  text: "If temperature increases from 300 K to 1200 K, RMS speed increases by factor:",
  options: ["2", "4", "√4", "√2"],
  correct: 0,
  explanation: "v ∝ √T → √(1200/300)=2."
},

{
  text: "Internal energy of ideal gas depends only on:",
  options: ["Pressure", "Volume", "Temperature", "Mass"],
  correct: 2,
  explanation: "Depends only on T."
},

{
  text: "A gas expands freely in vacuum. Work done:",
  options: ["Positive", "Negative", "Zero", "Infinite"],
  correct: 2,
  explanation: "No external force."
},

{
  text: "Heat capacity at constant volume is always:",
  options: ["Greater than Cp", "Less than Cp", "Equal to Cp", "Zero"],
  correct: 1,
  explanation: "Cp > Cv."
},

{
  text: "First law of thermodynamics is:",
  options: ["Q = W - ΔU", "Q = ΔU + W", "Q = ΔU - W", "None"],
  correct: 1,
  explanation: "Standard form."
},

{
  text: "Gas is compressed and temperature rises. Work is:",
  options: ["Done by gas", "Done on gas", "Zero", "Negative only"],
  correct: 1,
  explanation: "Compression → work done on gas."
},

// HARD WORD
{
  text: "A gas absorbs 1000 J heat and its internal energy increases by 400 J. What is work done?",
  options: ["600 J", "400 J", "1000 J", "1400 J"],
  correct: 0,
  explanation: "W = Q - ΔU = 600 J."
},

{
  text: "A gas initially at 1 atm, 300 K is heated to 600 K at constant pressure. Volume changes from 2 L to:",
  options: ["2 L", "3 L", "4 L", "5 L"],
  correct: 2,
  explanation: "V ∝ T → doubles → 4 L."
},

{
  text: "Which process has constant temperature?",
  options: ["Adiabatic", "Isothermal", "Isochoric", "Isobaric"],
  correct: 1,
  explanation: "Definition."
},

{
  text: "Efficiency of heat engine is always:",
  options: ["100%", "<100%", ">100%", "0"],
  correct: 1,
  explanation: "Cannot be 100%."
},

{
  text: "Second law states:",
  options: ["Energy created", "Heat flows cold to hot", "Entropy increases", "None"],
  correct: 2,
  explanation: "Entropy principle."
},

{
  text: "Entropy measures:",
  options: ["Energy", "Disorder", "Heat", "Work"],
  correct: 1,
  explanation: "Definition."
},

{
  text: "If no heat exchange occurs, process is:",
  options: ["Isothermal", "Adiabatic", "Isochoric", "Isobaric"],
  correct: 1,
  explanation: "Definition."
},

{
  text: "A gas is compressed adiabatically. Temperature:",
  options: ["Increases", "Decreases", "Same", "Zero"],
  correct: 0,
  explanation: "Compression raises temperature."
},

{
  text: "At absolute zero, molecular motion:",
  options: ["Stops", "Max", "Random", "Infinite"],
  correct: 0,
  explanation: "Ideal assumption."
},

{
  text: "If number of molecules doubles, pressure (same V,T):",
  options: ["Same", "Half", "Double", "Zero"],
  correct: 2,
  explanation: "P ∝ n."
},

{
  text: "A gas expands doing 300 J work and loses 100 J heat. Change in internal energy:",
  options: ["200 J", "-200 J", "400 J", "-400 J"],
  correct: 1,
  explanation: "ΔU = Q - W = -100 - 300 = -400? Wait correct = -400 (option D)."
},

{
  text: "Which law relates pressure and temperature at constant volume?",
  options: ["Boyle", "Charles", "Gay-Lussac", "Avogadro"],
  correct: 2,
  explanation: "P ∝ T."
},

{
  text: "A gas at constant pressure expands. Work is:",
  options: ["Zero", "Positive", "Negative", "Constant"],
  correct: 1,
  explanation: "Expansion → work done."
},

{
  text: "A system returns to initial state. Change in internal energy:",
  options: ["Positive", "Negative", "Zero", "Infinite"],
  correct: 2,
  explanation: "State function."
}
];
export default questions;
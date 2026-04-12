const questions = [
{
  text: "A laboratory technician receives a sealed bottle labeled carbon dioxide. Before using it, she wants to know how much substance is present. The bottle contains 88 g of pure CO₂. If the relative atomic masses are C = 12 and O = 16, how many moles of carbon dioxide are in the bottle?",
  options: ["1 mol", "2 mol", "3 mol", "4 mol"],
  correct: 1,
  explanation: "Molar mass of CO₂ = 12 + 2×16 = 44 g/mol. Number of moles = 88/44 = 2 mol."
},
{
  text: "A student dissolves 9 g of water in a thought experiment and wants to know how many moles of water molecules this mass represents. Given that H = 1 and O = 16, how many moles are present?",
  options: ["0.25 mol", "0.5 mol", "1 mol", "2 mol"],
  correct: 1,
  explanation: "Molar mass of H₂O = 18 g/mol. Moles = 9/18 = 0.5 mol."
},
{
  text: "During a lesson on the mole concept, a class is told that 0.25 mol of methane, CH₄, is burned completely. If Avogadro's constant is 6 × 10^23 mol⁻¹, how many methane molecules were burned?",
  options: ["1.5 × 10^23", "3.0 × 10^23", "6.0 × 10^23", "9.0 × 10^23"],
  correct: 0,
  explanation: "Number of molecules = 0.25 × 6 × 10^23 = 1.5 × 10^23."
},
{
  text: "A gas cylinder contains 11.2 L of oxygen at STP. A student is asked to determine the amount of substance in the cylinder using the molar volume at STP. How many moles of oxygen gas does the cylinder contain?",
  options: ["0.25 mol", "0.50 mol", "1.0 mol", "2.0 mol"],
  correct: 1,
  explanation: "At STP, 1 mol gas occupies 22.4 L. Therefore moles = 11.2/22.4 = 0.5 mol."
},
{
  text: "An industrial chemist needs 117 g of sodium chloride for a preparation. If the molar mass of NaCl is 58.5 g/mol, how many moles of sodium chloride is she measuring out?",
  options: ["1.0 mol", "1.5 mol", "2.0 mol", "2.5 mol"],
  correct: 2,
  explanation: "Moles = mass/molar mass = 117/58.5 = 2.0 mol."
},
{
  text: "A student writes the balanced equation 2H₂ + O₂ → 2H₂O and then reacts 6 mol of hydrogen with excess oxygen. Based on the mole ratio in the equation, how many moles of water can be formed?",
  options: ["3 mol", "6 mol", "9 mol", "12 mol"],
  correct: 1,
  explanation: "From 2H₂ → 2H₂O, the ratio H₂:H₂O is 1:1. Therefore 6 mol H₂ gives 6 mol H₂O."
},
{
  text: "In a reaction vessel, nitrogen and hydrogen react according to N₂ + 3H₂ → 2NH₃. If 9 mol of hydrogen is supplied and nitrogen is present in excess, how many moles of ammonia can theoretically be produced?",
  options: ["3 mol", "4 mol", "6 mol", "9 mol"],
  correct: 2,
  explanation: "From 3 mol H₂, 2 mol NH₃ are formed. Therefore 9 mol H₂ forms (9 × 2)/3 = 6 mol NH₃."
},
{
  text: "A research student mixes 4 mol of nitrogen gas with 9 mol of hydrogen gas in a sealed reactor. The reaction follows N₂ + 3H₂ → 2NH₃. Which reactant will be used up first?",
  options: ["Nitrogen", "Hydrogen", "Both at the same time", "Neither reacts completely"],
  correct: 1,
  explanation: "4 mol N₂ would require 12 mol H₂, but only 9 mol H₂ is present. Therefore hydrogen is the limiting reagent."
},
{
  text: "Using the same reaction N₂ + 3H₂ → 2NH₃, a chemist starts with 4 mol of nitrogen and 9 mol of hydrogen. If the reaction goes to completion, how many moles of ammonia are formed?",
  options: ["4 mol", "5 mol", "6 mol", "8 mol"],
  correct: 2,
  explanation: "Hydrogen is limiting. From 3 mol H₂, 2 mol NH₃ are formed. So 9 mol H₂ gives 6 mol NH₃."
},
{
  text: "A student prepares a sodium hydroxide solution by dissolving 8 g of NaOH in water and making the final volume 500 cm³. If the molar mass of NaOH is 40 g/mol, what is the molarity of the solution?",
  options: ["0.20 M", "0.25 M", "0.40 M", "0.50 M"],
  correct: 2,
  explanation: "Moles of NaOH = 8/40 = 0.2 mol. Volume = 500 cm³ = 0.5 L. Molarity = 0.2/0.5 = 0.40 M."
},
{
  text: "A chemistry teacher asks a class to prepare 250 cm³ of a 0.20 M NaCl solution. If the molar mass of NaCl is 58.5 g/mol, what mass of NaCl is required?",
  options: ["1.46 g", "2.93 g", "5.85 g", "11.7 g"],
  correct: 1,
  explanation: "Volume = 0.250 L. Moles needed = MV = 0.20 × 0.250 = 0.050 mol. Mass = 0.050 × 58.5 = 2.925 g ≈ 2.93 g."
},
{
  text: "A laboratory assistant dissolves 4.9 g of sulfuric acid, H₂SO₄, in water and makes the total volume up to 500 cm³. If H = 1, S = 32, and O = 16, what is the concentration of the solution in mol/L?",
  options: ["0.05 M", "0.10 M", "0.20 M", "0.50 M"],
  correct: 1,
  explanation: "Molar mass H₂SO₄ = 2 + 32 + 64 = 98 g/mol. Moles = 4.9/98 = 0.05 mol. Volume = 0.5 L. Molarity = 0.05/0.5 = 0.10 M."
},
{
  text: "During a titration setup, a student finds that 25.0 cm³ of hydrochloric acid solution contains exactly 0.0050 mol of HCl. What is the concentration of the acid in mol/L?",
  options: ["0.10 M", "0.20 M", "0.25 M", "0.50 M"],
  correct: 1,
  explanation: "Volume = 25.0 cm³ = 0.0250 L. Concentration = n/V = 0.0050/0.0250 = 0.20 M."
},
{
  text: "A school laboratory stores a bottle of nitric acid with concentration 0.010 mol/L. Assuming it is a strong acid that fully dissociates, what is the pH of the solution?",
  options: ["1", "2", "3", "4"],
  correct: 1,
  explanation: "For a strong acid, [H⁺] = 0.010 = 10^-2. Therefore pH = 2."
},
{
  text: "A cleaner contains a solution with hydrogen ion concentration 1.0 × 10^-4 mol/L. What is the pH of this solution?",
  options: ["2", "3", "4", "5"],
  correct: 2,
  explanation: "pH = -log(10^-4) = 4."
},
{
  text: "A student is told that a certain acidic solution has pH 3. Ignoring complications, what is the hydrogen ion concentration of that solution?",
  options: ["1 × 10^-1 mol/L", "1 × 10^-2 mol/L", "1 × 10^-3 mol/L", "1 × 10^-4 mol/L"],
  correct: 2,
  explanation: "If pH = 3, then [H⁺] = 10^-3 mol/L."
},
{
  text: "A gas sample occupies 3.0 L at 300 K under constant pressure. If the sample is heated to 450 K without any gas escaping, what volume will it occupy?",
  options: ["2.0 L", "4.5 L", "6.0 L", "9.0 L"],
  correct: 1,
  explanation: "At constant pressure, V ∝ T. V₂ = 3.0 × 450/300 = 4.5 L."
},
{
  text: "A gas occupies 8.0 L when the pressure is 1.0 atm. If the temperature is constant and the pressure is increased to 2.0 atm, what is the new volume?",
  options: ["2.0 L", "4.0 L", "8.0 L", "16.0 L"],
  correct: 1,
  explanation: "At constant temperature, P₁V₁ = P₂V₂. Therefore V₂ = (1.0 × 8.0)/2.0 = 4.0 L."
},
{
  text: "A chemist traps a gas at 2.0 atm and 6.0 L. The gas is later allowed to expand until the pressure becomes 1.5 atm while the temperature remains unchanged. What is the new volume?",
  options: ["4.5 L", "6.0 L", "8.0 L", "9.0 L"],
  correct: 2,
  explanation: "P₁V₁ = P₂V₂. V₂ = (2.0 × 6.0)/1.5 = 8.0 L."
},
{
  text: "In an experiment, 0.50 mol of an ideal gas is kept at a temperature where one mole occupies 24.0 L. What volume should the 0.50 mol sample occupy under those same conditions?",
  options: ["6.0 L", "12.0 L", "18.0 L", "24.0 L"],
  correct: 1,
  explanation: "If 1 mol occupies 24.0 L, then 0.50 mol occupies 12.0 L."
},
{
  text: "A student is asked to identify the total number of atoms present in 0.20 mol of ammonia, NH₃. If Avogadro's constant is 6 × 10^23 mol⁻¹, how many atoms are present in total?",
  options: ["4.8 × 10^23", "6.0 × 10^23", "8.0 × 10^23", "1.2 × 10^24"],
  correct: 0,
  explanation: "0.20 mol NH₃ contains 0.20 × 6 × 10^23 = 1.2 × 10^23 molecules. Each molecule has 4 atoms, so total atoms = 4.8 × 10^23."
},
{
  text: "A manufacturer prepares a fertilizer solution by dissolving 14.0 g of nitrogen gas equivalent as N₂ into a theoretical calculation. If the molar mass of N₂ is 28 g/mol, how many nitrogen molecules does this represent?",
  options: ["1.5 × 10^23", "3.0 × 10^23", "6.0 × 10^23", "1.2 × 10^24"],
  correct: 1,
  explanation: "Moles of N₂ = 14.0/28 = 0.50 mol. Molecules = 0.50 × 6 × 10^23 = 3.0 × 10^23."
},
{
  text: "A laboratory worker dilutes 100 cm³ of a 1.0 M sodium chloride solution to a final volume of 500 cm³. What is the new concentration?",
  options: ["0.10 M", "0.20 M", "0.50 M", "1.00 M"],
  correct: 1,
  explanation: "Using C₁V₁ = C₂V₂: 1.0 × 100 = C₂ × 500, so C₂ = 0.20 M."
},
{
  text: "A solution contains 0.30 mol of solute in a final volume of 750 cm³. What is the concentration of the solution in mol/L?",
  options: ["0.20 M", "0.30 M", "0.40 M", "0.50 M"],
  correct: 2,
  explanation: "750 cm³ = 0.750 L. Concentration = 0.30/0.750 = 0.40 M."
},
{
  text: "A scientist needs 0.10 mol of calcium carbonate, CaCO₃, for a reaction. If the relative atomic masses are Ca = 40, C = 12, O = 16, what mass is needed?",
  options: ["5.0 g", "10.0 g", "12.0 g", "20.0 g"],
  correct: 1,
  explanation: "Molar mass CaCO₃ = 40 + 12 + 48 = 100 g/mol. Mass = 0.10 × 100 = 10.0 g."
},
{
  text: "A gas mixture problem states that 44.8 L of nitrogen gas is measured at STP. How many nitrogen atoms are present in that sample?",
  options: ["6 × 10^23", "1.2 × 10^24", "2.4 × 10^24", "4.8 × 10^24"],
  correct: 2,
  explanation: "44.8 L at STP = 2 mol N₂ molecules. That is 2 × 6 × 10^23 = 1.2 × 10^24 molecules. Since each N₂ has 2 atoms, total atoms = 2.4 × 10^24."
},
{
  text: "A student mixes 50 cm³ of a 0.20 M HCl solution with excess magnesium. How many moles of HCl are available to react?",
  options: ["0.001 mol", "0.005 mol", "0.010 mol", "0.020 mol"],
  correct: 2,
  explanation: "50 cm³ = 0.050 L. Moles = CV = 0.20 × 0.050 = 0.010 mol."
},
{
  text: "Magnesium reacts with hydrochloric acid according to Mg + 2HCl → MgCl₂ + H₂. If 0.010 mol of HCl reacts completely and magnesium is in excess, how many moles of hydrogen gas are produced?",
  options: ["0.0025 mol", "0.0050 mol", "0.010 mol", "0.020 mol"],
  correct: 1,
  explanation: "From 2 mol HCl, 1 mol H₂ is formed. Therefore 0.010 mol HCl produces 0.0050 mol H₂."
},
{
  text: "A student wants to collect the hydrogen from the previous reaction at STP. If 0.0050 mol H₂ is formed, what volume of gas should be collected?",
  options: ["0.056 L", "0.112 L", "0.224 L", "1.12 L"],
  correct: 1,
  explanation: "At STP, volume = 0.0050 × 22.4 = 0.112 L."
},
{
  text: "A cleaning solution is made by dissolving 10 g of sodium hydroxide in enough water to make 200 cm³ of solution. If the molar mass of NaOH is 40 g/mol, what is the solution concentration?",
  options: ["0.50 M", "1.00 M", "1.25 M", "2.50 M"],
  correct: 2,
  explanation: "Moles = 10/40 = 0.25 mol. Volume = 0.200 L. Concentration = 0.25/0.200 = 1.25 M."
},
{
  text: "A teacher asks which sample contains the greatest number of molecules. Which one should the students choose?",
  options: ["11.2 L of O₂ at STP", "0.50 mol of CO₂", "9 g of H₂O", "All contain the same number of molecules"],
  correct: 3,
  explanation: "11.2 L O₂ at STP = 0.50 mol. 0.50 mol CO₂ is also 0.50 mol. 9 g H₂O = 9/18 = 0.50 mol. So all contain the same number of molecules."
},
{
  text: "A sealed gas syringe contains 2.4 L of gas at 200 K. The gas is warmed to 300 K while pressure remains constant. What is the new volume?",
  options: ["1.6 L", "2.8 L", "3.6 L", "4.8 L"],
  correct: 2,
  explanation: "At constant pressure, V₂ = V₁ × T₂/T₁ = 2.4 × 300/200 = 3.6 L."
},
{
  text: "A student prepares a solution by mixing 0.10 mol of solute into enough water to make 100 cm³ of solution. Later, the solution is diluted to 250 cm³. What is the final concentration?",
  options: ["0.10 M", "0.20 M", "0.25 M", "0.40 M"],
  correct: 3,
  explanation: "Final volume = 0.250 L. Concentration = 0.10/0.250 = 0.40 M."
},
{
  text: "A chemistry problem states that 2.2 g of carbon dioxide is collected from a reaction. If the molar mass of CO₂ is 44 g/mol, how many molecules of CO₂ were collected?",
  options: ["3 × 10^22", "6 × 10^22", "1.2 × 10^23", "3 × 10^23"],
  correct: 0,
  explanation: "Moles = 2.2/44 = 0.05 mol. Molecules = 0.05 × 6 × 10^23 = 3 × 10^22."
},
{
  text: "An acid sample has [H⁺] = 1 × 10^-5 mol/L. A second acid sample has [H⁺] = 1 × 10^-3 mol/L. How do their pH values compare?",
  options: ["The first is lower by 2", "The first is higher by 2", "They are equal", "The first is higher by 8"],
  correct: 1,
  explanation: "First pH = 5, second pH = 3. So the first is higher by 2."
},
{
  text: "A student analyses a sample of calcium oxide, CaO. If 5.6 g of CaO is present, and the molar mass of CaO is 56 g/mol, how many formula units does the sample contain?",
  options: ["6 × 10^21", "6 × 10^22", "6 × 10^23", "6 × 10^24"],
  correct: 1,
  explanation: "Moles = 5.6/56 = 0.10 mol. Formula units = 0.10 × 6 × 10^23 = 6 × 10^22."
},
{
  text: "An ideal gas occupies 12 L at 1.5 atm. It is compressed until its volume becomes 9 L at constant temperature. What is the new pressure?",
  options: ["1.0 atm", "2.0 atm", "2.5 atm", "3.0 atm"],
  correct: 1,
  explanation: "P₁V₁ = P₂V₂. P₂ = (1.5 × 12)/9 = 2.0 atm."
},
{
  text: "A scientist needs to prepare 1.0 L of a 0.10 M hydrochloric acid solution. How many moles of HCl are needed in the final solution?",
  options: ["0.010 mol", "0.050 mol", "0.10 mol", "1.0 mol"],
  correct: 2,
  explanation: "Moles = concentration × volume = 0.10 × 1.0 = 0.10 mol."
},
{
  text: "A 250 cm³ sample of a sodium hydroxide solution contains 0.050 mol of NaOH. What is its concentration in mol/L?",
  options: ["0.10 M", "0.20 M", "0.25 M", "0.50 M"],
  correct: 1,
  explanation: "250 cm³ = 0.250 L. Concentration = 0.050/0.250 = 0.20 M."
},
{
  text: "A student compares two gas samples at STP: Sample A has 22.4 L of helium, while Sample B has 44.8 L of neon. What is the ratio of moles in A:B?",
  options: ["1:1", "1:2", "2:1", "1:4"],
  correct: 1,
  explanation: "22.4 L at STP is 1 mol, and 44.8 L is 2 mol. Ratio A:B = 1:2."
},
{
  text: "A chemist observes that 36 g of water is produced in a synthesis experiment. How many moles of water were formed, and how many molecules is that?",
  options: ["1 mol and 6 × 10^23 molecules", "2 mol and 1.2 × 10^24 molecules", "2 mol and 6 × 10^23 molecules", "3 mol and 1.8 × 10^24 molecules"],
  correct: 1,
  explanation: "Moles = 36/18 = 2 mol. Molecules = 2 × 6 × 10^23 = 1.2 × 10^24."
},
{
  text: "A reaction vessel contains 0.25 mol of oxygen gas. How many oxygen atoms are present in the vessel?",
  options: ["1.5 × 10^23", "3.0 × 10^23", "6.0 × 10^23", "1.2 × 10^24"],
  correct: 1,
  explanation: "0.25 mol O₂ gives 0.25 × 6 × 10^23 = 1.5 × 10^23 molecules. Each molecule has 2 atoms, so total atoms = 3.0 × 10^23."
},
{
  text: "A student has a 0.50 M acid solution and takes 20 cm³ of it for a reaction. How many moles of acid are actually transferred into the flask?",
  options: ["0.001 mol", "0.005 mol", "0.010 mol", "0.050 mol"],
  correct: 2,
  explanation: "20 cm³ = 0.020 L. Moles = 0.50 × 0.020 = 0.010 mol."
},
{
  text: "A gas occupies 15.0 L at 300 K and constant pressure. It is cooled to 240 K. What volume does it occupy after cooling?",
  options: ["10.0 L", "12.0 L", "15.0 L", "18.75 L"],
  correct: 1,
  explanation: "V₂ = V₁ × T₂/T₁ = 15.0 × 240/300 = 12.0 L."
},
{
  text: "A sample contains 0.40 mol of sodium sulfate, Na₂SO₄. How many moles of sodium atoms are present in that sample?",
  options: ["0.20 mol", "0.40 mol", "0.80 mol", "1.20 mol"],
  correct: 2,
  explanation: "Each Na₂SO₄ unit contains 2 sodium atoms. Therefore sodium atom moles = 2 × 0.40 = 0.80 mol."
},
{
  text: "A tank holds 67.2 L of nitrogen at STP. A student wants to know both the amount of substance and the number of molecules. Which answer is correct?",
  options: ["2 mol and 1.2 × 10^24 molecules", "3 mol and 1.8 × 10^24 molecules", "3 mol and 6 × 10^23 molecules", "1.5 mol and 9 × 10^23 molecules"],
  correct: 1,
  explanation: "67.2/22.4 = 3 mol. Molecules = 3 × 6 × 10^23 = 1.8 × 10^24."
}
];
export default questions;
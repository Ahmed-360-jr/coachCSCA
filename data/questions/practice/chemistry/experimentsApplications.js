const questions = [
{
  text: "A student is asked to prepare dry hydrogen gas in the laboratory by reacting zinc with dilute hydrochloric acid. The gas produced is first passed through a wash bottle containing water and then through a drying tube filled with calcium chloride before collection. What is the main purpose of the calcium chloride?",
  options: ["To increase the volume of hydrogen", "To dry the hydrogen gas", "To react with hydrochloric acid and form chlorine", "To test whether hydrogen is flammable"],
  correct: 1,
  explanation: "Calcium chloride is used as a drying agent to remove water vapor from the gas before it is collected."
},
{
  text: "During the preparation of oxygen gas from hydrogen peroxide using manganese(IV) oxide, a student notices that the reaction becomes vigorous after the catalyst is added. Which statement best explains the role of manganese(IV) oxide?",
  options: ["It is consumed to produce oxygen", "It lowers the activation energy and speeds up decomposition", "It reacts with oxygen to keep the gas pure", "It changes oxygen into ozone"],
  correct: 1,
  explanation: "Manganese(IV) oxide acts as a catalyst, speeding up decomposition of hydrogen peroxide without being consumed overall."
},
{
  text: "A student wants to collect carbon dioxide produced from marble chips and dilute hydrochloric acid. She must choose among upward delivery, downward delivery, and collection over water. Which method is most suitable and why?",
  options: ["Collection over water, because carbon dioxide is insoluble", "Upward delivery, because carbon dioxide is less dense than air", "Downward delivery, because carbon dioxide is denser than air and somewhat soluble in water", "Any method works equally well"],
  correct: 2,
  explanation: "Carbon dioxide is denser than air and dissolves to some extent in water, so downward delivery is preferred."
},
{
  text: "In preparing ammonia gas in the laboratory by heating an ammonium salt with calcium hydroxide, a student is told not to collect the gas over water. What is the main reason?",
  options: ["Ammonia reacts explosively with water", "Ammonia is highly soluble in water", "Ammonia is denser than water", "Ammonia is not a real gas at room temperature"],
  correct: 1,
  explanation: "Ammonia is very soluble in water, so it cannot be collected effectively over water."
},
{
  text: "A technician wants to test whether a colorless gas collected from a reaction is oxygen. Which observation would provide the best confirmation?",
  options: ["A lighted splint makes a popping sound", "A glowing splint relights", "Limewater turns milky", "Damp red litmus turns blue"],
  correct: 1,
  explanation: "Oxygen relights a glowing splint."
},
{
  text: "A student generates hydrogen gas from metal and acid, then tests it using a burning splint. What observation should confirm hydrogen?",
  options: ["The splint goes out immediately", "A popping sound is heard", "The gas turns limewater milky", "A white precipitate forms"],
  correct: 1,
  explanation: "Hydrogen burns with a characteristic pop sound."
},
{
  text: "An unknown gas turns damp red litmus paper blue and forms dense white fumes when brought into contact with hydrogen chloride gas. Which gas is this?",
  options: ["Hydrogen", "Carbon dioxide", "Ammonia", "Sulfur dioxide"],
  correct: 2,
  explanation: "Ammonia is alkaline, turns damp red litmus blue, and forms white ammonium chloride fumes with hydrogen chloride."
},
{
  text: "A student heats copper turnings strongly in air until a black solid forms. He then passes hydrogen gas over the hot black solid, and reddish-brown copper reappears. Why must excess hydrogen be allowed to pass through before heating begins?",
  options: ["To cool the tube", "To remove air and avoid forming an explosive mixture of hydrogen and oxygen", "To dissolve the copper oxide", "To make the copper shine"],
  correct: 1,
  explanation: "Hydrogen mixed with air can be explosive, so air must be displaced before heating."
},
{
  text: "A solid mixture contains iron filings and sulfur powder. Before heating, a magnet can remove the iron easily. After strong heating, the product no longer behaves the same way. Which experimental idea does this best demonstrate?",
  options: ["A mixture and a compound can have different properties", "Heating never changes matter", "Sulfur is magnetic at high temperature", "Compounds can always be separated by a magnet"],
  correct: 0,
  explanation: "Heating forms iron sulfide, a compound with properties different from the original mixture."
},
{
  text: "A teacher gives students a mixture of sand and sodium chloride and asks them to recover pure sodium chloride crystals. Which sequence of steps is the most appropriate?",
  options: ["Evaporation, filtration, dissolution", "Dissolution in water, filtration, evaporation/crystallization", "Filtration, sublimation, decanting", "Magnetic separation, heating, filtration"],
  correct: 1,
  explanation: "Dissolve the soluble sodium chloride, filter off insoluble sand, then evaporate or crystallize the filtrate."
},
{
  text: "A sample of muddy water is to be purified in the laboratory. Which process removes insoluble suspended solids most directly?",
  options: ["Distillation", "Filtration", "Crystallization", "Neutralization"],
  correct: 1,
  explanation: "Filtration separates insoluble solids from a liquid."
},
{
  text: "A student wants to obtain pure water from seawater in the laboratory. Which method should be chosen?",
  options: ["Simple filtration", "Crystallization only", "Simple distillation", "Chromatography"],
  correct: 2,
  explanation: "Distillation vaporizes and then condenses pure water, leaving dissolved salts behind."
},
{
  text: "A colored ink is found to contain several dyes. The student wants to separate the dyes and compare them. Which method is most suitable?",
  options: ["Titration", "Paper chromatography", "Distillation", "Fractional crystallization"],
  correct: 1,
  explanation: "Paper chromatography separates dyes based on different solubilities and attractions to the paper."
},
{
  text: "When performing paper chromatography, the starting spot of ink must be kept above the solvent level. Why?",
  options: ["To stop the solvent from evaporating", "To prevent the sample from dissolving directly into the solvent reservoir", "To make the colors darker", "To increase the mass of the paper"],
  correct: 1,
  explanation: "If the spot is below the solvent level, the sample dissolves into the solvent instead of moving up the paper properly."
},
{
  text: "A student obtains blue copper sulfate crystals from a solution by heating the solution strongly until all the water is removed. The teacher says this may be a poor method if crystal quality matters. Why?",
  options: ["Fast boiling may cause decomposition or poor crystal formation", "Crystals can only form below 0°C", "Copper sulfate cannot crystallize from solution", "Heating always increases purity without disadvantages"],
  correct: 0,
  explanation: "Gentle evaporation and cooling are better for forming crystals; strong heating can cause decomposition or poor crystal shape."
},
{
  text: "A chemist wants to purify an impure solid that is more soluble in hot solvent than in cold solvent. Which method is most appropriate?",
  options: ["Filtration only", "Recrystallization", "Magnetic separation", "Simple drying"],
  correct: 1,
  explanation: "Recrystallization dissolves the substance hot and then allows purer crystals to form on cooling."
},
{
  text: "A drying agent is needed for a gas that must remain chemically unchanged. Why is concentrated sulfuric acid unsuitable for drying ammonia gas?",
  options: ["It has too low a boiling point", "It reacts with ammonia", "It contains too much water", "It turns ammonia into oxygen"],
  correct: 1,
  explanation: "The drying agent must not react with the gas. Concentrated sulfuric acid reacts with ammonia."
},
{
  text: "A student is instructed to use a fume hood while working with chlorine gas. What is the best reason for this precaution?",
  options: ["Chlorine is flammable", "Chlorine is toxic and irritating when inhaled", "Chlorine dissolves glass", "Chlorine cannot be seen in open air"],
  correct: 1,
  explanation: "Chlorine is toxic and irritating to the respiratory system, so it should be handled in a fume hood."
},
{
  text: "While diluting concentrated sulfuric acid, a student is told to add acid to water rather than water to acid. Why is this safer?",
  options: ["Because sulfuric acid is lighter than water", "Because the dilution is highly exothermic and adding water to acid can cause dangerous splashing", "Because water cannot dissolve sulfuric acid", "Because sulfuric acid becomes neutral immediately"],
  correct: 1,
  explanation: "Dilution releases a lot of heat. Adding water to concentrated acid can cause violent boiling and splashing."
},
{
  text: "A broken thermometer containing mercury spills in the laboratory. What is the best immediate response?",
  options: ["Sweep it with bare hands into a corner", "Wash it down the sink", "Inform the supervisor and follow proper hazardous-spill procedure", "Heat it to evaporate the mercury quickly"],
  correct: 2,
  explanation: "Mercury is hazardous and must be handled using appropriate safety procedures, not by casual cleanup."
},
{
  text: "During a heating experiment, a test tube containing a reacting mixture is pointed toward a group of students. Why is this poor practice even if the reaction seems gentle?",
  options: ["Because the glass may become invisible", "Because contents may suddenly spurt out and cause injury", "Because the flame may go out", "Because the reaction will stop"],
  correct: 1,
  explanation: "Test tubes should never be pointed toward people because sudden boiling or spitting can eject hot contents."
},
{
  text: "A gas syringe is used instead of collecting gas over water in a reaction that generates ammonia. What advantage does the gas syringe provide in this case?",
  options: ["It makes ammonia insoluble", "It allows direct collection and volume measurement without loss to water", "It cools the gas automatically", "It converts ammonia into nitrogen"],
  correct: 1,
  explanation: "Because ammonia is very soluble in water, a gas syringe allows collection and measurement without losing gas."
},
{
  text: "A student is asked to prepare a pure, dry sample of copper(II) sulfate crystals starting from excess copper(II) oxide and dilute sulfuric acid. Which sequence is correct?",
  options: ["Add acid to excess oxide, filter, evaporate filtrate, cool to crystallize, dry crystals", "Add oxide to acid, boil to dryness, heat strongly", "Mix both solids, filter, and wash", "Distill the mixture and collect the crystals in the receiver"],
  correct: 0,
  explanation: "Excess oxide ensures all acid reacts. Filtering removes excess solid; then the filtrate is concentrated and cooled to form crystals."
},
{
  text: "A student obtains fewer crystals than expected after preparing a salt solution and filtering it while still too hot. Which explanation is most likely?",
  options: ["Some of the product crystallized in the filter and was lost", "Hot solutions cannot be filtered", "Filtering always destroys salts", "The solvent becomes solid when warm"],
  correct: 0,
  explanation: "If the solution cools during filtration, some crystals may form and be retained on the filter paper, reducing yield."
},
{
  text: "A sample of hydrated copper(II) sulfate is heated until it turns from blue to white. If the mass falls from 5.00 g to 3.20 g, what mass of water was driven off?",
  options: ["1.20 g", "1.50 g", "1.80 g", "2.00 g"],
  correct: 2,
  explanation: "Mass of water lost = 5.00 − 3.20 = 1.80 g."
},
{
  text: "The same hydrated copper(II) sulfate sample loses 1.80 g of water on heating. If the molar mass of water is 18 g/mol, how many moles of water were removed?",
  options: ["0.05 mol", "0.10 mol", "0.18 mol", "1.80 mol"],
  correct: 1,
  explanation: "Moles of water = 1.80/18 = 0.10 mol."
},
{
  text: "A student dries a precipitate by heating it strongly with a Bunsen burner and later finds that the measured mass is too low. What is the most likely problem?",
  options: ["The precipitate may have decomposed or been lost by spitting", "Heating always increases measured mass", "The precipitate changed into pure water", "The balance stopped working because of heat"],
  correct: 0,
  explanation: "Strong heating can decompose some precipitates or cause material loss through spitting, giving a lower mass."
},
{
  text: "A laboratory worker needs to prepare dry chlorine gas. He considers using water as a collection medium but rejects the idea. Why?",
  options: ["Chlorine is lighter than water", "Chlorine reacts with or dissolves in water significantly", "Water would turn chlorine into ammonia", "Water prevents any gas collection by law"],
  correct: 1,
  explanation: "Chlorine dissolves in water and also reacts with it to some extent, so collecting over water is unsuitable."
},
{
  text: "A gas produced in the laboratory is colorless and much less dense than air. It is nearly insoluble in water. Which collection method is likely to be most suitable?",
  options: ["Downward delivery", "Upward delivery", "Collection over water", "Open beaker collection only"],
  correct: 2,
  explanation: "If the gas is nearly insoluble in water, collection over water is often effective."
},
{
  text: "A student wants to separate ethanol from a fermented mixture containing water. Because the two liquids have different boiling points, which technique should be used?",
  options: ["Filtration", "Fractional distillation", "Paper chromatography", "Simple decanting"],
  correct: 1,
  explanation: "Fractional distillation separates miscible liquids with different boiling points."
},
{
  text: "In paper chromatography, a student measures the distance traveled by a dye spot as 4.5 cm while the solvent front moved 7.5 cm. What is the Rf value of the dye?",
  options: ["0.45", "0.60", "0.75", "1.67"],
  correct: 1,
  explanation: "Rf = distance moved by substance / distance moved by solvent front = 4.5/7.5 = 0.60."
},
{
  text: "A mixture contains iodine and common salt. The teacher suggests heating the mixture gently under an inverted cold funnel. Why is this a sensible separation method?",
  options: ["Because iodine sublimes while sodium chloride does not", "Because sodium chloride evaporates before iodine", "Because both solids melt and then separate themselves", "Because iodine is magnetic"],
  correct: 0,
  explanation: "Iodine sublimes on heating and can be collected on a cold surface, while sodium chloride remains behind."
},
{
  text: "A student is testing a gas by bringing a lighted splint to it. The test tube suddenly cracks. Which poor practice most likely caused this accident?",
  options: ["Using a dry test tube", "Heating only one side of the glass too strongly", "Collecting too much gas", "Using a glowing splint instead of a lighted one"],
  correct: 1,
  explanation: "Uneven heating creates stress in the glass and can cause cracking."
},
{
  text: "A chemist monitors the Haber process: N2(g) + 3H2(g) ⇌ 2NH3(g), ΔH < 0. He wants high ammonia yield but also a practical reaction rate. Why is a moderately high temperature used instead of a very low one?",
  options: ["Very low temperature gives a fast rate and high yield", "Very low temperature gives a high equilibrium yield but a reaction rate that is too slow", "Temperature does not affect the Haber process", "Ammonia decomposes only at low temperature"],
  correct: 1,
  explanation: "Lower temperature favors the exothermic forward reaction, but the reaction rate becomes too slow. Industry uses a compromise temperature."
},
{
  text: "In the Haber process, why is a high pressure used industrially?",
  options: ["To slow down the reaction and save energy", "To favor the side with more gas molecules", "To increase yield by favoring the side with fewer gas molecules", "Only because catalysts work at high pressure"],
  correct: 2,
  explanation: "The product side has fewer moles of gas, so high pressure shifts equilibrium toward ammonia."
},
{
  text: "An iron catalyst is used in the Haber process. What is the main benefit of the catalyst in the plant?",
  options: ["It changes nitrogen into hydrogen", "It increases equilibrium yield permanently", "It speeds up attainment of equilibrium by lowering activation energy", "It removes ammonia from the reaction vessel"],
  correct: 2,
  explanation: "The catalyst speeds up the reaction without changing the equilibrium position."
},
{
  text: "A chemical engineer removes ammonia from the Haber equilibrium mixture as it forms. What is the main consequence for the equilibrium system?",
  options: ["The reaction stops immediately", "The equilibrium shifts right to replace some removed ammonia", "The equilibrium shifts left to destroy reactants", "Pressure becomes zero"],
  correct: 1,
  explanation: "Removing a product causes the system to shift toward product formation to oppose the change."
},
{
  text: "A student compares industrial ammonia synthesis with a laboratory reversible reaction. In both cases, product removal is used to improve output. Why does this help?",
  options: ["It increases the activation energy", "It decreases the need for any reactants", "It shifts equilibrium toward products according to Le Chatelier's principle", "It makes catalysts unnecessary"],
  correct: 2,
  explanation: "Removing a product lowers its concentration and drives the equilibrium toward further product formation."
},
{
  text: "A precipitate is produced in a reaction mixture and then washed with distilled water before drying. Why is washing an important step?",
  options: ["To dissolve the precipitate completely", "To remove soluble impurities clinging to the precipitate", "To increase the mass of the precipitate", "To convert it into a gas"],
  correct: 1,
  explanation: "Washing removes soluble impurities left in the mother liquor."
},
{
  text: "A student is told to use distilled water rather than tap water when washing a precipitate before analysis. Why is distilled water preferred?",
  options: ["Tap water boils too easily", "Tap water may contain dissolved ions that contaminate the sample", "Distilled water has a higher pH by definition", "Tap water cannot wet solids"],
  correct: 1,
  explanation: "Tap water can contain dissolved salts and ions that would contaminate the precipitate."
},
{
  text: "A gas is to be prepared from a flask fitted with a thistle funnel and delivery tube. Why should the end of the thistle funnel dip below the liquid level in the flask?",
  options: ["To prevent gas escaping through the funnel", "To make the liquid boil faster", "To cool the flask", "To increase atmospheric pressure in the flask"],
  correct: 0,
  explanation: "If the funnel stem does not dip below the liquid, gas can escape through it instead of going through the delivery tube."
},
{
  text: "A student performing a gas-generation experiment stops heating before removing the delivery tube from the water trough. Water then rushes back into the hot test tube. Why did this happen?",
  options: ["The gas became solid", "Cooling lowered the pressure inside the apparatus, drawing water back in", "The water was attracted magnetically", "The delivery tube was too short"],
  correct: 1,
  explanation: "As the apparatus cools, gas contracts and pressure falls, causing suck-back unless the tube is removed first."
},
{
  text: "A chemist wants to dry hydrogen chloride gas. Which of the following would be the most suitable drying agent among the options given?",
  options: ["Water", "Concentrated sulfuric acid", "Sodium hydroxide solution", "Limewater"],
  correct: 1,
  explanation: "A suitable drying agent removes moisture without reacting significantly with the gas; concentrated sulfuric acid is commonly used for drying many gases including hydrogen chloride."
},
{
  text: "A student is collecting oxygen over water and measures 240 cm³ of gas. If the gas is then dried and found to occupy a smaller volume under the same conditions, what best explains the change?",
  options: ["Some oxygen changed into hydrogen", "The original collected gas contained water vapor", "Dry gases always have larger mass and smaller volume", "The oxygen was destroyed by the drying agent"],
  correct: 1,
  explanation: "Gas collected over water contains water vapor. Drying removes the water vapor, reducing the gas volume under the same conditions."
},
{
  text: "A laboratory worker wants to obtain a dry sample of ammonia but mistakenly chooses concentrated sulfuric acid as the drying agent. What is the most likely outcome?",
  options: ["The ammonia will simply dry faster", "The ammonia will react and the yield will be reduced", "Oxygen will be produced", "The ammonia will become liquid immediately"],
  correct: 1,
  explanation: "The drying agent must not react with the gas. Concentrated sulfuric acid reacts with ammonia, so the yield drops."
}
];
export default questions;
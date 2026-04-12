const questions = [
{
  text: "A colorless gas is bubbled through limewater. The limewater first turns milky, and when the gas is passed for a long time, the milkiness disappears. Which gas most likely causes this sequence of observations?",
  options: ["Hydrogen", "Oxygen", "Carbon dioxide", "Ammonia"],
  correct: 2,
  explanation: "Carbon dioxide reacts with limewater to form insoluble calcium carbonate, turning it milky. Excess carbon dioxide then forms soluble calcium hydrogen carbonate, so the milkiness disappears."
},
{
  text: "A student adds dilute hydrochloric acid separately to powdered magnesium oxide, sodium hydroxide solution, and sodium carbonate solution. Which of the three will definitely react with the acid?",
  options: ["Only magnesium oxide", "Only sodium carbonate", "Magnesium oxide and sodium carbonate only", "All three"],
  correct: 3,
  explanation: "Magnesium oxide is a basic oxide, sodium hydroxide is a base, and sodium carbonate is a salt of a weak acid and strong base; all react with hydrochloric acid."
},
{
  text: "A technician wants to distinguish sodium carbonate solution from sodium chloride solution using only dilute hydrochloric acid. What observation would confirm the carbonate solution?",
  options: ["A white precipitate forms", "A gas is evolved", "The solution turns blue", "No visible change"],
  correct: 1,
  explanation: "Carbonates react with acids to release carbon dioxide gas, while sodium chloride shows no visible reaction."
},
{
  text: "A white solid is heated strongly and gives off a gas that turns limewater milky, leaving behind a solid oxide. Which substance could this be?",
  options: ["Sodium chloride", "Calcium carbonate", "Copper sulfate", "Ammonium chloride"],
  correct: 1,
  explanation: "Calcium carbonate decomposes on heating to calcium oxide and carbon dioxide. The carbon dioxide turns limewater milky."
},
{
  text: "A gas jar contains an unknown gas. A glowing splint inserted into the jar relights. What is the most reasonable conclusion?",
  options: ["The gas is hydrogen", "The gas is oxygen", "The gas is carbon dioxide", "The gas is nitrogen"],
  correct: 1,
  explanation: "Oxygen supports combustion and relights a glowing splint."
},
{
  text: "A student collects a gas from a reaction between zinc and dilute sulfuric acid. When a lighted splint is brought near the gas, a popping sound is heard. What is the gas?",
  options: ["Carbon dioxide", "Hydrogen", "Oxygen", "Sulfur dioxide"],
  correct: 1,
  explanation: "Hydrogen gives a characteristic pop sound with a lighted splint."
},
{
  text: "Copper(II) oxide is added to warm dilute sulfuric acid until no more dissolves. The mixture is then filtered. What is present in the filtrate?",
  options: ["Copper metal only", "Copper(II) sulfate solution", "Sulfuric acid only", "Copper(II) oxide only"],
  correct: 1,
  explanation: "Copper(II) oxide reacts with sulfuric acid to form copper(II) sulfate and water. The filtrate contains copper(II) sulfate solution."
},
{
  text: "An unknown gas is passed over heated copper(II) oxide. The black solid changes to reddish-brown copper metal, and water is formed. What can be concluded about the gas?",
  options: ["It is an oxidizing gas", "It is a reducing gas", "It is chemically inert", "It must be oxygen"],
  correct: 1,
  explanation: "The gas removes oxygen from copper(II) oxide, reducing it to copper. Therefore the gas acts as a reducing agent."
},
{
  text: "A student mixes aqueous silver nitrate with aqueous sodium chloride. A white precipitate forms. What is the precipitate?",
  options: ["Silver oxide", "Silver chloride", "Sodium nitrate", "Sodium chloride"],
  correct: 1,
  explanation: "Silver ions react with chloride ions to form insoluble silver chloride, a white precipitate."
},
{
  text: "A white precipitate forms when dilute nitric acid and then aqueous silver nitrate are added to a sample solution. What ion is indicated?",
  options: ["Sulfate", "Carbonate", "Chloride", "Nitrate"],
  correct: 2,
  explanation: "Acidified silver nitrate is used to test for halides. A white precipitate indicates chloride ions."
},
{
  text: "A solution is suspected to contain sulfate ions. Which reagent pair would best confirm this?",
  options: ["Dilute hydrochloric acid and limewater", "Dilute nitric acid and silver nitrate", "Dilute hydrochloric acid and barium chloride", "Sodium hydroxide and heat"],
  correct: 2,
  explanation: "Acidified barium chloride gives a white precipitate of barium sulfate if sulfate ions are present."
},
{
  text: "A student warms an unknown ammonium salt with sodium hydroxide solution. A colorless gas is evolved that turns damp red litmus paper blue. What ion was present in the salt?",
  options: ["Chloride", "Nitrate", "Ammonium", "Carbonate"],
  correct: 2,
  explanation: "Ammonium ions release ammonia gas when warmed with sodium hydroxide. Ammonia turns damp red litmus blue."
},
{
  text: "A metal X reacts slowly with dilute hydrochloric acid, but copper metal does not react at all under the same conditions. Which statement is most reasonable?",
  options: ["Copper is above hydrogen in the reactivity series", "Metal X is less reactive than copper", "Metal X is above hydrogen in the reactivity series", "Copper reacts only with weak acids"],
  correct: 2,
  explanation: "Metals above hydrogen in the reactivity series react with dilute acids to produce hydrogen. Copper is below hydrogen and does not."
},
{
  text: "Iron filings are added to copper(II) sulfate solution. After some time, the blue color fades and a reddish-brown deposit appears. Which explanation is correct?",
  options: ["Iron is less reactive than copper", "Copper displaces iron from iron sulfate", "Iron displaces copper from copper(II) sulfate", "The solution becomes more concentrated"],
  correct: 2,
  explanation: "Iron is more reactive than copper, so it displaces copper from copper(II) sulfate solution."
},
{
  text: "A strip of magnesium is placed into copper(II) sulfate solution. If 0.10 mol of magnesium reacts completely, how many moles of copper are formed?",
  options: ["0.05 mol", "0.10 mol", "0.20 mol", "0.40 mol"],
  correct: 1,
  explanation: "Mg + CuSO₄ → MgSO₄ + Cu. The mole ratio of magnesium to copper is 1:1, so 0.10 mol Mg forms 0.10 mol Cu."
},
{
  text: "A teacher asks which oxide would most likely react with both hydrochloric acid and sodium hydroxide solution. Which choice best fits that behavior?",
  options: ["Magnesium oxide", "Carbon dioxide", "Aluminium oxide", "Sulfur dioxide"],
  correct: 2,
  explanation: "Aluminium oxide is amphoteric, so it reacts with both acids and bases."
},
{
  text: "A gas produced from thermal decomposition is colorless, turns limewater milky, and does not relight a glowing splint. Which gas is it most likely to be?",
  options: ["Hydrogen", "Oxygen", "Carbon dioxide", "Chlorine"],
  correct: 2,
  explanation: "These are characteristic properties of carbon dioxide."
},
{
  text: "A student passes ammonia gas and hydrogen chloride gas toward each other in a long glass tube. A white solid ring forms where the gases meet. What causes the ring?",
  options: ["Formation of ammonium chloride", "Condensation of water", "Formation of sodium chloride", "Oxidation of ammonia"],
  correct: 0,
  explanation: "Ammonia and hydrogen chloride react to form white ammonium chloride smoke."
},
{
  text: "A hydrocarbon burns in a limited supply of oxygen and produces a yellow smoky flame. What is the most likely explanation?",
  options: ["Complete combustion producing only carbon dioxide and water", "Incomplete combustion producing some carbon particles", "The hydrocarbon is nonflammable", "The hydrocarbon must contain nitrogen"],
  correct: 1,
  explanation: "A yellow smoky flame indicates incomplete combustion and the formation of carbon particles."
},
{
  text: "A gaseous alkane is completely burned. The products are 2 mol of carbon dioxide and 3 mol of water. Which hydrocarbon was burned?",
  options: ["Methane", "Ethane", "Propane", "Butane"],
  correct: 0,
  explanation: "For methane, CH₄ + 2O₂ → CO₂ + 2H₂O. For 1 mol methane the products are 1 mol CO₂ and 2 mol H₂O. Doubling gives 2 CO₂ and 4 H₂O, so not methane. For ethane, 2C₂H₆ + 7O₂ → 4CO₂ + 6H₂O, so 1 mol ethane gives 2 CO₂ and 3 H₂O. Therefore the hydrocarbon is ethane."
},
{
  text: "A liquid organic compound decolorizes bromine water rapidly without heating. Which type of compound is it most likely to be?",
  options: ["An alkane", "An alkene", "An alcohol only", "A salt"],
  correct: 1,
  explanation: "Alkenes decolorize bromine water by addition across the C=C bond."
},
{
  text: "A student compares methane and ethene. One sample decolorizes bromine water and the other does not. Which conclusion is correct?",
  options: ["Methane is unsaturated and ethene is saturated", "Both are saturated", "Ethene is unsaturated and methane is saturated", "Both are unsaturated"],
  correct: 2,
  explanation: "Ethene contains a carbon-carbon double bond and is unsaturated; methane is saturated."
},
{
  text: "A compound reacts with sodium metal to release a gas, and it can also be oxidized to form an acid. Which type of organic compound is it most likely to be?",
  options: ["Alkane", "Alcohol", "Alkene", "Carbonate"],
  correct: 1,
  explanation: "Alcohols react with sodium to release hydrogen and can be oxidized."
},
{
  text: "A student is given four aqueous solutions: sodium chloride, sodium carbonate, ammonium nitrate, and barium nitrate. By adding dilute acid to each, which solution would be most clearly identified by effervescence?",
  options: ["Sodium chloride", "Sodium carbonate", "Ammonium nitrate", "Barium nitrate"],
  correct: 1,
  explanation: "Carbonates react with dilute acids to produce carbon dioxide gas."
},
{
  text: "When a strip of damp blue litmus paper is exposed to chlorine gas, it first turns red and then becomes white. Why does this happen?",
  options: ["Chlorine is only acidic", "Chlorine is only bleaching", "Chlorine shows acidic and bleaching action", "The litmus paper is contaminated"],
  correct: 2,
  explanation: "Chlorine dissolves in water to form acidic substances and also bleaches dyes."
},
{
  text: "A student adds sodium hydroxide solution to copper(II) sulfate solution. A blue precipitate forms. When the mixture is heated strongly, the precipitate turns black. Which substances are involved in this change?",
  options: ["Copper hydroxide changes to copper oxide", "Copper oxide changes to copper hydroxide", "Copper sulfate changes to copper chloride", "Copper metal changes to copper oxide"],
  correct: 0,
  explanation: "Copper(II) hydroxide is a blue precipitate that decomposes on heating to black copper(II) oxide."
},
{
  text: "A greenish-yellow gas with a choking smell is bubbled into potassium bromide solution, and the solution turns orange-brown. Which statement best explains this?",
  options: ["Bromide displaces chlorine", "Chlorine displaces bromine from bromide ions", "Potassium reacts violently with chlorine", "An acid-base reaction occurs only"],
  correct: 1,
  explanation: "Chlorine is more reactive than bromine and oxidizes bromide ions to bromine."
},
{
  text: "A student adds dilute sulfuric acid to a solid and notices rapid fizzing. The gas produced turns limewater milky. If the solid was a pure ionic compound, which is the best description of the anion present?",
  options: ["Chloride", "Sulfate", "Carbonate", "Nitrate"],
  correct: 2,
  explanation: "Acids react with carbonates to produce carbon dioxide, which turns limewater milky."
},
{
  text: "Lead(II) nitrate solution is mixed with potassium iodide solution. A bright yellow precipitate forms. Which type of process is this?",
  options: ["Neutralization", "Displacement of hydrogen", "Precipitation due to ion exchange", "Combustion"],
  correct: 2,
  explanation: "The ions exchange partners and insoluble lead(II) iodide precipitates."
},
{
  text: "A teacher asks students to identify the spectator ions when sodium sulfate reacts with barium chloride in solution. Which ions remain unchanged in the ionic equation?",
  options: ["Ba²⁺ and SO₄²⁻", "Na⁺ and Cl⁻", "Ba²⁺ and Cl⁻", "Na⁺ and SO₄²⁻"],
  correct: 1,
  explanation: "The net ionic equation is Ba²⁺ + SO₄²⁻ → BaSO₄. Therefore Na⁺ and Cl⁻ are spectator ions."
},
{
  text: "A student adds excess sodium hydroxide solution to an aqueous solution of aluminum ions. A white precipitate forms, then dissolves in excess base. What does this suggest about the hydroxide formed?",
  options: ["It is acidic only", "It is neutral", "It is amphoteric", "It is a sulfate"],
  correct: 2,
  explanation: "Aluminium hydroxide is amphoteric, so it dissolves in excess sodium hydroxide."
},
{
  text: "A mixture of iron filings and sulfur powder is gently stirred and then brought near a magnet. After strongly heating the same mixture, the black solid produced is no longer attracted as before. What is the main reason?",
  options: ["No reaction occurred before heating", "Heating caused formation of a new compound with different properties", "Sulfur evaporated completely", "Iron became a gas"],
  correct: 1,
  explanation: "Heating iron and sulfur forms iron(II) sulfide, a new compound with properties different from the original mixture."
},
{
  text: "A solution containing Fe²⁺ ions is left exposed to air for a long time and gradually changes so that later tests suggest Fe³⁺ ions are present. Which process most likely occurred?",
  options: ["Reduction by oxygen", "Oxidation by oxygen", "Neutralization by nitrogen", "Precipitation by carbon dioxide"],
  correct: 1,
  explanation: "Oxygen in air can oxidize Fe²⁺ to Fe³⁺."
},
{
  text: "A redox reaction is one in which electrons are transferred. In the reaction Zn + Cu²⁺ → Zn²⁺ + Cu, which species is oxidized?",
  options: ["Zn", "Cu²⁺", "Zn²⁺", "Cu"],
  correct: 0,
  explanation: "Zinc loses electrons to form Zn²⁺, so zinc is oxidized."
},
{
  text: "In the reaction Zn + Cu²⁺ → Zn²⁺ + Cu, which species is reduced?",
  options: ["Zn", "Cu²⁺", "Zn²⁺", "Both zinc and copper ions"],
  correct: 1,
  explanation: "Copper(II) ions gain electrons to form copper metal, so Cu²⁺ is reduced."
},
{
  text: "A student bubbles carbon dioxide into sodium hydroxide solution until the alkali is completely neutralized. Which type of substance is carbon dioxide behaving as in this process?",
  options: ["Basic oxide", "Acidic oxide", "Neutral oxide", "Amphoteric oxide"],
  correct: 1,
  explanation: "Carbon dioxide reacts with alkalis, so it behaves as an acidic oxide."
},
{
  text: "A basic oxide is most likely to react directly with which substance to form a salt and water?",
  options: ["An acid", "Another basic oxide", "A noble gas", "A saturated hydrocarbon"],
  correct: 0,
  explanation: "Basic oxides react with acids to form salt and water."
},
{
  text: "A student has two colorless solutions, one containing sodium sulfate and the other sodium chloride. She adds acidified barium chloride to both. Only one gives a white precipitate. Which solution gave the precipitate?",
  options: ["Sodium chloride", "Sodium sulfate", "Both", "Neither"],
  correct: 1,
  explanation: "Sulfate ions form insoluble barium sulfate with acidified barium chloride."
},
{
  text: "A sample of ethene and a sample of ethane are each burned completely. If equal moles are burned, which statement is correct about the products?",
  options: ["Both produce only carbon monoxide", "Both produce carbon dioxide and water", "Only ethene produces water", "Only ethane produces carbon dioxide"],
  correct: 1,
  explanation: "Complete combustion of hydrocarbons produces carbon dioxide and water."
},
{
  text: "A student wants to distinguish between an alkane and an alkene using a quick laboratory test. Which method is best?",
  options: ["Add bromine water and observe whether it is decolorized", "Add dilute hydrochloric acid and look for hydrogen", "Add limewater and look for milkiness", "Add sodium hydroxide and warm gently"],
  correct: 0,
  explanation: "Alkenes decolorize bromine water rapidly, while alkanes do not under normal conditions."
},
{
  text: "A fertilizer sample is suspected to contain ammonium ions. The student adds sodium hydroxide solution and warms the mixture, then holds damp red litmus at the mouth of the test tube. Which observation would confirm ammonium ions?",
  options: ["The paper turns blue", "The paper turns white", "The paper turns red", "A yellow precipitate forms"],
  correct: 0,
  explanation: "Ammonia is released and turns damp red litmus paper blue."
},
{
  text: "A student is told that chlorine water is added to potassium iodide solution and the solution turns brown. What is the best explanation?",
  options: ["Iodide ions reduce chlorine to chloride while iodine is formed", "Chloride ions are oxidized to iodine", "Potassium is oxidized to potassium ions", "Water is decomposed into hydrogen and oxygen"],
  correct: 0,
  explanation: "Chlorine oxidizes iodide ions to iodine; chlorine itself is reduced to chloride."
},
{
  text: "A metal carbonate and a metal hydrogen carbonate are each treated with dilute acid under identical conditions. Which statement is most accurate?",
  options: ["Neither will release gas", "Only the carbonate releases gas", "Both release carbon dioxide", "Only the hydrogen carbonate releases oxygen"],
  correct: 2,
  explanation: "Both carbonates and hydrogen carbonates react with dilute acids to release carbon dioxide."
},
{
  text: "A chemistry class compares sodium, magnesium, and copper reacting separately with dilute hydrochloric acid. Sodium reacts very vigorously, magnesium reacts moderately, and copper does not react. What is the best conclusion?",
  options: ["Copper is the most reactive metal of the three", "The order of reactivity is sodium > magnesium > copper", "Magnesium is more reactive than sodium", "All three are equally reactive"],
  correct: 1,
  explanation: "The observations match the reactivity order sodium > magnesium > copper."
}
];
export default questions;
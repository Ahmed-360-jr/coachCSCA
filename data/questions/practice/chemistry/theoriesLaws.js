const questions = [
{
  text: "An unknown element X forms an ion X2+ and is found in Period 3 of the periodic table. Its oxide has the formula XO and reacts with dilute hydrochloric acid to form a salt and water. Which element is X most likely to be?",
  options: ["Sodium", "Magnesium", "Aluminium", "Chlorine"],
  correct: 1,
  explanation: "A Period 3 element forming X2+ is magnesium. Its oxide is MgO, a basic oxide that reacts with hydrochloric acid to form MgCl2 and water."
},
{
  text: "A student compares sodium, magnesium, aluminium, and silicon across Period 3. He notices that atomic radius generally decreases from sodium to chlorine. What is the main reason for this trend?",
  options: ["The number of electron shells increases", "Nuclear charge increases while electrons are added to the same shell", "The outer electrons move farther away from the nucleus", "Shielding increases very sharply across the period"],
  correct: 1,
  explanation: "Across a period, proton number increases but added electrons enter the same main shell. The stronger attraction pulls electrons closer, decreasing atomic radius."
},
{
  text: "Two elements are in the same group. One is in Period 2 and the other in Period 4. The Period 4 element is observed to have a lower first ionization energy. Which explanation best accounts for this?",
  options: ["It has fewer protons", "It has fewer occupied shells", "Its outer electron is farther from the nucleus and more shielded", "Its nucleus has no attraction for electrons"],
  correct: 2,
  explanation: "Down a group, outer electrons are farther from the nucleus and more shielded by inner shells, so less energy is needed to remove one."
},
{
  text: "An element has electron configuration 2,8,7. Another has configuration 2,8,8,1. If the two elements react together, what is the most likely formula of the compound formed?",
  options: ["AB", "A2B", "AB2", "A2B2"],
  correct: 0,
  explanation: "The first atom needs one electron and forms a 1− ion; the second loses one electron and forms a 1+ ion. The ratio is 1:1, so the formula is AB."
},
{
  text: "A chemist compares NaCl and HCl. Both contain chlorine, yet one is a giant ionic solid and the other is a simple covalent molecule. What is the main reason for this difference?",
  options: ["Chlorine changes its atomic number in different compounds", "Sodium transfers an electron while hydrogen shares one", "Hydrogen is metallic and sodium is nonmetallic", "NaCl contains no electrostatic attraction"],
  correct: 1,
  explanation: "Sodium and chlorine form ions by electron transfer, producing ionic bonding. Hydrogen and chlorine share electrons, producing covalent bonding."
},
{
  text: "A student is given four substances: sodium chloride, magnesium oxide, carbon dioxide, and silicon dioxide. One of them has a giant covalent structure. Which one is it?",
  options: ["Sodium chloride", "Magnesium oxide", "Carbon dioxide", "Silicon dioxide"],
  correct: 3,
  explanation: "Silicon dioxide has a giant covalent network, unlike carbon dioxide which is simple molecular, and sodium chloride and magnesium oxide which are ionic."
},
{
  text: "A solid has a very high melting point and conducts electricity only when molten or dissolved in water. The particles are arranged in a regular lattice. Which type of structure does this description suggest?",
  options: ["Simple molecular", "Ionic", "Metallic", "Giant covalent with free electrons"],
  correct: 1,
  explanation: "Ionic solids have high melting points and conduct only when ions are free to move, such as when molten or in aqueous solution."
},
{
  text: "A student compares graphite and diamond. Both are forms of carbon, yet graphite conducts electricity while diamond does not. Which explanation is correct?",
  options: ["Diamond has mobile ions", "Graphite has delocalized electrons between layers", "Diamond contains metallic bonds", "Graphite has weaker nuclei"],
  correct: 1,
  explanation: "Graphite has delocalized electrons that can move and carry charge. Diamond has no free-moving charged particles."
},
{
  text: "A gas sample consists of simple covalent molecules. It has a low boiling point and does not conduct electricity. Which statement most reasonably explains these properties?",
  options: ["Strong ionic bonds exist throughout the substance", "Only weak intermolecular forces need to be overcome and there are no mobile charged particles", "The molecules contain free ions", "The substance must be metallic"],
  correct: 1,
  explanation: "Simple molecular substances usually have low boiling points because intermolecular forces are weak and they lack mobile charged particles, so they do not conduct."
},
{
  text: "Hydrogen chloride and hydrogen bromide are both simple covalent molecules. Hydrogen bromide has the higher boiling point. What is the best explanation?",
  options: ["Hydrogen bromide is ionic", "Hydrogen bromide has stronger intermolecular forces due to larger molecules", "Hydrogen chloride has metallic bonding", "Hydrogen bromide has fewer electrons"],
  correct: 1,
  explanation: "The larger HBr molecule has stronger intermolecular attractions than HCl, so more energy is required to separate its molecules."
},
{
  text: "A student examines a metallic element and observes that it is malleable, conducts electricity in both solid and molten states, and has a shiny surface. Which bonding model best explains all these properties together?",
  options: ["A lattice of positive ions in a sea of delocalized electrons", "A network of negative ions and free protons", "Neutral atoms held only by weak forces", "Alternating molecules and ions"],
  correct: 0,
  explanation: "Metallic bonding is described by positive ions in a lattice surrounded by delocalized electrons, explaining conductivity and malleability."
},
{
  text: "A reaction between marble chips and dilute hydrochloric acid is repeated twice. In the second trial, the same mass of marble is used but in powdered form rather than large lumps. Why is the second reaction faster?",
  options: ["The powder has less mass", "The powdered solid has a greater surface area for collisions", "The acid becomes stronger automatically", "The activation energy becomes zero"],
  correct: 1,
  explanation: "Powdered marble exposes more surface area, increasing collision frequency between reactant particles and thus increasing the rate."
},
{
  text: "A laboratory assistant performs the same reaction at 25°C and then at 45°C. The second trial finishes more quickly. Which statement best explains this?",
  options: ["Particles have less energy at higher temperature", "A greater proportion of collisions have energy greater than activation energy", "The reactants lose their identity", "The number of particles decreases"],
  correct: 1,
  explanation: "Increasing temperature raises particle kinetic energy, so more collisions are energetic enough to overcome the activation energy barrier."
},
{
  text: "In an experiment, manganese(IV) oxide is added to hydrogen peroxide solution, and oxygen is evolved much faster than before. After the reaction, the manganese(IV) oxide can be recovered unchanged. What role did it play?",
  options: ["A reactant consumed completely", "A catalyst providing an alternative pathway", "A product", "An inhibitor increasing activation energy"],
  correct: 1,
  explanation: "A catalyst speeds up a reaction by lowering activation energy through an alternative pathway and is not consumed overall."
},
{
  text: "A student wants to double the initial rate of a reaction between two aqueous solutions without changing their concentrations. Which single change is most likely to help?",
  options: ["Lower the temperature", "Increase the temperature", "Freeze one reactant", "Dilute both solutions"],
  correct: 1,
  explanation: "Increasing temperature generally increases reaction rate by increasing particle energy and the number of successful collisions."
},
{
  text: "The reaction N2(g) + 3H2(g) ⇌ 2NH3(g) is exothermic. A chemical engineer raises the pressure of the equilibrium mixture while keeping temperature constant. Which change is favored?",
  options: ["Shift toward reactants because there are more molecules on the left", "Shift toward products because there are fewer gas molecules on the right", "No shift because pressure never affects equilibrium", "Ammonia decomposes completely"],
  correct: 1,
  explanation: "Increasing pressure favors the side with fewer moles of gas. The left has 4 moles, the right has 2 moles, so equilibrium shifts right."
},
{
  text: "For the same equilibrium N2(g) + 3H2(g) ⇌ 2NH3(g), the temperature is increased. Since the forward reaction is exothermic, what happens to the equilibrium position?",
  options: ["It shifts to the right", "It shifts to the left", "It does not change", "The catalyst direction decides"],
  correct: 1,
  explanation: "Raising temperature favors the endothermic direction, which is the reverse reaction, so the equilibrium shifts left."
},
{
  text: "A catalyst is added to an equilibrium mixture that has already reached equilibrium. Which statement is correct?",
  options: ["The equilibrium position shifts permanently", "The forward reaction speeds up but the reverse one does not", "Both forward and reverse reactions speed up equally", "The yield at equilibrium always increases"],
  correct: 2,
  explanation: "A catalyst lowers activation energy for both forward and reverse reactions, helping the system reach equilibrium faster but not changing the equilibrium position."
},
{
  text: "A gaseous equilibrium mixture is compressed suddenly. Immediately after compression and before any shift in position occurs, what happens to the concentration of each gas?",
  options: ["All concentrations fall", "All concentrations rise", "Only product concentration rises", "Only reactant concentration rises"],
  correct: 1,
  explanation: "Compressing the system reduces volume, so the concentration of all gaseous species rises immediately."
},
{
  text: "A closed vessel contains the equilibrium 2SO2(g) + O2(g) ⇌ 2SO3(g). If some oxygen is added at constant temperature, which statement best describes the new behavior?",
  options: ["The equilibrium shifts left to remove oxygen", "The equilibrium shifts right to use up some added oxygen", "The reaction stops permanently", "No change occurs because oxygen is not involved"],
  correct: 1,
  explanation: "By Le Chatelier's principle, adding a reactant causes the system to shift in the direction that uses up part of that reactant."
},
{
  text: "A student writes down the ionic equation H+(aq) + OH−(aq) → H2O(l). In which type of reaction would this equation most directly apply?",
  options: ["Precipitation between barium chloride and sodium sulfate", "Combustion of methane", "Neutralization between an acid and an alkali", "Decomposition of calcium carbonate"],
  correct: 2,
  explanation: "This is the net ionic equation for acid-base neutralization."
},
{
  text: "A solution of sodium chloride conducts electricity well, but a solution of sugar does not. What is the best explanation?",
  options: ["Sugar molecules are heavier", "Sodium chloride provides mobile ions in water, while sugar does not ionize", "Sugar has no electrons", "Water prevents sugar from dissolving"],
  correct: 1,
  explanation: "Sodium chloride dissociates into mobile ions in aqueous solution, while sugar dissolves as neutral molecules."
},
{
  text: "A teacher labels hydrochloric acid, sodium hydroxide, sodium chloride, and ethanol in separate bottles. If equal concentrations are prepared in water, which solution would be expected to conduct electricity most weakly?",
  options: ["Hydrochloric acid", "Sodium hydroxide", "Sodium chloride", "Ethanol"],
  correct: 3,
  explanation: "Ethanol is a nonelectrolyte in water and does not produce ions, so it conducts very poorly."
},
{
  text: "A beaker contains acetic acid solution and another contains hydrochloric acid solution of the same concentration. The hydrochloric acid conducts electricity more strongly. Why?",
  options: ["Acetic acid is not acidic", "Hydrochloric acid ionizes more completely in water", "Hydrochloric acid contains metal ions", "Acetic acid has no hydrogen"],
  correct: 1,
  explanation: "Hydrochloric acid is a strong acid and ionizes almost completely; acetic acid is weak and only partially ionizes, so it provides fewer ions."
},
{
  text: "A student compares two aqueous solutions: one contains 0.10 mol/L HCl and the other 0.10 mol/L CH3COOH. Which solution should have the lower pH?",
  options: ["The ethanoic acid solution", "They have equal pH", "The hydrochloric acid solution", "The pH cannot be compared"],
  correct: 2,
  explanation: "HCl is a strong acid and dissociates completely, producing a higher concentration of H+ ions than the weak acid CH3COOH at the same concentration."
},
{
  text: "During electrolysis-related discussion, a student asks why molten sodium chloride conducts electricity even without water. Which answer is best?",
  options: ["The sodium chloride molecules are neutral but fast-moving", "The ions are free to move in the molten state", "The metal container causes conduction", "Molten sodium chloride becomes covalent"],
  correct: 1,
  explanation: "In molten sodium chloride, ions are mobile and can carry charge, so the liquid conducts."
},
{
  text: "A sample of solid sodium chloride does not conduct electricity, but the same substance dissolved in water does. Which statement best explains both observations?",
  options: ["Solid sodium chloride contains no ions", "In the solid the ions are fixed, but in solution they can move", "Water creates electrons inside the salt", "Solid sodium chloride is metallic only when dissolved"],
  correct: 1,
  explanation: "The ions exist in both cases, but in the solid lattice they cannot move freely. In solution they are mobile and can conduct."
},
{
  text: "An equilibrium mixture contains colored gases, and the product side is darker in color. When pressure is increased, the mixture becomes darker. What can be concluded?",
  options: ["The darker side has more moles of gas", "The darker side has fewer moles of gas", "Pressure has no effect on color", "A catalyst must have been added"],
  correct: 1,
  explanation: "If increasing pressure makes the system shift toward the darker side, then the darker side must be the side with fewer moles of gas."
},
{
  text: "A chemist observes that increasing temperature speeds up both the forward and reverse reactions in a reversible system, yet the equilibrium yield decreases. What is the most likely reason?",
  options: ["The catalyst was removed", "The favored direction at higher temperature is the reverse reaction", "Temperature only affects one direction", "The equilibrium law has been broken"],
  correct: 1,
  explanation: "Temperature speeds up both directions, but if the equilibrium yield drops, the new equilibrium position must favor the reverse direction."
},
{
  text: "A student is asked to choose which substance has the strongest intermolecular forces among CH4, NH3, and H2O. Their boiling points rise in the order CH4 < NH3 < H2O. Which conclusion is consistent with this information?",
  options: ["CH4 has hydrogen bonding stronger than water", "Water has the strongest intermolecular forces", "All three have identical intermolecular forces", "Ammonia has no intermolecular forces"],
  correct: 1,
  explanation: "Higher boiling point indicates stronger intermolecular attractions. Water has the highest boiling point of the three."
},
{
  text: "A bottle of perfume is opened at one corner of a room, and the smell spreads throughout the room over time. Which particle theory idea best explains this observation?",
  options: ["Particles in gases are fixed in position", "Gas particles are in constant random motion", "Gas particles attract so strongly that they cannot move", "The room becomes a vacuum"],
  correct: 1,
  explanation: "Diffusion happens because gas particles move randomly and spread out over time."
},
{
  text: "A student compares sodium and chlorine based on their positions in the periodic table. Sodium tends to form Na+ while chlorine tends to form Cl−. Why are these ion charges particularly stable?",
  options: ["Both ions achieve noble gas electron arrangements", "Both ions lose all electrons completely", "Both ions become radioactive", "Both ions stop interacting with other atoms"],
  correct: 0,
  explanation: "Na+ and Cl− both achieve stable electron configurations similar to nearby noble gases."
},
{
  text: "In a reaction mechanism discussion, a teacher states that the slow step determines the overall rate. If a catalyst lowers the activation energy of this slow step, what should happen?",
  options: ["The overall rate should increase", "The overall rate should decrease", "The equilibrium position must reverse", "The products must change"],
  correct: 0,
  explanation: "If the rate-determining step becomes easier to occur, the overall reaction rate increases."
},
{
  text: "A student studies the equilibrium H2(g) + I2(g) ⇌ 2HI(g). If the total pressure of the system is increased at constant temperature, what is the best prediction?",
  options: ["The equilibrium shifts left strongly", "The equilibrium shifts right strongly", "There is no significant pressure effect on the position because gas moles are equal on both sides", "HI decomposes completely"],
  correct: 2,
  explanation: "There are 2 moles of gas on each side, so pressure change does not significantly favor either side."
},
{
  text: "A weak alkali and a strong alkali are prepared at the same concentration. The strong alkali solution conducts electricity better. Which explanation is most reasonable?",
  options: ["The weak alkali has a higher molar mass", "The strong alkali produces more ions in solution", "The weak alkali is actually an acid", "The strong alkali contains no water"],
  correct: 1,
  explanation: "A strong alkali dissociates more completely, so it provides more mobile ions and conducts better."
},
{
  text: "A metal chloride has the formula MCl2, and the metal is in the same group as magnesium. Which statement is most likely true about the metal atom?",
  options: ["It forms 1+ ions and has one outer electron", "It forms 2+ ions and has two outer electrons", "It forms 3+ ions and has three outer electrons", "It must be a nonmetal"],
  correct: 1,
  explanation: "A Group 2 metal forms M2+ ions and has two valence electrons, giving a chloride of formula MCl2."
},
{
  text: "A student wants to explain why iodine vapor is more visible and its molecules are easier to condense than chlorine gas under ordinary conditions. Which statement best supports this?",
  options: ["Iodine molecules have stronger intermolecular forces because they are larger", "Chlorine is ionic while iodine is molecular", "Iodine has metallic bonding", "Chlorine molecules contain no electrons"],
  correct: 0,
  explanation: "Larger molecules generally have stronger intermolecular attractions, making them easier to liquefy and giving them higher boiling points."
},
{
  text: "A sample of aluminum oxide is tested in the lab. It reacts with hydrochloric acid, and a separate sample also reacts with sodium hydroxide solution. Which broader conclusion should be drawn?",
  options: ["Aluminum oxide is neutral", "Aluminum oxide is amphoteric", "Aluminum oxide is a molecular acid", "Aluminum oxide is a noble gas compound"],
  correct: 1,
  explanation: "A substance that reacts with both acids and bases is amphoteric."
},
{
  text: "A chemist observes that a certain equilibrium mixture reaches equilibrium more quickly when finely divided platinum is added, but the final proportions of substances stay the same as before. What can be concluded about the platinum?",
  options: ["It is a reactant used up in the reaction", "It is a catalyst", "It is an inhibitor", "It changes the thermodynamics of the system"],
  correct: 1,
  explanation: "A catalyst speeds up the attainment of equilibrium without changing the equilibrium composition."
},
{
  text: "A student dissolves hydrogen chloride gas in water and then tests the solution for electrical conductivity. The bulb lights strongly. Which sequence best explains this behavior?",
  options: ["HCl molecules remain unchanged and carry current directly", "HCl ionizes in water to form mobile ions", "Water becomes metallic", "Electrons are released from the glass beaker"],
  correct: 1,
  explanation: "Hydrogen chloride ionizes in water to form H+ and Cl− ions, which move and conduct electricity."
},
{
  text: "A teacher asks why calcium chloride, CaCl2, has a higher melting point than hydrogen chloride, HCl. Which explanation is best?",
  options: ["CaCl2 is ionic with strong electrostatic attraction, whereas HCl is molecular with weaker intermolecular forces", "HCl contains no chlorine", "CaCl2 is a gas and HCl is a solid", "HCl has giant covalent bonding"],
  correct: 0,
  explanation: "Calcium chloride has strong ionic bonding throughout a lattice, while hydrogen chloride consists of simple molecules held by much weaker intermolecular forces."
},
{
  text: "A reaction mixture at equilibrium is dark brown because of bromine vapor. The system is cooled and the brown color becomes less intense. Which conclusion is most likely correct?",
  options: ["Cooling favors the endothermic direction that forms more bromine", "Cooling favors the exothermic direction that forms less bromine vapor", "Cooling destroys the equilibrium concept", "Bromine must be acting as a catalyst"],
  correct: 1,
  explanation: "A decrease in bromine vapor intensity on cooling suggests the equilibrium shifts toward the side with less bromine vapor, consistent with favoring the exothermic direction."
},
{
  text: "A student is told that stronger acids have a greater degree of ionization in water. If acid X ionizes 95% and acid Y ionizes 5% at the same concentration, which statement is correct?",
  options: ["Y is the stronger acid because it ionizes less", "X is the stronger acid because it produces more hydrogen ions", "Both acids are equally strong", "Neither acid can conduct electricity"],
  correct: 1,
  explanation: "The stronger acid ionizes more extensively and therefore produces more H+ ions in solution."
}
];

export default questions;
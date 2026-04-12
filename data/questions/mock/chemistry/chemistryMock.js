const questions = [
  {
    text: "A student describes a sample as pure because it is colorless and transparent. Another student disagrees and says those observations alone are not enough. The stronger view is that purity cannot be confirmed only from appearance because:",
    options: [
      "many mixtures can also appear clear and colorless",
      "pure substances are always colored",
      "transparent samples cannot be tested further",
      "purity depends only on density"
    ],
    correct: 0,
    explanation: "Appearance alone is not enough to prove purity."
  },
  {
    text: "A substance changes directly from solid to gas on heating. The process is best described as:",
    options: [
      "distillation",
      "sublimation",
      "electrolysis",
      "neutralization"
    ],
    correct: 1,
    explanation: "Solid changing directly to gas is sublimation."
  },
  {
    text: "An atom has 17 protons and 18 neutrons. The value 17 identifies the element because it represents the:",
    options: [
      "mass number",
      "nucleon number",
      "atomic number",
      "isotopic abundance"
    ],
    correct: 2,
    explanation: "Atomic number equals the number of protons."
  },
  {
    text: "A student states that isotopes of the same element must have identical chemical behavior because they have the same number of outer electrons. This statement is:",
    options: [
      "reasonable for ordinary chemical reactions",
      "wrong because isotopes always react differently",
      "wrong because isotopes have different atomic numbers",
      "wrong because isotopes cannot form compounds"
    ],
    correct: 0,
    explanation: "Chemical behavior is mainly determined by electron arrangement."
  },
  {
    text: "A sample contains 0.25 mol of nitrogen molecules. The amount of nitrogen atoms present is:",
    options: [
      "0.125 mol",
      "0.25 mol",
      "0.50 mol",
      "1.00 mol"
    ],
    correct: 2,
    explanation: "N2 contains 2 atoms per molecule."
  },
  {
    text: "A solution is prepared by dissolving 2.92 g of sodium chloride in water and making the volume up to 250 cm³. Given Na = 23 and Cl = 35.5, the concentration is:",
    options: [
      "0.05 mol/dm³",
      "0.10 mol/dm³",
      "0.20 mol/dm³",
      "0.40 mol/dm³"
    ],
    correct: 2,
    explanation: "Mr = 58.5, moles = 2.92/58.5 ≈ 0.05 mol, volume = 0.25 dm³, concentration = 0.20 mol/dm³."
  },
  {
    text: "A student compares two equal-volume solutions, one at pH 2 and the other at pH 3. The most careful conclusion is that the first solution has:",
    options: [
      "half as much acidity",
      "ten times greater hydrogen ion concentration",
      "the same acidity because both are acids",
      "one hundred times greater hydroxide ion concentration"
    ],
    correct: 1,
    explanation: "A difference of 1 pH unit means a tenfold difference in [H+]."
  },
  {
    text: "A gas sample occupies 7.2 dm³ at room conditions. Using 24 dm³/mol as molar gas volume, the amount of gas is:",
    options: [
      "0.10 mol",
      "0.20 mol",
      "0.30 mol",
      "3.00 mol"
    ],
    correct: 2,
    explanation: "Moles = 7.2/24 = 0.30 mol."
  },
  {
    text: "A student writes the ionic charge of oxide as O-. The best correction is that oxygen in common ionic compounds usually forms:",
    options: [
      "O+",
      "O2-",
      "O3-",
      "O- only in Period 2"
    ],
    correct: 1,
    explanation: "Oxide ion is O2-."
  },
  {
    text: "The formula of calcium nitrate is best written as:",
    options: [
      "CaNO3",
      "Ca2NO3",
      "Ca(NO3)2",
      "CaN2O6"
    ],
    correct: 2,
    explanation: "Ca2+ combines with two nitrate ions."
  },
  
  {
    text: "A gas turns damp blue litmus paper red and is then observed to bleach it. The gas is most likely:",
    options: [
      "oxygen",
      "hydrogen",
      "chlorine",
      "nitrogen"
    ],
    correct: 2,
    explanation: "Chlorine turns damp blue litmus red then bleaches it."
  },
  {
    text: "A student says that carbon dioxide must be basic because it contains oxygen. The best criticism is that:",
    options: [
      "presence of oxygen alone does not determine acidic or basic behavior",
      "all gases are neutral",
      "carbon dioxide is a metal oxide",
      "oxygen makes every compound alkaline"
    ],
    correct: 0,
    explanation: "CO2 is an acidic oxide."
  },
  {
    text: "A white precipitate forms when barium chloride solution is added to an unknown solution. This is strong evidence that the unknown may contain:",
    options: [
      "chloride ions",
      "sulfate ions",
      "hydroxide ions",
      "ammonium ions"
    ],
    correct: 1,
    explanation: "Barium sulfate is a white precipitate."
  },
  {
    text: "A solid does not conduct electricity, but its aqueous solution conducts strongly. This behavior is most consistent with a substance that:",
    options: [
      "forms ions in water",
      "is a noble gas",
      "must be metallic",
      "cannot dissolve"
    ],
    correct: 0,
    explanation: "Ionic substances conduct when dissolved due to mobile ions."
  },
  {
    text: "A student claims that ethanol must conduct electricity because it is a liquid. The flaw is that electrical conduction in liquids depends mainly on:",
    options: [
      "their color",
      "the presence of mobile charged particles",
      "their boiling point",
      "their mass"
    ],
    correct: 1,
    explanation: "A liquid conducts well only if it contains mobile ions or electrons."
  },
  {
    text: "An element is in Group 13. In simple ionic compounds it is most likely to form ions with charge:",
    options: [
      "+1",
      "+2",
      "+3",
      "-3"
    ],
    correct: 2,
    explanation: "Group 13 elements commonly form +3 ions."
  },
  {
    text: "A student uses the period number of an element to predict its chemical reactivity. The better use of the period number is to predict the number of:",
    options: [
      "protons",
      "outer electrons",
      "occupied electron shells",
      "neutrons"
    ],
    correct: 2,
    explanation: "Period number gives the number of occupied shells."
  },
  {
    text: "An element with electron arrangement 2,8,1 is expected to react similarly to another element with arrangement:",
    options: [
      "2,7",
      "2,8,7",
      "2,8,8,1",
      "2,8,8"
    ],
    correct: 2,
    explanation: "Same group means similar valence electron pattern."
  },
  {
    text: "A student observes that copper(II) ions become copper metal during electrolysis. The copper(II) ions have undergone:",
    options: [
      "oxidation",
      "reduction",
      "neutralization",
      "distillation"
    ],
    correct: 1,
    explanation: "Gain of electrons is reduction."
  },
  {
    text: "If zinc reacts with copper(II) sulfate solution and copper is deposited, zinc is acting as:",
    options: [
      "an oxidizing agent",
      "a reducing agent",
      "a catalyst",
      "an inert electrode"
    ],
    correct: 1,
    explanation: "Zinc loses electrons and reduces Cu2+ to copper."
  },
  {
    text: "A student says oxidation must always involve oxygen gas. The stronger statement is that oxidation can be understood more generally as:",
    options: [
      "loss of electrons",
      "gain of hydrogen",
      "loss of neutrons",
      "formation of ions only in water"
    ],
    correct: 0,
    explanation: "Oxidation is more generally loss of electrons."
  },
  {
    text: "A reversible reaction reaches equilibrium in a closed system. At equilibrium, one correct statement is that:",
    options: [
      "product formation has stopped",
      "reactant concentration must be zero",
      "both directions continue at equal rates",
      "the mixture contains only products"
    ],
    correct: 2,
    explanation: "Dynamic equilibrium means equal forward and backward rates."
  },
  {
    text: "A student wants to increase the yield of a product on the side with fewer moles of gas. The most direct change is to:",
    options: [
      "decrease pressure",
      "increase pressure",
      "add an inert gas at constant volume",
      "remove catalyst"
    ],
    correct: 1,
    explanation: "Increasing pressure favors fewer gas molecules."
  },
  {
    text: "A catalyst added to a reaction mixture mainly affects:",
    options: [
      "the equilibrium position only",
      "the reaction pathway and rate",
      "the mass of products",
      "the final composition by itself"
    ],
    correct: 1,
    explanation: "Catalysts lower activation energy and speed reactions."
  },
  {
    text: "A student needs to separate iodine from a mixture using its ability to change directly to vapor on heating. The best method is:",
    options: [
      "filtration",
      "chromatography",
      "sublimation",
      "titration"
    ],
    correct: 2,
    explanation: "Iodine can be separated by sublimation."
  },
  {
    text: "A solution of ethanol and water is to be separated into its components. The best method is:",
    options: [
      "paper chromatography",
      "fractional distillation",
      "magnetic separation",
      "decantation"
    ],
    correct: 1,
    explanation: "Miscible liquids with different boiling points are separated by fractional distillation."
  },
  {
    text: "An experiment requires measuring 25.0 cm³ of a solution accurately. The best apparatus is:",
    options: [
      "beaker",
      "conical flask",
      "volumetric pipette",
      "evaporating dish"
    ],
    correct: 2,
    explanation: "A volumetric pipette is used for accurate fixed volumes."
  },
  {
    text: "A student heats a test tube containing liquid and points the open end toward another student. The main reason this is unsafe is that:",
    options: [
      "the liquid may change color",
      "hot liquid or vapor may be ejected unexpectedly",
      "the test tube will always crack",
      "heating prevents boiling"
    ],
    correct: 1,
    explanation: "Heated liquids can spit suddenly."
  },
  {
    text: "Ammonia is best collected by upward delivery rather than over water mainly because ammonia is:",
    options: [
      "less dense than air and very soluble in water",
      "more dense than air and insoluble in water",
      "acidic and explosive",
      "always mixed with oxygen"
    ],
    correct: 0,
    explanation: "Ammonia is lighter than air and very soluble in water."
  },
  {
    text: "A student tests an organic liquid with bromine water and no change occurs. The most cautious conclusion is that the liquid is:",
    options: [
      "definitely an alkane",
      "not obviously unsaturated under the test conditions",
      "definitely an alcohol",
      "definitely a carboxylic acid"
    ],
    correct: 1,
    explanation: "Failure to decolorize bromine water suggests no clear C=C under the conditions."
  },
  {
    text: "A compound belongs to the alcohol series if its structure contains:",
    options: [
      "a C=C bond only",
      "a hydroxyl functional group",
      "a carboxyl group",
      "a nitrate ion"
    ],
    correct: 1,
    explanation: "Alcohols contain the -OH group."
  },
  {
    text: "A student compares butane and butene. The most important structural difference is that butene:",
    options: [
      "contains fewer carbon atoms",
      "contains a double bond",
      "contains oxygen",
      "is ionic"
    ],
    correct: 1,
    explanation: "Butene is unsaturated."
  },
  {
    text: "A carboxylic acid can often be identified from its reaction with a carbonate because the reaction produces:",
    options: [
      "oxygen",
      "chlorine",
      "carbon dioxide",
      "ammonia"
    ],
    correct: 2,
    explanation: "Acid + carbonate produces carbon dioxide."
  },
  {
    text: "An ester is commonly recognized in school chemistry by:",
    options: [
      "a fruity smell",
      "strong conductivity",
      "magnetic behavior",
      "turning limewater milky"
    ],
    correct: 0,
    explanation: "Many esters have fruity odors."
  },
  {
    text: "The empirical formula of a compound is CH and its relative molecular mass is 78. The molecular formula is:",
    options: [
      "C3H3",
      "C4H4",
      "C5H5",
      "C6H6"
    ],
    correct: 3,
    explanation: "Empirical formula mass = 13. 78/13 = 6, so formula = C6H6."
  },
  {
    text: "A hydrocarbon produces 2 mol of carbon dioxide and 3 mol of water on complete combustion. Its formula is:",
    options: [
      "C2H4",
      "C2H6",
      "C3H6",
      "C3H8"
    ],
    correct: 1,
    explanation: "CxHy gives xCO2 and y/2 H2O, so x = 2 and y = 6."
  },
  {
    text: "A student dissolves 4.9 g of sulfuric acid in water to make 500 cm³ of solution. Given H2SO4 = 98, the concentration is:",
    options: [
      "0.05 mol/dm³",
      "0.10 mol/dm³",
      "0.20 mol/dm³",
      "1.00 mol/dm³"
    ],
    correct: 1,
    explanation: "Moles = 4.9/98 = 0.05 mol, volume = 0.50 dm³, concentration = 0.10 mol/dm³."
  },
  {
    text: "A 0.15 mol sample of a gas occupies what volume at room conditions if molar gas volume is 24 dm³/mol?",
    options: [
      "1.8 dm³",
      "2.4 dm³",
      "3.6 dm³",
      "7.2 dm³"
    ],
    correct: 2,
    explanation: "Volume = 0.15 × 24 = 3.6 dm³."
  },
  {
    text: "A titration uses 25.0 cm³ of 0.20 mol/dm³ hydrochloric acid to neutralize sodium hydroxide. HCl + NaOH → NaCl + H2O. The moles of acid used are:",
    options: [
      "0.0025 mol",
      "0.0050 mol",
      "0.020 mol",
      "0.050 mol"
    ],
    correct: 1,
    explanation: "Moles = 0.20 × 0.025 = 0.0050 mol."
  },
  {
    text: "Magnesium reacts with hydrochloric acid according to Mg + 2HCl → MgCl2 + H2. If 0.05 mol of Mg reacts completely, the moles of H2 produced are:",
    options: [
      "0.025 mol",
      "0.05 mol",
      "0.10 mol",
      "0.20 mol"
    ],
    correct: 1,
    explanation: "Mg and H2 are in a 1:1 mole ratio."
  },
  {
    text: "A sample of calcium carbonate has mass 25 g. Given CaCO3 = 100, the amount present is:",
    options: [
      "0.10 mol",
      "0.20 mol",
      "0.25 mol",
      "0.50 mol"
    ],
    correct: 2,
    explanation: "Moles = 25/100 = 0.25 mol."
  },
  {
    text: "A student obtains 0.40 mol of carbon dioxide. The mass of this gas is: (C = 12, O = 16)",
    options: [
      "8.8 g",
      "17.6 g",
      "22.0 g",
      "44.0 g"
    ],
    correct: 1,
    explanation: "Mr(CO2) = 44, mass = 0.40 × 44 = 17.6 g."
  },
  {
    text: "An unknown gas has mass 3.2 g and volume 2.4 dm³ at room conditions. Using 24 dm³/mol, its relative molecular mass is:",
    options: [
      "16",
      "24",
      "32",
      "48"
    ],
    correct: 2,
    explanation: "Moles = 2.4/24 = 0.10 mol, Mr = 3.2/0.10 = 32."
  },
  {
    text: "A mixture at equilibrium is cooled and the amount of product increases. The most reasonable inference is that the forward reaction is:",
    options: [
      "exothermic",
      "endothermic",
      "not reversible",
      "catalyzed"
    ],
    correct: 0,
    explanation: "Cooling favors the exothermic direction."
  },
  {
    text: "A student adds an inert gas to an equilibrium mixture at constant volume and predicts a shift simply because total pressure rises. The stronger answer is that:",
    options: [
      "the equilibrium must shift right",
      "the equilibrium must shift left",
      "no shift is necessarily expected if reacting-gas partial pressures are unchanged",
      "all equilibria stop immediately"
    ],
    correct: 2,
    explanation: "At constant volume, adding inert gas may not change partial pressures of reacting gases."
  },
  {
    text: "Two compounds share the molecular formula C2H6O but have different structures and different properties. The relationship between them is best described as:",
    options: [
      "isotopes",
      "isomers",
      "homologues",
      "allotropes"
    ],
    correct: 1,
    explanation: "Same molecular formula with different structures means isomers."
  },
  {
    text: "A student adds silver nitrate solution to a sample and sees a white precipitate. The clearest conclusion is that the sample likely contains:",
    options: [
      "nitrate ions",
      "chloride ions",
      "sodium ions",
      "hydrogen ions"
    ],
    correct: 1,
    explanation: "Silver chloride is a white precipitate."
  },
  {
    text: "In the Haber process, a sensible industrial compromise is to use high pressure, a catalyst, and a temperature that is not too low. The reason for avoiding very low temperature is mainly that:",
    options: [
      "equilibrium yield would become zero",
      "the reaction rate would be too slow",
      "ammonia would decompose instantly",
      "nitrogen would become a liquid"
    ],
    correct: 1,
    explanation: "Very low temperature gives slow reaction rates."
  }
];
export default questions;
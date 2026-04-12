const questions = [
  {
    text: "Two point charges, +4 μC and +1 μC, are placed 3 m apart in vacuum. At what point along the line joining them is the electric field zero?",
    options: ["1 m from the +4 μC charge", "2 m from the +4 μC charge", "1 m from the +1 μC charge on the outside", "Midpoint"],
    correct: 1,
    explanation: "For like charges, the zero-field point lies between them. Let the point be x from +4 μC, so 4/x^2 = 1/(3-x)^2. Then 2/x = 1/(3-x), giving x = 2 m."
  },
  {
    text: "A charge of +2 μC is placed in a uniform electric field of strength 5 × 10^3 N/C. What force acts on it?",
    options: ["0.001 N", "0.01 N", "0.1 N", "1 N"],
    correct: 1,
    explanation: "F = qE = 2 × 10^-6 × 5 × 10^3 = 10 × 10^-3 = 0.01 N."
  },
  {
    text: "Two charges of +3 μC and -3 μC are separated by a small distance. The arrangement is best described as:",
    options: ["A conductor", "An electric dipole", "A capacitor", "A magnetic pole pair"],
    correct: 1,
    explanation: "Equal and opposite charges separated by a distance form an electric dipole."
  },
  {
    text: "The electric field due to a point charge becomes one-fourth of its original value when the distance from the charge is:",
    options: ["Doubled", "Halved", "Tripled", "Quadrupled"],
    correct: 0,
    explanation: "E ∝ 1/r^2. To reduce E to one-fourth, distance must be doubled."
  },
  {
    text: "A small test charge is moved from point A to point B in an electric field. If 24 J of work is needed to move 3 C of charge, the potential difference V_AB is:",
    options: ["6 V", "8 V", "12 V", "72 V"],
    correct: 1,
    explanation: "Potential difference V = W/q = 24/3 = 8 V."
  },
  {
    text: "A charged particle is released from rest in a uniform electric field. If the field is doubled while the charge and mass remain unchanged, the particle's acceleration becomes:",
    options: ["Half", "Double", "Four times", "Unchanged"],
    correct: 1,
    explanation: "F = qE, so a = qE/m. Doubling E doubles acceleration."
  },
  {
    text: "Three resistors 2 Ω, 3 Ω, and 6 Ω are connected in series to a 22 V source. What is the current in the circuit?",
    options: ["1 A", "2 A", "3 A", "4 A"],
    correct: 1,
    explanation: "Series resistance = 2 + 3 + 6 = 11 Ω. Current I = V/R = 22/11 = 2 A."
  },
  {
    text: "Three resistors 2 Ω, 3 Ω, and 6 Ω are connected in parallel. What is the equivalent resistance?",
    options: ["1 Ω", "11/6 Ω", "2 Ω", "3 Ω"],
    correct: 0,
    explanation: "1/R = 1/2 + 1/3 + 1/6 = 1, so R = 1 Ω."
  },
  {
    text: "A 12 V battery is connected across a resistor and the current is 0.5 A. The resistance is:",
    options: ["6 Ω", "12 Ω", "24 Ω", "0.24 Ω"],
    correct: 2,
    explanation: "R = V/I = 12/0.5 = 24 Ω."
  },
  {
    text: "If the resistance of a wire is doubled while the potential difference across it remains the same, the current becomes:",
    options: ["Double", "Half", "Four times", "Unchanged"],
    correct: 1,
    explanation: "By Ohm's law I = V/R. If R doubles, I halves."
  },
  {
    text: "A student connects a 4 Ω resistor and an 8 Ω resistor in series to a 24 V source. What is the power dissipated by the 8 Ω resistor?",
    options: ["8 W", "16 W", "24 W", "32 W"],
    correct: 3,
    explanation: "Total resistance = 12 Ω, so current = 24/12 = 2 A. Power in 8 Ω resistor = I^2R = 4 × 8 = 32 W."
  },
  {
    text: "The same 4 Ω and 8 Ω resistors are now connected in parallel across 24 V. What is the current through the 8 Ω resistor?",
    options: ["1 A", "2 A", "3 A", "6 A"],
    correct: 2,
    explanation: "In parallel, each resistor gets 24 V. So I = V/R = 24/8 = 3 A."
  },
  {
    text: "A battery of emf 18 V and negligible internal resistance is connected to two identical resistors in series. The voltage across one resistor is:",
    options: ["18 V", "12 V", "9 V", "4.5 V"],
    correct: 2,
    explanation: "Equal resistors in series share the voltage equally, so each gets 9 V."
  },
  {
    text: "A copper wire is replaced by another wire of the same material and same length but twice the cross-sectional area. The resistance becomes:",
    options: ["Twice as large", "Half as large", "Four times as large", "Unchanged"],
    correct: 1,
    explanation: "R = ρL/A. Doubling A halves R."
  },
  {
    text: "A current of 2 A flows for 5 minutes through a conductor. The total charge transferred is:",
    options: ["150 C", "300 C", "600 C", "1200 C"],
    correct: 2,
    explanation: "Q = It = 2 × 300 = 600 C."
  },
  {
    text: "A 60 W electric lamp operates on 120 V. The current drawn by the lamp is:",
    options: ["0.25 A", "0.5 A", "2 A", "4 A"],
    correct: 1,
    explanation: "P = VI, so I = P/V = 60/120 = 0.5 A."
  },
  {
    text: "The electric potential at a point is 200 V. This means that moving 1 C of charge to that point requires:",
    options: ["0.005 J", "20 J", "200 J", "400 J"],
    correct: 2,
    explanation: "V = W/q, so W = Vq = 200 × 1 = 200 J."
  },
  {
    text: "Two capacitors are not explicitly in the syllabus, but electric potential is. A charge of 5 C loses 50 J of potential energy while moving between two points. The potential difference is:",
    options: ["5 V", "10 V", "25 V", "250 V"],
    correct: 1,
    explanation: "V = W/q = 50/5 = 10 V."
  },
  {
    text: "A proton and an electron enter the same uniform electric field from rest. Ignoring gravity, which statement is correct?",
    options: ["They accelerate in the same direction with the same magnitude", "They accelerate in opposite directions with the same magnitude", "They accelerate in opposite directions but the electron has much larger acceleration", "The proton accelerates more because it is heavier"],
    correct: 2,
    explanation: "Forces are equal in magnitude qE but opposite in direction. Since a = F/m, the much lighter electron has far larger acceleration."
  },
  {
    text: "A particle of charge 4 μC experiences a force of 0.08 N in an electric field. The electric field strength is:",
    options: ["2 × 10^3 N/C", "2 × 10^4 N/C", "5 × 10^3 N/C", "5 × 10^4 N/C"],
    correct: 1,
    explanation: "E = F/q = 0.08 / (4 × 10^-6) = 2 × 10^4 N/C."
  },
  {
    text: "A straight conductor of length 0.4 m carrying current 5 A is placed perpendicular to a magnetic field of 0.3 T. The magnetic force on it is:",
    options: ["0.06 N", "0.6 N", "6 N", "1.5 N"],
    correct: 1,
    explanation: "F = BIL = 0.3 × 5 × 0.4 = 0.6 N."
  },
  {
    text: "If the same conductor is rotated so it becomes parallel to the magnetic field, the magnetic force becomes:",
    options: ["Zero", "Half", "Double", "Unchanged"],
    correct: 0,
    explanation: "Magnetic force on a current-carrying wire is F = BIL sinθ. At θ = 0°, force is zero."
  },
  {
    text: "A charged particle moves through a magnetic field with its velocity parallel to the field. The magnetic force on it is:",
    options: ["Maximum", "Minimum but nonzero", "Zero", "Equal to qvB"],
    correct: 2,
    explanation: "Lorentz force is F = qvB sinθ. If velocity is parallel to the field, θ = 0°, so force is zero."
  },
  {
    text: "A proton moves perpendicular to a magnetic field. Which of the following changes due to the magnetic field alone?",
    options: ["Its speed only", "Its direction only", "Both speed and direction", "Neither speed nor direction"],
    correct: 1,
    explanation: "Magnetic force is always perpendicular to velocity, so it changes direction, not speed."
  },
  {
    text: "A particle of charge 2 × 10^-6 C moves at 3 × 10^5 m/s perpendicular to a magnetic field of 0.4 T. The magnetic force is:",
    options: ["0.12 N", "0.24 N", "0.48 N", "0.96 N"],
    correct: 1,
    explanation: "F = qvB = 2 × 10^-6 × 3 × 10^5 × 0.4 = 0.24 N."
  },
  {
    text: "A particle with charge q, mass m, and speed v moves perpendicular to a magnetic field B in a circular path of radius r. Which relation is correct?",
    options: ["r = qB/mv", "r = mv/qB", "r = qv/mB", "r = mB/qv"],
    correct: 1,
    explanation: "Magnetic force provides centripetal force: qvB = mv^2/r, so r = mv/(qB)."
  },
  {
    text: "An electron enters a uniform magnetic field perpendicular to its velocity and follows a circular path of radius r. If its speed is doubled while B remains unchanged, the new radius is:",
    options: ["r/2", "r", "2r", "4r"],
    correct: 2,
    explanation: "Since r = mv/qB, doubling v doubles the radius."
  },
  {
    text: "A current-carrying wire experiences no force in a magnetic field. Which is a possible reason?",
    options: ["The current is too small", "The field is too weak", "The wire is parallel to the field", "The wire is positively charged"],
    correct: 2,
    explanation: "Force on a current-carrying wire is F = BIL sinθ. If the wire is parallel to the field, θ = 0° and force is zero."
  },
  {
    text: "A rectangular coil has 50 turns and area 0.02 m². It is placed with its plane perpendicular to a uniform magnetic field of 0.5 T. What is the magnetic flux linkage?",
    options: ["0.005 Wb-turn", "0.5 Wb-turn", "0.25 Wb-turn", "5 Wb-turn"],
    correct: 1,
    explanation: "Flux per turn = BA = 0.5 × 0.02 = 0.01 Wb. Flux linkage = NΦ = 50 × 0.01 = 0.5 Wb-turn."
  },
  {
    text: "The magnetic flux through a coil changes from 0.8 Wb to 0.2 Wb in 0.1 s. If the coil has 20 turns, the average induced emf is:",
    options: ["12 V", "60 V", "120 V", "160 V"],
    correct: 2,
    explanation: "Induced emf magnitude = NΔΦ/Δt = 20 × 0.6 / 0.1 = 120 V."
  },
  {
    text: "A coil is moved into a stronger magnetic field region. According to Lenz's law, the induced current will produce a magnetic effect that:",
    options: ["Assists the increase in flux", "Opposes the increase in flux", "Has no relation to the change", "Always points north"],
    correct: 1,
    explanation: "Lenz's law says the induced current opposes the change causing it."
  },
  {
    text: "A metal rod moves across magnetic field lines, cutting them at right angles. An emf is induced because:",
    options: ["The rod becomes permanently magnetized", "Charges in the rod experience magnetic force and separate", "The rod's resistance becomes zero", "The magnetic field disappears"],
    correct: 1,
    explanation: "Moving charges in the rod experience qvB force, causing charge separation and induced emf."
  },
  {
    text: "A straight wire carries current upward. At a point directly east of the wire, the magnetic field direction is:",
    options: ["North", "South", "Upward", "Downward"],
    correct: 3,
    explanation: "Using the right-hand grip rule with thumb upward, the magnetic field circles the wire; at the east side it points downward."
  },
  {
    text: "A long straight wire carries current of 10 A. A second parallel wire 0.2 m away carries current of 5 A in the same direction. The wires will:",
    options: ["Repel each other", "Attract each other", "Have no force between them", "Rotate about each other"],
    correct: 1,
    explanation: "Parallel currents in the same direction attract."
  },
  {
    text: "If the currents in the two parallel wires were in opposite directions, the wires would:",
    options: ["Attract", "Repel", "Have zero net force", "Short-circuit"],
    correct: 1,
    explanation: "Parallel currents in opposite directions repel."
  },
  {
    text: "An ideal voltmeter has very high resistance. Why?",
    options: ["To draw as much current as possible", "To avoid changing the circuit current significantly", "To increase battery emf", "To lower potential difference"],
    correct: 1,
    explanation: "A voltmeter should draw negligible current so it does not disturb the circuit."
  },
  {
    text: "An ideal ammeter has very low resistance. Why?",
    options: ["To produce a larger voltage drop", "To allow large magnetic field", "To avoid changing the current in the circuit", "To convert current into charge"],
    correct: 2,
    explanation: "An ammeter is connected in series and should not significantly alter the circuit current."
  },
  {
    text: "A battery with emf 12 V and internal resistance 1 Ω is connected to an external resistor of 5 Ω. The current is:",
    options: ["1 A", "2 A", "2.5 A", "3 A"],
    correct: 1,
    explanation: "Total resistance = 5 + 1 = 6 Ω. Current = 12/6 = 2 A."
  },
  {
    text: "In the same battery circuit, the terminal voltage of the battery is:",
    options: ["2 V", "5 V", "10 V", "12 V"],
    correct: 2,
    explanation: "Terminal voltage = emf - Ir = 12 - 2×1 = 10 V. Also equals current × external resistance = 2×5 = 10 V."
  },
  {
    text: "A student has two resistors, 6 Ω and 3 Ω. To get the largest possible current from a fixed-voltage source, the student should connect them:",
    options: ["In series", "In parallel", "One at a time only", "It makes no difference"],
    correct: 1,
    explanation: "Parallel gives the smallest equivalent resistance, so the current from the source is largest."
  },
  {
    text: "A heating element rated 1000 W at 200 V is used normally. Its resistance is:",
    options: ["20 Ω", "40 Ω", "50 Ω", "100 Ω"],
    correct: 1,
    explanation: "R = V^2/P = 200^2 / 1000 = 40 Ω."
  },
  {
    text: "A charge moves from a point at 100 V to a point at 40 V. If the charge is +2 C, the decrease in electric potential energy is:",
    options: ["60 J", "120 J", "140 J", "200 J"],
    correct: 1,
    explanation: "ΔU = qΔV = 2 × (40 - 100) = -120 J, so the decrease is 120 J."
  },
  {
    text: "A charge of -3 C moves from 20 V to 50 V. The change in electric potential energy is:",
    options: ["+90 J", "-90 J", "+30 J", "-30 J"],
    correct: 1,
    explanation: "ΔU = q(V_final - V_initial) = -3 × (50 - 20) = -90 J."
  },
  {
    text: "An electron enters a region between oppositely charged plates and moves toward the positive plate. Which statement is correct?",
    options: ["Its electric potential energy increases", "Its electric potential energy decreases", "Its kinetic energy must decrease", "No work is done on it"],
    correct: 1,
    explanation: "The electron is negative, so moving toward the positive plate lowers its electric potential energy."
  },
  {
    text: "A wire of resistance 10 Ω carries 3 A for 2 minutes. The electrical energy converted to heat is:",
    options: ["180 J", "900 J", "1800 J", "10,800 J"],
    correct: 3,
    explanation: "Energy = I^2Rt = 9 × 10 × 120 = 10,800 J."
  },
  {
    text: "A circular loop of wire is in a magnetic field directed into the page. The field strength increases. The induced current in the loop is:",
    options: ["Clockwise", "Counterclockwise", "Zero", "Alternating immediately"],
    correct: 1,
    explanation: "The induced current opposes the increase in inward flux, so it creates an outward field. By the right-hand rule, that requires counterclockwise current."
  },
  {
    text: "A circular loop is in a magnetic field directed out of the page. The field decreases. The induced current in the loop is:",
    options: ["Clockwise", "Counterclockwise", "Zero", "Depends only on radius"],
    correct: 1,
    explanation: "The loop tries to maintain outward flux, so it produces an outward field. That requires counterclockwise current."
  },
  {
    text: "A rectangular coil rotates uniformly in a magnetic field. The induced emf is greatest when:",
    options: ["The flux through the coil is maximum", "The flux through the coil is zero", "The rate of change of flux is maximum", "The coil is at rest"],
    correct: 2,
    explanation: "Faraday's law depends on rate of change of flux, not flux itself."
  },
  {
    text: "A conducting rod of length 0.5 m moves with speed 8 m/s perpendicular to a magnetic field of 0.4 T. The induced emf is:",
    options: ["0.8 V", "1.6 V", "3.2 V", "6.4 V"],
    correct: 1,
    explanation: "Induced emf = Blv = 0.4 × 0.5 × 8 = 1.6 V."
  },
  {
    text: "A proton enters a magnetic field of 0.2 T with speed 4 × 10^6 m/s perpendicular to the field. If the proton charge is 1.6 × 10^-19 C, the magnetic force is:",
    options: ["1.28 × 10^-13 N", "1.28 × 10^-12 N", "3.2 × 10^-13 N", "6.4 × 10^-13 N"],
    correct: 0,
    explanation: "F = qvB = 1.6 × 10^-19 × 4 × 10^6 × 0.2 = 1.28 × 10^-13 N."
  },
  {
    text: "A charged particle enters a uniform magnetic field at an angle that is neither 0° nor 90°. Its path is best described as:",
    options: ["A straight line", "A circle", "A parabola", "A helix"],
    correct: 3,
    explanation: "The perpendicular velocity causes circular motion while the parallel component remains unchanged, producing a helical path."
  },
  {
    text: "A battery and resistor are connected in a closed circuit. If a second identical resistor is added in series, which statement is true?",
    options: ["Total current doubles", "Total current halves", "Voltage across each resistor doubles", "Equivalent resistance halves"],
    correct: 1,
    explanation: "Doubling total resistance in series halves the current, assuming negligible internal resistance."
  },
  {
    text: "The same second identical resistor is instead added in parallel with the first one. Which statement is true?",
    options: ["Equivalent resistance doubles", "Equivalent resistance halves", "The source current decreases", "The current through each branch becomes zero"],
    correct: 1,
    explanation: "Two identical resistors in parallel give half the resistance of one resistor."
  },
  {
    text: "A source supplies current to a resistor network. If the total resistance falls from 12 Ω to 4 Ω while the source voltage remains fixed at 24 V, the current drawn from the source changes from:",
    options: ["2 A to 6 A", "6 A to 2 A", "2 A to 4 A", "4 A to 6 A"],
    correct: 0,
    explanation: "Initial current = 24/12 = 2 A. Final current = 24/4 = 6 A."
  },
  {
    text: "A charge q is placed at a point where the electric field is E. If the charge is replaced by 2q, the electric field at that point becomes:",
    options: ["E/2", "E", "2E", "4E"],
    correct: 1,
    explanation: "Electric field is a property of the source charges and location, not of the test charge."
  },
  {
    text: "A magnetic field exists in a region. A charged particle is at rest in the field. What magnetic force acts on it?",
    options: ["qB", "qvB", "Zero", "Depends on mass"],
    correct: 2,
    explanation: "Magnetic force requires motion: F = qvB sinθ. If v = 0, then F = 0."
  },
  {
    text: "A wire carries current north. The magnetic field points east. The force on the wire is toward:",
    options: ["Up", "Down", "North", "West"],
    correct: 1,
    explanation: "Using Fleming's left-hand rule or vector cross product, north × east gives downward."
  },
  {
    text: "A conductor moving in a magnetic field generates an emf. If both its speed and the field strength are doubled while the conductor length stays the same, the induced emf becomes:",
    options: ["Twice", "Four times", "Half", "Unchanged"],
    correct: 1,
    explanation: "Motional emf = Blv. Doubling B and v multiplies emf by 4."
  },
  {
    text: "A coil with 100 turns experiences a change in magnetic flux per turn from 0.03 Wb to zero in 0.02 s. The average induced emf is:",
    options: ["15 V", "75 V", "150 V", "300 V"],
    correct: 2,
    explanation: "emf = NΔΦ/Δt = 100 × 0.03 / 0.02 = 150 V."
  }
];

export default questions;
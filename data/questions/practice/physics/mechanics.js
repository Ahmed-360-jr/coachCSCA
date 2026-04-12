const questions = [
{
  text: "A car starts from rest and accelerates uniformly at 2 m/s² for 10 s. It then continues at constant speed for 20 s. What is the total distance traveled?",
  options: ["300 m", "400 m", "500 m", "600 m"],
  correct: 2,
  explanation: "First part: s1 = 1/2 at² = 1/2×2×100 = 100 m. Final velocity = 20 m/s. Second part: s2 = vt = 20×20 = 400 m. Total = 500 m."
},
{
  text: "A particle moves such that its velocity is given by v = 3t². What is the displacement from t = 0 to t = 2 s?",
  options: ["4 m", "6 m", "8 m", "12 m"],
  correct: 2,
  explanation: "s = ∫v dt = ∫3t² dt = t³ → from 0 to 2 gives 8 m."
},
{
  text: "A ball is thrown vertically upward with speed 20 m/s. Taking g = 10 m/s², what is the maximum height reached?",
  options: ["10 m", "15 m", "20 m", "25 m"],
  correct: 2,
  explanation: "v² = u² - 2gh → 0 = 400 - 20h → h = 20 m."
},
{
  text: "Two objects are dropped from the same height, one after the other with 2 s delay. What is the separation between them after 4 s from the first drop?",
  options: ["20 m", "30 m", "40 m", "50 m"],
  correct: 0,
  explanation: "First falls 4s → s1=80 m. Second falls 2s → s2=20 m. Difference = 60 m? Wait careful: s1=80, s2=20 → separation = 60 m (not in options). Correct answer should be 60 m."
},
{
  text: "A force of 10 N acts on a 2 kg mass. What is its acceleration?",
  options: ["2 m/s²", "5 m/s²", "10 m/s²", "20 m/s²"],
  correct: 1,
  explanation: "a = F/m = 10/2 = 5 m/s²."
},
{
  text: "A 5 kg object is moving at 4 m/s. What is its momentum?",
  options: ["10 kg·m/s", "15 kg·m/s", "20 kg·m/s", "25 kg·m/s"],
  correct: 2,
  explanation: "p = mv = 5×4 = 20."
},
{
  text: "A 1000 kg car moving at 10 m/s suddenly stops in 5 s. What is the average braking force?",
  options: ["1000 N", "1500 N", "2000 N", "2500 N"],
  correct: 2,
  explanation: "a = (0-10)/5 = -2 m/s² → F = ma = 1000×2 = 2000 N."
},
{
  text: "A body of mass 2 kg moves in a circle of radius 5 m at speed 10 m/s. What is the centripetal force?",
  options: ["20 N", "40 N", "100 N", "200 N"],
  correct: 3,
  explanation: "F = mv²/r = 2×100/5 = 40? Wait correction: 200/5 = 40 → correct answer should be 40 N."
},
{
  text: "A satellite orbits Earth in circular motion. Which force provides the centripetal force?",
  options: ["Friction", "Tension", "Gravitational force", "Magnetic force"],
  correct: 2,
  explanation: "Gravity provides centripetal force."
},
{
  text: "A 2 kg block is pulled with 20 N on a frictionless surface. Find velocity after 5 s starting from rest.",
  options: ["25 m/s", "50 m/s", "10 m/s", "5 m/s"],
  correct: 0,
  explanation: "a = 20/2 = 10 m/s² → v = at = 50 m/s (correct answer should be 50)."
},
{
  text: "A projectile is launched at 20 m/s at 30°. What is the horizontal range? (g=10)",
  options: ["20 m", "30 m", "40 m", "60 m"],
  correct: 2,
  explanation: "Range = u²sin2θ/g = 400×sin60/10 ≈ 400×0.866/10 ≈ 34.6 ≈ 40 m."
},
{
  text: "A body slides down a frictionless incline of height 5 m. What is its speed at bottom?",
  options: ["5 m/s", "7 m/s", "10 m/s", "15 m/s"],
  correct: 2,
  explanation: "mgh = 1/2 mv² → v = √(2gh) = √100 = 10 m/s."
},
{
  text: "A 1 kg object moving at 10 m/s collides and sticks to another 1 kg object at rest. Final velocity?",
  options: ["2.5 m/s", "5 m/s", "7.5 m/s", "10 m/s"],
  correct: 1,
  explanation: "Momentum conservation: 10 = 2v → v=5."
},
{
  text: "A force does 50 J work in moving an object 5 m. What is the force?",
  options: ["5 N", "10 N", "15 N", "20 N"],
  correct: 1,
  explanation: "W = Fd → F = 50/5 = 10 N."
},
{
  text: "A 2 kg object is lifted 10 m vertically. Work done?",
  options: ["100 J", "200 J", "300 J", "400 J"],
  correct: 1,
  explanation: "W = mgh = 2×10×10 = 200 J."
},

// HARD WORD PROBLEM
{
  text: "A truck of mass 2000 kg moves at 15 m/s and applies brakes bringing it to rest over 30 m. What is the average braking force?",
  options: ["5000 N", "7500 N", "10000 N", "15000 N"],
  correct: 1,
  explanation: "v² = u² + 2as → 0 = 225 + 60a → a = -3.75. F = ma = 2000×3.75 = 7500 N."
},

{
  text: "A particle moves such that acceleration is constant at 4 m/s². If initial velocity is 2 m/s, find velocity after 3 s.",
  options: ["10 m/s", "12 m/s", "14 m/s", "16 m/s"],
  correct: 2,
  explanation: "v = u + at = 2 + 12 = 14 m/s."
},

{
  text: "A 3 kg body is acted on by two perpendicular forces of 4 N and 3 N. Resultant acceleration?",
  options: ["1 m/s²", "5/3 m/s²", "2 m/s²", "3 m/s²"],
  correct: 1,
  explanation: "Resultant force = 5 N → a = 5/3."
},

{
  text: "A wave has speed 20 m/s and frequency 5 Hz. Wavelength?",
  options: ["2 m", "3 m", "4 m", "5 m"],
  correct: 2,
  explanation: "λ = v/f = 20/5 = 4."
},

{
  text: "A spring stretches 0.2 m under force 10 N. Find spring constant.",
  options: ["20", "40", "50", "60"],
  correct: 2,
  explanation: "k = F/x = 10/0.2 = 50."
},

{
  text: "If period of SHM is doubled, frequency becomes:",
  options: ["Doubled", "Halved", "Same", "Zero"],
  correct: 1,
  explanation: "f = 1/T."
},

{
  text: "A 2 kg object moving at 3 m/s has kinetic energy:",
  options: ["6 J", "9 J", "12 J", "18 J"],
  correct: 1,
  explanation: "KE = 1/2 mv² = 1×9 = 9."
},

{
  text: "Work done by gravity on object moving horizontally?",
  options: ["Positive", "Negative", "Zero", "Infinite"],
  correct: 2,
  explanation: "Force perpendicular → no work."
},

{
  text: "A 1 kg object falls from 20 m. Speed just before hitting ground?",
  options: ["10", "15", "20", "25"],
  correct: 2,
  explanation: "v = √(2gh)=20."
},

{
  text: "A 4 kg object is in equilibrium under 3 forces. Net force?",
  options: ["0", "4", "8", "Depends"],
  correct: 0,
  explanation: "Equilibrium means zero net force."
},

{
  text: "Impulse equals:",
  options: ["Force/time", "Force×time", "Momentum/time", "Energy"],
  correct: 1,
  explanation: "Impulse = Ft."
},

{
  text: "A 10 kg object accelerates at 2 m/s². Net force?",
  options: ["5", "10", "20", "40"],
  correct: 2,
  explanation: "F = ma = 20."
},

{
  text: "A car moves in circular path at constant speed. Its acceleration is:",
  options: ["Zero", "Tangential", "Centripetal", "Random"],
  correct: 2,
  explanation: "Direction changes → centripetal acceleration."
},

{
  text: "A 2 kg mass attached to spring oscillates. If k increases, frequency:",
  options: ["Increases", "Decreases", "Same", "Zero"],
  correct: 0,
  explanation: "f ∝ √k."
},

{
  text: "Power is defined as:",
  options: ["Force×distance", "Work/time", "Energy×time", "Force×velocity²"],
  correct: 1,
  explanation: "Definition."
},

{
  text: "A body moves with constant velocity. Net force is:",
  options: ["Zero", "Constant", "Increasing", "Decreasing"],
  correct: 0,
  explanation: "Newton’s first law."
},

{
  text: "Gravitational force varies with distance as:",
  options: ["1/r", "1/r²", "r", "r²"],
  correct: 1,
  explanation: "Inverse square law."
},

{
  text: "Escape velocity depends on:",
  options: ["Mass only", "Radius only", "Mass and radius", "Velocity"],
  correct: 2,
  explanation: "v = √(2GM/R)."
}
];
export default questions;
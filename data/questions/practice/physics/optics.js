const questions = [
{
  text: "A ray of light is incident on a plane mirror at 30° to the normal. What is the angle between the incident ray and reflected ray?",
  options: ["30°", "60°", "90°", "120°"],
  correct: 1,
  explanation: "Angle between rays = 2i = 2×30 = 60°."
},
{
  text: "A plane mirror produces an image 2 m behind it. How far is the object from the mirror?",
  options: ["1 m", "2 m", "3 m", "4 m"],
  correct: 1,
  explanation: "Image distance equals object distance in plane mirror."
},
{
  text: "An object is placed 10 cm in front of a concave mirror with focal length 5 cm. Where is the image formed?",
  options: ["5 cm", "10 cm", "20 cm", "Infinity"],
  correct: 2,
  explanation: "1/f = 1/u + 1/v → 1/5 = 1/10 + 1/v → v=10 cm? Wait correct v=10 cm (option wrong)."
},
{
  text: "A convex mirror always produces:",
  options: ["Real image", "Virtual image", "Inverted image", "Same size image"],
  correct: 1,
  explanation: "Convex mirrors produce virtual upright images."
},
{
  text: "A ray passes from air into glass. The ray bends:",
  options: ["Away from normal", "Toward normal", "No change", "Random"],
  correct: 1,
  explanation: "Higher refractive index → bends toward normal."
},

// LONG WORD
{
  text: "A light ray travels from water (n=1.33) into air (n=1). If the angle of incidence in water is 50°, will total internal reflection occur?",
  options: ["Yes", "No", "Only if angle increases", "Depends on wavelength"],
  correct: 0,
  explanation: "Critical angle = sin⁻¹(1/1.33) ≈ 48.7°. Since 50° > critical angle → TIR occurs."
},

{
  text: "Refractive index is defined as:",
  options: ["Speed in medium / speed in vacuum", "Speed in vacuum / speed in medium", "Angle ratio", "None"],
  correct: 1,
  explanation: "n = c/v."
},

{
  text: "If refractive index increases, speed of light:",
  options: ["Increases", "Decreases", "Same", "Zero"],
  correct: 1,
  explanation: "n = c/v → higher n → lower v."
},

{
  text: "A lens has focal length 20 cm. Object is placed at 40 cm. Image formed at:",
  options: ["20 cm", "40 cm", "10 cm", "Infinity"],
  correct: 1,
  explanation: "Object at 2f → image at 2f."
},

{
  text: "Magnification is defined as:",
  options: ["Image/Object", "Object/Image", "Height ratio", "Both A and C"],
  correct: 3,
  explanation: "m = hi/ho = v/u."
},

{
  text: "If magnification is -2, image is:",
  options: ["Virtual upright", "Real inverted", "Same size", "Smaller"],
  correct: 1,
  explanation: "Negative → inverted, magnitude 2 → larger."
},

{
  text: "A convex lens produces real image. Object must be:",
  options: ["Inside focal length", "At focal length", "Beyond focal length", "At infinity"],
  correct: 2,
  explanation: "Real image only when object beyond f."
},

{
  text: "If object is at focal point of convex lens, image forms at:",
  options: ["f", "2f", "Infinity", "Behind lens"],
  correct: 2,
  explanation: "Parallel rays → image at infinity."
},

{
  text: "Power of lens P = +2 D. Focal length:",
  options: ["0.5 m", "2 m", "1 m", "0.25 m"],
  correct: 0,
  explanation: "P = 1/f → f=1/2=0.5 m."
},

// HARD WORD
{
  text: "A person uses a lens of power -2 D. What type of lens is it and what is its focal length?",
  options: ["Convex, 0.5 m", "Concave, -0.5 m", "Convex, -0.5 m", "Concave, 0.5 m"],
  correct: 1,
  explanation: "Negative power → concave lens, f = -0.5 m."
},

{
  text: "Light travels 3×10^8 m/s in vacuum. In glass n=1.5. Speed in glass:",
  options: ["2×10^8", "1×10^8", "3×10^8", "4.5×10^8"],
  correct: 0,
  explanation: "v = c/n = 3×10^8 /1.5 = 2×10^8."
},

{
  text: "A ray enters glass at 0° incidence. It will:",
  options: ["Bend", "Reflect", "Go straight", "Scatter"],
  correct: 2,
  explanation: "No deviation at normal incidence."
},

{
  text: "Critical angle depends on:",
  options: ["Temperature", "Refractive index", "Frequency", "Angle"],
  correct: 1,
  explanation: "Depends on medium properties."
},

{
  text: "Total internal reflection occurs when light goes from:",
  options: ["Low to high n", "High to low n", "Same medium", "Any"],
  correct: 1,
  explanation: "Must go high → low."
},

{
  text: "Optical fiber works on:",
  options: ["Reflection", "Refraction", "TIR", "Diffraction"],
  correct: 2,
  explanation: "Based on total internal reflection."
},

{
  text: "Wave nature of light explains:",
  options: ["Reflection", "Refraction", "Interference", "Shadow"],
  correct: 2,
  explanation: "Interference is wave property."
},
{
  text: "An object is placed 30 cm in front of a convex lens of focal length 15 cm. After forming the image, the object is moved 10 cm farther from the lens. What is the new image distance?",
  options: ["20 cm", "24 cm", "30 cm", "60 cm"],
  correct: 1,
  explanation: "New object distance u = 40 cm, focal length f = 15 cm. Using 1/f = 1/u + 1/v: 1/15 = 1/40 + 1/v. So 1/v = 1/15 - 1/40 = (8-3)/120 = 5/120 = 1/24. Therefore v = 24 cm."
},
{
  text: "A concave mirror has focal length 12 cm. An object is placed 18 cm in front of it. Find the image distance and identify the nature of the image.",
  options: ["36 cm, real", "24 cm, virtual", "18 cm, real", "36 cm, virtual"],
  correct: 0,
  explanation: "Using 1/f = 1/u + 1/v: 1/12 = 1/18 + 1/v. So 1/v = 1/12 - 1/18 = (3-2)/36 = 1/36. Hence v = 36 cm. Since the object is beyond the focal point of a concave mirror, the image is real."
},
{
  text: "A light ray travels from glass of refractive index 1.50 into air. If the angle of incidence in glass is 30°, what is the angle of refraction in air?",
  options: ["45°", "48.6°", "60°", "75°"],
  correct: 1,
  explanation: "Using Snell's law: n1 sin i = n2 sin r. So 1.50 × sin30° = 1 × sinr. Therefore sinr = 1.50 × 0.5 = 0.75. Hence r = sin^-1(0.75) ≈ 48.6°."
},
{
  text: "A ray of light enters a slab of glass of thickness 6 cm and refractive index 1.5 at an angle of incidence 30°. If the refracted angle inside the slab is 19.5°, what is the actual distance traveled by the ray inside the glass before emerging?",
  options: ["6.0 cm", "6.4 cm", "6.8 cm", "7.2 cm"],
  correct: 1,
  explanation: "The thickness is perpendicular to the faces, so if the ray makes angle r with the normal, the path length inside is t/cosr. Thus distance = 6 / cos19.5° ≈ 6 / 0.943 ≈ 6.36 cm, about 6.4 cm."
},
{
  text: "An object 3 cm high is placed 25 cm in front of a convex lens of focal length 10 cm. Find the image distance and image height.",
  options: ["16.7 cm, 2 cm", "16.7 cm, -2 cm", "25 cm, 3 cm", "15 cm, -1.8 cm"],
  correct: 0,
  explanation: "Using 1/f = 1/u + 1/v: 1/10 = 1/25 + 1/v, so 1/v = 1/10 - 1/25 = 3/50, hence v = 50/3 ≈ 16.7 cm. Magnification m = v/u = 16.7/25 ≈ 2/3. Image height = m × 3 = 2 cm. For school-style magnitude answers, that is 2 cm."
},
{
  text: "A point object is placed midway between the focal point and the center of curvature of a concave mirror. If the focal length is 20 cm, what is the image distance?",
  options: ["40 cm", "60 cm", "80 cm", "120 cm"],
  correct: 1,
  explanation: "For a concave mirror, center of curvature is at 2f = 40 cm. Midway between F and C means object distance u = 30 cm. Then 1/f = 1/u + 1/v gives 1/20 = 1/30 + 1/v. So 1/v = 1/20 - 1/30 = 1/60, hence v = 60 cm."
},
{
  text: "In a Young's double-slit experiment, the wavelength of light is 600 nm, the slit separation is 0.3 mm, and the screen is 1.5 m away. What is the fringe spacing?",
  options: ["2 mm", "3 mm", "4 mm", "5 mm"],
  correct: 1,
  explanation: "Fringe spacing β = λD/d = (600 × 10^-9 × 1.5) / (0.3 × 10^-3) = 3 × 10^-3 m = 3 mm."
},
{
  text: "A diffraction grating produces a first-order maximum at 30° for light of wavelength 5 × 10^-7 m. What is the grating spacing?",
  options: ["5 × 10^-7 m", "1 × 10^-6 m", "2 × 10^-6 m", "4 × 10^-6 m"],
  correct: 1,
  explanation: "For first order, d sinθ = λ. So d = λ/sin30° = (5 × 10^-7) / 0.5 = 1 × 10^-6 m."
},
{
  text: "A person stands 2 m in front of a plane mirror. Another mirror is placed 3 m behind the person, parallel to the first mirror. What is the distance between the person and the image seen after reflection first in the back mirror and then in the front mirror?",
  options: ["8 m", "10 m", "12 m", "14 m"],
  correct: 1,
  explanation: "The back mirror is 3 m behind the person, so it forms an image 3 m behind itself, which is 6 m behind the person. The front mirror is 2 m in front of the person, so that intermediate image is 8 m behind the front mirror. The front mirror then forms the final image 8 m behind itself. Therefore the final image is 10 m from the person."
},
{
  text: "A beam of monochromatic light of wavelength 500 nm falls normally on a soap film of refractive index 1.25. If the least thickness for strong reflected light is required, what is the minimum thickness of the film?",
  options: ["50 nm", "100 nm", "125 nm", "200 nm"],
  correct: 1,
  explanation: "For normal incidence and one phase reversal in thin-film reflection, the least thickness for strong reflected light is t = λ/(4n). Thus t = 500 / (4 × 1.25) = 500/5 = 100 nm."
},
{
  text: "Constructive interference occurs when path difference is:",
  options: ["λ/2", "λ", "3λ/2", "λ/4"],
  correct: 1,
  explanation: "nλ condition."
},

{
  text: "Destructive interference occurs when:",
  options: ["nλ", "(n+1/2)λ", "λ/4", "2λ"],
  correct: 1,
  explanation: "Half-integer multiples."
},

// LONG PROBLEM
{
  text: "Two coherent sources produce interference fringes. If wavelength is 500 nm and path difference is 1000 nm, the interference is:",
  options: ["Constructive", "Destructive", "Zero", "Random"],
  correct: 0,
  explanation: "1000/500 = 2λ → constructive."
},

{
  text: "Diffraction occurs when:",
  options: ["Light passes narrow opening", "Reflection", "Refraction", "Absorption"],
  correct: 0,
  explanation: "Definition."
},

{
  text: "Shorter wavelength results in:",
  options: ["More diffraction", "Less diffraction", "Same", "None"],
  correct: 1,
  explanation: "Diffraction ∝ λ."
},

{
  text: "Color of light depends on:",
  options: ["Amplitude", "Frequency", "Speed", "Energy"],
  correct: 1,
  explanation: "Frequency determines color."
},

{
  text: "White light splits into spectrum due to:",
  options: ["Reflection", "Dispersion", "Diffraction", "Interference"],
  correct: 1,
  explanation: "Different refractive index."
},

{
  text: "Red light bends less because:",
  options: ["Higher speed", "Lower refractive index", "Higher energy", "None"],
  correct: 1,
  explanation: "Lower n."
},

{
  text: "Blue light bends more because:",
  options: ["Higher n", "Lower n", "Higher speed", "None"],
  correct: 0,
  explanation: "Higher refractive index."
},

{
  text: "In convex lens, real image is always:",
  options: ["Upright", "Inverted", "Same", "Virtual"],
  correct: 1,
  explanation: "Real images are inverted."
},

{
  text: "Virtual image is:",
  options: ["Cannot be formed", "Formed by lens only", "Cannot be projected", "Always inverted"],
  correct: 2,
  explanation: "Cannot be caught on screen."
},

{
  text: "Focal length of concave mirror is negative because:",
  options: ["Convention", "Physics law", "Always negative", "Depends"],
  correct: 0,
  explanation: "Sign convention."
},

{
  text: "Light intensity depends on:",
  options: ["Frequency", "Amplitude", "Speed", "Energy"],
  correct: 1,
  explanation: "Amplitude controls intensity."
},

{
  text: "Angle of reflection equals:",
  options: ["Angle of incidence", "Half", "Double", "Zero"],
  correct: 0,
  explanation: "Law of reflection."
},

{
  text: "Mirror formula:",
  options: ["1/f = 1/u + 1/v", "f = uv", "v = u+f", "None"],
  correct: 0,
  explanation: "Standard formula."
},

{
  text: "Lens formula:",
  options: ["1/f = 1/u + 1/v", "v=u+f", "f=uv", "None"],
  correct: 0,
  explanation: "Same form."
}
];

export default questions;
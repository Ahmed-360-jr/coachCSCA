const questions = [
  {
    text: "A fair die is rolled once. What is the probability of getting a number greater than 4?",
    options: ["1/6", "1/3", "1/2", "2/3"],
    correct: 1,
    explanation: "Numbers greater than 4 are 5 and 6, so probability = 2/6 = 1/3."
  },
  {
    text: "A fair coin is tossed three times. What is the probability of getting exactly two heads?",
    options: ["1/8", "2/8", "3/8", "4/8"],
    correct: 2,
    explanation: "The outcomes are HHT, HTH, and THH: 3 favorable out of 8."
  },
  {
    text: "A bag contains 5 red balls and 3 blue balls. One ball is drawn at random. What is the probability it is blue?",
    options: ["3/5", "3/8", "5/8", "1/2"],
    correct: 1,
    explanation: "There are 3 blue balls out of 8 total."
  },
  {
    text: "From a bag with 4 red and 6 white balls, one ball is drawn. What is the probability it is not red?",
    options: ["2/5", "3/5", "4/5", "1/5"],
    correct: 1,
    explanation: "Not red means white, so 6/10 = 3/5."
  },
  {
    text: "Two fair dice are rolled. What is the probability that the sum is 7?",
    options: ["1/12", "1/6", "5/36", "1/9"],
    correct: 1,
    explanation: "There are 6 outcomes with sum 7 out of 36 total outcomes, so 6/36 = 1/6."
  },
  {
    text: "Two fair dice are rolled. What is the probability that both numbers are even?",
    options: ["1/2", "1/3", "1/4", "1/9"],
    correct: 2,
    explanation: "Each die has 3 even numbers out of 6, so probability = (3/6)(3/6) = 1/4."
  },
  {
    text: "If P(A) = 0.6, P(B) = 0.5, and P(A ∩ B) = 0.2, then P(A ∪ B) equals:",
    options: ["0.7", "0.8", "0.9", "1.1"],
    correct: 2,
    explanation: "P(A ∪ B) = P(A) + P(B) - P(A ∩ B) = 0.6 + 0.5 - 0.2 = 0.9."
  },
  {
    text: "If P(A) = 0.4 and P(B) = 0.3 for independent events, then P(A ∩ B) equals:",
    options: ["0.12", "0.1", "0.7", "0.28"],
    correct: 0,
    explanation: "For independent events, P(A ∩ B) = P(A)P(B) = 0.12."
  },
  {
    text: "The mean of the numbers 3, 5, 7, 9, 11 is:",
    options: ["6", "7", "8", "9"],
    correct: 1,
    explanation: "Mean = (3+5+7+9+11)/5 = 35/5 = 7."
  },
  {
    text: "The median of the data 2, 4, 5, 8, 10 is:",
    options: ["4", "5", "6", "8"],
    correct: 1,
    explanation: "The middle value is 5."
  },
  {
    text: "The mode of the data 1, 2, 2, 3, 4, 4, 4, 5 is:",
    options: ["2", "3", "4", "5"],
    correct: 2,
    explanation: "4 appears most often."
  },
  {
    text: "The range of the data 6, 9, 12, 15, 18 is:",
    options: ["9", "10", "11", "12"],
    correct: 3,
    explanation: "Range = largest - smallest = 18 - 6 = 12."
  },
  {
    text: "The variance of a data set measures its:",
    options: ["Center", "Spread", "Middle value", "Most frequent value"],
    correct: 1,
    explanation: "Variance describes how spread out the data are."
  },
  {
    text: "A class has scores 60, 70, 80, 90. The mean score is:",
    options: ["70", "75", "80", "85"],
    correct: 1,
    explanation: "Mean = (60+70+80+90)/4 = 300/4 = 75."
  },
  {
    text: "If all values in a data set are equal, then the variance is:",
    options: ["1", "Equal to the mean", "0", "Undefined"],
    correct: 2,
    explanation: "There is no spread, so variance = 0."
  },
  {
    text: "A box contains 5 red balls, 4 blue balls, and 3 green balls. Two balls are drawn one after another without replacement. What is the probability that the first is red and the second is green?",
    options: ["5/44", "15/132", "1/11", "5/33"],
    correct: 0,
    explanation: "P = (5/12) × (3/11) = 15/132 = 5/44."
  },
  {
    text: "A student answers 3 multiple-choice questions by guessing. Each question has 4 options with exactly one correct answer. What is the probability that the student gets exactly 2 questions correct?",
    options: ["9/64", "3/16", "27/64", "1/4"],
    correct: 0,
    explanation: "Choose which 2 are correct: C(3,2)=3. Probability = 3 × (1/4)^2 × (3/4) = 9/64."
  },
  {
    text: "A test has marks: 4, 6, 8, 10, 12. The standard deviation is best described as:",
    options: ["The average mark", "The square root of variance", "The middle mark", "The largest mark"],
    correct: 1,
    explanation: "Standard deviation is defined as the square root of variance."
  },
  {
    text: "In a normal distribution, most data values lie:",
    options: ["At the extremes", "Near the mean", "Only below the mean", "Only above the mean"],
    correct: 1,
    explanation: "A normal distribution is centered around the mean with most data near the center."
  },
  {
    text: "If the mean of five numbers is 12, then their total sum is:",
    options: ["48", "50", "55", "60"],
    correct: 3,
    explanation: "Sum = mean × number of values = 12 × 5 = 60."
  },
  {
    text: "Two fair dice are rolled. What is the probability that the sum is at least 10?",
    options: ["1/6", "1/12", "5/36", "1/9"],
    correct: 0,
    explanation: "Sums 10,11,12 have 3,2,1 outcomes respectively, total 6 out of 36, so 1/6."
  },
  {
    text: "A bag has 6 black pens and 4 blue pens. Three pens are chosen without replacement. What is the probability that all three are black?",
    options: ["1/6", "1/4", "2/5", "3/10"],
    correct: 0,
    explanation: "P = (6/10)(5/9)(4/8) = 120/720 = 1/6."
  },
  {
    text: "From the digits 1, 2, 3, 4, and 5, a three-digit number is formed without repetition. What is the probability that the number formed is even?",
    options: ["2/5", "1/2", "3/5", "1/5"],
    correct: 0,
    explanation: "Total 3-digit numbers: 5×4×3 = 60. For even numbers, last digit must be 2 or 4: 2 choices. First two places: 4×3 = 12. Favorable = 24, so probability = 24/60 = 2/5."
  },
  {
    text: "A class has 12 boys and 8 girls. If 3 students are chosen at random without replacement, what is the probability that exactly 2 are girls?",
    options: ["56/190", "84/190", "28/95", "21/95"],
    correct: 2,
    explanation: "Ways = C(8,2)C(12,1) / C(20,3) = (28×12)/1140 = 336/1140 = 28/95."
  },
  {
    text: "If P(A)=0.55, P(B)=0.4, and P(A∩B)=0.2, then the probability that neither A nor B occurs is:",
    options: ["0.25", "0.35", "0.45", "0.15"],
    correct: 0,
    explanation: "P(A∪B)=0.55+0.4-0.2=0.75. Neither = 1 - 0.75 = 0.25."
  },
  {
    text: "Events A and B are independent with P(A)=0.7 and P(B)=0.2. What is the probability that exactly one of them occurs?",
    options: ["0.62", "0.54", "0.14", "0.76"],
    correct: 0,
    explanation: "Exactly one = P(A and not B) + P(B and not A) = 0.7×0.8 + 0.2×0.3 = 0.56 + 0.06 = 0.62."
  },
  {
    text: "A shipment contains 8 good items and 2 defective items. If 2 items are selected at random without replacement, what is the probability that at least one is defective?",
    options: ["17/45", "13/45", "1/5", "2/9"],
    correct: 0,
    explanation: "Use complement: probability both good = (8/10)(7/9)=56/90=28/45. So at least one defective = 1 - 28/45 = 17/45."
  },
  {
    text: "The mean of five numbers is 18. If four of the numbers are 12, 17, 20, and 24, what is the fifth number?",
    options: ["17", "18", "19", "20"],
    correct: 0,
    explanation: "Total sum = 5×18 = 90. Known sum = 12+17+20+24 = 73. Fifth number = 17."
  },
  {
    text: "The data set 4, 7, 7, 9, 13 has mean equal to:",
    options: ["8", "8.5", "9", "10"],
    correct: 0,
    explanation: "Mean = (4+7+7+9+13)/5 = 40/5 = 8."
  },
  {
    text: "The variance of the data set 2, 2, 2, 2, 2 is:",
    options: ["0", "1", "2", "4"],
    correct: 0,
    explanation: "All values are identical, so there is no spread."
  },
  {
    text: "A set of numbers has mean 10. If each number is increased by 3, what is the new mean?",
    options: ["10", "13", "16", "30"],
    correct: 1,
    explanation: "Adding 3 to every value adds 3 to the mean."
  },
  {
    text: "A set of numbers has variance 25. If each number is increased by 4, the new variance is:",
    options: ["29", "25", "21", "625"],
    correct: 1,
    explanation: "Adding the same constant to all data does not change variance."
  },
  {
    text: "A set of data has mean 6 and variance 9. Which statement is true?",
    options: ["The standard deviation is 3", "The standard deviation is 9", "The median must be 6", "The range must be 9"],
    correct: 0,
    explanation: "Standard deviation is the square root of variance, so √9 = 3."
  },
  {
    text: "The scores of 7 students are 5, 6, 7, 8, 8, 9, 15. Which measure is most affected by the unusually high score 15?",
    options: ["Mode", "Median", "Mean", "Minimum"],
    correct: 2,
    explanation: "The mean is most sensitive to extreme values."
  },
  {
    text: "A normally distributed data set has mean 50. Which statement is most reasonable?",
    options: ["Most values cluster around 50", "All values are equal to 50", "Exactly half the values are 50", "No values are below 50"],
    correct: 0,
    explanation: "In a normal distribution, values tend to cluster around the mean."
  },
  {
    text: "A factory records the daily number of defects in 6 days as 1, 3, 5, 5, 7, 9. The median number of defects is:",
    options: ["5", "4", "6", "3"],
    correct: 0,
    explanation: "With 6 values, median is average of 3rd and 4th values: (5+5)/2 = 5."
  },
  {
    text: "A die is rolled twice. What is the probability that the second number is greater than the first?",
    options: ["5/12", "1/2", "7/12", "1/3"],
    correct: 0,
    explanation: "There are 36 equally likely ordered outcomes. Ties occur in 6 cases. The remaining 30 are split equally between second > first and second < first, so probability = 15/36 = 5/12."
  },
  {
    text: "A committee of 2 people is chosen from 4 men and 3 women. What is the probability that the committee contains one man and one woman?",
    options: ["4/7", "3/7", "2/7", "5/7"],
    correct: 0,
    explanation: "Total committees = C(7,2)=21. Favorable = C(4,1)C(3,1)=12. Probability = 12/21 = 4/7."
  },
  {
    text: "A student answers a 4-option multiple choice question by guessing. The probability of getting it correct is:",
    options: ["1/2", "1/3", "1/4", "1/5"],
    correct: 2,
    explanation: "There is 1 correct choice out of 4 options."
  },
  {
    text: "A box contains 2 green, 3 yellow, and 5 black pens. One pen is chosen at random. What is the probability it is yellow or black?",
    options: ["1/2", "4/5", "3/10", "2/5"],
    correct: 1,
    explanation: "Yellow or black = 3 + 5 = 8 favorable outcomes out of 10 total, so 8/10 = 4/5."
  }
];

export default questions;
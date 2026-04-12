import practiceMath from './practice/mathematics/index.js';
import practicePhysics from './practice/physics/index.js';
import practiceChemistry from './practice/chemistry/index.js';
import mockMath from './mock/mathematics/index.js';
import mockPhysics from './mock/physics/index.js';
import mockChemistry from './mock/chemistry/index.js';

const questions = {
    practice: {
        mathematics: practiceMath,
        physics: practicePhysics,
        chemistry: practiceChemistry
    },
    mock: {
        mathematics: mockMath,
        physics: mockPhysics,
        chemistry: mockChemistry
    }
};

export const getQuestions = (mode, subject, topic) => {
    return questions[mode]?.[subject]?.[topic] || [];
};

export const getPracticeQuestions = (subject, topic) => {
    return getQuestions('practice', subject, topic);
};

export const getMockQuestions = (subject, topic) => {
    return getQuestions('mock', subject, topic);
};

export const getQuestionsByTopic = (topicId) => {
   const practiceMap = {
    // 📐 Mathematics (keep same or update later)
    'math-algebra': ['mathematics', 'algebra'],
    'math-prob': ['mathematics', 'probability'],
    'math-func': ['mathematics', 'functions'],
    'math-set': ['mathematics', 'setAndInequality'],

    // ⚙️ Physics (UPDATED TO 5 TOPICS)
    'phys-mech': ['physics', 'mechanics'],
    'phys-optics': ['physics', 'optics'],
    'phys-modern': ['physics', 'modernPhysics'],
    'phys-em': ['physics', 'electromagnetism'],
    'phys-thermo': ['physics', 'thermodynamics'],

    // 🧪 Chemistry (UPDATED TO 4 TOPICS)
    'chem-basic': ['chemistry', 'basicConcepts'],
    'chem-prop': ['chemistry', 'propertiesReactions'],
    'chem-theory': ['chemistry', 'theoriesLaws'],
    'chem-exp': ['chemistry', 'experimentsApplications']
};
   const mockMap = {
    'math-mock': ['mathematics', 'generalMathMock'],
    'math-mock-3': ['mathematics', 'mathematics3'],
    'math-mock-4': ['mathematics', 'mathematics4'],
    'math-mock-5': ['mathematics', 'mathematics5'],

    'phys-mock': ['physics', 'mechanicsMock'],
    'phys-mock-2': ['physics', 'electricityMock'],
    'phys-mock-3': ['physics', 'physics3'],
    'phys-mock-4': ['physics', 'physics4'],
    'phys-mock-5': ['physics', 'physics5'],

    'chem-mock': ['chemistry', 'chemistryMock'],
    'chem-mock-2': ['chemistry', 'chemistry2'],
    'chem-mock-3': ['chemistry', 'chemistry3'],
    'chem-mock-4': ['chemistry', 'chemistry4'],
    'chem-mock-5': ['chemistry', 'chemistry5']
};

    if (practiceMap[topicId]) {
        const [subject, topic] = practiceMap[topicId];
        return getPracticeQuestions(subject, topic);
    }

    if (mockMap[topicId]) {
        const [subject, topic] = mockMap[topicId];
        return getMockQuestions(subject, topic);
    }

    return [];
};

export default questions;
import { useState, useEffect } from 'https://esm.sh/react@18.2.0';

const STORAGE_KEY = 'coach_csca_state';

const getInitialState = () => {
    const saved = localStorage.getItem(STORAGE_KEY);
    return saved ? JSON.parse(saved) : {
        user: null,
        theme: 'light',
        mockHistory: []
    };
};

export const useStore = () => {
    const [state, setState] = useState(getInitialState());

    useEffect(() => {
        localStorage.setItem(STORAGE_KEY, JSON.stringify(state));
        if (state.theme === 'dark') {
            document.documentElement.classList.add('dark');
        } else {
            document.documentElement.classList.remove('dark');
        }
    }, [state]);

    const login = (userData) => setState(prev => ({
    ...prev,
    user: userData,
    mockHistory: []
}));
    const logout = () => {
    localStorage.removeItem('token');
    setState(prev => ({
        ...prev,
        user: null,
        mockHistory: []
    }));
};
    const toggleTheme = () => setState(prev => ({ ...prev, theme: prev.theme === 'light' ? 'dark' : 'light' }));
   const setMockHistory = (results) => setState(prev => ({
    ...prev,
    mockHistory: results
}));
    const addMockResult = (result) => setState(prev => ({
        ...prev,
        mockHistory: [result, ...prev.mockHistory]
    }));

    return { ...state, login, logout, toggleTheme, addMockResult, setMockHistory };
};
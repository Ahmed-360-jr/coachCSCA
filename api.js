const API_BASE =
    window.location.hostname === 'localhost'
        ? 'http://localhost:5000'
        : 'https://coachcsca-5.onrender.com'; 

export default API_BASE;
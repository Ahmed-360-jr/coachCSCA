const API_BASE =
    window.location.hostname === 'localhost'
        ? 'http://localhost:5000'
        : 'https://your-backend-url.com'; // 🔴 change later

export default API_BASE;
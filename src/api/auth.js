import axios from 'axios';

export const instance = axios.create({
  baseURL: 'https://slimmama-66943d2ded92.herokuapp.com/',
});

const token = {
  set(accessToken) {
    instance.defaults.headers.Authorization = `Bearer ${accessToken}`;
  },
  unset() {
    instance.defaults.headers.Authorization = null;
  },
};

const isValidEmail = email => {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(String(email).toLowerCase());
};

export const axiosRegister = async userData => {
  // Validare preliminară a datelor de intrare
  if (!userData || typeof userData !== 'object') {
    throw new Error('Invalid user data.');
  }

  const { username, email, password } = userData;

  if (!username || !email || !password) {
    throw new Error('Username, email, and password are required.');
  }

  // Verificare suplimentară pentru validarea adresei de email
  if (!isValidEmail(email)) {
    throw new Error('Invalid email address.');
  }

  // Continuarea cu solicitarea POST către server
  try {
    const response = await instance.post('/auth/register', userData);
    const data = response.data;

    return data;
  } catch (error) {
    // Tratarea erorilor
    console.error('Error registering user:', error);
    throw new Error('Registration failed. Please try again later.');
  }
};

export const axiosLogin = async userData => {
  try {
    // Trimite cererea POST către server
    const { data } = await instance.post('/auth/login', userData);

    // Setează token-ul în local storage sau în alt loc adecvat
    token.set(data.accessToken);

    // Returnează datele primite de la server
    return data;
  } catch (error) {
    // Loghează eroarea în consola pentru depanare
    console.error(
      'Error in axiosLogin:',
      error.response ? error.response.data : error.message
    );

    // Aruncă eroarea pentru a fi gestionată de apelant
    throw error;
  }
};

export const axiosLogout = async accessToken => {
  try {
    token.set(accessToken);
    const { data } = await instance.post('/auth/logout');
    token.unset();
    return data;
  } catch (error) {
    console.error('Error in axiosLogout:', error);
    throw error;
  }
};

export const axiosRefresh = async (sid, refreshToken) => {
  try {
    token.set(refreshToken);
    const { data } = await instance.post('/auth/refresh', { sid });
    token.unset();
    return data;
  } catch (error) {
    console.error('Error in axiosRefresh:', error);
    throw error;
  }
};

export const axiosGetUser = async accessToken => {
  try {
    token.set(accessToken);
    const { data } = await instance.post('/auth/current');
    return data;
  } catch (error) {
    console.error('Error in axiosGetUser:', error);
    throw error;
  }
};

export default instance;

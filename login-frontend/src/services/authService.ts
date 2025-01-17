import axios from 'axios';

const API_URL = 'http://127.0.0.1:8000/api'; // URL base

export const authService = {
  /**
   * Realiza el registro de un usuario.
   * @param {Object} userData - Datos del usuario (nombre, email, contraseña, etc.).
   * @returns {Promise<any>}
   */
  async register(userData: { nobre: string; apellido: string; telefono: string; correo: string; contraseña: string; }) {
    try {
      const response = await axios.post(`${API_URL}/register`, userData);
      return response.data;
    } catch (error: any) {
      throw new Error(error.response?.data?.message || 'Error en el registro.');
    }
  },

  /**
   * Realiza el login de un usuario.
   * @param {Object} credentials - Credenciales del usuario (email y contraseña).
   * @returns {Promise<any>}
   */
  async login(credentials: { correo: string; c: string }) {
    try {
      const response = await axios.post(`${API_URL}/login`, credentials);
      const { token } = response.data;
      localStorage.setItem('token', token); // Guarda el token en el almacenamiento local
      return response.data;
    } catch (error: any) {
      throw new Error(error.response?.data?.message || 'Error en el inicio de sesión.');
    }
  },

  /**
   * Consulta el perfil del usuario autenticado.
   * @returns {Promise<any>}
   */
  async getProfile() {
    try {
      const token = localStorage.getItem('token');
      if (!token) throw new Error('Token no encontrado.');

      const response = await axios.post(`${API_URL}/perfil`,null, {
        headers: { Authorization: `Bearer ${token}` },
      });

      return response.data;
    } catch (error: any) {
      throw new Error(error.response?.data?.message || 'Error al obtener el perfil.');
    }
  },

  /**
   * Cierra la sesión del usuario.
   */
  logout() {
    localStorage.removeItem('token'); // Elimina el token del almacenamiento local
  },
};
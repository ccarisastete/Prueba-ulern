import { defineStore } from 'pinia';
import axios from 'axios';

interface AuthState {
  isAuthenticated: boolean;
  isLoading: boolean;
  userProfile: any | null;
}

export const useAuthStore = defineStore('auth', {
    state: (): AuthState => ({
        isAuthenticated: false,
        isLoading: true,
        userProfile: {},
    }),
    actions: {
    async checkToken() {
        this.isLoading = true;
        const token = localStorage.getItem('token');
        if (!token) {
            this.isAuthenticated = false;
            this.isLoading = false;
            return;
        }
        try {
            const response = await axios.post('http://127.0.0.1:8000/api/perfil',null, {
            headers: {
                Authorization: `Bearer ${token}`,
            },
            });
            this.isAuthenticated = true;
            this.userProfile = response.data;
        } catch (error) {
            console.error('Token inválido:', error);
            this.isAuthenticated = false;
            localStorage.removeItem('token');
        }finally {
            this.isLoading = false;
        }
        },
    },
});
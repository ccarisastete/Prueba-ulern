<template>
    <Navbar/>
    <CustomCard 
        title="Perfil"
    >
    <div class="p-4 bg-gray-100 rounded-lg shadow-md">
        <p class="text-lg font-semibold text-gray-800 mb-1">Nombre:</p>
        <p class="text-gray-700 mb-4">{{ userData.nombre }} {{ userData.apellido }}</p>

        <p class="text-lg font-semibold text-gray-800 mb-1">Teléfono:</p>
        <p class="text-gray-700 mb-4">{{ userData.telefono }}</p>

        <p class="text-lg font-semibold text-gray-800 mb-1">Correo:</p>
        <p class="text-gray-700">{{ userData.correo }}</p>
    </div>
    <br>
    <button  @click="logout" class="bg-blue-500 text-white px-4 py-2">Cerrar sesión</button>
    </CustomCard>
  </template>
  
  <script>
    import CustomCard from './CustomCard.vue';
    import Navbar from './Navbar.vue';

    import { authService } from '@/services/authService';

    export default {
        components: {
            Navbar,
            CustomCard,
        },
        data() {
            return {
                userData: {},
            };
        },
        methods: {
            async fetchUserData() {
                try {
                    const userData = await authService.getProfile();
                    this.userData = userData;
                    console.log(userData)
                } catch (error) {
                    this.error = 'No se pudo obtener el perfil del usuario';
                    console.error('Error al obtener el perfil:', error);
                } finally {
                    this.loading = false;
                }
            },
            logout () {
                authService.logout();
                this.$router.push('/');
            }
        },
        mounted() {
            this.fetchUserData();
        },
    }    
</script>
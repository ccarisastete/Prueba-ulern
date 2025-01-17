<template>
  <Navbar/>
    <CustomCard
      title="Inicia sesión"
    >
    <div>
      <CustomForm 
        :fields="formFields" 
        @formSubmitted="handleFormSubmitted"
      />
      <div v-if="loading" class="mt-4">Iniciando sesión...</div>
      <div v-if="errorMessage" class="mt-4 text-red-500">{{ errorMessage }}</div>
    </div>
  </CustomCard>
</template>

<script>
import { authService } from "@/services/authService";
import Navbar from "@/components/Navbar.vue";
import CustomForm from "./CustomForm.vue";
import CustomCard from "@/components/CustomCard.vue"

export default {
  components: {
    Navbar,
    CustomCard,
    CustomForm
  },
  data() {
      return {
        // Definir los campos del formulario
        formFields: [
          { label: 'Correo', name: 'email', value: '', type: 'email', placeholder: 'Ingrese su email' },
          { label: 'Contraseña', name: 'password', value: '', type: 'password', placeholder: 'Ingrese su contraseña' }
        ],
        // Almacenar los datos enviados desde el formulario
        submittedData: [],
        // Estado de carga y mensaje de error
        loading: false,
        errorMessage: ''
      };
    },
    methods: {
       // Método que recibe los datos del formulario
       async handleFormSubmitted(formData) {
        try {
          const userData = {
            correo: formData[0],
            contraseña: formData[1],
          };
          const response = await authService.login(userData);
          this.$router.push('/');
        } catch (error) {
          console.error('Error durante el login:', error.message);
        }
      }
    }
  };
</script>
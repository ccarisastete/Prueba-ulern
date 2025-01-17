<template>
    <Navbar />
    <CustomCard title="Registrate!">
        <div>
            <!-- Incluir el componente CustomForm y pasar los datos necesarios como prop -->
            <CustomForm 
            :fields="formFields" 
            @formSubmitted="handleFormSubmitted"
            />

            <!-- Mostrar mensaje de carga mientras se envían los datos -->
            <div v-if="loading" class="mt-4">Enviando datos...</div>

            <!-- Mostrar mensaje de error si ocurre algún problema -->
            <div v-if="errorMessage" class="mt-4 text-red-500">{{ errorMessage }}</div>
        </div>
    </CustomCard>
</template>
  
<script>
  import { authService } from '@/services/authService';
  import Navbar from './Navbar.vue';
  import CustomCard from './CustomCard.vue';
  import CustomForm from './CustomForm.vue';
  
  export default {
    components: {
      CustomForm,
      Navbar,
      CustomCard
    },
    data() {
      return {
        // Definir los campos del formulario
        formFields: [
          { label: 'Nombre', name: 'firstname', value: '', type: 'text', placeholder: 'Ingrese su primer nombre' },
          { label: 'Apellido', name: 'lastname', value: '', type: 'text', placeholder: 'Ingrese su apellido' },
          { label: 'Numero de telefono', name: 'phone', value: '', type: 'tel', placeholder: 'Ingrese su teléfono' },
          { label: 'Correo electronico', name: 'email', value: '', type: 'email', placeholder: 'Ingrese su email' },
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
            nombre: formData[0],
            apellido: formData[1],
            telefono: formData[2],
            correo: formData[3],
            contraseña: formData[4],
          };
          const response = await authService.register(userData);
          this.$router.push('/');
          console.log('Registro exitoso:', response);
        } catch (error) {
          console.error('Error durante el registro:', error.message);
        }
      }
    }
  };
  </script>


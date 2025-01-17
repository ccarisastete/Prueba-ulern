<template>
    <form @submit.prevent="handleSubmit">
      <!-- Recibir los inputs de la prop y crear los campos dinámicamente -->
      <div v-for="(input, index) in fields" :key="index" class="mb-4">
        <label :for="input.name" class="block">{{ input.label }}</label>
        <input 
          v-model="input.value"
          :type="input.type"
          :name="input.name"
          :placeholder="input.placeholder"
          :id="input.name"
          class="border p-2 w-full"
        />
      </div>
      
      <!-- Botón para enviar el formulario -->
      <button type="submit" class="bg-blue-500 text-white px-4 py-2">Enviar</button>
    </form>
  </template>
  
  <script>
  export default {
    props: {
      // La cantidad de inputs y sus características como prop
      fields: {
        type: Array,
        required: true
      }
    },
    methods: {
      // Método que maneja el envío del formulario
      handleSubmit() {
        // Emitir los valores de los inputs al componente padre
        const formData = this.fields.map(field => field.value);
        this.$emit('formSubmitted', formData);
      }
    }
  };
  </script>
  
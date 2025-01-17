<template>
    <Navbar />
    <div class="min-h-screen flex flex-col items-center justify-center bg-gray-100">
      <div class="max-w-3xl text-center bg-white shadow-md rounded-lg p-6">
        <h1 class="text-4xl font-bold text-gray-800 mb-4">Bienvenido a la Página de Inicio</h1>
        <p class="text-gray-600 leading-relaxed">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla facilisi. Morbi efficitur, lacus id cursus accumsan, urna purus fermentum metus, sed volutpat orci libero et orci. Curabitur dapibus, elit vel commodo venenatis, justo odio sollicitudin elit, in dictum sem sapien eget nisl. Phasellus feugiat nunc vel dolor sollicitudin gravida.
        </p>
      </div>
    </div>
  </template>
  
  <script>
  import Navbar from "@/components/Navbar.vue";

  export default {
    components: {
        Navbar,
    },
    name: "Home",
  };
  </script>
  
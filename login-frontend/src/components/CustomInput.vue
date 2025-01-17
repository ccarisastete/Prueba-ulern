<template>
    <div>
      <label :for="id" class="block text-sm font-medium text-gray-700 mb-1">
        {{ label }}
      </label>
      <input
        :id="id"
        :type="type"
        :placeholder="placeholder"
        @input="sendData"
        class="w-full p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
      />
    </div>
  </template>
  
  <script>
  export default {
    name: "CustomInput",
    props: {
      id: {
        type: String,
        required: true,
      },
      type: {
        type: String,
        default: "text",
      },
      placeholder: {
        type: String,
        default: "",
      },
      label: {
        type: String,
        default: "Input Label",
      },
    },
    watch: {
      modelValue(newValue) {
        this.$emit("update:modelValue", newValue);
      },
    },
  };
  </script>
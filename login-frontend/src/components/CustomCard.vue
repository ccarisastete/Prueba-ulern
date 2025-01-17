<template>
    <div class="flex items-center justify-center min-h-screen bg-gray-100">
        <div class="bg-white p-6 rounded-lg shadow-lg w-96">
            <h2 class="text-xl font-bold mb-4">{{ title }}</h2>
            <slot />
        </div>
    </div>
</template>

<script>
    import CustomInput from "@/components/CustomInput.vue"

    export default {
        components: {
            CustomInput,
        },
        name: "CustomCard",
        props: {
            title: {
                type: String,
                default: "Título de la Tarjeta",
            },
        },
    };
</script>

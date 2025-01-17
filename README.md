# Prueba-ulern
Prueba laboral realizada para Ulern

# Configuración del Frontend

Sigue los pasos a continuación para configurar y ejecutar el proyecto de frontend en tu entorno local.

## Requisitos previos

Asegúrate de tener instalados los siguientes programas:

- **Node.js** (versión 16 o superior)
- **npm** o **yarn**

## Pasos para la configuración

1. **Clonar el repositorio**

   Clona el repositorio del proyecto en tu máquina local:

   ```bash
   git clone https://github.com/ccarisastete/Prueba-ulern.git
   cd Prueba-ulern
   ```

2. **Instalar dependencias**

   Instala las dependencias del proyecto utilizando npm o yarn:

   ```bash
   npm install
   ```

   o, si prefieres usar yarn:

   ```bash
   yarn install
   ```

3. **Ejecutar el servidor de desarrollo**

   Una vez configurado, inicia el servidor de desarrollo:

   ```bash
   npm run dev
   ```

   o, si usas yarn:

   ```bash
   yarn dev
   ```

4. **Acceder a la aplicación**

   Abre tu navegador y accede a la aplicación en `http://localhost` con el puerto escificado en la terminal (Por defecto es el 3000).

## Scripts disponibles

Estos son los scripts disponibles en el proyecto:

- **`npm run dev`**: Inicia el servidor de desarrollo.
- **`npm run build`**: Construye la aplicación para producción.
- **`npm run preview`**: Previsualiza la aplicación construida.

# Configuración del Backend - Laravel

Esta seccion describe los pasos necesarios para configurar y ejecutar el backend del proyecto utilizando Laravel.

---

## Requisitos Previos

Antes de comenzar, asegúrate de tener los siguientes requisitos instalados:

1. **PHP (>= 8.1)**
2. **Composer**

---

## Pasos de Configuración

### 1. Clonar el Repositorio

Clona el repositorio del proyecto en tu máquina local:

```bash
git clone https://github.com/ccarisastete/Prueba-ulern.git
cd Prueba-ulern
```

### 2. Instalar Dependencias

Instala las dependencias del proyecto utilizando Composer:

```bash
composer install
```

### 3. Configurar el Archivo `.env`

Crea el archivo `.env` copiando el archivo de ejemplo:

```bash
cp .env.example .env
```

### 4. Iniciar el Servidor Local

Inicia el servidor de desarrollo de Laravel:

```bash
php artisan serve
```

El servidor estará disponible en: [http://127.0.0.1:8000](http://127.0.0.1:8000)

---
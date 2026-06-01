# 📝 NoteApp - Fullstack Notes CRUD

¡Bienvenido/a a **NoteApp**! 
Esta es una aplicación web fullstack responsive diseñada para la gestión integral de notas personales. Permite crear, visualizar, editar y eliminar notas en tiempo real.

## 🛠️ Tecnologías Utilizadas

### Frontend
* **React** (Vite)
* **Material UI (MUI)** (Componentes y diseño)
* **React Router Dom** (Enrutamiento dinámico y manejo de parámetros de URL)
* **Axios** (Cliente HTTP para consumo de API)
* **React Toastify** (Notificaciones flotantes)

* **Node.js** con **Express** (Creación del servidor y arquitectura de rutas)
* **MongoDB** con **Mongoose** (Modelado de datos y persistencia)
* **Cors** & **Dotenv** (Configuración de seguridad y variables de entorno)

---

## 💻 Arquitectura y Endpoints de la API
La aplicación se conecta a un backend estructurado que responde a los siguientes métodos HTTP:

| Método | Endpoint | Descripción |
| :--- | :--- | :--- |
| **GET** | `/app/notes` | Obtiene el listado completo de notas. |
| **GET** | `/app/notes/:id` | Obtiene el detalle de una nota específica por su ID. |
| **POST** | `/app/notes` | Registra una nueva nota en la base de datos. |
| **PUT** | `/app/notes/:id` | Modifica el título o descripción de una nota existente. |
| **DELETE** | `/app/notes/:id` | Elimina permanentemente una nota. |

---

## ⚙️ Instalación y Configuración Local

Siga estos pasos para ejecutar el proyecto en su entorno local:

### 1. Clonar el repositorio
```bash
git clone https://github.com/TU_USUARIO/TU_REPOSITORIO.git
cd TU_REPOSITORIO
```

### 2. Configurar el Backend
* Instalar dependencias
```bash
cd backend
npm install
```

* Crear archivo .env en la raíz de la carpeta backend con las siguientes variables:
```env
PORT=NUMERO_DE_PUERTO
MONGO_URI=CONEXION_A_MONGODB 
```

* Iniciar servidor:
```bash
npm run dev
```

### 3. Configurar el Frontend
* Instalar dependencias
```bash
cd frontend
npm install
```

* Crear un archivo .env en la raíz de la carpeta frontend indicando URL del backend:
```env
VITE_API_URL=http://localhost:NUMERO_DE_PUERTO
```
* Iniciar aplicación
```bash
npm run dev
```

---
### ✒️ Desarrollado por: VeroZuliani - 2026
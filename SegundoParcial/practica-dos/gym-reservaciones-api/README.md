# 🏋️‍♂️ Gym Reservations API

Este proyecto es una práctica complementaria para la asignatura **Aplicación para el Servidor Web** de la carrera de Software. La API está construida con **NestJS**, **GraphQL** y **TypeORM**, aplicando una **arquitectura por capas** (Datos, Lógica, API).


---

## 🎯 Objetivo

Desarrollar y probar una API funcional usando NestJS y GraphQL para gestionar tres entidades personalizadas dentro de un gimnasio: `Instructor`, `Clase` y `Cliente`.

---

## 📦 Entidades

### 1. Instructor

| Campo     | Tipo     | Descripción             |
|-----------|----------|-------------------------|
| id        | number   | Identificador único     |
| name      | string   | Nombre del instructor   |
| specialty | string   | Especialidad            |
| email     | string   | Correo electrónico      |

---

### 2. Clase

| Campo        | Tipo     | Descripción                    |
|--------------|----------|--------------------------------|
| id           | number   | Identificador único            |
| name         | string   | Nombre de la clase             |
| schedule     | string   | Horario de la clase            |
| instructorId | number   | Instructor asignado            |

---

### 3. Cliente

| Campo     | Tipo     | Descripción              |
|-----------|----------|--------------------------|
| id        | number   | Identificador único      |
| name      | string   | Nombre del cliente       |
| email     | string   | Correo electrónico       |
| phone     | string   | Teléfono de contacto     |

---

## ⚙️ Instalación y Ejecución

### 1. Clonar el repositorio

```bash
git clone https://github.com/Jkennedy2004/Practica_web
cd SegundoParcial
cd practica-dos
cd gym-reservaciones-api
```

### 2. Instalar dependencias

```bash
npm install
```

### 3. Ejecutar en modo desarrollo

```bash
npm run start:dev
```

### 4. Acceder a GraphQL Playground

Abre en tu navegador:  
[http://localhost:3000/graphql](http://localhost:3000/graphql)

---

## 🧪 Ejemplo de Mutation

```graphql
mutation {
  createInstructor(createInstructorInput: {
    name: "Ana López",
    specialty: "Yoga",
    email: "ana@gym.com"
  }) {
    id
    name
  }
}
```

---

## 📁 Estructura del Proyecto

```
src/
│
├── instructor/
│   ├── entities/
│   ├── dto/
│   ├── instructor.service.ts
│   ├── instructor.resolver.ts
│   └── instructor.module.ts
│
├── clase/
│   └── ... (estructura similar)
│
├── cliente/
│   └── ... (estructura similar)
│
├── app.module.ts
└── main.ts
```

---

## 🧠 Notas

- Esta práctica sigue una **arquitectura por capas** clara.
- Se utiliza **GraphQL Code First**.
- Base de datos: **SQLite** (archivo `gym.db`).
- Validaciones con `class-validator`.

---

## 📬 Contacto

**Autor:** Jhon Kenedy
**Correo:** jg374997@gmail.com
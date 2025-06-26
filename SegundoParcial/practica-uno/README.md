# 📦 API REST con NestJS - Proyecto Practica-Uno

---

## 📋 Descripción

Esta es una **API REST** desarrollada con **NestJS** que maneja tres entidades principales:

- **Usuario**  
- **Producto**  
- **Pedido**

Cada entidad cuenta con operaciones **CRUD completas** (crear, leer, actualizar, eliminar).

La base de datos utilizada es **SQLite** y el ORM es **TypeORM**.

---

## ⚙️ Instalación

1. Clona el repositorio:

   ```bash
   git clone https://github.com/Jkennedy2004/Practica_web
2. Acceder carpeta Segundo Parcial 
   ```bash
   cd SegundoParcial
3. Acceder a la carpeta de Practica
   ```bash
   cd practica-uno
4. Instala las dependencias:
   ```bash
   npm install

## ▶️ Ejecución

Para ejecutar el servidor en modo desarrollo:

    npm run start:dev

La API estará disponible en:
    
    http://localhost:3000

---

 ## 📚 Endpoints
   ```bash
 Usuario

 | Método | Ruta             | Descripción            |
 |--------|------------------|------------------------|
 | POST   |   /usuario       | Crear un nuevo usuario |
 | GET    |   /usuario       | Listar usuarios        |
 | GET    |   /usuario/:id   | Obtener por ID         |
 | PATCH  |   /usuario/:id   | Actualizar usuario     |
 | DELETE |   /usuario/:id   | Eliminar usuario       |

Producto

 | Método | Ruta             | Descripción              |
 |--------|------------------|--------------------------|
 | POST   |  /producto       | Crear un nuevo producto  |
 | GET    |  /producto       | Listar productos         |
 | GET    |  /producto/:id   | Obtener por ID           |
 | PATCH  |  /producto/:id   | Actualizar producto      |
 | DELETE |  /producto/:id   | Eliminar producto        |

 Pedido

 | Método | Ruta           | Descripción           |
 |--------|----------------|-----------------------|
 | POST   |  /pedido       | Crear un nuevo pedido |
 | GET    |  /pedido       | Listar pedidos        |
 | GET    |  /pedido/:id   | Obtener por ID        |
 | PATCH  |  /pedido/:id   | Actualizar pedido     |
 | DELETE |  /pedido/:id   | Eliminar pedido       |
 ```

---


## 🧪 Pruebas con REST Client
Este proyecto incluye un archivo pruebas.http para usar con la extensión **REST Client de Visual Studio Code.

Cómo instalar REST Client

  1. Ve a la sección de Extensiones

  2. Busca **"REST Client"** e instala la extensión

  3. Abre el archivo pruebas.http y ejecuta las peticiones desde VSCode

Uso del archivo pruebas.http

1. Abre el archivo pruebas.http dentro del proyecto en VSCode

2. Sobre cada bloque de petición HTTP verás un botón Send Request

3. Haz clic en ese botón para enviar la petición

4. La respuesta se mostrará en una ventana lateral dentro del editor

---

## 💻 Comandos útiles

Instalar dependencia: **npm install**

Ejecutar modo desarrollo: **npm run start:dev**




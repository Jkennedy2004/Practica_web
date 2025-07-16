
# Realtime CRUD - NestJS + WebSockets + SQLite

Este proyecto es una aplicación CRUD en tiempo real utilizando **NestJS**, **WebSockets** con `@nestjs/websockets`, y **SQLite** mediante **TypeORM**.

## 📦 Entidades Implementadas

1. **Usuario**
2. **Producto**
3. **Pedido**

---

## ⚙️ Instrucciones de Instalación

### 1. Clonar el repositorio

```bash
git clone https://github.com/Jkennedy2004/Practica_web
cd SegundoParcial
cd practica-tres
cd realtime-crud
```

### 2. Instalar dependencias

```bash
npm install
```

### 3. Ejecutar la aplicación

```bash
npm run start:dev
```

La aplicación se ejecutará en: [http://localhost:3000](http://localhost:3000)

---

## 🧪 Uso con Postman o Insomnia (WebSockets)

### ✅ Conectar

- URL: `ws://localhost:3000`
- Transport: `socket.io`

### 📤 Eventos de Envío (emit)

#### 1. Crear Usuario

**Event Name:** `createUsuario`

```json
{
  "nombre": "Juan Pérez",
  "correo": "juan@example.com",
  "telefono": "0991234567"
}
```

#### 2. Crear Producto

**Event Name:** `createProducto`

```json
{
  "nombre": "Café",
  "descripcion": "Café molido premium",
  "precio": 7.5
}
```

#### 3. Crear Pedido

**Event Name:** `createPedido`

```json
{
  "usuarioId": 1,
  "productoId": 1,
  "cantidad": 2
}
```

---

## 📥 Eventos de Recepción (listen)

- `usuariosActualizados`
- `productosActualizados`
- `pedidosActualizados`

---

## 🧾 JSON de ejemplo para cada entidad

### Usuario

```json
{
  "id": 1,
  "nombre": "Juan Pérez",
  "correo": "juan@example.com",
  "telefono": "0991234567",
  "activo": true
}
```

### Producto

```json
{
  "id": 1,
  "nombre": "Café",
  "descripcion": "Café molido premium",
  "precio": 7.5,
  "disponible": true
}
```

### Pedido

```json
{
  "id": 1,
  "usuarioId": 1,
  "productoId": 1,
  "cantidad": 2,
  "fecha": "2025-07-15T18:00:00Z"
}
```




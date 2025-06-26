# Arquitectura Limpia - Todo API

Implementación de una API REST con arquitectura limpia que soporta múltiples tipos de datasource:
- **Prisma** (PostgreSQL)
- **TypeORM** (PostgreSQL)
- **Memory** (Arreglos de objetos literales en memoria)

## Características

### Arquitectura Limpia
- **Domain Layer**: Entidades, casos de uso, repositorios e interfaces
- **Infrastructure Layer**: Implementaciones de datasources y repositorios
- **Presentation Layer**: Controladores y rutas

### Datasources Disponibles
1. **Prisma**: Base de datos PostgreSQL con ORM Prisma
2. **TypeORM**: Base de datos PostgreSQL con TypeORM
3. **Memory**: Almacenamiento en memoria con arreglos de objetos literales

## Configuración y Desarrollo

### ⚡ Inicio Rápido - Sin Base de Datos (Recomendado para desarrollo)

```bash
# Instalar dependencias
npm install

# Ejecutar con datasource de memoria (NO requiere base de datos)
npm run dev:memory
```

¡Eso es todo! La aplicación funcionará completamente en memoria sin necesidad de Docker ni PostgreSQL.

### 🗄️ Con Base de Datos (Prisma/TypeORM)

#### Opción 1: Prisma
```bash
# 1. Crear archivo .env basado en .env.template
# 2. Configurar DATASOURCE_TYPE=PRISMA en .env
# 3. Ejecutar Docker
docker compose up -d
# 4. Migrar base de datos
npm run prisma:migrate:prod
# 5. Ejecutar aplicación
npm run dev:prisma
```

#### Opción 2: TypeORM
```bash
# 1. Crear archivo .env basado en .env.template
# 2. Configurar DATASOURCE_TYPE=TYPEORM en .env
# 3. Ejecutar Docker
docker compose up -d
# 4. Ejecutar aplicación
npm run dev:typeorm
```

## Scripts Disponibles

### Desarrollo
- `npm run dev` - Modo desarrollo (detecta DATASOURCE_TYPE automáticamente, por defecto: MEMORY)
- `npm run dev:memory` - Desarrollo con datasource de memoria
- `npm run dev:prisma` - Desarrollo con Prisma 
- `npm run dev:typeorm` - Desarrollo con TypeORM

### Producción
- `npm run start:memory` - Producción con datasource de memoria
- `npm run start:prisma` - Producción con Prisma
- `npm run start:typeorm` - Producción con TypeORM

## Variables de Entorno

Crea un archivo `.env` con las siguientes variables:

```bash
# Puerto de la aplicación
PORT=3000

# Tipo de datasource (MEMORY | PRISMA | TYPEORM)
# Default: MEMORY
DATASOURCE_TYPE=MEMORY

# Solo requerido para PRISMA/TYPEORM
POSTGRES_URL=postgresql://postgres:123456@localhost:5432/TodoDB

# Solo para Docker
POSTGRES_USER=postgres
POSTGRES_DB=TodoDB
POSTGRES_PASSWORD=123456
```

## API Endpoints

### Endpoints Unificados
- Base URL: `/api/todos`
- **Funciona con cualquier datasource** configurado
- Operaciones CRUD estándar

### Endpoints Específicos de Memoria
- Base URL: `/api/todos-memory`
- Operaciones CRUD + funcionalidades adicionales de gestión de datos
- **Siempre usa datasource de memoria**, independiente de la configuración

Para más detalles sobre los endpoints de memoria, consulta [MEMORY_DATASOURCE.md](./MEMORY_DATASOURCE.md)

## Casos de Uso

### 🧠 Memory Datasource (Recomendado para inicio)
- ✅ **Desarrollo rápido** sin configuración de base de datos
- ✅ **Testing** y prototipos instantáneos
- ✅ **Demos** y presentaciones
- ✅ **Aprendizaje** de arquitectura limpia
- ✅ **CI/CD** sin dependencias externas

### 🗄️ Prisma/TypeORM
- ✅ Aplicaciones en producción
- ✅ Persistencia de datos
- ✅ Aplicaciones multi-usuario
- ✅ Transacciones complejas

## Detección Automática de Datasource

La aplicación detecta automáticamente qué datasource usar:

1. **Variable de entorno `DATASOURCE_TYPE`** (prioridad alta)
2. **Script npm específico** (ej: `npm run dev:memory`)
3. **Por defecto**: MEMORY (si no se especifica nada)

### Logs de Inicio
La aplicación muestra claramente qué datasource está usando:

```bash
🔧 Starting application with datasource: MEMORY
🧠 Using memory datasource - no database initialization required
💾 Data will be stored in memory arrays and lost on restart
🔗 Available endpoints: /api/todos-memory
🎯 Datasource configured: MEMORY
```

## Testing

Puedes usar el archivo `memory-datasource.http` para probar la funcionalidad con tu cliente HTTP favorito (REST Client, Postman, etc.)

## Ventajas de esta Arquitectura

1. **🔄 Intercambiable**: Cambia entre datasources sin modificar código de negocio
2. **🚀 Inicio inmediato**: Funciona sin configuración con datasource de memoria
3. **🧪 Testing**: Ideal para pruebas sin dependencias externas
4. **📚 Educativo**: Perfecto para aprender arquitectura limpia
5. **🔧 Flexible**: Cada datasource para su caso de uso específico

## Documentación Adicional

- [Memory Datasource Guide](./MEMORY_DATASOURCE.md) - Guía completa del datasource de memoria
- [memory-datasource.http](./memory-datasource.http) - Ejemplos de peticiones HTTP

## Aplicación para gestión de libros y publicaciones cientificas FCVT

La primera imagen muestra como registrar una publicación.

![I1](./clean/public/assets/images/I1.png)

La segunda imagen muestra el perfil de los docentes como investigadores y sus obras publicadas.

![I2](./clean/public/assets/images/I2.png)

En la tercera imagen podemos ver las publicaciones realizadas por área.

![I3](./clean/public/assets/images/I3.png)

En la cuarta imagen podemos notar un resumen de publicaciones por diferentes metricas.

![I4](./clean/public/assets/images/I4.png)

En la quinta imagen se muestra que los perfiles pueden conectarse a diferentes plataformas científicas y sincronizar la información.

![I5](./clean/public/assets/images/I5.png)

En la sexta imagen se encuentra el detalle de una publicación que permite descargar el archivo en formato pdf y llevar la información más relevante.

![I6](./clean/public/assets/images/I6.png)

Tener en cuenta que los docentes pueden colaborar en conjunto con otros para crear una obra científica literaria.


1. Publicación (PublicacionEntity)
Descripción:
Esta entidad representa una publicación científica, como un artículo de revista, capítulo de libro, informe técnico o similar. Contiene atributos clave como el título de la publicación, resumen, fecha de publicación, autores relacionados, área de conocimiento y el journal o revista en la que fue publicada.

Justificación:
Se trata de la entidad central del sistema, ya que todas las demás giran en torno a la gestión de publicaciones. Su inclusión es esencial para permitir el registro, búsqueda y categorización de la producción científica institucional.

2. Autor (AutorEntity)
Descripción:
Esta entidad representa a un autor o investigador que participa en una o varias publicaciones. Se almacenan datos como su nombre completo, correo electrónico institucional y la facultad a la que pertenece.

Justificación:
Es fundamental para establecer relaciones de autoría entre publicaciones y personas. Su inclusión permite realizar búsquedas por autor, calcular métricas de productividad académica y vincular la producción con áreas específicas de la institución.

3. Facultad (FacultadEntity)
Descripción:
La entidad Facultad agrupa a los autores según su unidad académica de adscripción. Contiene información como el nombre de la facultad y un identificador institucional.

Justificación:
Permite clasificar las publicaciones por dependencia académica, facilitando la generación de reportes internos, evaluaciones institucionales y estadísticas por facultad. También es útil para identificar las áreas más productivas dentro de la universidad.

4. Área de Conocimiento (AreaEntity)
Descripción:
Representa el área de conocimiento o disciplina académica a la que pertenece una publicación. Incluye información como el nombre del área (por ejemplo: Ciencias Naturales, Ingeniería, Ciencias Sociales, etc.).

Justificación:
Su incorporación permite categorizar las publicaciones según su campo temático, lo que facilita la navegación, la segmentación y los análisis por disciplina. Además, es útil para vincular investigaciones con líneas estratégicas de la institución.

5. Revista (JournalEntity)
Descripción:
La entidad Journal representa la revista científica en la que fue publicada una determinada publicación. Contiene datos como el nombre de la revista, ISSN, país de publicación, cuartil u otros indicadores de impacto.

Justificación:
Es importante para evaluar la calidad y el alcance de las publicaciones científicas. También permite filtrar o agrupar las publicaciones por medio de difusión y establecer vínculos con bases de datos externas o rankings académicos.
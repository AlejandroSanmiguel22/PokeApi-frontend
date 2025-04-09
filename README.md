# Pokémon App – Frontend Angular

Aplicación web desarrollada con Angular 19 como parte de la prueba técnica Full Stack para la Universidad CUN. Esta aplicación permite buscar y visualizar información de Pokémon mediante una interfaz amigable y moderna.

---

## 📐 Arquitectura del proyecto

La arquitectura sigue una **estructura modular y escalable** basada en:

```
src/
├── app/
│   ├── core/      → Servicios globales y configuración principal
│   ├── shared/    → Interfaces, componentes reutilizables, modelos
│   ├── features/  → Módulos específicos por funcionalidad (ej. pokemon)
│   │   └── pokemon/
│   │       ├── components/
│   │       └── pages/
│   └── app.config.ts → Configuración de rutas con standalone
```

### 🚀 ¿Por qué esta arquitectura?

- ✅ **Escalabilidad**: facilita añadir nuevas funcionalidades sin afectar otras.
- ✅ **Reutilización**: componentes y servicios compartidos en `shared/`.
- ✅ **Claridad**: cada carpeta tiene un propósito definido.
- ✅ **Angular Standalone**: se usó el nuevo enfoque sin módulos raíz para aprovechar las últimas mejoras del framework.

---

## 🧩 Componentes clave

- `PokemonSearchComponent`: campo de búsqueda.
- `PokemonCardComponent`: muestra la tarjeta del Pokémon.
- `NavigationComponent`: botones para navegar entre Pokémon.
- `PokemonPageComponent`: página principal que orquesta los anteriores.

---

## 📦 Construcción y despliegue

### Producción

```bash
npm install
npm run build --prod
```

Esto generará los archivos en `dist/pokemon-app/browser/`.

### Docker

La app puede ejecutarse en modo producción con Docker y NGINX. Ver Dockerfile.

## 📄 Pruebas

Se implementaron pruebas unitarias con Karma + Jasmine para:
- Servicios (PokemonService)
- Componentes (PokemonPageComponent, PokemonCardComponent, etc.)

Ejecutar con:

```bash
ng test
```

## 📡 Conexión con Backend

La app consume un backend PHP desplegado por separado, y espera una API REST en:

```bash
GET http://localhost:8000/pokemon/{id}
```

## 👤 Autor

**Alejandro Sanmiguel**
Desarrollado por Alejandro Sanmiguel  
📧 alejandrosanmiguel0222@gmail.com
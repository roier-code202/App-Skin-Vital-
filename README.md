# Skincare Mobile App

## Resumen
Este proyecto es una aplicación móvil desarrollada con Vue.js, enfocada en el cuidado de la piel. Ofrece a los usuarios valiosos consejos e información sobre el cuidado de la piel a través de una interfaz intuitiva.

## Estructura del proyecto
El proyecto se organiza de la siguiente manera:

```
skincare-mobile-app
├── src
│   ├── assets          # Activos estáticos como imágenes y hojas de estilo
│   ├── components      # Componentes de Vue
│   │   └── SkincareTips.vue  # Componente para mostrar consejos sobre el cuidado de la piel.
│   ├── views          # Vistas de la aplicación
│   │   └── Home.vue   # Página de destino principal
│   ├── router         # Configuración del enrutador Vue
│   │   └── index.js   # Configuración de enrutamiento
│   ├── store          # Tienda Vuex para la gestión de estados
│   │   └── index.js   # Configuración de la tienda
│   ├── App.vue        # Componente raíz
│   └── main.js        # Punto de entrada de la aplicación
├── public
│   └── index.html     # Archivo HTML principal
├── package.json       # archivo de configuración npm
├── README.md          #Documentación del proyecto
└── vue.config.js      # Configuración de Vue CLI
```

## Primeros pasos

### Requisitos previos
- Node.js (versión 12 o superior)
- npm (gestor de paquetes de Node)
### Instalación
1. Clonar el repositorio:
   ```
   git clone https://github.com/roier-code202/App-Skin-Vital-
   ```
   Entra a la carpeta del proyecto:
   cd skincare-mobile-app

2. Instala las dependenciass:
   ```
   npm install
   ```

### Ejecución de la aplicación
Para iniciar el servidor de desarrollo, ejecute:
```
npm run serve
```
Esto iniciará la aplicación en su navegador web predeterminado en `http://localhost:8080`.

### Compilación para producción
Para compilar la aplicación para producción, ejecute:
```
npm run build
```
Los archivos compilados se generarán en el directorio 'dist'.

## Contribuciones
¡Agradecemos tus contribuciones! No dudes en enviar una solicitud de incorporación de cambios o abrir un problema para cualquier sugerencia o mejora.

## Licencia
Este proyecto está licenciado bajo la licencia MIT. Consulte el archivo de LICENCIA para obtener más información.

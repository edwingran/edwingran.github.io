# Portafolio Profesional - Edwin Granada

Un portafolio web moderno, minimalista y elegante diseñado para showcase profesional de Edwin Granada, Ingeniero Físico y Desarrollador especializado en automatización, análisis de datos y desarrollo web.

## 🎨 Características del Diseño

- **Diseño Oscuro y Minimalista**: Paleta de colores oscura elegante con acentos azules
- **Totalmente Responsivo**: Adaptado para todos los dispositivos (desktop, tablet, mobile)
- **Animaciones Suaves**: Transiciones y micro-interacciones profesionales
- **HTML Semántico**: Código limpio y accesible
- **CSS Moderno**: Variables CSS, Grid, Flexbox y animaciones CSS
- **JavaScript Ligero**: Interacciones sin frameworks, código vanilla JS

## 📁 Estructura del Proyecto

```
portfolio/
│
├── index.html          # Página principal con estructura semántica
├── css/
│   └── styles.css      # Estilos completos con diseño oscuro
├── js/
│   └── main.js         # Interacciones y funcionalidades
├── images/             # Carpeta para imágenes y assets
├── README.md           # Este archivo
└── style.css           # Archivo CSS original (mantenido como referencia)
```

## 🚀 Cómo Usar el Portafolio

### Requisitos Previos

- Un navegador web moderno (Chrome, Firefox, Safari, Edge)
- No se requiere servidor local para desarrollo básico

### Instrucciones para Abrir Localmente

#### Opción 1: Abrir Directamente en el Navegador

1. **Descarga o clona** el repositorio:
   ```bash
   git clone https://github.com/edwingran/portfolio.git
   cd portfolio
   ```

2. **Abre el archivo `index.html`** directamente en tu navegador:
   - Windows: Double-click en `index.html` o haz clic derecho → "Open with" → tu navegador
   - Mac: Double-click en `index.html`
   - Linux: `firefox index.html` o `google-chrome index.html`

#### Opción 2: Usar un Servidor Local (Recomendado)

Para evitar problemas con CORS y tener una experiencia más real:

1. **Con Python (si tienes Python instalado):**
   ```bash
   # Python 3
   python -m http.server 8000
   
   # Python 2
   python -m SimpleHTTPServer 8000
   ```

2. **Con Node.js (si tienes Node.js instalado):**
   ```bash
   npx serve .
   ```

3. **Con VS Code Live Server:**
   - Instala la extensión "Live Server" en VS Code
   - Haz clic derecho en `index.html` → "Open with Live Server"

4. **Abre tu navegador** y visita:
   ```
   http://localhost:8000
   ```

## 🛠️ Personalización del Portafolio

### Información Personal

Para personalizar el portafolio con tu información:

1. **Edita `index.html`:**
   - Cambia el nombre en el hero section
   - Actualiza los enlaces a GitHub y LinkedIn
   - Modifica el texto "Sobre Mí"
   - Agrega o actualiza proyectos

2. **Actualiza los proyectos:**
   ```html
   <!-- Encuentra esta sección en index.html -->
   <div class="project-card">
       <div class="project-header">
           <i class="fas fa-chart-line project-icon"></i>
           <h3 class="project-title">Tu Proyecto</h3>
       </div>
       <div class="project-content">
           <p class="project-description">
               Descripción de tu proyecto...
           </p>
           <div class="project-tech">
               <span class="tech-tag">Tecnología</span>
               <span class="tech-tag">Otra tecnología</span>
           </div>
           <div class="project-links">
               <a href="https://github.com/tu-usuario/tu-repo" target="_blank" class="project-link">
                   <i class="fab fa-github"></i> Ver Repositorio
               </a>
           </div>
       </div>
   </div>
   ```

### Personalización Visual

1. **Colores y Tema:**
   - Edit las variables CSS en `css/styles.css`
   - Las variables están al principio del archivo

2. **Tipografía:**
   - Cambia las fuentes en la sección `:root` del CSS
   - Actualiza los imports de Google Fonts si es necesario

3. **Animaciones:**
   - Modifica las animaciones en `css/styles.css`
   - Ajusta tiempos y efectos según tu preferencia

### Agregar Nuevas Secciones

1. **HTML:** Agrega nuevas `<section>` con la clase apropiada
2. **CSS:** Define los estilos para la nueva sección
3. **JavaScript:** Agrega interacciones si es necesario

## 📱 Características Responsivas

El portafolio incluye breakpoints para:

- **Desktop (> 768px):** Diseño completo con todas las características
- **Tablet (≤ 768px):** Layout adaptado con menú hamburguesa
- **Mobile (≤ 480px):** Diseño optimizado para pantallas pequeñas

## 🎯 Secciones del Portafolio

1. **Hero Section:** Presentación principal con llamada a la acción
2. **Sobre Mí:** Descripción profesional y background
3. **Proyectos:** Showcase de proyectos destacados con tecnologías
4. **Habilidades:** Barras de progreso y especializaciones
5. **Contacto:** Enlaces a redes profesionales

## 🔧 Tecnologías Utilizadas

- **HTML5:** Estructura semántica y accesibilidad
- **CSS3:** Diseño moderno con variables CSS, Grid y Flexbox
- **JavaScript (ES6+):** Interacciones dinámicas sin frameworks
- **Font Awesome:** Iconos profesionales
- **Google Fonts:** Tipografía moderna (Inter)

## 🌐 Optimización para SEO

El portafolio incluye:

- Meta tags descriptivos
- Estructura semántica HTML5
- URLs amigables con anclas
- Open Graph meta tags para redes sociales

## 📈 Rendimiento

- **CSS optimizado:** Uso eficiente de selectores y propiedades
- **JavaScript ligero:** Sin dependencias externas innecesarias
- **Imágenes optimizadas:** Usa la carpeta `/images` para assets optimizados
- **Lazy loading:** Las animaciones se activan al hacer scroll

## 🤝 Contribuciones

Si quieres mejorar este portafolio:

1. Fork el repositorio
2. Crea una rama para tu feature (`git checkout -b feature/mejora`)
3. Commit tus cambios (`git commit -am 'Agrega nueva mejora'`)
4. Push a la rama (`git push origin feature/mejora`)
5. Abre un Pull Request

## 📄 Licencia

Este proyecto está bajo la Licencia MIT. Siéntete libre de usarlo como base para tu propio portafolio.

## 📞 Contacto

- **GitHub:** [https://github.com/edwingran](https://github.com/edwingran)
- **LinkedIn:** [https://www.linkedin.com/in/edwingranada/](https://www.linkedin.com/in/edwingranada/)

---

**Creado con ❤️ por Edwin Granada**  
*Ingeniero Físico & Desarrollador*

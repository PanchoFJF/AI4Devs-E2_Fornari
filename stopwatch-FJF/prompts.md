# 📌 Documentación de Prompts

## 🤖 Chatbot utilizado
- ChatGPT (OpenAI)

## 🔢 Cantidad de prompts utilizados
- 4 prompts

## Link del chat
[Chat compartido](https://chatgpt.com/share/69d971fe-20b8-83e9-ae5f-10c67c1b7485)

---

## 📝 Lista de prompts

### Prompt 1
**Objetivo:** Crear una página web con lógica en JavaScript que implemente un cronómetro (stopwatch) con diseño moderno y amigable, mostrando horas, minutos, segundos y milisegundos.   

**Requerimientos funcionales:**  
- Botones:  
  - **Start (verde):** inicia el cronómetro.  
  - **Stop (rojo):** pausa el cronómetro.  
  - **Resume (azul):** aparece tras pausar y continúa el tiempo.  
  - **Clear (amarillo):** reinicia el cronómetro y muestra debajo el último tiempo registrado en tipografía más pequeña.  
- Todo debe estar centrado en pantalla.  
- Tipografía legible y amigable (evitar fatiga visual).  
- Fondo y estilo moderno, como si fuera diseñado por un experto frontend.  

**Formato de salida esperado:**  
- Archivo `index.html`  
- Archivo `script.js`  

**Tecnologías:**  
- JavaScript para la lógica.  
- Librerías recomendadas para diseño moderno (CSS moderno o frameworks ligeros).  

**Pasos de desarrollo:**  
1. Crear botones y probar la funcionalidad del cronómetro.  
2. Aplicar diseño moderno y accesible (colores, tipografía, fondo).  
3. Mostrar siempre el último tiempo cronometrado debajo de los botones.  
4. Elaborar lista de casos de prueba para verificar que todo funciona según los requerimientos.  

**Notas:**  
- Usar buenas prácticas de programación y diseño.  
- Si falta información, solicitar aclaraciones antes de avanzar.  
- Se permite adaptar los pasos si mejora el desarrollo.  

---

### Prompt 2
Corrección del Cronómetro 

Objetivo: Mejorar el diseño y la interacción del cronómetro desarrollado en JavaScript para que cumpla con una estética más moderna y una experiencia de usuario más clara.  

Requerimientos de corrección:  
- El tiempo debe mostrarse en formato `hh:mm:ss:msms`, todo junto, con los milisegundos más pequeños a la derecha de los segundos.  
- Incrementar el tamaño horizontal del contenedor que incluye los botones y el tiempo, de modo que todo quede alineado en la misma fila.  
- Distribución de botones:  
  - Start (izquierda)  
  - Stop (centro)  
  - Clear (derecha)  
- Comportamiento de botones:  
  - Al presionar Start, este se vuelve gris (contraste con el fondo) y no se puede volver a presionar hasta que se use Clear.  
  - Al presionar Stop, el botón cambia a azul y su texto pasa de “Stop” a “Resume”.  
  - Clear funciona correctamente y reinicia el cronómetro.  
- Debajo de los botones debe mostrarse el último tiempo registrado con la leyenda:  
  - “Last time: [tiempo anterior]” o  
  - “Last stopwatch time: [tiempo anterior]”.  

Notas:  
- Mantener el diseño moderno, centrado y con tipografía amigable para evitar fatiga visual.  
- Usar buenas prácticas de programación y estilo CSS.  
- Asegurar que la funcionalidad siga siendo perfecta y que el diseño cumpla con los nuevos requerimientos.  

---

### Prompt 3
A corregir:
- Stop puede dar inicio al tiempo sin haber apretado start (resume sobreescritura? no deberia poder hacer eso stop)
- El tiempo debe estar arriba (fila 1), los botones abajo (fila 2) y el ultimo tiempo abajo (fila 3) de la misma manera
- Incrementar el tamaño de botones y tipografias para que abarquen al menos el 60% de la pantalla (en su conjunto)

---

## ✅ Prompt final para Pull Request 
### Prompt 4 (final)
Mientras cambia los ms vibra mucho los números y puede ser molesto visualmente. Evitar esta vibracion excesiva. 

Notas: 
- En prompt 1 se adjunto la imagen stopwatch.png
- En prompt 4 se aplicó la corrección 1



document.addEventListener('DOMContentLoaded', function () {
    const radiosFiltro = document.getElementsByName('filtro');
    const contenedorArticulos = document.getElementById('articulos');
    
    const articulos = [
        { nombre: 'Artículo 1', categoria: 'categoria1', color: 'rojo', texto: 'Este es el artículo rojo', imagen: 'ruta/imagen1.jpg', orden: 1, enlace: 'enlace1.html' },
        { nombre: 'Artículo 2', categoria: 'categoria2', color: 'verde', texto: 'Este es el artículo verde', imagen: 'ruta/imagen2.jpg', orden: 2, enlace: 'enlace2.html' },
        { nombre: 'Artículo 3', categoria: 'categoria1', color: 'azul', texto: 'Este es el artículo azul', imagen: 'ruta/imagen3.jpg', orden: 3, enlace: 'enlace3.html' },
       
        { nombre: 'Artículo 4', categoria: 'categoria2', color: 'rojo', texto: 'Este es el artículo rojo', imagen: 'ruta/imagen4.jpg', orden: 4, enlace: 'enlace4.html' },
        { nombre: 'Artículo 5', categoria: 'categoria1', color: 'verde', texto: 'Este es el artículo verde', imagen: 'ruta/imagen5.jpg', orden: 5, enlace: 'enlace5.html' },
        { nombre: 'Artículo 6', categoria: 'categoria2', color: 'azul', texto: 'Este es el artículo azul', imagen: 'ruta/imagen6.jpg', orden: 6, enlace: 'enlace6.html' },
        // Agrega más artículos según sea necesario
    ];

    function mostrarArticulos(filtro) {
        contenedorArticulos.innerHTML = '';

        const articulosFiltrados = (filtro === 'todos') ? articulos : articulos.filter(articulo => articulo.categoria === filtro);

        articulosFiltrados.forEach(articulo => {
            // Crear un enlace <a> en lugar de un div
            const enlaceArticulo = document.createElement('a');
            enlaceArticulo.classList.add('articulo');
            enlaceArticulo.href = articulo.enlace; // Asignar el enlace desde el objeto articulo

            // Agregar imagen al enlaceArticulo
            const imagenArticulo = document.createElement('img');
            imagenArticulo.src = articulo.imagen;
            imagenArticulo.alt = articulo.nombre;
            enlaceArticulo.appendChild(imagenArticulo);

            // Agregar texto al enlaceArticulo
            const textoArticulo = document.createElement('p');
            textoArticulo.textContent = articulo.texto;
            enlaceArticulo.appendChild(textoArticulo);

            enlaceArticulo.style.backgroundColor = articulo.color;
            enlaceArticulo.style.order = articulo.orden;

            contenedorArticulos.appendChild(enlaceArticulo);
        });
    }

    // Evento al cambiar el filtro
    radiosFiltro.forEach(radio => {
        radio.addEventListener('change', function () {
            const filtroSeleccionado = document.querySelector('input[name="filtro"]:checked').value;
            mostrarArticulos(filtroSeleccionado);
        });
    });

    // Mostrar todos los artículos al cargar la página
    mostrarArticulos('todos');
});

// Carga dinámica de historia.txt con manejo de caché para GitHub
        fetch('historia.txt', { cache: "no-cache" })
            .then(response => {
                if (!response.ok) throw new Error();
                return response.text();
            })
            .then(data => { 
                document.getElementById('historia-texto').innerText = data; 
            })
            .catch(error => { 
                document.getElementById('historia-texto').innerText = "Cargando nuestra historia..."; 
            });
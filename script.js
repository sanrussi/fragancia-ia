
const inventario = {
    "Vainilla Pomelo": 8,
    "Water Cool": 8,
    "Floral": 8,
    "Lavanda Manzanilla": 8,
    "Bambú": 1,
    "Mix (Elemento nativo, Serenidad y Trozos de fruta)": 3,
    "Fresa Bambú": 1,
    "Fruto de la Pasión": 8,
    "Fresa": 4,
    "Eucalipto": 10,
    "Manzana Canela": 5,
    "Chocolate": 8,
    "Coco Naranja": 2,
    "Verbena Fresh": 9
};

const palabrasClave = {
    "relajación": ["Lavanda Manzanilla", "Verbena Fresh", "Bambú"],
    "energía": ["Water Cool", "Coco Naranja", "Fruto de la Pasión"],
    "felicidad": ["Fresa", "Chocolate", "Fruto de la Pasión"],
    "tranquilidad": ["Floral", "Lavanda Manzanilla"],
    "frescura": ["Fresa Bambú", "Water Cool"],
    "ánimo": ["Vainilla Pomelo", "Manzana Canela"],
    "concentración": ["Eucalipto"],
    "romanticismo": ["Vainilla Pomelo", "Floral"]
};

function recomendar() {
    const nombre = document.getElementById("nombre").value.trim();
    const emocion = document.getElementById("emocion").value.trim().toLowerCase();
    let fragancia = null;

    for (const palabra in palabrasClave) {
        if (emocion.includes(palabra)) {
            const opciones = palabrasClave[palabra].filter(f => inventario[f] > 0);
            if (opciones.length > 0) {
                fragancia = opciones[Math.floor(Math.random() * opciones.length)];
                break;
            }
        }
    }

    if (!fragancia) {
        const disponibles = Object.entries(inventario).filter(([_, v]) => v > 0);
        if (disponibles.length > 0) {
            fragancia = disponibles[Math.floor(Math.random() * disponibles.length)][0];
        } else {
            document.getElementById("resultado").innerText = "Lo sentimos, ya no hay fragancias disponibles.";
            return;
        }
    }

    inventario[fragancia]--;

    const resultadoHTML = `
        <p><strong>Tu fragancia recomendada es:</strong></p>
        <h3>${fragancia}</h3>
        <p>Gracias por participar.</p>
        <p><em>Esteban Suárez Russy - 9-32</em></p>
    `;
    document.getElementById("resultado").innerHTML = resultadoHTML;
}

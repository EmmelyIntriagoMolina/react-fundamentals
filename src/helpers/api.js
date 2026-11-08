export async function obtenerDatos(url, signal) {
    const response = await fetch(url, {
        signal
    });

    if (!response.ok) {
        throw new Error('Error al obtener los datos');
    }

    return await response.json();
}

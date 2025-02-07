import { modificarRepartidor } from "@/lib/actions";
function RepartidorModificar({ repartidor }) {
    return (
        <form action={modificarRepartidor} className="bg-white p-6 rounded-lg shadow-lg w-full max-w-md mx-auto">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4 text-center">Modificar Repartidor</h2>
            <div className="mb-4">
                <input type="hidden" name="id" defaultValue={repartidor.id} />
                <label htmlFor="nombre" className="block text-gray-700 font-medium mb-2">Nombre del Repartidor</label>
                <input
                    name="nombre"
                    id="nombre"
                    defaultValue={repartidor.nombre}
                    className="w-full p-3 border-2 border-gray-300 rounded-lg focus:outline-none focus:border-blue-500 transition-all"
                />
            </div>
            <div className="mb-6">
                <label htmlFor="telefono" className="block text-gray-700 font-medium mb-2">Telefono del Repartidor</label>
                <input
                    name="telefono"
                    id="telefono"
                    defaultValue={repartidor.telefono}
                    className="w-full p-3 border-2 border-gray-300 rounded-lg focus:outline-none focus:border-blue-500 transition-all"
                />
            </div>
            <button
                type="submit"
                className="w-full py-3 bg-yellow-500 text-white rounded-lg hover:bg-yellow-600 transition-all focus:outline-none focus:ring-2 focus:ring-yellow-500"
            >
                Modificar Repartidor
            </button>
        </form>
    );
}
export default RepartidorModificar;


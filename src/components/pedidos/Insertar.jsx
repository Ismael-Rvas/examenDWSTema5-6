import { insertarPedido } from "@/lib/actions";

function PedidoInsertar() {
    return (
        <form action={insertarPedido} className="bg-white p-6 rounded-lg shadow-lg w-full max-w-md mx-auto">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4 text-center">Agregar Nuevo Pedido</h2>
            <div className="mb-4">
                <label htmlFor="fecha" className="block text-gray-700 font-medium mb-2">Fecha del Pedido</label>
                <input
                    type="date"
                    name="fecha"
                    id="fecha"
                    className="w-full p-3 border-2 border-gray-300 rounded-lg focus:outline-none focus:border-blue-500 transition-all"
                    required
                />
            </div>
            <div className="mb-4">
                <label htmlFor="nombreCliente" className="block text-gray-700 font-medium mb-2">Nombre del Cliente</label>
                <input
                    name="nombreCliente"
                    id="nombreCliente"
                    placeholder="Nombre del cliente"
                    className="w-full p-3 border-2 border-gray-300 rounded-lg focus:outline-none focus:border-blue-500 transition-all"
                    required
                />
            </div>
            <div className="mb-6">
                <label htmlFor="direccionCliente" className="block text-gray-700 font-medium mb-2">Direccion del Cliente</label>
                <input
                    name="direccionCliente"
                    id="direccionCliente"
                    placeholder="Direccion del cliente"
                    className="w-full p-3 border-2 border-gray-300 rounded-lg focus:outline-none focus:border-blue-500 transition-all"
                    required
                />
            </div>
            
            <button
                type="submit"
                className="w-full py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-all focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
                Insertar Pedido
            </button>
        </form>
    );
}
export default PedidoInsertar;

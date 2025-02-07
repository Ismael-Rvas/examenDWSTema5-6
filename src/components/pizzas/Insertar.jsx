import { insertarPizza } from "@/lib/actions";

function PizzaInsertar() {
    return (
        <form action={insertarPizza} className="bg-white p-6 rounded-lg shadow-lg w-full max-w-md mx-auto">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4 text-center">Agregar Nueva Pizza</h2>
            <div className="mb-4">
                <label htmlFor="nombre" className="block text-gray-700 font-medium mb-2">Nombre de la Pizza</label>
                <input
                    type="text"
                    name="nombre"
                    id="nombre"
                    placeholder="Nombre de la pizza"
                    className="w-full p-3 border-2 border-gray-300 rounded-lg focus:outline-none focus:border-blue-500 transition-all"
                    required
                />
            </div>
            <div className="mb-6">
                <label htmlFor="precio" className="block text-gray-700 font-medium mb-2">Precio de la Pizza</label>
                <input
                    type="number"
                    name="precio"
                    id="precio"
                    placeholder="Precio de la pizza"
                    className="w-full p-3 border-2 border-gray-300 rounded-lg focus:outline-none focus:border-blue-500 transition-all"
                    required
                />
            </div>
            
            <button
                type="submit"
                className="w-full py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-all focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
                Insertar Pizza
            </button>
        </form>
    );
}
export default PizzaInsertar;


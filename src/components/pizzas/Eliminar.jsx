import { eliminarPizza } from "@/lib/actions";
function PizzaEliminar({ pizza }) {
  return (
    <div className="bg-white p-6 rounded-lg shadow-lg w-full max-w-md mx-auto">
      <h1 className="text-2xl text-red-600">
        ¿Desea eliminar la pizza {pizza.nombre}?
      </h1>
      <p className="mb-4">Precio: {pizza.precio}</p>

      <form action={eliminarPizza}>
        <input type="hidden" name="id" defaultValue={pizza.id} />
        <button
          type="submit"
          className="w-full py-3 bg-red-600 text-white rounded-lg hover:bg-red-700 transition-all focus:outline-none focus:ring-2 focus:ring-red-500"
        >
          Eliminar
        </button>
      </form>
    </div>
  );
}
export default PizzaEliminar;


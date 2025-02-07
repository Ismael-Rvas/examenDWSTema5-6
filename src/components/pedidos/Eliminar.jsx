import { eliminarPedido } from "@/lib/actions";
function PedidoEliminar({ pedido }) {
  return (
    <div className="bg-white p-6 rounded-lg shadow-lg w-full max-w-md mx-auto">
      <h1 className="text-2xl text-red-600">
        ¿Desea eliminar el pedido del cliente
      </h1>
      <p className="mb-4">Nombre: {pedido.nombreCliente}</p>
      <p className="mb-4">Direccion: {pedido.direccionCliente}</p>
      <p className="mb-6">
        Fecha de Pedido:{" "}
        <span className="font-semibold">
          {new Date(pedido.fecha).toLocaleDateString()}
        </span>
      </p>

      <form action={eliminarPedido}>
        <input type="hidden" name="id" defaultValue={pedido.id} />
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
export default PedidoEliminar;


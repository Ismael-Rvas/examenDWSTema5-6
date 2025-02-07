"use client";
import { useEffect, useId, useActionState } from "react";
import { insertarPedido } from "@/lib/actions";
import { toast } from "sonner";

function PedidoInsertar({pizzas, repartidores}) {
  const formId = useId();
  const [state, action, pending] = useActionState(insertarPedido, {});

  useEffect(() => {
    if (state.success) {
      toast.success(state.success);
      document.getElementById(formId)?.closest("dialog")?.close();
    }
  }, [state]);

  return (
    <form
      action={action}
      id={formId}
      className="bg-white p-6 rounded-lg shadow-lg w-full max-w-md mx-auto"
    >
      <h2 className="text-2xl font-semibold text-gray-900 mb-4 text-center">
        Agregar Nuevo Pedido
      </h2>
      <div className="mb-4">
        <label
          htmlFor="nombreCliente"
          className="block text-gray-700 font-medium mb-2"
        >
          Nombre del Cliente
        </label>
        <input
          name="nombreCliente"
          id="nombreCliente"
          placeholder="Nombre del cliente"
          className="w-full p-3 border-2 border-gray-300 rounded-lg focus:outline-none focus:border-blue-500 transition-all"
          required
        />
      </div>
      <div className="mb-4">
        <label
          htmlFor="direccionCliente"
          className="block text-gray-700 font-medium mb-2"
        >
          Direccion del Cliente
        </label>
        <input
          name="direccionCliente"
          id="direccionCliente"
          placeholder="Direccion del cliente"
          className="w-full p-3 border-2 border-gray-300 rounded-lg focus:outline-none focus:border-blue-500 transition-all"
          required
        />
      </div>
      <div className="mb-4">
        <label htmlFor="fecha" className="block text-gray-700 font-medium mb-2">
          Fecha del Pedido
        </label>
        <input
          type="date"
          name="fecha"
          id="fecha"
          className="w-full p-3 border-2 border-gray-300 rounded-lg focus:outline-none focus:border-blue-500 transition-all"
          required
        />
      </div>
      <label className="block text-gray-700 font-medium mb-2">
          Repartidores
        </label>
      <div className="mb-6">
        <select
        key={repartidores.id}
          name="repartidor"
          id="repartidor"
          className="w-full p-3 border-2 border-gray-300 rounded-lg focus:outline-none focus:border-blue-500 transition-all"
          required
        >
          <option value="">Seleccione un repartidor</option>
          {repartidores.map((repartidor) => (
            <option key={repartidor.id} value={repartidor.id}>
              {repartidor.nombre}
            </option>
          ))}
        </select>
      </div>
      <label className="block text-gray-700 font-medium mb-2">Pizzas</label>

      <div className="mb-6">
        {pizzas.map((pizza) => (
          <label key={pizza.id}>
            <input
              type="checkbox"
              name={`pizza${pizza.id}`}
              value={pizza.nombre}
              className="mr-2"
            />
            {pizza.nombre}
          </label>
        ))}
      </div>
      <button
        className="w-full py-3 bg-yellow-500 text-white rounded-lg hover:bg-yellow-600 transition-all focus:outline-none focus:ring-2 focus:ring-yellow-500"
        disabled={pending}
      >
        {pending ? "Insertando..." : "Insertar Pedido"}
      </button>
    </form>
  );
}
export default PedidoInsertar;

"use client";
import { useEffect, useId, useActionState } from "react";
import { modificarPedido } from "@/lib/actions";
import { toast } from "sonner";

function PedidoModificar({ pedido, pizzas, repartidores }) {
  const formId = useId();
  const [state, action, pending] = useActionState(modificarPedido, {});

  useEffect(() => {
    if (state.success) {
      toast.success(state.success);
      document.getElementById(formId)?.closest("dialog")?.close();
    }
  }, [state]);

  const pizzaIDs = pedido.pizzas.map((pizza) => pizza.id);

  return (
    <form
      action={action}
      id={formId}
      className="bg-white p-6 rounded-lg shadow-lg w-full max-w-md mx-auto"
    >
      <h2 className="text-2xl font-semibold text-gray-900 mb-4 text-center">
        Modificar Pedido
      </h2>
      <div className="mb-4">
        <input type="hidden" name="id" defaultValue={pedido.id} />
        <label
          htmlFor="nombreCliente"
          className="block text-gray-700 font-medium mb-2"
        >
          Nombre del Cliente
        </label>
        <input
          name="nombreCliente"
          id="nombreCliente"
          defaultValue={pedido.nombreCliente}
          className="w-full p-3 border-2 border-gray-300 rounded-lg focus:outline-none focus:border-blue-500 transition-all"
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
          defaultValue={pedido.direccionCliente}
          className="w-full p-3 border-2 border-gray-300 rounded-lg focus:outline-none focus:border-blue-500 transition-all"
        />
      </div>
      <div className="mb-4">
        <label htmlFor="fecha" className="block text-gray-700 font-medium mb-2">
          Fecha del Pedido
        </label>
        <input
          name="fecha"
          id="fecha"
          defaultValue={new Date(pedido.fecha).toISOString().split("T")[0]}
          className="w-full p-3 border-2 border-gray-300 rounded-lg focus:outline-none focus:border-blue-500 transition-all"
        />
      </div>
      <div className="mb-6">
        <label className="block text-gray-700 font-medium mb-2">
          Repartidores
        </label>
        <div className="mb-6">
          <select
            key={pedido.repartidorId}
            name="repartidorId"
            className="block w-full p-3 border-2 border-gray-300 rounded-lg focus:outline-none focus:border-blue-500 transition-all"
            defaultValue={pedido.repartidorId}
          >
            <option value="">Seleccione un repartidor</option>
            {repartidores.map((repartidor) => (
              <option key={repartidor.id} value={repartidor.id}>
                {repartidor.nombre}
              </option>
            ))}
          </select>
        </div>
      </div>
      <div className="mb-6">
        <label className="block text-gray-700 font-medium mb-2">Pizzas</label>
        {pizzas.map((pizza) => (
          <label
            key={pizza.id}
            className="block text-gray-700 font-medium mb-2"
          >
            <input
              type="checkbox"
              name={`pizza${pizza.id}`}
              value={pizza.nombre}
              defaultChecked={pizzaIDs.includes(pizza.id)}
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
        {pending ? "Modificando..." : "Modificar Pedido"}
      </button>
    </form>
  );
}

export default PedidoModificar;

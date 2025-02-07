import { obtenerPedido } from "@/lib/data";
import { notFound } from "next/navigation";

export default async function Pedido({ id }) {
  const pedido = await obtenerPedido(id);

  if (!pedido) notFound();

  return (
    <div className="flex justify-center items-center mt-10 bg-gray-100">
      <div className="bg-white rounded-lg shadow-lg p-6 w-full max-w-md border border-gray-200">
        <h2 className="text-2xl font-bold text-green-700 text-center mb-4">
          {pedido.nombreCliente}
        </h2>
        <p className="text-gray-600 text-lg font-semibold">
          <span className="font-bold">ID:</span> {pedido.id}
        </p>
        <p className="text-gray-700">
          <span className="font-bold">Direccion:</span>{" "}
          {pedido.direccionCliente}
        </p>
        <p className="text-gray-700">
          <span className="font-bold">Fecha Pedido:</span>{" "}
          {pedido.fecha.toLocaleDateString()}
        </p>
        <p className="text-gray-700">
          <span className="font-bold">Id Repartidor:</span>{" "}
          {pedido.repartidorId}
        </p>
        <p className="text-gray-700">
          Pizzas pedido:{" "}
          {pedido.pizzas?.map((pizza) => pizza.nombre).join(", ") || "Ninguna"}
        </p>

      </div>
    </div>
  );
}

import { obtenerPizza } from "@/lib/data";
import { notFound } from "next/navigation";

export default async function Pizza({ id }) {
  const pizza = await obtenerPizza(id);

  if (!pizza) notFound();

  return (
    <div className="flex justify-center items-center mt-10 bg-gray-100">
      <div className="bg-white rounded-lg shadow-lg p-6 w-full max-w-md border border-gray-200">
        <h2 className="text-2xl font-bold text-green-700 text-center mb-4">
          {pizza.nombre}
        </h2>
        <p className="text-gray-600 text-lg font-semibold">
          <span className="font-bold">ID:</span> {pizza.id}
        </p>
        <p className="text-gray-700">
          <span className="font-bold">Precio:</span> {pizza.precio}
        </p>
      </div>
    </div>
  );
}

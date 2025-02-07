import { obtenerPedidos } from "@/lib/data";
import Link from "next/link";

export async function Pedidos() {
  const pedidos = await obtenerPedidos();
  return (
    <ul className="flex flex-col items-center justify-center mt-10">
      {pedidos.map((pedido) => (
        <li
          key={pedido.id}
          className="bg-slate-200 rounded-lg p-4 shadow-md mb-4 w-full md:w-1/2 lg:w-1/3"
        >
          <h2 className="text-2xl font-bold mb-2">
            <Link
              href={`/pedidos/${pedido.id}`}
              className="hover:underline"
            >
              {pedido.nombreCliente}
            </Link>
          </h2>
          <p className="text-gray-700 italic">
            {pedido.fecha.toLocaleString()}
          </p>
        </li>
      ))}
    </ul>
  );
}


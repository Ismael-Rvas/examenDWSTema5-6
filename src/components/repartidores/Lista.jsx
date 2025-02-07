import { obtenerRepartidores } from "@/lib/data";
import Link from "next/link";

export async function Repartidores() {
  const repartidores = await obtenerRepartidores();
  return (
    <ul className="flex flex-col items-center justify-center mt-10">
      {repartidores.map((repartidor) => (
        <li
          key={repartidor.id}
          className="bg-slate-200 rounded-lg p-4 shadow-md mb-4 w-full md:w-1/2 lg:w-1/3"
        >
          <h2 className="text-2xl font-bold mb-2">
            <Link
              href={`/repartidores/${repartidor.id}`}
              className="hover:underline"
            >
              {repartidor.nombre}
            </Link>
          </h2>
          <p className="text-gray-700 italic">
            Teléfono: {repartidor.telefono}
          </p>
        </li>
      ))}
    </ul>
  );
}

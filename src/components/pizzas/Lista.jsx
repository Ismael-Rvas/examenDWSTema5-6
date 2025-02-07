import { obtenerPizzas } from "@/lib/data";
import Link from "next/link";

export async function Pizzas() {
  const pizzas = await obtenerPizzas();
  return (
    <ul className="flex flex-col items-center justify-center mt-10">
      {pizzas.map((pizza) => (
        <li
          key={pizza.id}
          className="bg-slate-200 rounded-lg p-4 shadow-md mb-4 w-full md:w-1/2 lg:w-1/3"
        >
          <h2 className="text-2xl font-bold mb-2">
            <Link
              href={`/pizzas/${pizza.id}`}
              className="hover:underline"
            >
              {pizza.nombre}
            </Link>
          </h2>
        </li>
      ))}
    </ul>
  );
}


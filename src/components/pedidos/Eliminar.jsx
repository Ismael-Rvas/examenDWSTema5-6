'use client'
import { eliminarPedido } from "@/lib/actions";
import { useEffect, useId, useActionState, use } from "react";
import { toast } from "sonner";
import {useRouter} from "next/navigation";
function PedidoEliminar({ pedido }) {
  const router = useRouter();
  const formId = useId();
  const [state, action, pending] = useActionState(eliminarPedido, {});
  useEffect(() => {
    if (state.success) {
      toast.success(state.success);
      document.getElementById(formId)?.closest("dialog")?.close();
      router.refresh();
    }
  }, [state]);
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

      <form action={action} id={formId}>
        <input type="hidden" name="id" defaultValue={pedido.id} />
        <button
          disabled={pending}
          className="w-full py-3 bg-red-600 text-white rounded-lg hover:bg-red-700 transition-all focus:outline-none focus:ring-2 focus:ring-red-500"
        >
          {pending ? "Eliminando pedido..." : "Eliminar"}
        </button>
      </form>
    </div>
  );
}
export default PedidoEliminar;


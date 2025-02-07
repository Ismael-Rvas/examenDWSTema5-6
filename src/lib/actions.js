'use server'
import { revalidatePath } from 'next/cache';
import prisma from '@/lib/prisma';

//  ------------------------ REPARTIDORES ------------------------
export async function insertarRepartidor(formData) {
    const nombre = formData.get('nombre')
    const telefono = formData.get('telefono')

    await prisma.repartidor.create({
        data: {
            nombre: nombre,
            telefono: telefono,
        }
    })

    revalidatePath('/repartidores')
}
export async function modificarRepartidor(formData) {
    const id = Number(formData.get('id'))
    const nombre = formData.get('nombre')
    const telefono = formData.get('telefono')

    await prisma.repartidor.update({
        where: {
            id: id
        },
        data: {
            nombre: nombre,
            telefono: telefono,
        }
    })

    revalidatePath('/repartidores')
}

export async function eliminarRepartidor(formData) {
    const id = Number(formData.get('id'))

    await prisma.repartidor.delete({
        where: {
            id: id
        }
    })

    revalidatePath('/repartidores')
}

//  ------------------------ PEDIDOS ------------------------
export async function insertarPedido(prevState, formData) {
    const fecha = new Date(formData.get('fecha'))
    const nombreCliente = formData.get('nombreCliente')
    const direccionCliente = formData.get('direccionCliente')
    const repartidorId = formData.get('repartidorId')

    const pizzaIDs = await prisma.pizza.findMany({
        select: {
            id: true
        }
    })
    const connect = pizzaIDs.filter(pizza => formData.get(`pizza${pizza.id}`) !== null)
    await prisma.pedido.create({
        data: {
            fecha: fecha,
            nombreCliente: nombreCliente,
            direccionCliente: direccionCliente,
            repartidorId: repartidorId,
            pizzas: {
                connect: connect,
            },
        }
    })
    revalidatePath('/pedidos')
    return { success: 'El pedido se inserto correctamente' }
}

export async function modificarPedido(prevState, formData) {
    const id = Number(formData.get('id'))
    const fecha = new Date(formData.get('fecha'))
    const nombreCliente = formData.get('nombreCliente')
    const direccionCliente = formData.get('direccionCliente')
    const repartidorId = Number(formData.get('repartidorId'))

    const pizzaIDs = await prisma.pizza.findMany({
        select: {
            id: true
        }
    })
    const connect = pizzaIDs.filter(pizza => formData.get(`pizza${pizza.id}`) !== null)
    const disconnect = pizzaIDs.filter(pizza => formData.get(`pizza${pizza.id}`) === null)
    
    await prisma.pedido.update({
        where: {
            id: id
        },
        data: {
            fecha: fecha,
            nombreCliente: nombreCliente,
            direccionCliente: direccionCliente,
            repartidorId: repartidorId,
            pizzas: {
                connect: connect,
                disconnect: disconnect
            }
        }
    })
    revalidatePath('/pedidos')
    return { success: 'El pedido se modifico correctamente' }
}

export async function eliminarPedido(prevState, formData) {
    const id = Number(formData.get('id'))
    await prisma.pedido.delete({
        where: {
            id: id
        }
    })
    return { success: 'El pedido se elimino' }
}

//  ------------------------ PIZZAS -----------------------
export async function insertarPizza(formData) {
    const nombre = formData.get('nombre')
    const precio = Number(formData.get('precio'))

    await prisma.pizza.create({
        data: {
            nombre: nombre,
            precio: precio,
        }
    })

    revalidatePath('/pizzas')
}

export async function modificarPizza(formData) {
    const id = Number(formData.get('id'))
    const nombre = formData.get('nombre')
    const precio = Number(formData.get('precio'))

    await prisma.pizza.update({
        where: {
            id: id
        },
        data: {
            nombre: nombre,
            precio: precio,
        }
    })

    revalidatePath('/pizzas')
}

export async function eliminarPizza(formData) {
    const id = Number(formData.get('id'))

    await prisma.pizza.delete({
        where: {
            id: id
        }
    })

    revalidatePath('/pizzas')
}

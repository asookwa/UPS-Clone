import React, { useEffect, useState } from 'react'
import { useQuery } from "@apollo/client"
import { GET_ORDERS } from '../graphql/queries'
import { Order, OrderResponse } from '../typings';


const useOrders = () => {
    const { loading, error, data } = useQuery(GET_ORDERS);
    const [orders,setOrders] = useState<Order[]>([])

    useEffect(() =>{
      if(!data) return
      
      const orders: Order[] = data.getOrders.map(({value}: OrderResponse) => ({
        carrier: value.carrier,
        createdAt: value.createdAt,
        shippingCost: value.shippingCost,
        trackingId: value.trackingId,
        trackingItems: value.trackingItems,
        Adress:value.Adress,
        City: value.City,
        Lng: value.Lat,
        Lat: value.Lat,
      }))
      setOrders(orders)
    },[data])

  return {loading,error, orders}
}

export default useOrders
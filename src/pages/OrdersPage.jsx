import { Link } from 'react-router'
import { useCart } from '../hooks/useCart.js'

function OrdersPage() {
  const { orders } = useCart()

  if (orders.length === 0) {
    return (
      <p className="muted">
        No orders yet. <Link to="/">Browse vendors</Link>
      </p>
    )
  }

  return (
    <section>
      <h2 className="section-title">My orders</h2>
      <ul className="order-list">
        {orders.map((order) => (
          <li key={order.id} className="card order">
            <h3>Order for {order.name}</h3>
            <p className="muted">
              Mahallah {order.mahallah} · Pickup {order.pickupTime}
            </p>
            <ul>
              {order.items.map((line) => (
                <li key={line.item.id}>
                  {line.qty} × {line.item.name}
                </li>
              ))}
            </ul>
            <p className="order-total">Total: RM {order.total.toFixed(2)}</p>
          </li>
        ))}
      </ul>
    </section>
  )
}

export default OrdersPage
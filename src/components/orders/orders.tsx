import Link from "next/link";
import { ArrowRightIcon } from "@heroicons/react/20/solid";
import { getOrders } from "@/lib";

export default async function Orders() {
  const orders = await getOrders();

  if (orders === null || orders === undefined || orders.length === 0)
    return null;

  return (
    <section className="ml-4 overflow-hidden">
      <ul className="no-scrollbar w-full space-x-4 overflow-auto whitespace-nowrap pr-4">
        {orders.map((order) => (
          <li key={order.id} className="inline-block">
            <Link
              href={`/account/order?id=${order.id}`}
              className="group relative inline-block h-96 w-96 rounded-xl border"
            >
              <div className="absolute bottom-0 left-0 right-0 flex w-full justify-between gap-4 rounded-b-xl p-8 transition group-hover:bg-gray-100">
                <div>
                  <h3>
                    Order
                    <span className="ml-1 font-bold">
                      {order.id.toUpperCase()}
                    </span>
                  </h3>
                  <p>{order.ordered}</p>
                  <p className="font-bold">{order.sum} €</p>
                </div>

                <ArrowRightIcon className="h-4 w-4 text-accent" />
              </div>
            </Link>
          </li>
        ))}
      </ul>
    </section>
  );
}

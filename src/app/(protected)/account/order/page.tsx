import { redirect } from "next/navigation";
import { getProducts } from "@/lib";
import { ArrowRightIcon } from "@heroicons/react/20/solid";
import { CreditCardIcon } from "@heroicons/react/24/outline";
import Link from "next/link";

const orderData = [
  {
    id: "xyz",
    ordered: new Date().toLocaleDateString("de-DE", {
      weekday: "long",
      year: "numeric",
      month: "long",
      day: "numeric",
    }),
    products: ["1", "3", "4"],
  },
];

export default async function OrderPage({
  searchParams,
}: {
  searchParams: { id: string };
}) {
  const order = orderData.find(
    (currentOrder) => currentOrder.id === searchParams.id,
  );

  if (order === null || order === undefined) return redirect("/account");

  const products = await getProducts(order.products);

  return (
    <div>
      <div className="mx-4 mt-4 grid gap-8">
        <section>
          <div className="flex flex-wrap justify-between gap-4">
            <div className="flex items-center gap-2">
              <h1 className="inline-block bg-gray-100 px-1.5 py-1">
                Order <b>{order.id.toUpperCase()}</b>
              </h1>
            </div>

            <div className="flex gap-2">
              <button>Contact</button>
              <button className="text-red-400">Return</button>
              <button className="text-red-400">Cancel Order</button>
            </div>
          </div>

          <div>
            <div>{order.ordered}</div>
          </div>
        </section>

        <section>
          <ul className="no-scrollbar w-full space-x-4 overflow-auto whitespace-nowrap pr-4">
            {products.map((product) => (
              <li key={product.title} className="inline-block">
                <Link
                  href={product.path}
                  className="group relative inline-block h-96 w-96 rounded-xl border"
                >
                  <div className="absolute bottom-0 left-0 right-0 flex w-full justify-between gap-4 rounded-b-xl p-8 transition group-hover:bg-gray-100">
                    <div>
                      <h3 className="font-bold">{product.title}</h3>
                      <p>{product.price} €</p>
                    </div>

                    <ArrowRightIcon className="h-4 w-4 text-accent" />
                  </div>
                </Link>
              </li>
            ))}
          </ul>
        </section>

        <section className="grid gap-3">
          <div className="flex items-center gap-2">
            <span className="inline-block h-2 w-2 rounded-full bg-green-400"></span>
            Shipped
            <span className="text-gray-400">
              to Stressaddr. 1, 01234 Some City
            </span>
          </div>

          <div className="flex items-center gap-2">
            <span className="inline-block h-2 w-2 rounded-full bg-green-400"></span>
            Payed by
            <span className="flex items-center gap-1 text-gray-400">
              Credit Card, <CreditCardIcon className="h-4 w-4" /> Ending ***1234
            </span>
          </div>
        </section>

        <section>
          <h3 className="mb-4 border-b pb-4">Downloads</h3>
          <div>order-{order.id}.pdf</div>
          <div>return-label-{order.id}.pdf</div>
        </section>
      </div>
    </div>
  );
}

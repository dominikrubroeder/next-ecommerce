import { getFAQs } from "@/lib";
import Accordion from "@/components/Accordion";
import { unstable_noStore } from "next/cache";

export default async function ProductFAQs({
  productId,
}: {
  productId: string;
}) {
  unstable_noStore();

  const faqs = await getFAQs(productId);

  if (faqs === null || faqs === undefined || faqs.length === 0) return null;

  return (
    <ul className="space-y-4">
      {faqs.map((faq) => (
        <li key={faq.question}>
          <Accordion title={faq.question} icons="chevron">
            {faq.answer}
          </Accordion>
        </li>
      ))}
    </ul>
  );
}

import { getFAQs } from "@/lib";
import Accordion from "@/components/accordion";

export default async function ProductFaq({ productId }: { productId: string }) {
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

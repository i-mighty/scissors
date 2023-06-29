import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "~/shadcn/ui/accordion";
import React from "react";

export function Faq() {
  return (
    <Accordion type="single" collapsible className="w-full">
      <h1>FAQs</h1>
      <AccordionItem value="item-1">
        <AccordionTrigger>How does URL shortening work?</AccordionTrigger>
        <AccordionContent>
          URL shortening works by taking a long URL and creating a shorter,
          condensed version that redirects to the original URL. When a user
          clicks on the shortened link, they are redirected to the intended
          destination.
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-2">
        <AccordionTrigger>
          Is it necessary to create an account to use the URL shortening
          service?
        </AccordionTrigger>
        <AccordionContent>
          No, you can access the basic feature without an account.
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-3">
        <AccordionTrigger>
          Are the shortened links permanent? Will they expire?
        </AccordionTrigger>
        <AccordionContent>Yes. They do not expire</AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-4">
        <AccordionTrigger>
          Are there any limitations on the number of URLs I can shorten?
        </AccordionTrigger>
        <AccordionContent>
          No, You can shorten as many as you need.
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-5">
        <AccordionTrigger>
          Can I customize the shortened URLs to reflect my brand or content?
        </AccordionTrigger>
        <AccordionContent>Yes. You can.</AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-6">
        <AccordionTrigger>
          Can I track the performance of my shortened URLs?
        </AccordionTrigger>
        <AccordionContent>
          Yes. There is analytics for you to track that.
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-7">
        <AccordionTrigger>
          How secure is the URL shortening service? Are the shortened links
          protected against spam or malicious activity?
        </AccordionTrigger>
        <AccordionContent>Yes. They are secure</AccordionContent>
      </AccordionItem>
    </Accordion>
  );
}
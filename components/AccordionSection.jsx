'use client'
import * as Accordion from '@radix-ui/react-accordion';
import { ChevronDownIcon } from '@radix-ui/react-icons';

export const AccordionSection = () => {
  return (
    <div className="">
      <Accordion.Root
        className="w-full"
        type="single"
        collapsible
        // orientation="horizontal"
      >
        <Accordion.Item value="item-1" className=" overflow-hidden">
          <Accordion.Header className="flex">
            <Accordion.Trigger className="flex flex-1 items-center justify-between py-4 font-medium transition-all [&[data-state=open]>svg]:rotate-180">
              <span>Trigger text - 1</span>
              <ChevronDownIcon
                className="h-4 w-4 shrink-0 transition-transform duration-200 "
                aria-hidden
              />
            </Accordion.Trigger>
          </Accordion.Header>
          <Accordion.Content className="AccordionContent overflow-hidden text-sm transition-all data-[state=closed]:animate-accordion-up data-[state=open]:animate-accordion-down">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae odio
            quod dolor officia magni modi aspernatur nobis! Consequatur expedita
            ex reiciendis vitae eum! Atque ut deserunt nostrum, accusamus nisi
            debitis.
          </Accordion.Content>
        </Accordion.Item>

        <Accordion.Item value="item-2" className=" overflow-hidden">
          <Accordion.Header className="flex">
            <Accordion.Trigger className="flex flex-1 items-center justify-between py-4 font-medium transition-all [&[data-state=open]>svg]:rotate-180">
              <span>Trigger text - 2</span>
              <ChevronDownIcon
                className="h-4 w-4 shrink-0 transition-transform duration-200"
                aria-hidden
              />
            </Accordion.Trigger>
          </Accordion.Header>
          <Accordion.Content className="overflow-hidden text-sm transition-all data-[state=closed]:animate-accordion-up data-[state=open]:animate-accordion-down">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae odio
            quod dolor officia magni modi aspernatur nobis! Consequatur expedita
            ex reiciendis vitae eum! Atque ut deserunt nostrum, accusamus nisi
            debitis.
          </Accordion.Content>
        </Accordion.Item>

        <Accordion.Item value="item-3" className=" overflow-hidden">
          <Accordion.Header className="flex">
            <Accordion.Trigger className="flex flex-1 items-center justify-between py-4 font-medium transition-all [&[data-state=open]>svg]:rotate-180">
              <span>Trigger text - 3</span>
              <ChevronDownIcon
                className="h-4 w-4 shrink-0 transition-transform duration-200"
                aria-hidden
              />
            </Accordion.Trigger>
          </Accordion.Header>
          <Accordion.Content className="overflow-hidden text-sm transition-all data-[state=closed]:animate-accordion-up data-[state=open]:animate-accordion-down">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae odio
            quod dolor officia magni modi aspernatur nobis! Consequatur expedita
            ex reiciendis vitae eum! Atque ut deserunt nostrum, accusamus nisi
            debitis.
          </Accordion.Content>
        </Accordion.Item>
      </Accordion.Root>
    </div>
  );
}

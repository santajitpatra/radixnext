import { AccordionSection } from '@/components/AccordionSection'
import { ChatBubbleIcon } from '@radix-ui/react-icons'
import { Badge, Box, Card, Container, Flex, Heading, Text } from '@radix-ui/themes'
import React from 'react'

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between">
      <Container size="1">
        <Flex direction="column" pb="4">
          <Heading>Coding Issue Tracker</Heading>
          <Text color="gray">Here you can find the issues relevant to your certain project.</Text>
        </Flex>

        <Flex gap="4" direction="column">
          <Card>
            <Flex gap="1" direction="column">
              <Text>Issue #24 - Button Is Wrong Color</Text>
              <Flex gap="2">
                <Badge color="orange">Devops</Badge>
                <Badge color="blue">UI</Badge>
              </Flex>
              <Text>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis ipsam quae accusantium. Veritatis delectus corporis magnam ullam aperiam dignissimos id dolor iusto, odio deserunt sequi cumque odit ad beatae laudantium!              </Text>
              <Flex justify="between" pt="1">
                <Flex align="center"> {/* align icon to our text */}
                  <ChatBubbleIcon />
                  <Text color="gray" ml="2" size="1">3 Comments</Text>
                </Flex>
              </Flex>
            </Flex>
          </Card>

          <Card>
            <Flex gap="1" direction="column">
              <Text>Issue #24 - Button Is Wrong Color</Text>
              <Flex gap="2">
                <Badge color="red">Backend</Badge>
              </Flex>
              <Text>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis ipsam quae accusantium. Veritatis delectus corporis magnam ullam aperiam dignissimos id dolor iusto, odio deserunt sequi cumque odit ad beatae laudantium!
              </Text>
              <Flex justify="between" pt="1">
                <Flex align="center"> {/* align icon to our text */}
                  <ChatBubbleIcon />
                  <Text color="gray" ml="2" size="1">3 Comments</Text>
                </Flex>
              </Flex>
            </Flex>
          </Card>

          <Card>
            <Flex gap="1" direction="column">
              <Text>Issue #24 - Button Is Wrong Color</Text>
              <Flex gap="2">
                <Badge color="green">Hacking Team</Badge>
              </Flex>
              <Text>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis ipsam quae accusantium. Veritatis delectus corporis magnam ullam aperiam dignissimos id dolor iusto, odio deserunt sequi cumque odit ad beatae laudantium!              </Text>
              <Flex justify="between" pt="1">
                <Flex align="center"> {/* align icon to our text */}
                  <ChatBubbleIcon />
                  <Text color="gray" ml="2" size="1">3 Comments</Text>
                </Flex>
              </Flex>
            </Flex>
          </Card>
        </Flex>
      </Container>
    
      <Container size={"1"} className=' mt-10 rounded-xl p-4 w-full'>
        <AccordionSection />
      </Container>
    </main>
  )
}

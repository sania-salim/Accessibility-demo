import { Button, Description, Form, Input, SubscribeSection, Title } from "./Subscription.style"


export const Subscription = () => {
  return (
    <SubscribeSection>
    <Title>Join our newsletter</Title>
    <Description>Weekly whale resources straight to your inbox</Description>
    <Form>
      <Input type="email" placeholder="Your email" />
      <Button type="submit">Sign Up</Button>
    </Form>
  </SubscribeSection>
  )
}

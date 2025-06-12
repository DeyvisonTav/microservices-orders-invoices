import { orders } from "./channels/orders.ts";

orders.consume("orders", (message) => {
  console.log(message?.content.toString());

  if (!message) {
    return null;
  }

  orders.ack(message);
}, {
  noAck: false,
});
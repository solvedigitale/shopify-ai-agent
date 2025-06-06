import { shopify } from "../shopify.server";

export async function loader({ request }) {
  return shopify.login(request);
}
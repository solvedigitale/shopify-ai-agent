import { shopify } from "../shopify.server";

export const loader = async ({ request }) => {
  const { admin } = await shopify.authenticate.admin(request);
  return null;
};
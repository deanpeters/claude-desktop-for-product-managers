import { defineConfig } from "astro/config";
import starlight from "@astrojs/starlight";

export default defineConfig({
  site: "https://cd4pms.deanpeters.com",
  integrations: [
    starlight({
      title: "Claude Desktop for Product Managers",
      description:
        "A hands-on course teaching Product Managers to use Claude Desktop on real product work — from raw discovery to a launched product.",
      sidebar: [
        {
          label: "Getting Set Up",
          autogenerate: { directory: "getting-set-up" }
        },
        {
          label: "Fundamentals",
          autogenerate: { directory: "fundamentals" }
        },
        {
          label: "Problem Space",
          autogenerate: { directory: "problem-space" }
        },
        {
          label: "Shaping the Opportunity",
          autogenerate: { directory: "shaping-the-opportunity" }
        },
        {
          label: "Delivery Artifacts",
          autogenerate: { directory: "delivery-artifacts" }
        },
        {
          label: "Advanced Workflows",
          autogenerate: { directory: "advanced-workflows" }
        },
        {
          label: "Taking It to Market",
          autogenerate: { directory: "taking-it-to-market" }
        }
      ]
    })
  ]
});

import { defineConfig } from "astro/config";
import starlight from "@astrojs/starlight";

// Starlight v0.39+ sidebar syntax: groups wrap autogenerate in an items array.
const moduleGroup = (label, directory) => ({
  label,
  items: [{ autogenerate: { directory } }]
});

export default defineConfig({
  site: "https://cdesktop.deanpeters.com",
  integrations: [
    starlight({
      title: "Claude Desktop for Product Managers",
      description:
        "A hands-on course teaching Product Managers to use Claude Desktop on real product work — from raw discovery to a launched product.",
      sidebar: [
        moduleGroup("Getting Set Up", "getting-set-up"),
        moduleGroup("Fundamentals", "fundamentals"),
        moduleGroup("Problem Space", "problem-space"),
        moduleGroup("Shaping the Opportunity", "shaping-the-opportunity"),
        moduleGroup("Delivery Artifacts", "delivery-artifacts"),
        moduleGroup("Advanced Workflows", "advanced-workflows"),
        moduleGroup("Taking It to Market", "taking-it-to-market")
      ]
    })
  ]
});

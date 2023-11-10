// sanity.config.js
import { defineConfig } from "sanity";
import { deskTool } from "sanity/desk";
import schemas from "./schemas/schema";
import { visionTool } from "@sanity/vision";
import deskStructure from "./deskStructure";

export default defineConfig({
  name: "default",
  title: "reginald-sylvester-ii",
  basePath: "/admin",
  projectId: "6t6xrol9",
  dataset: "production",
  plugins: [deskTool(deskStructure), visionTool()],
  schema: {
    types: schemas,
  },
});

import React from "react";
import Layout from "@theme/Layout";
import ToolsHub from "@site/src/components/tools/ToolsHub";

/**
 * Docusaurus page entry point — intentionally thin.
 * All logic lives in ToolsHub and its children.
 * Route: /tools/
 */
export default function ToolsPage(): JSX.Element {
  return (
    <Layout
      title="Regulatory Tools"
      description="Free regulatory tools for medical device manufacturers, importers, distributors, and RA consultants — classification, checklists, gap analysis, and more across 19 jurisdictions."
    >
      <ToolsHub />
    </Layout>
  );
}

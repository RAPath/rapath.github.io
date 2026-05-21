import React from "react";
import Layout from "@theme/Layout";
import "@site/src/components/tools/tools.css";
import { Classifier } from "@site/src/components/tools/Classifier";

/**
 * Standalone classifier page — thin Docusaurus wrapper.
 * All logic lives in components/tools/Classifier.tsx which is
 * also used inside the ToolsHub, so both routes stay in sync automatically.
 * Route: /tools/classifier
 */
export default function ClassifierPage(): JSX.Element {
  return (
    <Layout
      title="Device Classifier — 19 Jurisdictions"
      description="Indicative medical device classification, documentation checklist, and pathway timelines across all 19 RAPath jurisdictions. Includes Quick Screener and SaMD track."
    >
      <div className="th">
        <div className="th-body" style={{ maxWidth: 860, margin: "0 auto" }}>
          <Classifier />
        </div>
      </div>
    </Layout>
  );
}

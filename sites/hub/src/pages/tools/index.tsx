import React from "react";
import Layout from "@theme/Layout";
import ToolsHub from "@site/src/components/tools/ToolsHub";

/**
 * Docusaurus page entry point — intentionally thin.
 * All logic lives in ToolsHub and its children.
 * Route: /tools/
 *
 * Supports hash-based deep linking:
 *   /tools/#classifier  → opens Device Classification Wizard
 *   /tools/#flow        → opens Regulatory Process Flow
 *   /tools/#compare     → opens Jurisdiction Comparison Tables
 *   /tools/#gantt       → opens Regulatory Timeline Planner
 *   /tools/#glossary    → opens Acronym & Glossary Lookup
 *   /tools/#mdsap       → opens MDSAP Value Map
 *   /tools/#ecomap      → opens Economic Operator Map
 *   /tools/#gspr        → opens GSPR / Essential Req. Mapper
 *   /tools/#clinical    → opens Clinical Evidence Calculator
 *   /tools/#label       → opens Labelling Requirements Checker
 *   /tools/#pmo         → opens Post-Market Obligations Calendar
 *   /tools/#fee         → opens Regulatory Fee Estimator
 *   /tools/#import      → opens Import Requirements Checker
 *   /tools/#distrib     → opens Distributor Obligations Guide
 *   /tools/#checklist   → opens Submission Readiness Checklist
 *   /tools/#gap         → opens Regulatory Gap Analysis
 *   /tools/#ivd         → opens IVD Classification Track
 *   /tools/#samd        → opens SaMD Decision Tree
 *   /tools/#cyber       → opens Cybersecurity Requirements
 */
export default function ToolsPage(): JSX.Element {
  return (
    <Layout
      title="Regulatory Tools"
      description="19 free regulatory tools for medical device manufacturers, importers, distributors, and RA consultants — classification, checklists, gap analysis, and more across 24 jurisdictions."
    >
      <ToolsHub />
    </Layout>
  );
}

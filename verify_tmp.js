const parser = require("@babel/parser");
const fs = require("fs");
const code = fs.readFileSync("sites/hub/src/pages/index.tsx", "utf8");
try {
  parser.parse(code, { sourceType: "module", plugins: ["jsx", "typescript"] });
  console.log("OK - syntax valid, length", code.length);
} catch (e) {
  console.log("ERROR:", e.message);
}

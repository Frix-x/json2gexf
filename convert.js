const fs = require("fs");

var json = require("./fbScrap.json");

fs.writeFileSync("nodes.csv", "id;label;dataUrl\n"
    + json.nodes.map((el,i) => [i, el.name, el.dataUrl].join(";")).join("\n"));
fs.writeFileSync("edges.csv", "source;target\n"
    + json.links.map(el => [el.source, el.target].join(";")).join("\n"));

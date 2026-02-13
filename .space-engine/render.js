import fs from "fs";

const width = 800;
const height = 200;

let asteroids = [];
for (let i = 0; i < 50; i++) {
  asteroids.push({
    x: Math.random() * width,
    y: Math.random() * 120,
    size: 6 + Math.random() * 6
  });
}

let svg = `
<svg width="${width}" height="${height}" viewBox="0 0 ${width} ${height}" xmlns="http://www.w3.org/2000/svg">
<style>
.asteroid { fill: #39d353; }
.laser { stroke: #00ffff; stroke-width: 2; }
.ship { fill: white; }
</style>

<rect width="100%" height="100%" fill="#0d1117"/>
`;

asteroids.forEach(a => {
  svg += `<circle class="asteroid" cx="${a.x}" cy="${a.y}" r="${a.size}"/>`;
});

svg += `
<polygon class="ship" points="380,150 420,150 400,120"/>

<line class="laser" x1="400" y1="120" x2="400" y2="20">
  <animate attributeName="opacity" values="1;0;1" dur="0.5s" repeatCount="indefinite"/>
</line>

</svg>
`;

fs.mkdirSync("dist", { recursive: true });
fs.writeFileSync("dist/space-asteroids.svg", svg);

const fs = require('fs');
let content = fs.readFileSync('src/components/agence/Agence.jsx', 'utf8');

// Replace class= with className=
content = content.replace(/ class="/g, ' className="');
// Replace SVG/HTML attributes
content = content.replace(/ fill-rule=/g, ' fillRule=');
content = content.replace(/ clip-rule=/g, ' clipRule=');
content = content.replace(/ stroke-width=/g, ' strokeWidth=');
content = content.replace(/ fill-opacity=/g, ' fillOpacity=');
content = content.replace(/ color-interpolation-filters=/g, ' colorInterpolationFilters=');
content = content.replace(/ shape-rendering=/g, ' shapeRendering=');
content = content.replace(/ flood-opacity=/g, ' floodOpacity=');
content = content.replace(/style="mix-blend-mode:overlay"/g, 'style={{mixBlendMode:"overlay"}}');

fs.writeFileSync('src/components/agence/Agence.jsx', content);
console.log('Fixed Agence.jsx');

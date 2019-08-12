---
inject: true
to: package.json
after: scripts
skip_if: new:component
---
    "dev": "crema-toolbox-web dev",
    "new:component": "crema-toolbox-web new component",
    "start": "crema-toolbox-web start",
    "test:unit": "crema-toolbox-web test",
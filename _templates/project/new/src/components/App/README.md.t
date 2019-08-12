---
to: src/components/App/README.md
---
# `<App />`

For reference, we provide a simple Todo app as a good starting point. We've wrapped it up in our prescribed component directory structure which includes:

- `index.css`: component styles
- `index.tsx`: component code
- `README.md`: component documentation (hey, that's me!)
- `stories.tsx`: component playground (`npm run test:playground`)
- `test.tsx`: component tests (`npm run test:unit`)

## Example

![App](../../../.loki/reference/chrome_App_default.png)

> Image location: [`.loki/reference/chrome_App_default.png`](../../../.loki/reference/chrome_App_default.png)
> 
> To regenerate: 
> 1. `npm run test:playground` (skip if running)
> 1. `npm run test:visual:update -- --storiesFilter="^App default\$"`
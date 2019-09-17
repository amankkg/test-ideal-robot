# test-ideal-robot

Live demo https://test-ideal-robot.amankkg.now.sh/

Built using React, TypeScript, Next.js & Styled-Components.
Tested using Jest, Cypress and Testing-Library.

Project structure:

- `./__tests__` - page tests, e2e tests
- `./core` - domain definition and business logic
- `./atoms` - foundational building blocks that can't be broken down any further
- `./molecules` - simple groups of UI elements functioning together as a unit
- `./organisms` - complex UI components composed of groups of molecules/atoms/other organisms
- `./templates` - page-level objects that place components into a layout and articulate the design’s underlying content structure
- `./pages` - intersection of features and final UI combining all above and filled with content

Unit tests have a mask of `**.tets.ts` for plain TypeScript and `**.test.tsx` for React code.
`./pages` do not contain test files (limited by Next.js) so their tests are in `./__test__` folder.
Named exports are preferred, excluding `./pages` (limited by Next.js).

Routes:

- `/` - products list
- `/p/new` - add new product
- `/p/:id` - product details
- `/p/:id/edit` - edit product
- `/p/:id/remove` - remove product

- `/wh` - warehouses list
- `/wh/new` - add new warehouse
- `/wh/:id` - warehouse details
- `/wh/:id/edit` - edit warehouse
- `/wh/:id/remove` - remove warehouse

- `/login` - login form
- `/insights` - statistics

TODOs:

- use async/await
- use lenses and/or FP helper lib
- revisit language to be ubiquitous (goods, products, stocks, etc.)
- create custom errors for easier matching of them in code and in tests
- stricten types with read-only wrapper

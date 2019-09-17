# test-ideal-robot

Live demo https://test-ideal-robot.amankkg.now.sh/

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

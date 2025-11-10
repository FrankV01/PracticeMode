# Next.js routing + server components


2. Keep app/ clean — it’s your entry point, not your logic

app/ should basically only contain:

route definitions

Server Components as shells

layouts

metadata

page-level assembly

Not your business logic, not your fetch clients, not your validation, not your database calls.
Keep app/ slim or it becomes untestable and coupled to Next.
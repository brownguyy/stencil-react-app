import { createServer } from "miragejs";

createServer({
  routes() {
    this.namespace = "api";
    this.get("/todos", () => {
      return {
        todo: [
          { id: 1, name: "Tailwind" },
          { id: 2, name: "Lerna" },
          { id: 3, name: "Stencil" },
          { id: 4, name: "React" },
        ],
      };
    });

    let newId = 5;
    this.post("/todos", (schema, request) => {
      let attrs = JSON.parse(request.requestBody);
      attrs.id = newId++;

      return { todo: attrs };
    });
  },
});

// 9595809055

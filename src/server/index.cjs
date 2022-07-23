const path = require("path");
const Fastify = require("fastify");

const fastify = Fastify({
  logger: true,
});

fastify.register(require("@fastify/static"), {
  root: path.join(__dirname, "..", "..", "dist"),
});

fastify.listen({ port: 8080 }, function (err, address) {
  if (err) {
    fastify.log.error(err);
    process.exit(1);
  }

  console.log(`Server is now listening on ${address}`);
});

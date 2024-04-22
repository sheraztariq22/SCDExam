const fs = require("fs");
const path = require("path");

// Function to create Dockerfiles for each backend module
function createDockerfile(modulePath, port) {
  const dockerfileContent = `

FROM node:16

WORKDIR /usr/src/app

COPY package*.json ./

RUN npm install

COPY . .

# Make port ${port} available to the world outside this container
EXPOSE ${port}

# Define environment variable
ENV NODE_ENV production

# Command to run the app
CMD ["npm", "start"]
`;
  const dockerfilePath = path.join(modulePath, "Dockerfile");
  fs.writeFileSync(dockerfilePath, dockerfileContent);
}

const backendModules = {
  "catalog-management": 3001,
  "customer-support": 3002,
  "order-processing": 3003,
};

for (const [module, port] of Object.entries(backendModules)) {
  createDockerfile(path.join(backendPath, module), port);
}

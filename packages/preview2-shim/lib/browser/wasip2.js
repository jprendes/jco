import * as wasip2 from "./index.js";

const world = {};
for (let module of Object.keys(wasip2)) {
    for (let key of Object.keys(wasip2[module])) {
        if (!key.startsWith("_")) {
            world[`wasi:${module}/${key}`] = wasip2[module][key];
        }
    }
}

export default world;

import { createConnection } from "typeorm";

import User from "./entities/User";
import Keyboard from "./entities/Keyboard";

const connection = createConnection({
    type: "postgres",
    host: "localhost",
    port: 5432,
    username: "postgres",
    password: "postgres",
    database: "KeebClack",
    entities: [
        User,
        Keyboard
    ],
    synchronize: true,
    logging: true
});

export default connection;
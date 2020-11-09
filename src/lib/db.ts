import { Pool } from "pg";
export default new Pool({
  user: "angelo",
  host: "localhost",
  database: "library",
  password: null,
  port: 5432,
});

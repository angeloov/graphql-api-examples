const books = [
  {
    title: "Ciaone",
    yearOfPublishment: 1999,
    ISBN: 9832897478945,
    author: "Gianni Guittone",
  },
  {
    title: "Ficone",
    yearOfPublishment: 3844,
    ISBN: 9832897478945,
    author: "Gianni Guittone",
  },
  {
    title: "Ciaone",
    yearOfPublishment: 2005,
    ISBN: 9832897478945,
    author: "Gianni Guittone",
  },
  {
    title: "Asdasjidijsd",
    yearOfPublishment: 2021,
    ISBN: 9832897478945,
    author: "Dante Alighieri",
  },
  {
    title: "Ciaone",
    yearOfPublishment: 1950,
    ISBN: 9832897478945,
    author: "Gianni Marchigiani",
  },
];

import joinMonster from "join-monster";
import db from "../lib/db";

export default {
  Query: {
    books(parent: any, args: any, ctx: any, resolveInfo: any) {
      return joinMonster(resolveInfo, ctx, async (sql: any) => {
        console.log(sql);
        let res = await db.query(sql);
        return res;
      });
    },
  },
};

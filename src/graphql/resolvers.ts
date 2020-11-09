import joinMonster from "join-monster";
import db from "../lib/db";

export default {
  Query: {
    allBooks(parent: any, args: any, ctx: any, resolveInfo: any) {
      return joinMonster(resolveInfo, ctx, async (sql: any) => {
        console.log(sql);
        
        const res = await db.query(sql);
        return res;
      });
    },
    book(parent: any, args: any, ctx: any, resolveInfo: any) {
      return joinMonster(resolveInfo, ctx, async (sql: any) => {
        console.log(sql);

        const res = await db.query(sql);
        return res;
      });
    },
  },
};

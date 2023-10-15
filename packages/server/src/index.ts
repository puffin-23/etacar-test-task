import { initTRPC} from "@trpc/server"

export const t = initTRPC.create()

const appRouter = t.router({
   ping:t.procedure.query(() => {
      return "pong"
   })
})
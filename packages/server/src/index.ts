import { inferAsyncReturnType, initTRPC} from "@trpc/server"
import { createExpressMiddleware, CreateExpressContextOptions } from '@trpc/server/adapters/express'
import express from 'express'

const createContext = ({
   req,
   res,}: CreateExpressContextOptions) => ({})
 type Context = inferAsyncReturnType<typeof createContext>
 
const t = initTRPC.context<Context>().create()

const appRouter = t.router({
   ping:t.procedure.query(() => {
      return "pong"
   })
})

const app = express()

app.use('/trpc', createExpressMiddleware({
   router: appRouter,
   createContext,
}),
)

app.listen(4000, () => {
   console.log('Server started.');
})





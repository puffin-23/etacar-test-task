import { inferAsyncReturnType, initTRPC} from "@trpc/server"
import { createExpressMiddleware, CreateExpressContextOptions } from '@trpc/server/adapters/express'
import express from 'express'
import { JobTitleService } from "./services/JobTitleService"
import { JobTitle } from '@prisma/client'

const createContext = ({
   req,
   res,}: CreateExpressContextOptions) => ({})
 type Context = inferAsyncReturnType<typeof createContext>
 
const t = initTRPC.context<Context>().create()

const appRouter = t.router({
   ping:t.procedure.query(() => {
      return "pong"
   }),
   createJobTitle:t.procedure.mutation(() => {
      const jobTitleService = new JobTitleService()
      const jobTitle = jobTitleService.create({name: 'Developer'} as JobTitle)
      return jobTitle
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






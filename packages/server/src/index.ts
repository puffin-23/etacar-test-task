import { createExpressMiddleware } from '@trpc/server/adapters/express'
import express from 'express'
import { appRouter } from "./routers/app"
import { createContext } from "./context"

const app = express()

app.use('/trpc', createExpressMiddleware({
   router: appRouter,
   createContext,
}),
)

app.listen(4000, () => {
   console.log('Server started.');
})






import { router, procedure } from "../trpc"
import { JobTitleService } from "../services/JobTitleService"
import { JobTitle } from "@prisma/client"
import { employeeRouter } from "./employee"
import { jobTitleRouter } from "./jobTitle"

export const appRouter = router({
   ping: procedure.query(() => {
      return "pong"
   }),
   jobTitle: jobTitleRouter,
   employee: employeeRouter
})
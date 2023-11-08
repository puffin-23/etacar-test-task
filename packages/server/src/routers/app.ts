import { router, procedure } from "../trpc"
import { JobTitleService } from "../services/JobTitleService"
import { JobTitle } from "@prisma/client"

export const appRouter = router({
   ping: procedure.query(() => {
      return "pong"
   }),
   createJobTitle: procedure.mutation(() => {
      const jobTitleService = new JobTitleService()
      const jobTitle = jobTitleService.create({name: 'Developer'} as JobTitle)
      return jobTitle
   })
})
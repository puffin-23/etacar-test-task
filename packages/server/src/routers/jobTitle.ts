import { JobTitleService } from "../services/JobTitleService"
import { router, procedure } from "../trpc"
import { JobTitle } from "@prisma/client"
import { z } from "zod"

export const jobTitleRouter = router({
   create: procedure
      .input(z.object({id: z.string().uuid().optional(), name: z.string()}))
      .mutation((value) => {
         console.log(value);
         const jobTitleService = new JobTitleService()
         const jobTitle = jobTitleService.create(value.input as unknown as JobTitle)
         return jobTitle
      }),
   delete: procedure
   .input(z.object({id: z.string().uuid()}))
   .query((value) => {
      const jobTitleService = new JobTitleService()
      const jobTitle = jobTitleService.delete(parseInt(value.input.id))
      return jobTitle
   })
})

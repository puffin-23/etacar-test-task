import { CompanyService } from "../services/CompanyService"
import { router, procedure } from "../trpc"
import { Company } from "@prisma/client"
import { z } from "zod"

export const companyRouter = router({
   create: procedure
      .input(z.object({id: z.string().uuid().optional(), name: z.string()}))
      .mutation((value) => {
         console.log(value);
         const companyService = new CompanyService()
         const company = companyService.create(value.input as unknown as Company)
         return company
      }),
   delete: procedure
   .input(z.object({id: z.string().uuid()}))
   .query((value) => {
      const companyService = new CompanyService()
      const company = companyService.delete(parseInt(value.input.id))
      return company
   })
})

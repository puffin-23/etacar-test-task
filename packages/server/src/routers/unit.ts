import { UnitService } from "../services/UnitService"
import { router, procedure } from "../trpc"
import { Unit } from "@prisma/client"
import { z } from "zod"

export const unitRouter = router({
   create: procedure
      .input(z.object({
         id: z.string().uuid().optional(), 
         name: z.string(),
         headId: z.string(),
         description: z.string()
      }))
      .mutation((value) => {
         console.log(value);
         const unitService = new UnitService()
         const unit = unitService.create(value.input as unknown as Unit)
         return unit
      }),
   delete: procedure
   .input(z.object({id: z.string().uuid()}))
   .query((value) => {
      const unitService = new UnitService()
      const unit = unitService.delete(parseInt(value.input.id))
      return unit
   })
})


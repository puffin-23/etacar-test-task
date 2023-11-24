import { EmployeeService } from "../services/EmployeeService"
import { router, procedure } from "../trpc"
import { Employee } from "@prisma/client"
import { z } from "zod"

export const employeeRouter = router({
   create: procedure
   .input(z.object({
      id: z.string().uuid().optional(), 
      name: z.string(),
      lastname: z.string(),
      head: z.string().optional(),
      unitId: z.string(),
      titleId: z.string(),
      companyId: z.string()
   }))
   .mutation((value) => {
      console.log(value)
      const employeeService = new EmployeeService()
      const employee = employeeService.create(value.input as unknown as Employee)
      return employee
   }),
   delete: procedure
   .input(z.object({id: z.string().uuid()}))
   .query((value) => {
      const employeeService = new EmployeeService()
      const employee = employeeService.delete(parseInt(value.input.id))
      return employee
   })
})
import { PrismaClient, Employee } from '@prisma/client'

const prisma = new PrismaClient()

export class EmployeeService {
   async create(employeeData: Employee): Promise<Employee> {
      return prisma.employee.create({data: employeeData})
   }
   async delete(employeeId: number): Promise<void> {
      prisma.employee.delete({where: {id: employeeId}})
   }
}
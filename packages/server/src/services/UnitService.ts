import { PrismaClient, Employee, Unit } from '@prisma/client'

const prisma = new PrismaClient()

export class UnitService {
   async create(unitData: Unit): Promise<Unit> {
      return prisma.unit.create({data: unitData})
   }
//Why id but not name?
   async delete(unitId: number): Promise<void> {
      prisma.unit.delete({where: {id: unitId}})
   }
   async assignHaed(unitId: number, employeeId: number): Promise<Unit> {
      return prisma.unit.update({ where: {id: unitId}, data: {headId: employeeId}})
   }
}
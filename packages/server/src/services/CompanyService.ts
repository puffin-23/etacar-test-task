import { PrismaClient, Company } from '@prisma/client'

const prisma = new PrismaClient()

export class CompanyService {
   async create(companyData: Company): Promise<Company> {
      return prisma.company.create({data: companyData})
   }
   async delete(companyId: number): Promise<void> {
      prisma.company.delete({where: {id: companyId}})
   }
}
import { PrismaClient, JobTitle} from '@prisma/client'

const prisma = new PrismaClient()

export class JobTitleService {
   async create(jobTitleData: JobTitle): Promise<JobTitle> {
      return prisma.jobTitle.create({data: jobTitleData})
   }
   async delete(jobTitleId: number): Promise<void> {
      prisma.jobTitle.delete({where: {id: jobTitleId}})
   }
}
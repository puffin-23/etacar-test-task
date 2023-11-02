import { PrismaClient, JodTitle} from '@prisma/client'

const prisma = new PrismaClient()

export class JobTitleService {
   async create(jobTitleData: JodTitle): Promise<JodTitle> {
      return prisma.jodTitle.create({data: jobTitleData})
   }
   async delete(jobTitleId: number): Promise<void> {
      prisma.jodTitle.delete({where: {id: jobTitleId}})
   }
}
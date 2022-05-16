import { prisma } from "../lib/prisma";
export const resolvers = {
    Query: {
        users: async (_parent, _args, _context) => await prisma.user.findMany()
      },

    Mutation: {
        createuser: async (_parent, {firstname, lastname, email, mobile}, _context) => {
            await prisma.user.create({ data:
                        {   firstname,
                            lastname,
                            email,
                            mobile
                        }
                    })
                }
            }
        }
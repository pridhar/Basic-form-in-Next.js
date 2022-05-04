import { NextApiRequest, NextApiResponse } from "next";
import { prisma } from "../../lib/prisma";

export default async function handler(req: NextApiRequest, res: NextApiResponse){
	const { firstname, lastname, email, mobile } = req.body
	if(firstname!='' && lastname!='' && email!=''){

		try {
			await prisma.user.create({
				data: {
					firstname,
					lastname,
					email,
					mobile
				}
			})
			res.status(200).json({message: '   Welcome ' + firstname})
			
		} catch (error) {
			res.status(400).json({message: 'Bad Request'})
		}
	}
	
}
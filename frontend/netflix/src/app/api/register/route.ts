import bcrypt from 'bcrypt';
import prismadb from '@/lib/prismadb';
import { NextResponse } from 'next/server';

export async function POST(req: Request, res: Response) {
    try {
        const reqBody = await req.json();
        const { email, name, password } = reqBody;

        const existingUser = await prismadb.user.findUnique({
            where: {
                email
            }
        })

        if (existingUser) {
            return NextResponse.json({ error: 'Email taken' }, {
                status: 400
            });
        }

        const hashedPassword = await bcrypt.hash(password, 12);

        const user = await prismadb.user.create({
            data: {
                email,
                name,
                hashedPassword,
                image: '',
                emailVerified: new Date(),
            }
        })

        return NextResponse.json(user);
    } catch (error) {
        return NextResponse.json({ message: `Something went wrong: ${error}` }, {
            status: 500
        });
    }
}
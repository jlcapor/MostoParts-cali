import { NextResponse } from "next/server";
import bcrypt from 'bcrypt';


import prisma from '@/lib/prismadb';

export async function POST(request: Request) {
    const body = await request.json();
    const {
        name, 
        surname, 
        email, 
        password
    } = body;
    const hashedPassword = await bcrypt.hash(password, 10)
    const newRegister = await prisma.user.create({
        data:{
            name,
            surname,
            email,
            hashedPassword
        }
    })
    return NextResponse.json(newRegister)
}

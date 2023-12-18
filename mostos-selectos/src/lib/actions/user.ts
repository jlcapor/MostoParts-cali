"use server";
import prisma from "@/db/prismadb";
import { z } from "zod";
import { getUserSchema, userSchema, userUpdateSchema } from "../validations/user";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";
import { Status } from "@prisma/client";

export async function addUserAction(rawInput: z.infer<typeof userSchema>) {
  const input = userSchema.parse(rawInput);
  const userWithSameEmail = await prisma.user.findUnique({
    where: {
      email: input.email,
    },
  });

  if (userWithSameEmail) {
    throw new Error("The email is already registered.");
  }

  await prisma.user.create({
    data: {
      name: input.name,
      surnames: input.surnames,
      email: input.email,
      phone: input.phone as string,
      password: input.password,
      roleId: Number(input.roleId),
      state: input.state as Status
    }
  })
  revalidatePath("/dashboard/users");
  redirect("/dashboard/users");
}



export async function updateUserAction(inputs: z.infer<typeof userUpdateSchema>) {
  const currentUser = await prisma.user.findUnique({
    where: {
      id: inputs.id,
    },
  });

  if (!currentUser) {
    throw new Error("User not found.")
  }
 
  const updateData: {
    name: string;
    surnames: string;
    email: string;
    phone: string;
    password: string;
    roleId: number;
    state: Status;
  } = {
    name: inputs.name !== "" ? inputs.name : currentUser?.name ?? "",
    surnames: inputs.surnames !== "" ? inputs.surnames : currentUser?.surnames ?? "",
    email: inputs.email !== "" ? inputs.email : currentUser?.email ?? "",
    phone: inputs.phone !== "" ? inputs.phone : currentUser?.phone ?? "",
    password: inputs.password !== "" ? inputs.password : currentUser?.password ?? "",
    roleId: Number(inputs.roleId),
    state: inputs.state as Status,
  };

  try {
    await prisma.user.update({
      where: {
        id: inputs.id,
      },
      data: {
        ...updateData,
      },
    });
  } catch (error) {
    return {
      message: `Error al actualizar el usuario ${error}`,
    };
  }

  revalidatePath("/dashboard/users");
  redirect("/dashboard/users");
}

export async function deleteUserAction(
  rawInput: z.infer<typeof getUserSchema>
) {
  const input = getUserSchema.parse(rawInput);

  const user = await prisma.user.findUnique({
    where: {
      id: input.id,
    },
  });

  if (!user) {
    throw new Error("User not found.")
  }

  await  prisma.user.delete({
    where: {
      id: input.id,
    }
  })

  revalidatePath("/dashboard/users");
}

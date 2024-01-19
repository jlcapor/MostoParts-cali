import {  User } from "@prisma/client"
import { type FileWithPath } from "react-dropzone"

export type FileWithPreview = FileWithPath & {
  preview: string
}

export type SafeUser = Omit<
  User,
  "createdAt" | "updatedAt" | "emailVerified"
> & {
  createdAt: string;
  updatedAt: string;
  emailVerified: string | null;
};

export type ProductImages = {
  id: string;
  alt: string;
  url: string;
};

export type CategoryField = {
  id: string;
  name: string;
};

export type Image = {
  url: string;
  altText: string;
  width: number;
  height: number;
};




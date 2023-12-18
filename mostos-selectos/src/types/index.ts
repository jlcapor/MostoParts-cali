import { Icons } from "@/components/icons"
import { type FileWithPath } from "react-dropzone"

export interface NavItem {
  title: string
  href?: string
  disabled?: boolean
  external?: boolean
  icon?: keyof typeof Icons
  label?: string
  description?: string
}

export type RoleField = {
  id: number;
  name: string;
};

export type UserWithRole ={
  id: number;
  name: string;
  surnames: string;
  email: string;
  phone: string;
  role: string | null;
  state: string;
}

export type FileWithPreview = FileWithPath & {
  preview: string
}


export interface NavItemWithChildren extends NavItem {
  items: NavItemWithChildren[]
}

export interface NavItemWithOptionalChildren extends NavItem {
  items?: NavItemWithChildren[]
}

export type MainNavItem = NavItemWithOptionalChildren
export type SidebarNavItem = NavItemWithChildren

export interface Option {
  label: string
  value: string
  icon?: React.ComponentType<{ className?: string }>
}

export interface DataTableSearchableColumn<TData> {
  id: keyof TData
  title: string
}

export interface DataTableFilterableColumn<TData>
  extends DataTableSearchableColumn<TData> {
  options: Option[]
}

export interface StoredFile {
  id: string
  name: string
  url: string
}






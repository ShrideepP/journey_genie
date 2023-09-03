'use client';

import { ColumnDef } from "@tanstack/react-table";
import Cell from "./cell";

export type Destination = {
  _id: string;
  name: string;
  temperature: string;
  flightDuration: string;
  journeyType: string;
  category: string;
};

export const columns: ColumnDef<Destination>[] = [
  {
    accessorKey: "name",
    header: "Name",
    enableHiding: false,
  },
  {
    accessorKey: "temperature",
    header: "Temperature",
  },
  {
    accessorKey: "flightDuration",
    header: "Flight Duration",
  },
  {
    accessorKey: "journeyType",
    header: "Journey Type",
  },
  {
    accessorKey: "category",
    header: "Category",
  },
  {
    id: "actions",
    enableHiding: false,
    cell: ({ row }) => <Cell _id={row.original._id} />
  },
];

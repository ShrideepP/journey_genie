'use client';

import { useState } from "react";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import { useToast } from "@/components/ui/use-toast";

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { ColumnDef } from "@tanstack/react-table";
import { Button } from "@/components/ui/button";
import { API_REQUESTS } from "@/lib/requests";
import { Icons } from "@/components/icons";
import Link from "next/link";

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
    cell: ({ row }) => {
      const [loading, setLoading] = useState(false);
      const { data: session } = useSession();
      const { refresh } = useRouter();
      const { toast } = useToast();

      async function removeDestination() {
        setLoading(true);
        try {
          const response = await fetch(API_REQUESTS.removeDestination(row.original._id), {
            method: 'DELETE',
            headers: {
              'Authorization': `Bearer ${session?.user.token}`,
            },
          });
          if(response.ok) {
            toast({
              title: 'Success!',
              description: 'Destination removed successfully!',
            });
            refresh();
          };
        } catch (error) {
          toast({
            title: 'Oops! something went wrong.',
            description: 'Please try again later or contact the website owner.'
          });
          console.log(error);
        } finally {
          setLoading(false);
        };
      };
      
      return (
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="ghost" className="h-8 w-8 p-0">
              <span className="sr-only">Open menu</span>
              <Icons.moreHorizontal className="h-4 w-4" />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end">
            <DropdownMenuLabel>Actions</DropdownMenuLabel>
            <DropdownMenuSeparator />
            <Link href={`/dashboard/edit/${row.original._id}`}>
              <DropdownMenuItem>
                <Icons.pencil className="w-4 h-4 mr-2" />
                <span>Edit</span>
              </DropdownMenuItem>
            </Link>
            <DropdownMenuItem onClick={removeDestination}>
              {loading ? (
                <>
                <Icons.loader className="w-4 h-4 mr-2" />
                <span>Please wait</span>
                </>
              ) : (
                <>
                <Icons.trash className="w-4 h-4 mr-2" />
                <span>Delete</span>
                </>
              )}
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      );
    },
  },
];

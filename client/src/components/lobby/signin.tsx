"use client";

import { 
  Dialog, 
  DialogTrigger,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { signIn } from "next-auth/react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { useToast } from "@/components/ui/use-toast";

import * as z from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

const formSchema = z.object({
  email: z.string()
    .nonempty({ 
      message: "Email is required!" 
    })
    .email(),
  password: z.string()
    .nonempty({ 
      message: "Password is required!" 
    }),
});

export default function Signin() {
  const { toast } = useToast();

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  async function onSubmit(values: z.infer<typeof formSchema>) {
    try {
      const { email, password } =  values;
      const response = await signIn('credentials', {
        email,
        password,
      });
      console.log(response);
    } catch (error) {
      toast({
        title: "Oops! something went wrong.",
        description: "Please contact the owner or try again later.",
        variant: "destructive"
      });
    };
  };

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button>
          Admin
        </Button>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle className="text-xl">
            Admin Login
          </DialogTitle>
          <DialogDescription>
            Exclusively for authorized staff. Enter your credentials to access the admin dashboard.
          </DialogDescription>
        </DialogHeader>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
            <div className="space-y-2">
              <FormField
                control={form.control}
                name="email"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Email: admin@journeygenie.com</FormLabel>
                    <FormControl>
                      <Input 
                        placeholder="admin@journeygenie.com" 
                        {...field} 
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="password"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Password: admin@123</FormLabel>
                    <FormControl>
                      <Input 
                        placeholder="admin@123" 
                        {...field} 
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>
            <Button type="submit">
              Explore Admin Area
            </Button>
          </form>
        </Form>
      </DialogContent>
    </Dialog>
  );
};

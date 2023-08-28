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
  FormMessage,
} from "@/components/ui/form";
import { Loader } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import { useToast } from "@/components/ui/use-toast";
import { useRouter } from 'next/navigation';
// import { setAuth } from "@/lib/utils";

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
  const [loading, setLoading] = useState(false);

  const { toast } = useToast();
  const { push } = useRouter();

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  async function onSubmit(values: z.infer<typeof formSchema>) {
    setLoading(true);
    try {
      const response = await fetch(`https://api-journey-genie.vercel.app/api/auth/signin`, {
        method: 'POST',
        body: JSON.stringify(values),
        headers: {
          'Content-Type': 'application/json',
        }
      });
      
      if(response.status === 401) {
        return toast({
          title: "Invalid credentials!",
          variant: "destructive",
        });
      };

      const data = await response.json();
      // setAuth(data.email, data.token);
      push("/dashboard");
    } catch (error) {
      toast({
        title: "Oops! something went wrong.",
        description: "Please contact the owner or try again later.",
        variant: "destructive"
      });
    } finally {
      setLoading(false);
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
                    <FormControl>
                      <Input 
                        placeholder="123456" 
                        {...field} 
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>
            <Button type="submit">
              {loading && <Loader className="w-4 h-4 mr-2 animate-spin" />}
              {loading ? "Loading..." : "Explore Admin Area"}
            </Button>
          </form>
        </Form>
      </DialogContent>
    </Dialog>
  );
};

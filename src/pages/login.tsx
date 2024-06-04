import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { z } from "zod";

import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { toast } from "sonner";

const sampleCredentials: { [key: string]: string } = {
  "root@gmail.com": "password",
};

const formSchema = z.object({
  email: z.string().email().min(2).max(50).nonempty(),
  password: z.string().min(8).max(50).nonempty(),
});

function Login() {
  const navigate = useNavigate();
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  function onSubmit(values: z.infer<typeof formSchema>) {
    if (!sampleCredentials[values.email]) {
      toast.error("Invalid Email");
      return;
    }
    if (sampleCredentials[values.email] !== values.password) {
      toast.error("Invalid Password");
      return;
    }
    toast.success("Login Successful");
    localStorage.setItem("isLoggedIn", "true");
    navigate("/");
  }
  return (
    <div className="w-full h-full lg:grid lg:grid-cols-2">
      <div className="flex items-center justify-center py-12">
        <div className="mx-auto grid w-[350px] gap-8">
          <div className="grid gap-2 text-center">
            <h1 className="text-3xl font-extrabold">Pathalgaon NH Project</h1>
            <p className="text-balance text-muted-foreground">
              Enter your credentials to continue
            </p>
          </div>
          <div className="grid gap-4">
            <Form {...form}>
              <FormField
                control={form.control}
                name="email"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Email</FormLabel>
                    <FormControl>
                      <Input placeholder="root@gmail.com" {...field} />
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
                    <FormLabel>Password</FormLabel>
                    <FormControl>
                      <Input placeholder="" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </Form>
            <Button
              type="submit"
              size="lg"
              className="w-full"
              onClick={form.handleSubmit(onSubmit)}>
              Login
            </Button>
          </div>
        </div>
      </div>
      <div className="hidden lg:block overflow-hidden bg-muted/50">
        <div className="h-full flex flex-col items-center justify-center p-12">
          <div className="w-3/4 flex flex-col items-center">
            <img alt="logo" src="/logo.png" className="w-2/4" />
            <p className="whitespace-nowrap text-3xl font-extrabold mt-4">
              National Highways Authority of India
            </p>
            <p className="mt-2 text-balance text-muted-foreground">
              Ministry of Road Transport & Highways, Government of India
            </p>
          </div>
          <p className="text-xl mt"></p>
        </div>
      </div>
    </div>
  );
}

export default Login;

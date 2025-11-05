"use client";

import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  Form,
  FormField,
  FormItem,
  FormLabel,
  FormControl,
  FormMessage,
} from "../ui/form";
import { Input } from "../ui/input";
import { Textarea } from "../ui/textarea";
import { Button } from "../ui/button";
import { toast } from "sonner";
import axios from "axios";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "../ui/select";

const formSchema = z.object({
  name: z.string().optional(),
  email: z
    .string()
    .min(1, { message: "Email is required" })
    .email("Invalid email"),
  messanger: z.enum(["Telegram", "Whatsapp", "Instagram"]),
  message: z.string().optional(),
  userName: z.string().min(1, { message: "Username is required" }),
});

const ContactForm = () => {
  const form = useForm({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: '',
      email: '',
      message: '',
      messanger: "Telegram",
      userName: ''
    }
  })

  const onSubmit = async (values: z.infer<typeof formSchema>) => {    
   try {
    await axios.post('/api/client/create', values);
    toast.success(
      "Thank you very much. I will get back to you as soon as possible."
    );
    form.reset();
   } catch (error) {
    console.log('Something went wrong', error);
    toast.error('Something went wrong')
   }
  };

  return (
    <div className="h-auto lg:h-full lg:w-1/2 bg-red-50 rounded-xl text-xl flex flex-col gap-8 justify-center p-4 lg:p-24">
      <Form {...form}>
        <form
          onSubmit={form.handleSubmit(onSubmit)}
          className="flex flex-col gap-8 w-full"
        >
          <FormField
            control={form.control}
            name="name"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Name</FormLabel>
                <FormControl>
                  <Input
                    placeholder="Your name"
                    className="bg-transparent border-b-2 border-b-black outline-none py-2"
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Email</FormLabel>
                <FormControl>
                  <Input
                    placeholder="example@gmail.com"
                    className="bg-transparent border-b-2 border-b-black outline-none py-2"
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="messanger"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Messanger</FormLabel>
                <Select
                  onValueChange={field.onChange}
                  defaultValue={field.value}
                >
                  <FormControl>
                    <SelectTrigger>
                      <SelectValue placeholder="Select a messanger" />
                    </SelectTrigger>
                  </FormControl>
                  <SelectContent>
                    <SelectGroup>
                      <SelectItem value="Telegram">Telegram</SelectItem>
                      <SelectItem value="Whatsapp">Whatsapp</SelectItem>
                      <SelectItem value="Instagram">Instagram</SelectItem>
                    </SelectGroup>
                  </SelectContent>
                </Select>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            name="userName"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Username</FormLabel>
                <FormControl>
                  <Input
                    {...field}
                    placeholder="Type your username of messanger"
                  />
                </FormControl>
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="message"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Message</FormLabel>
                <FormControl>
                  <Textarea
                    placeholder="Your message..."
                    className="bg-transparent border-none border-b-2 border-b-black outline-none py-2 resize-none"
                    rows={4}
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <Button
            type="submit"
            className="bg-purple-200 rounded font-semibold text-gray-600 p-4 hover:bg-purple-300 transition"
          >
            Send
          </Button>
        </form>
      </Form>
    </div>
  );
};

export default ContactForm;

"use client";
import React from "react";
import { useForm, SubmitHandler, Controller } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "../ui/textarea";
import { Checkbox } from "../ui/checkbox";
import { useToast } from "../ui/use-toast";
import { Button } from "../ui/button";

// Define the form values type

// Validation schema
const formSchema = z.object({
  name: z
    .string()
    .max(50, "Must be 50 characters or less")
    .min(1, "Name is required"),
  email: z.string().email("Invalid email address").min(1, "Email is required"),
  message: z
    .string()
    .min(20, "Must be at least 20 characters")
    .min(1, "Message is required"),
  services: z.array(z.string()).min(1, "At least one service must be selected"),
  date: z.date().refine((val) => val instanceof Date && !isNaN(val.getTime()), {
    message: "Invalid date",
  }),
});
type IFormInput = z.infer<typeof formSchema>;

const services = [
  {
    id: "web-developmement",
    label: "Web Development",
  },
  {
    id: "mobile-developmement",
    label: "Mobile Development",
  },
  {
    id: "SEO-optimization",
    label: "SEO  optimization",
  },
  {
    id: "Other",
    label: "Other",
  },
];
const ContactUsSection: React.FC = () => {
  const form = useForm<IFormInput>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      services: [],
    },
  });
  const { toast } = useToast();

  const onSubmit: SubmitHandler<IFormInput> = (data) => {
    const stringifiedData = JSON.stringify(data, null, 2);
    toast({
      title: "Submited Data",
      description: stringifiedData,
    });
  };

  return (
    <div
      className="min-h-screen flex items-center justify-center p-4 bg-background "
      id="contact-us"
    >
      <div className="max-w-md w-full bg-background rounded-lg shadow-md p-8">
        <h2 className="text-2xl font-bold mb-6 text-primary text-center">
          Contact Us
        </h2>
        <Form {...form}>
          <form
            onSubmit={form.handleSubmit(onSubmit)}
            className="flex flex-col gap-5"
          >
            <FormField
              control={form.control}
              name="name"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Name</FormLabel>
                  <FormControl>
                    <Input placeholder="Name" {...field} />
                  </FormControl>
                  <FormMessage>
                    {form.formState.errors.name?.message}
                  </FormMessage>
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
                    <Input placeholder="johndoe@example.com" {...field} />
                  </FormControl>
                  <FormMessage>
                    {form.formState.errors.email?.message}
                  </FormMessage>
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
                    <Textarea placeholder="Your message" {...field} />
                  </FormControl>
                  <FormMessage>
                    {form.formState.errors.message?.message}
                  </FormMessage>
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="services"
              render={({ field }) => (
                <FormItem>
                  <div className="mb-4">
                    <FormLabel className="text-base">
                      Services or message category
                    </FormLabel>
                    <FormDescription>
                      Select services that would like
                    </FormDescription>
                  </div>
                  {services.map((item) => (
                    <FormField
                      key={item.id}
                      control={form.control}
                      name="services"
                      render={({ field }) => {
                        return (
                          <FormItem
                            key={item.id}
                            className="flex flex-row items-start space-x-3 space-y-0"
                          >
                            <FormControl>
                              <Checkbox
                                checked={field.value?.includes(item.id)}
                                onCheckedChange={(checked) => {
                                  return checked
                                    ? field.onChange([...field.value, item.id])
                                    : field.onChange(
                                        field.value?.filter(
                                          (value) => value !== item.id
                                        )
                                      );
                                }}
                              />
                            </FormControl>
                            <FormLabel className="text-sm font-normal">
                              {item.label}
                            </FormLabel>
                          </FormItem>
                        );
                      }}
                    />
                  ))}
                  <FormMessage>
                    {form.formState.errors.services?.message}
                  </FormMessage>
                </FormItem>
              )}
            />
            <Button type="submit" className="w-full">
              Send Message
            </Button>
          </form>
        </Form>
      </div>
    </div>
  );
};

export default ContactUsSection;

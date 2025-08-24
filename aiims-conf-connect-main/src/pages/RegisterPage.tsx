
import { useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { Loader2, ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link, useLocation } from "react-router-dom";
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
import { Textarea } from "@/components/ui/textarea";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

// Form validation schema
const formSchema = z.object({
  firstName: z.string().min(2, "First name must be at least 2 characters"),
  lastName: z.string().min(2, "Last name must be at least 2 characters"),
  email: z.string().email("Invalid email address"),
  phone: z.string().min(10, "Phone number must be at least 10 digits"),
  organization: z.string().min(2, "Organization name is required"),
  designation: z.string().min(2, "Designation is required"),
  registrationType: z.enum(["regular", "student", "earlyBird"]),
  specialization: z.string().min(1, "Please select your specialization"),
  dietaryRestrictions: z.string().optional(),
  emergencyContact: z.string().min(10, "Emergency contact must be at least 10 digits"),
  additionalNotes: z.string().optional(),
});

type FormValues = z.infer<typeof formSchema>;

export default function RegisterPage() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const location = useLocation();

  // Scroll to top when component mounts
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  // Initialize the form
  const form = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      firstName: "",
      lastName: "",
      email: "",
      phone: "",
      organization: "",
      designation: "",
      registrationType: "regular",
      specialization: "",
      dietaryRestrictions: "",
      emergencyContact: "",
      additionalNotes: "",
    },
  });

  // Form submission handler
  async function onSubmit(data: FormValues) {
    setIsSubmitting(true);

    // Simulate API call
    try {
      // Here you would normally send the data to your backend
      console.log("Form data:", data);

      // Simulate network delay
      await new Promise(resolve => setTimeout(resolve, 1500));

      setIsSuccess(true);
      // Reset the form on successful submission
      form.reset();
    } catch (error) {
      console.error("Registration error:", error);
    } finally {
      setIsSubmitting(false);
    }
  }

  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section with maroon theme */}
      <section className="bg-maroon-800 text-white py-16">
        <div className="container px-4 md:px-6 text-center">
          <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Register for the Conference</h1>
          <p className="mt-4 text-lg text-gray-200 max-w-3xl mx-auto">
            Fill out the form below to secure your spot at the PHYSICON 2025
          </p>
          {/* <div className="mt-8">
            <Link to="/">
              <Button variant="outline" className="bg-white text-maroon-800 hover:bg-gray-100 border-white flex items-center gap-2">
                <ArrowLeft className="h-4 w-4" />
                Back to Home
              </Button>
            </Link>
          </div> */}
        </div>
      </section>

      {/* Registration Form */}
      {/* <div className="">
        <Link to="/">
          <Button variant="outline" className="bg-white text-maroon-800 hover:bg-gray-100 border-white flex items-center gap-2">
            <ArrowLeft className="h-4 w-4" />
            Back to Home
          </Button>
        </Link>
      </div> */}
      <div className=" top-0 left-4 z-10">
        <Link to="/">
          <Button
            variant="ghost"
            className="flex items-center gap-2 text-maroon-700 hover:text-maroon-800 hover:bg-transparent"
          >
            <ArrowLeft className="h-4 w-4" />
            Back to Home
          </Button>
        </Link>
      </div>
      <section className="py-16">

        <div className="container px-4 md:px-6 max-w-3xl mx-auto">
          {isSuccess ? (
            <Card>
              <CardHeader>
                <CardTitle className="text-center text-2xl text-maroon-700">Registration Successful!</CardTitle>
                <CardDescription className="text-center">
                  Thank you for registering for the PHYSICON 2025.
                </CardDescription>
              </CardHeader>
              <CardContent className="text-center">
                <p className="mb-6">
                  We have sent a confirmation email with all the details to your registered email address.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Button
                    className="bg-maroon-700 hover:bg-maroon-800"
                    onClick={() => setIsSuccess(false)}
                  >
                    Register Another Person
                  </Button>
                  <Link to="/">
                    <Button variant="outline" className="border-maroon-700 text-maroon-700 hover:bg-maroon-50">
                      Back to Home
                    </Button>
                  </Link>
                </div>
              </CardContent>
            </Card>
          ) : (
            <Card>
              <CardHeader>
                <CardTitle>Registration Form</CardTitle>
                <CardDescription>
                  Please fill out all the required fields to complete your registration.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <Form {...form}>
                  <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                    <div className="grid gap-4 sm:grid-cols-2">
                      <FormField
                        control={form.control}
                        name="firstName"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>First Name*</FormLabel>
                            <FormControl>
                              <Input placeholder="Enter your first name" {...field} />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                      <FormField
                        control={form.control}
                        name="lastName"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Last Name*</FormLabel>
                            <FormControl>
                              <Input placeholder="Enter your last name" {...field} />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                    </div>

                    <div className="grid gap-4 sm:grid-cols-2">
                      <FormField
                        control={form.control}
                        name="email"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Email Address*</FormLabel>
                            <FormControl>
                              <Input type="email" placeholder="Enter your email" {...field} />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                      <FormField
                        control={form.control}
                        name="phone"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Phone Number*</FormLabel>
                            <FormControl>
                              <Input placeholder="Enter your phone number" {...field} />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                    </div>

                    <div className="grid gap-4 sm:grid-cols-2">
                      <FormField
                        control={form.control}
                        name="organization"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Organization/Institution*</FormLabel>
                            <FormControl>
                              <Input placeholder="Enter your organization" {...field} />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                      <FormField
                        control={form.control}
                        name="designation"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Designation/Role*</FormLabel>
                            <FormControl>
                              <Input placeholder="Enter your designation" {...field} />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                    </div>

                    <FormField
                      control={form.control}
                      name="registrationType"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Registration Type*</FormLabel>
                          <FormControl>
                            <RadioGroup
                              onValueChange={field.onChange}
                              defaultValue={field.value}
                              className="flex flex-col space-y-1"
                            >
                              <FormItem className="flex items-center space-x-3 space-y-0">
                                <FormControl>
                                  <RadioGroupItem value="regular" />
                                </FormControl>
                                <FormLabel className="font-normal cursor-pointer">
                                  Regular Registration (₹15,000)
                                </FormLabel>
                              </FormItem>
                              <FormItem className="flex items-center space-x-3 space-y-0">
                                <FormControl>
                                  <RadioGroupItem value="earlyBird" />
                                </FormControl>
                                <FormLabel className="font-normal cursor-pointer">
                                  Early Bird Registration (₹12,000)
                                </FormLabel>
                              </FormItem>
                              <FormItem className="flex items-center space-x-3 space-y-0">
                                <FormControl>
                                  <RadioGroupItem value="student" />
                                </FormControl>
                                <FormLabel className="font-normal cursor-pointer">
                                  Student Registration (₹8,000)
                                </FormLabel>
                              </FormItem>
                            </RadioGroup>
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />

                    <FormField
                      control={form.control}
                      name="specialization"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Medical Specialization*</FormLabel>
                          <Select onValueChange={field.onChange} defaultValue={field.value}>
                            <FormControl>
                              <SelectTrigger>
                                <SelectValue placeholder="Select your specialization" />
                              </SelectTrigger>
                            </FormControl>
                            <SelectContent>
                              <SelectItem value="cardiology">Cardiology</SelectItem>
                              <SelectItem value="neurology">Neurology</SelectItem>
                              <SelectItem value="oncology">Oncology</SelectItem>
                              <SelectItem value="pediatrics">Pediatrics</SelectItem>
                              <SelectItem value="surgery">Surgery</SelectItem>
                              <SelectItem value="internal_medicine">Internal Medicine</SelectItem>
                              <SelectItem value="orthopedics">Orthopedics</SelectItem>
                              <SelectItem value="psychiatry">Psychiatry</SelectItem>
                              <SelectItem value="radiology">Radiology</SelectItem>
                              <SelectItem value="other">Other</SelectItem>
                            </SelectContent>
                          </Select>
                          <FormMessage />
                        </FormItem>
                      )}
                    />

                    <FormField
                      control={form.control}
                      name="dietaryRestrictions"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Dietary Restrictions</FormLabel>
                          <FormControl>
                            <Input placeholder="Any dietary restrictions (optional)" {...field} />
                          </FormControl>
                          <FormDescription>
                            Please mention if you have any dietary requirements or allergies.
                          </FormDescription>
                          <FormMessage />
                        </FormItem>
                      )}
                    />

                    <FormField
                      control={form.control}
                      name="emergencyContact"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Emergency Contact*</FormLabel>
                          <FormControl>
                            <Input placeholder="Emergency contact number" {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />

                    <FormField
                      control={form.control}
                      name="additionalNotes"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Additional Notes</FormLabel>
                          <FormControl>
                            <Textarea
                              placeholder="Any additional requirements or information (optional)"
                              className="resize-none"
                              {...field}
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />

                    <Button
                      type="submit"
                      className="w-full bg-maroon-700 hover:bg-maroon-800"
                      disabled={isSubmitting}
                    >
                      {isSubmitting ? (
                        <>
                          <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                          Processing...
                        </>
                      ) : (
                        "Submit Registration"
                      )}
                    </Button>
                  </form>
                </Form>
              </CardContent>
            </Card>
          )}
        </div>
      </section>
    </div>
  );
}

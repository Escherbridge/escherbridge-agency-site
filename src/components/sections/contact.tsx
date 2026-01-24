"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { Container } from "@/components/ui/container";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Select } from "@/components/ui/select";
import { submitContact } from "@/app/actions/contact";

const contactSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  email: z.string().email("Please enter a valid email"),
  company: z.string().optional(),
  inquiryType: z.enum(["project", "consulting", "fractional", "other"]),
  budget: z.enum(["<10k", "10k-25k", "25k-50k", "50k-100k", "100k+", ""]).optional(),
  message: z.string().min(10, "Message must be at least 10 characters"),
});

type ContactFormData = z.infer<typeof contactSchema>;

const inquiryOptions = [
  { value: "project", label: "New Project" },
  { value: "consulting", label: "Consulting Engagement" },
  { value: "fractional", label: "Fractional CTO" },
  { value: "other", label: "General Inquiry" },
];

const budgetOptions = [
  { value: "", label: "Select budget range (optional)" },
  { value: "<10k", label: "Under $10,000" },
  { value: "10k-25k", label: "$10,000 - $25,000" },
  { value: "25k-50k", label: "$25,000 - $50,000" },
  { value: "50k-100k", label: "$50,000 - $100,000" },
  { value: "100k+", label: "$100,000+" },
];

export function Contact() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<"idle" | "success" | "error">("idle");

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<ContactFormData>({
    resolver: zodResolver(contactSchema),
    defaultValues: {
      inquiryType: "project",
      budget: "",
    },
  });

  const onSubmit = async (data: ContactFormData) => {
    setIsSubmitting(true);
    setSubmitStatus("idle");

    try {
      const result = await submitContact(data);
      if (result.success) {
        setSubmitStatus("success");
        reset();
      } else {
        setSubmitStatus("error");
      }
    } catch {
      setSubmitStatus("error");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="relative py-grid-16">
      <Container>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-grid-12">
          {/* Left column - Info */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="font-display text-display-lg mb-grid-4">
              Let&apos;s Build Something
            </h2>
            <p className="text-foreground-muted text-body-lg mb-grid-8 max-w-md">
              Have a project in mind? Let&apos;s discuss how we can work together to
              bring your vision to life.
            </p>

            {/* Contact info */}
            <div className="space-y-grid-4">
              <div>
                <h3 className="font-heading font-bold text-body-sm uppercase tracking-wider mb-grid-2">
                  Email
                </h3>
                <a
                  href="mailto:hello@escherbridge.com"
                  className="text-foreground-muted hover:text-white transition-colors link-brutal"
                >
                  hello@escherbridge.com
                </a>
              </div>
              <div>
                <h3 className="font-heading font-bold text-body-sm uppercase tracking-wider mb-grid-2">
                  Location
                </h3>
                <p className="text-foreground-muted">Pacific Northwest, USA</p>
              </div>
            </div>
          </motion.div>

          {/* Right column - Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <Card hover={false}>
              {submitStatus === "success" ? (
                <div className="text-center py-grid-8">
                  <div className="w-16 h-16 mx-auto mb-grid-4 border-3 border-white flex items-center justify-center">
                    <svg
                      className="w-8 h-8"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="3"
                    >
                      <polyline points="20,6 9,17 4,12" />
                    </svg>
                  </div>
                  <h3 className="font-heading font-bold text-heading-md mb-grid-2">
                    Message Sent
                  </h3>
                  <p className="text-foreground-muted mb-grid-6">
                    Thank you for reaching out. I&apos;ll get back to you soon.
                  </p>
                  <Button
                    variant="outline"
                    onClick={() => setSubmitStatus("idle")}
                  >
                    Send Another Message
                  </Button>
                </div>
              ) : (
                <form onSubmit={handleSubmit(onSubmit)} className="space-y-grid-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-grid-6">
                    <Input
                      id="name"
                      label="Name"
                      placeholder="Your name"
                      error={errors.name?.message}
                      {...register("name")}
                    />
                    <Input
                      id="email"
                      label="Email"
                      type="email"
                      placeholder="your@email.com"
                      error={errors.email?.message}
                      {...register("email")}
                    />
                  </div>

                  <Input
                    id="company"
                    label="Company (optional)"
                    placeholder="Your company"
                    {...register("company")}
                  />

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-grid-6">
                    <Select
                      id="inquiryType"
                      label="Inquiry Type"
                      options={inquiryOptions}
                      error={errors.inquiryType?.message}
                      {...register("inquiryType")}
                    />
                    <Select
                      id="budget"
                      label="Budget Range"
                      options={budgetOptions}
                      {...register("budget")}
                    />
                  </div>

                  <Textarea
                    id="message"
                    label="Message"
                    placeholder="Tell me about your project..."
                    error={errors.message?.message}
                    {...register("message")}
                  />

                  {submitStatus === "error" && (
                    <p className="text-red-500 text-body-sm">
                      Something went wrong. Please try again or email directly.
                    </p>
                  )}

                  <Button
                    type="submit"
                    size="lg"
                    className="w-full"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? "Sending..." : "Send Message"}
                  </Button>
                </form>
              )}
            </Card>
          </motion.div>
        </div>
      </Container>
    </section>
  );
}

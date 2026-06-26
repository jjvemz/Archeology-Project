import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { toast } from "sonner";
import { Send } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { useLanguage } from "@/hooks/useLanguage";

const buildSchema = (t: (key: string) => string) =>
  z.object({
    name: z.string().min(1, t("contact.nameRequired")),
    email: z.string().email(t("contact.emailRequired")),
    subject: z.string().min(1, t("contact.subjectRequired")),
    message: z.string().min(10, t("contact.messageRequired")),
  });

type FormValues = {
  name: string;
  email: string;
  subject: string;
  message: string;
};

const ContactSection = () => {
  const { t } = useLanguage();
  const [sending, setSending] = useState(false);

  const form = useForm<FormValues>({
    resolver: zodResolver(buildSchema(t)),
    defaultValues: { name: "", email: "", subject: "", message: "" },
  });

  const onSubmit = async (data: FormValues) => {
    setSending(true);
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      if (res.ok) {
        toast.success(t("contact.successTitle"), {
          description: t("contact.successMessage"),
        });
        form.reset();
      } else {
        toast.error(t("contact.errorTitle"), {
          description: t("contact.errorMessage"),
        });
      }
    } catch {
      toast.error(t("contact.errorTitle"), {
        description: t("contact.errorMessage"),
      });
    } finally {
      setSending(false);
    }
  };

  return (
    <section id="contact-form" className="py-14 bg-blue-800">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="py-8 mb-8">
            <h2 className="text-5xl font-bold text-primary">
              XII_ {t("contact.title")}
            </h2>
            <div className="mt-4 pt-4">
              <p className="text-base text-orange-700">
                {t("contact.description")}
              </p>
            </div>
          </div>

          {/* Form Card */}
          <div className="bg-white/5 border-2 border-dotted border-orange-700 rounded-lg p-8">
            <Form {...form}>
              <form
                onSubmit={form.handleSubmit(onSubmit)}
                className="space-y-6"
              >
                <div className="grid md:grid-cols-2 gap-6">
                  <FormField
                    control={form.control}
                    name="name"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-primary font-semibold">
                          {t("contact.name")}
                        </FormLabel>
                        <FormControl>
                          <Input
                            placeholder={t("contact.namePlaceholder")}
                            className="bg-white/10 border-orange-700/50 text-primary placeholder:text-primary/40 focus-visible:ring-orange-700"
                            {...field}
                          />
                        </FormControl>
                        <FormMessage className="text-orange-400" />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="email"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-primary font-semibold">
                          {t("contact.email")}
                        </FormLabel>
                        <FormControl>
                          <Input
                            type="email"
                            placeholder={t("contact.emailPlaceholder")}
                            className="bg-white/10 border-orange-700/50 text-primary placeholder:text-primary/40 focus-visible:ring-orange-700"
                            {...field}
                          />
                        </FormControl>
                        <FormMessage className="text-orange-400" />
                      </FormItem>
                    )}
                  />
                </div>

                <FormField
                  control={form.control}
                  name="subject"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-primary font-semibold">
                        {t("contact.subject")}
                      </FormLabel>
                      <FormControl>
                        <Input
                          placeholder={t("contact.subjectPlaceholder")}
                          className="bg-white/10 border-orange-700/50 text-primary placeholder:text-primary/40 focus-visible:ring-orange-700"
                          {...field}
                        />
                      </FormControl>
                      <FormMessage className="text-orange-400" />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="message"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-primary font-semibold">
                        {t("contact.message")}
                      </FormLabel>
                      <FormControl>
                        <Textarea
                          placeholder={t("contact.messagePlaceholder")}
                          rows={6}
                          className="bg-white/10 border-orange-700/50 text-primary placeholder:text-primary/40 focus-visible:ring-orange-700 resize-none"
                          {...field}
                        />
                      </FormControl>
                      <FormMessage className="text-orange-400" />
                    </FormItem>
                  )}
                />

                <div className="flex justify-end">
                  <Button
                    type="submit"
                    variant="yellow"
                    size="lg"
                    disabled={sending}
                    className="min-w-[180px]"
                  >
                    {sending ? (
                      t("contact.sending")
                    ) : (
                      <>
                        <Send className="mr-2 h-4 w-4" />
                        {t("contact.send")}
                      </>
                    )}
                  </Button>
                </div>
              </form>
            </Form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;

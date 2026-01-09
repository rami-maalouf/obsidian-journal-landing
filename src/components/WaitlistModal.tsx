import { useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { Loader2, CheckCircle2, AlertCircle } from "lucide-react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from "@/components/ui/form";

const formSchema = z.object({
  email: z.string().email("Please enter a valid email address"),
});

type FormValues = z.infer<typeof formSchema>;

type Platform = "ios" | "android" | "iOS" | "Android";

interface WaitlistModalProps {
  isOpen: boolean;
  onClose: () => void;
  platform: Platform;
}

export function WaitlistModal({ isOpen, onClose, platform }: WaitlistModalProps) {
  const [submitStatus, setSubmitStatus] = useState<
    "idle" | "loading" | "success" | "already-added" | "error"
  >("idle");
  const [errorMessage, setErrorMessage] = useState("");

  // Normalize platform string
  const normalizedPlatform = platform.toLowerCase() === "ios" ? "iOS" : "Android";

  const form = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: "",
    },
  });

  // Reset state when modal opens/closes
  useEffect(() => {
    if (isOpen) {
      setSubmitStatus("idle");
      setErrorMessage("");
      form.reset();
    }
  }, [isOpen, form]);

  const onSubmit = async (values: FormValues) => {
    setSubmitStatus("loading");
    setErrorMessage("");

    try {
      // if dev mode, skip and set success
      if (import.meta.env.DEV) {
        // Simulate network delay
        await new Promise(resolve => setTimeout(resolve, 1000));
        setSubmitStatus("success");
        return;
      }

      const response = await fetch("/api/waitlist", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email: values.email, platform: normalizedPlatform }),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || "Failed to join waitlist");
      }

      if (data.alreadyAdded) {
        setSubmitStatus("already-added");
      } else {
        setSubmitStatus("success");
      }
    } catch (error) {
      setSubmitStatus("error");
      setErrorMessage(
        error instanceof Error ? error.message : "Something went wrong"
      );
    }
  };

  const handleOpenChange = (open: boolean) => {
    if (!open) {
      onClose();
    }
  };

  return (
    <Dialog open={isOpen} onOpenChange={handleOpenChange}>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>
            {normalizedPlatform === "iOS" ? "Join the iOS Beta" : "Join the Waitlist"}
          </DialogTitle>
          <DialogDescription>
            {normalizedPlatform === "iOS"
              ? "Enter your email to join the TestFlight beta."
              : "Enter your email to get early access on Android."}
          </DialogDescription>
        </DialogHeader>

        {submitStatus === "idle" || submitStatus === "loading" ? (
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
              <FormField
                control={form.control}
                name="email"
                render={({ field }) => (
                  <FormItem>
                    <FormControl>
                      <Input
                        placeholder="Enter your email"
                        type="email"
                        disabled={submitStatus === "loading"}
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <Button
                type="submit"
                className="w-full"
                disabled={submitStatus === "loading"}
              >
                {submitStatus === "loading" ? (
                  <>
                    <Loader2 className="w-4 h-4 mr-2 animate-spin" />
                    Joining...
                  </>
                ) : normalizedPlatform === "iOS" ? (
                  "Join Beta"
                ) : (
                  "Join Waitlist"
                )}
              </Button>
            </form>
          </Form>
        ) : submitStatus === "success" || submitStatus === "already-added" ? (
          <div className="flex flex-col space-y-4">
            <div className="flex items-center gap-2 text-green-500">
              <CheckCircle2 className="w-5 h-5" />
              <h3 className="font-semibold">
                {submitStatus === "already-added"
                  ? "Already on the list"
                  : normalizedPlatform === "iOS"
                  ? "You're on the list!"
                  : "You're on the list!"}
              </h3>
            </div>

            <p className="text-sm text-muted-foreground">
              {submitStatus === "already-added"
                ? "We already have your email. We'll notify you when we're ready."
                : normalizedPlatform === "iOS"
                ? "Thanks! You've been added to the beta list."
                : "Thanks for joining! We'll allow more users off the waitlist soon."}
            </p>

            {normalizedPlatform === "iOS" && (
              <Button
                className="w-full gap-2"
                onClick={() =>
                  window.open(
                    "https://testflight.apple.com/join/Zj1W3kmf",
                    "_blank"
                  )
                }
              >
                Download on TestFlight
              </Button>
            )}

            <Button
              variant={normalizedPlatform === "iOS" ? "ghost" : "default"}
              onClick={onClose}
            >
              Close
            </Button>
          </div>
        ) : (
          <div className="flex flex-col space-y-4">
            <div className="flex items-center gap-2 text-destructive">
              <AlertCircle className="w-5 h-5" />
              <h3 className="font-semibold">Something went wrong</h3>
            </div>
            <p className="text-sm text-muted-foreground">{errorMessage}</p>
            <Button variant="outline" onClick={() => setSubmitStatus("idle")}>
              Try Again
            </Button>
          </div>
        )}
      </DialogContent>
    </Dialog>
  );
}

export default WaitlistModal;

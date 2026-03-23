import React, { useState } from "react";
import { StoreButtons } from "@/components/StoreButtons";
import { Button } from "@/components/Button";
import { CheckCircle2, Loader2 } from "lucide-react";

type Status = "idle" | "loading" | "success" | "error" | "duplicate";

export function Newsletter() {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<Status>("idle");
  const [message, setMessage] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email || status === "loading") return;

    setStatus("loading");
    setMessage("");

    try {
      const res = await fetch("/api/newsletter/subscribe", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email }),
      });

      const data = await res.json();

      if (res.status === 201) {
        setStatus("success");
        setMessage(data.message ?? "Thanks for subscribing!");
        setEmail("");
      } else if (res.status === 409) {
        setStatus("duplicate");
        setMessage("You're already on the list!");
      } else {
        setStatus("error");
        setMessage(data.error ?? "Something went wrong. Please try again.");
      }
    } catch {
      setStatus("error");
      setMessage("Could not connect. Please try again.");
    }
  };

  return (
    <section id="contact" className="py-24 bg-primary text-white">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">

          <div>
            <h2 className="text-4xl md:text-5xl font-black mb-4 leading-tight">
              Place your <br /> order in seconds
            </h2>
            <div className="mt-8 mb-10 bg-white/10 backdrop-blur-md border border-white/20 p-6 rounded-3xl inline-block">
              <div className="text-sm font-medium text-white/80 uppercase tracking-widest mb-2">Promo Code</div>
              <div className="text-5xl font-black font-display tracking-widest mb-2">CDNWEB</div>
              <p className="text-white/90">Get ₦300 off your first order when you use this promo code!</p>
            </div>
            <StoreButtons variant="outline" />
          </div>

          <div className="bg-white rounded-[2.5rem] p-8 md:p-12 text-foreground shadow-2xl">
            <h3 className="text-3xl font-black mb-2">Cool stuff only</h3>
            <p className="text-muted-foreground mb-8 text-lg">Subscribe to our newsletter</p>

            {status === "success" ? (
              <div className="flex flex-col items-center gap-4 py-6 text-center">
                <CheckCircle2 className="w-16 h-16 text-primary" />
                <p className="text-xl font-bold text-foreground">{message}</p>
                <p className="text-muted-foreground">You'll hear from us soon with cool stuff.</p>
                <button
                  onClick={() => setStatus("idle")}
                  className="text-sm text-primary font-semibold underline underline-offset-2 mt-2"
                >
                  Subscribe another email
                </button>
              </div>
            ) : (
              <form className="flex flex-col gap-4" onSubmit={handleSubmit} noValidate>
                <input
                  type="email"
                  placeholder="yourname@email.com"
                  value={email}
                  onChange={(e) => {
                    setEmail(e.target.value);
                    if (status !== "idle") setStatus("idle");
                  }}
                  required
                  disabled={status === "loading"}
                  aria-label="Email address"
                  className="w-full px-6 py-4 bg-gray-50 border-2 border-transparent focus:border-primary focus:bg-white rounded-2xl outline-none transition-all text-lg disabled:opacity-60"
                />

                {(status === "error" || status === "duplicate") && (
                  <p
                    role="alert"
                    className={`text-sm font-medium px-2 ${status === "duplicate" ? "text-primary" : "text-red-500"}`}
                  >
                    {message}
                  </p>
                )}

                <Button
                  size="lg"
                  className="w-full text-lg shadow-primary/25"
                  disabled={status === "loading" || !email}
                  type="submit"
                >
                  {status === "loading" ? (
                    <span className="flex items-center gap-2 justify-center">
                      <Loader2 className="w-5 h-5 animate-spin" /> Subscribing...
                    </span>
                  ) : (
                    "Subscribe"
                  )}
                </Button>
              </form>
            )}

            <p className="text-xs text-muted-foreground mt-4 text-center">
              We respect your privacy. No spam, ever.
            </p>
          </div>

        </div>
      </div>
    </section>
  );
}

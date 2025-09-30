import { Card } from "@/components/ui/card";
import {
  Wallet,
  RefreshCw,
  Clock,
  Shield,
  AlertCircle,
  Code,
} from "lucide-react";

const features = [
  {
    icon: Wallet,
    title: "Subscription Vaults",
    description:
      "Funds locked and auto-released on schedule. Non-custodial, secure, and transparent.",
  },
  {
    icon: RefreshCw,
    title: "Auto-Renew & Proration",
    description:
      "Programmable schedules: daily, weekly, monthly, or custom intervals with smart proration.",
  },
  {
    icon: Clock,
    title: "Retry & Alerts",
    description:
      "Automatic retry logic when balance is low. Real-time notifications keep everyone informed.",
  },
  {
    icon: Shield,
    title: "Cancel Anytime",
    description:
      "User stays in full control. Cancel subscription at any time with instant refunds.",
  },
  {
    icon: AlertCircle,
    title: "Fraud Protection",
    description:
      "Optional wallet balance verification and suspicious activity detection built-in.",
  },
  {
    icon: Code,
    title: "1-Line API Call",
    description:
      "Integration as simple as Stripe Checkout. Production-ready SDK and comprehensive docs.",
  },
];

export function Features() {
  return (
    <section className="py-20" id="features">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 animate-fade-in-up">
          <h2 className="text-4xl font-bold mb-4">Why BlockSub?</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Everything you need to power subscription payments on Solana
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <Card
              key={index}
              className="p-8 hover-elevate transition-all duration-300 hover:shadow-lg animate-fade-in-up"
              style={{ animationDelay: `${index * 100}ms` }}
              data-testid={`card-feature-${index}`}
            >
              <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                <feature.icon className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-3">{feature.title}</h3>
              <p className="text-muted-foreground leading-relaxed">
                {feature.description}
              </p>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}

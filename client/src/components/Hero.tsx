import { Button } from "@/components/ui/button";
import { ArrowRight, Code2, Zap } from "lucide-react";
import heroImage from "@assets/stock_images/abstract_blockchain__530f4888.jpg";

export function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <div
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: `url(${heroImage})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-background/95 via-background/90 to-background"></div>
      </div>

      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 w-72 h-72 bg-primary/20 rounded-full blur-3xl animate-float"></div>
        <div
          className="absolute bottom-20 right-10 w-96 h-96 bg-chart-2/20 rounded-full blur-3xl animate-float"
          style={{ animationDelay: "1s" }}
        ></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32">
        <div className="text-center animate-fade-in-up">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 mb-8 animate-scale-in">
            <Zap className="w-4 h-4 text-primary" />
            <span className="text-sm font-medium text-primary">
              Everything Stripe does — but Solana-native
            </span>
          </div>

          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold tracking-tight mb-6">
            <span className="bg-gradient-to-r from-primary via-chart-2 to-primary bg-clip-text text-transparent animate-fade-in">
              Smart Subscriptions
            </span>
            <br />
            <span className="text-foreground">on Solana</span>
          </h1>

          <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-12 leading-relaxed">
            Unlock subscription economies for Web3. BlockSub enables programmable
            recurring payments with auto-renew, subscription vaults, and
            developer-friendly APIs.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16">
            <Button size="lg" className="text-lg px-8 group" data-testid="button-hero-start">
              Get Started Free
              <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="text-lg px-8"
              data-testid="button-hero-docs"
            >
              <Code2 className="mr-2 h-5 w-5" />
              View Documentation
            </Button>
          </div>

          <div className="inline-block bg-card border border-card-border rounded-lg p-6 max-w-2xl animate-scale-in shadow-lg hover-elevate">
            <div className="flex items-start gap-4">
              <div className="flex-shrink-0">
                <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center">
                  <Code2 className="w-5 h-5 text-primary" />
                </div>
              </div>
              <div className="flex-1 text-left">
                <p className="text-sm text-muted-foreground mb-2">
                  One-line integration
                </p>
                <pre className="bg-muted/50 p-4 rounded-md overflow-x-auto">
                  <code className="text-sm font-mono text-foreground">
                    {`const subscription = await blockSub.create({\n  amount: "10.00",\n  interval: "monthly",\n  token: "USDC"\n});`}
                  </code>
                </pre>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

import { SiGithub, SiX, SiDiscord } from "react-icons/si";

export function Footer() {
  const currentYear = new Date().getFullYear();

  const footerLinks = {
    Product: [
      { label: "Features", href: "#features" },
      { label: "Pricing", href: "#pricing" },
      { label: "Roadmap", href: "#roadmap" },
      { label: "Changelog", href: "#" },
    ],
    Developers: [
      { label: "Documentation", href: "#docs" },
      { label: "API Reference", href: "#" },
      { label: "SDK", href: "#" },
      { label: "Examples", href: "#" },
    ],
    Company: [
      { label: "About", href: "#" },
      { label: "Blog", href: "#" },
      { label: "Careers", href: "#" },
      { label: "Contact", href: "#" },
    ],
    Legal: [
      { label: "Privacy", href: "#" },
      { label: "Terms", href: "#" },
      { label: "Security", href: "#" },
    ],
  };

  return (
    <footer className="bg-card border-t border-card-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-2 md:grid-cols-5 gap-8 mb-12">
          <div className="col-span-2 md:col-span-1">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 rounded-md bg-gradient-to-br from-primary to-chart-2 flex items-center justify-center">
                <span className="text-primary-foreground font-bold text-lg">B</span>
              </div>
              <span className="font-bold text-xl">BlockSub</span>
            </div>
            <p className="text-sm text-muted-foreground mb-4">
              Smart subscriptions on Solana. The Web3 alternative to Stripe.
            </p>
            <div className="flex items-center gap-4">
              <a
                href="#"
                className="text-muted-foreground hover:text-foreground transition-colors hover-elevate p-2 rounded-md"
                data-testid="link-github"
              >
                <SiGithub className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="text-muted-foreground hover:text-foreground transition-colors hover-elevate p-2 rounded-md"
                data-testid="link-twitter"
              >
                <SiX className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="text-muted-foreground hover:text-foreground transition-colors hover-elevate p-2 rounded-md"
                data-testid="link-discord"
              >
                <SiDiscord className="w-5 h-5" />
              </a>
            </div>
          </div>

          {Object.entries(footerLinks).map(([category, links]) => (
            <div key={category}>
              <h3 className="font-semibold mb-4">{category}</h3>
              <ul className="space-y-2">
                {links.map((link) => (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      className="text-sm text-muted-foreground hover:text-foreground transition-colors hover-elevate px-2 py-1 -mx-2 rounded-md inline-block"
                      data-testid={`link-footer-${link.label.toLowerCase()}`}
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="border-t border-border pt-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-sm text-muted-foreground">
              © {currentYear} BlockSub. All rights reserved.
            </p>
            <p className="text-sm text-muted-foreground">
              Built on Solana with ❤️
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}

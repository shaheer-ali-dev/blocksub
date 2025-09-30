import { Card } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Button } from "@/components/ui/button";
import { Copy, BookOpen } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

export function APIDocumentation() {
  const { toast } = useToast();

  const copyCode = (code: string) => {
    navigator.clipboard.writeText(code);
    toast({
      title: "Copied!",
      description: "Code copied to clipboard",
    });
  };

  const codeExamples = {
    createSubscription: {
      javascript: `import { BlockSub } from '@blocksub/sdk';

const blockSub = new BlockSub({
  apiKey: 'your_api_key_here'
});

const subscription = await blockSub.subscriptions.create({
  merchantWallet: 'merchant_wallet_address',
  amount: '10.00',
  token: 'USDC',
  interval: 'monthly',
  metadata: {
    customerId: 'user_123'
  }
});

console.log(subscription.id);`,
      python: `from blocksub import BlockSub

client = BlockSub(api_key='your_api_key_here')

subscription = client.subscriptions.create(
  merchant_wallet='merchant_wallet_address',
  amount='10.00',
  token='USDC',
  interval='monthly',
  metadata={
    'customer_id': 'user_123'
  }
)

print(subscription.id)`,
      curl: `curl https://api.blocksub.io/v1/subscriptions \\
  -X POST \\
  -H "Authorization: Bearer your_api_key_here" \\
  -H "Content-Type: application/json" \\
  -d '{
    "merchantWallet": "merchant_wallet_address",
    "amount": "10.00",
    "token": "USDC",
    "interval": "monthly",
    "metadata": {
      "customerId": "user_123"
    }
  }'`,
    },
    cancelSubscription: {
      javascript: `const result = await blockSub.subscriptions.cancel(
  'subscription_id'
);

console.log(result.status); // 'cancelled'`,
      python: `result = client.subscriptions.cancel('subscription_id')

print(result.status)  # 'cancelled'`,
      curl: `curl https://api.blocksub.io/v1/subscriptions/:id/cancel \\
  -X POST \\
  -H "Authorization: Bearer your_api_key_here"`,
    },
    getSubscription: {
      javascript: `const subscription = await blockSub.subscriptions.retrieve(
  'subscription_id'
);

console.log(subscription.status);
console.log(subscription.nextPaymentDate);`,
      python: `subscription = client.subscriptions.retrieve('subscription_id')

print(subscription.status)
print(subscription.next_payment_date)`,
      curl: `curl https://api.blocksub.io/v1/subscriptions/:id \\
  -H "Authorization: Bearer your_api_key_here"`,
    },
  };

  return (
    <div className="space-y-8" id="docs">
      <div>
        <h2 className="text-3xl font-bold mb-2">API Documentation</h2>
        <p className="text-muted-foreground">
          Everything you need to integrate BlockSub into your application
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
        <Card className="lg:col-span-1 p-6 h-fit sticky top-24">
          <h3 className="font-semibold mb-4 flex items-center gap-2">
            <BookOpen className="w-5 h-5" />
            Quick Links
          </h3>
          <nav className="space-y-2">
            <a
              href="#create-subscription"
              className="block text-sm hover:text-primary transition-colors hover-elevate px-2 py-1 rounded-md"
              data-testid="link-create-subscription"
            >
              Create Subscription
            </a>
            <a
              href="#cancel-subscription"
              className="block text-sm hover:text-primary transition-colors hover-elevate px-2 py-1 rounded-md"
              data-testid="link-cancel-subscription"
            >
              Cancel Subscription
            </a>
            <a
              href="#get-subscription"
              className="block text-sm hover:text-primary transition-colors hover-elevate px-2 py-1 rounded-md"
              data-testid="link-get-subscription"
            >
              Get Subscription
            </a>
            <a
              href="#webhooks"
              className="block text-sm hover:text-primary transition-colors hover-elevate px-2 py-1 rounded-md"
              data-testid="link-webhooks"
            >
              Webhooks
            </a>
          </nav>
        </Card>

        <div className="lg:col-span-3 space-y-8">
          <Card className="p-8" id="create-subscription">
            <h3 className="text-2xl font-bold mb-4">Create a Subscription</h3>
            <p className="text-muted-foreground mb-6">
              Initialize a new recurring payment subscription on Solana.
            </p>

            <Tabs defaultValue="javascript" className="w-full">
              <TabsList className="mb-4">
                <TabsTrigger value="javascript" data-testid="tab-javascript">
                  JavaScript
                </TabsTrigger>
                <TabsTrigger value="python" data-testid="tab-python">
                  Python
                </TabsTrigger>
                <TabsTrigger value="curl" data-testid="tab-curl">
                  cURL
                </TabsTrigger>
              </TabsList>

              <TabsContent value="javascript">
                <div className="relative">
                  <pre className="bg-muted/50 p-6 rounded-md overflow-x-auto">
                    <code className="text-sm font-mono">
                      {codeExamples.createSubscription.javascript}
                    </code>
                  </pre>
                  <Button
                    variant="ghost"
                    size="icon"
                    className="absolute top-4 right-4"
                    onClick={() =>
                      copyCode(codeExamples.createSubscription.javascript)
                    }
                    data-testid="button-copy-javascript"
                  >
                    <Copy className="w-4 h-4" />
                  </Button>
                </div>
              </TabsContent>

              <TabsContent value="python">
                <div className="relative">
                  <pre className="bg-muted/50 p-6 rounded-md overflow-x-auto">
                    <code className="text-sm font-mono">
                      {codeExamples.createSubscription.python}
                    </code>
                  </pre>
                  <Button
                    variant="ghost"
                    size="icon"
                    className="absolute top-4 right-4"
                    onClick={() =>
                      copyCode(codeExamples.createSubscription.python)
                    }
                    data-testid="button-copy-python"
                  >
                    <Copy className="w-4 h-4" />
                  </Button>
                </div>
              </TabsContent>

              <TabsContent value="curl">
                <div className="relative">
                  <pre className="bg-muted/50 p-6 rounded-md overflow-x-auto">
                    <code className="text-sm font-mono">
                      {codeExamples.createSubscription.curl}
                    </code>
                  </pre>
                  <Button
                    variant="ghost"
                    size="icon"
                    className="absolute top-4 right-4"
                    onClick={() =>
                      copyCode(codeExamples.createSubscription.curl)
                    }
                    data-testid="button-copy-curl"
                  >
                    <Copy className="w-4 h-4" />
                  </Button>
                </div>
              </TabsContent>
            </Tabs>
          </Card>

          <Card className="p-8" id="cancel-subscription">
            <h3 className="text-2xl font-bold mb-4">Cancel a Subscription</h3>
            <p className="text-muted-foreground mb-6">
              Cancel an active subscription and refund unused funds.
            </p>

            <Tabs defaultValue="javascript" className="w-full">
              <TabsList className="mb-4">
                <TabsTrigger value="javascript">JavaScript</TabsTrigger>
                <TabsTrigger value="python">Python</TabsTrigger>
                <TabsTrigger value="curl">cURL</TabsTrigger>
              </TabsList>

              <TabsContent value="javascript">
                <div className="relative">
                  <pre className="bg-muted/50 p-6 rounded-md overflow-x-auto">
                    <code className="text-sm font-mono">
                      {codeExamples.cancelSubscription.javascript}
                    </code>
                  </pre>
                  <Button
                    variant="ghost"
                    size="icon"
                    className="absolute top-4 right-4"
                    onClick={() =>
                      copyCode(codeExamples.cancelSubscription.javascript)
                    }
                  >
                    <Copy className="w-4 h-4" />
                  </Button>
                </div>
              </TabsContent>

              <TabsContent value="python">
                <div className="relative">
                  <pre className="bg-muted/50 p-6 rounded-md overflow-x-auto">
                    <code className="text-sm font-mono">
                      {codeExamples.cancelSubscription.python}
                    </code>
                  </pre>
                  <Button
                    variant="ghost"
                    size="icon"
                    className="absolute top-4 right-4"
                    onClick={() =>
                      copyCode(codeExamples.cancelSubscription.python)
                    }
                  >
                    <Copy className="w-4 h-4" />
                  </Button>
                </div>
              </TabsContent>

              <TabsContent value="curl">
                <div className="relative">
                  <pre className="bg-muted/50 p-6 rounded-md overflow-x-auto">
                    <code className="text-sm font-mono">
                      {codeExamples.cancelSubscription.curl}
                    </code>
                  </pre>
                  <Button
                    variant="ghost"
                    size="icon"
                    className="absolute top-4 right-4"
                    onClick={() =>
                      copyCode(codeExamples.cancelSubscription.curl)
                    }
                  >
                    <Copy className="w-4 h-4" />
                  </Button>
                </div>
              </TabsContent>
            </Tabs>
          </Card>

          <Card className="p-8" id="get-subscription">
            <h3 className="text-2xl font-bold mb-4">Get Subscription Details</h3>
            <p className="text-muted-foreground mb-6">
              Retrieve information about a specific subscription.
            </p>

            <Tabs defaultValue="javascript" className="w-full">
              <TabsList className="mb-4">
                <TabsTrigger value="javascript">JavaScript</TabsTrigger>
                <TabsTrigger value="python">Python</TabsTrigger>
                <TabsTrigger value="curl">cURL</TabsTrigger>
              </TabsList>

              <TabsContent value="javascript">
                <div className="relative">
                  <pre className="bg-muted/50 p-6 rounded-md overflow-x-auto">
                    <code className="text-sm font-mono">
                      {codeExamples.getSubscription.javascript}
                    </code>
                  </pre>
                  <Button
                    variant="ghost"
                    size="icon"
                    className="absolute top-4 right-4"
                    onClick={() =>
                      copyCode(codeExamples.getSubscription.javascript)
                    }
                  >
                    <Copy className="w-4 h-4" />
                  </Button>
                </div>
              </TabsContent>

              <TabsContent value="python">
                <div className="relative">
                  <pre className="bg-muted/50 p-6 rounded-md overflow-x-auto">
                    <code className="text-sm font-mono">
                      {codeExamples.getSubscription.python}
                    </code>
                  </pre>
                  <Button
                    variant="ghost"
                    size="icon"
                    className="absolute top-4 right-4"
                    onClick={() =>
                      copyCode(codeExamples.getSubscription.python)
                    }
                  >
                    <Copy className="w-4 h-4" />
                  </Button>
                </div>
              </TabsContent>

              <TabsContent value="curl">
                <div className="relative">
                  <pre className="bg-muted/50 p-6 rounded-md overflow-x-auto">
                    <code className="text-sm font-mono">
                      {codeExamples.getSubscription.curl}
                    </code>
                  </pre>
                  <Button
                    variant="ghost"
                    size="icon"
                    className="absolute top-4 right-4"
                    onClick={() =>
                      copyCode(codeExamples.getSubscription.curl)
                    }
                  >
                    <Copy className="w-4 h-4" />
                  </Button>
                </div>
              </TabsContent>
            </Tabs>
          </Card>
        </div>
      </div>
    </div>
  );
}

import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Copy, Plus, Trash2, Eye, EyeOff } from "lucide-react";
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";

//todo: remove mock functionality
const mockApiKeys = [
  {
    id: "1",
    name: "Production API Key",
    key: "sk_live_51abc123def456ghi789jkl",
    created: "2024-01-15",
    lastUsed: "2 hours ago",
    requests: 1245,
  },
  {
    id: "2",
    name: "Development API Key",
    key: "sk_test_51xyz789abc123def456ghi",
    created: "2024-01-10",
    lastUsed: "5 days ago",
    requests: 432,
  },
];

export function APIKeyDashboard() {
  const [apiKeys, setApiKeys] = useState(mockApiKeys);
  const [visibleKeys, setVisibleKeys] = useState<Set<string>>(new Set());
  const [newKeyName, setNewKeyName] = useState("");
  const [isGenerating, setIsGenerating] = useState(false);
  const { toast } = useToast();

  const toggleKeyVisibility = (id: string) => {
    const newVisible = new Set(visibleKeys);
    if (newVisible.has(id)) {
      newVisible.delete(id);
    } else {
      newVisible.add(id);
    }
    setVisibleKeys(newVisible);
  };

  const copyToClipboard = (key: string) => {
    navigator.clipboard.writeText(key);
    toast({
      title: "Copied!",
      description: "API key copied to clipboard",
    });
  };

  const generateNewKey = () => {
    if (!newKeyName.trim()) {
      toast({
        title: "Error",
        description: "Please enter a name for your API key",
        variant: "destructive",
      });
      return;
    }

    setIsGenerating(true);
    //todo: remove mock functionality - replace with actual API call
    setTimeout(() => {
      const newKey = {
        id: String(Date.now()),
        name: newKeyName,
        key: `sk_test_${Math.random().toString(36).substring(2, 32)}`,
        created: new Date().toISOString().split("T")[0],
        lastUsed: "Never",
        requests: 0,
      };
      setApiKeys([...apiKeys, newKey]);
      setNewKeyName("");
      setIsGenerating(false);
      toast({
        title: "Success!",
        description: "New API key generated",
      });
    }, 1000);
  };

  const deleteKey = (id: string) => {
    setApiKeys(apiKeys.filter((key) => key.id !== id));
    toast({
      title: "Deleted",
      description: "API key has been revoked",
    });
  };

  const maskKey = (key: string) => {
    return key.substring(0, 12) + "•".repeat(20) + key.substring(key.length - 4);
  };

  return (
    <div className="space-y-8">
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-3xl font-bold">API Keys</h2>
          <p className="text-muted-foreground mt-2">
            Manage your BlockSub API keys
          </p>
        </div>
      </div>

      <Card className="p-8">
        <h3 className="text-lg font-semibold mb-4">Generate New API Key</h3>
        <div className="flex gap-4">
          <Input
            placeholder="API Key Name (e.g., Production Key)"
            value={newKeyName}
            onChange={(e) => setNewKeyName(e.target.value)}
            data-testid="input-api-key-name"
            className="flex-1"
          />
          <Button
            onClick={generateNewKey}
            disabled={isGenerating}
            data-testid="button-generate-key"
          >
            <Plus className="w-4 h-4 mr-2" />
            {isGenerating ? "Generating..." : "Generate Key"}
          </Button>
        </div>
      </Card>

      <div className="space-y-4">
        {apiKeys.map((apiKey) => (
          <Card key={apiKey.id} className="p-6 hover-elevate transition-all" data-testid={`card-api-key-${apiKey.id}`}>
            <div className="flex items-start justify-between mb-4">
              <div>
                <div className="flex items-center gap-3 mb-2">
                  <h3 className="font-semibold text-lg">{apiKey.name}</h3>
                  <Badge variant="secondary">{apiKey.requests} requests</Badge>
                </div>
                <p className="text-sm text-muted-foreground">
                  Created {apiKey.created} • Last used {apiKey.lastUsed}
                </p>
              </div>
              <Button
                variant="ghost"
                size="icon"
                onClick={() => deleteKey(apiKey.id)}
                data-testid={`button-delete-${apiKey.id}`}
              >
                <Trash2 className="w-4 h-4 text-destructive" />
              </Button>
            </div>

            <div className="flex items-center gap-2 bg-muted/50 p-4 rounded-md">
              <code className="flex-1 font-mono text-sm">
                {visibleKeys.has(apiKey.id) ? apiKey.key : maskKey(apiKey.key)}
              </code>
              <Button
                variant="ghost"
                size="icon"
                onClick={() => toggleKeyVisibility(apiKey.id)}
                data-testid={`button-toggle-visibility-${apiKey.id}`}
              >
                {visibleKeys.has(apiKey.id) ? (
                  <EyeOff className="w-4 h-4" />
                ) : (
                  <Eye className="w-4 h-4" />
                )}
              </Button>
              <Button
                variant="ghost"
                size="icon"
                onClick={() => copyToClipboard(apiKey.key)}
                data-testid={`button-copy-${apiKey.id}`}
              >
                <Copy className="w-4 h-4" />
              </Button>
            </div>
          </Card>
        ))}
      </div>
    </div>
  );
}

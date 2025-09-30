import { Navigation } from "@/components/Navigation";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { APIKeyDashboard } from "@/components/APIKeyDashboard";
import { APIDocumentation } from "@/components/APIDocumentation";
import { MerchantDashboard } from "@/components/MerchantDashboard";
import { Key, BookOpen, BarChart3 } from "lucide-react";

export default function Dashboard() {
  return (
    <div className="min-h-screen bg-muted/30">
      <Navigation />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
        <Tabs defaultValue="api-keys" className="w-full">
          <TabsList className="mb-8">
            <TabsTrigger value="api-keys" data-testid="tab-api-keys">
              <Key className="w-4 h-4 mr-2" />
              API Keys
            </TabsTrigger>
            <TabsTrigger value="documentation" data-testid="tab-documentation">
              <BookOpen className="w-4 h-4 mr-2" />
              Documentation
            </TabsTrigger>
            <TabsTrigger value="analytics" data-testid="tab-analytics">
              <BarChart3 className="w-4 h-4 mr-2" />
              Analytics
            </TabsTrigger>
          </TabsList>

          <TabsContent value="api-keys" className="animate-fade-in">
            <APIKeyDashboard />
          </TabsContent>

          <TabsContent value="documentation" className="animate-fade-in">
            <APIDocumentation />
          </TabsContent>

          <TabsContent value="analytics" className="animate-fade-in">
            <MerchantDashboard />
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
}

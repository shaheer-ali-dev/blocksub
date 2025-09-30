import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  DollarSign,
  Users,
  TrendingUp,
  AlertCircle,
  Activity,
} from "lucide-react";
import {
  LineChart,
  Line,
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

//todo: remove mock functionality - replace with real data
const mockRevenueData = [
  { month: "Jan", revenue: 4200 },
  { month: "Feb", revenue: 5800 },
  { month: "Mar", revenue: 7200 },
  { month: "Apr", revenue: 8500 },
  { month: "May", revenue: 9800 },
  { month: "Jun", revenue: 11200 },
];

const mockSubscriptions = [
  {
    id: "sub_1",
    customer: "user_abc123",
    amount: "$10.00",
    interval: "monthly",
    status: "active",
    nextPayment: "2024-02-15",
  },
  {
    id: "sub_2",
    customer: "user_def456",
    amount: "$25.00",
    interval: "monthly",
    status: "active",
    nextPayment: "2024-02-18",
  },
  {
    id: "sub_3",
    customer: "user_ghi789",
    amount: "$50.00",
    interval: "yearly",
    status: "active",
    nextPayment: "2024-12-01",
  },
  {
    id: "sub_4",
    customer: "user_jkl012",
    amount: "$15.00",
    interval: "monthly",
    status: "past_due",
    nextPayment: "2024-02-10",
  },
];

export function MerchantDashboard() {
  const metrics = [
    {
      title: "Monthly Recurring Revenue",
      value: "$11,200",
      change: "+14.2%",
      icon: DollarSign,
      trend: "up",
    },
    {
      title: "Active Subscriptions",
      value: "248",
      change: "+12",
      icon: Users,
      trend: "up",
    },
    {
      title: "Retention Rate",
      value: "94.2%",
      change: "+2.1%",
      icon: TrendingUp,
      trend: "up",
    },
    {
      title: "Failed Payments",
      value: "3",
      change: "-5",
      icon: AlertCircle,
      trend: "down",
    },
  ];

  return (
    <div className="space-y-8">
      <div>
        <h2 className="text-3xl font-bold mb-2">Merchant Dashboard</h2>
        <p className="text-muted-foreground">
          Overview of your subscription business metrics
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {metrics.map((metric, index) => (
          <Card
            key={index}
            className="p-6 hover-elevate transition-all"
            data-testid={`card-metric-${index}`}
          >
            <div className="flex items-center justify-between mb-4">
              <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                <metric.icon className="w-5 h-5 text-primary" />
              </div>
              <Badge
                className={
                  metric.trend === "up"
                    ? "bg-chart-3/20 text-chart-3 border-chart-3/30"
                    : "bg-chart-4/20 text-chart-4 border-chart-4/30"
                }
              >
                {metric.change}
              </Badge>
            </div>
            <h3 className="text-2xl font-bold mb-1">{metric.value}</h3>
            <p className="text-sm text-muted-foreground">{metric.title}</p>
          </Card>
        ))}
      </div>

      <Card className="p-8">
        <div className="flex items-center justify-between mb-6">
          <div>
            <h3 className="text-xl font-bold">Revenue Trend</h3>
            <p className="text-sm text-muted-foreground">
              Monthly recurring revenue over time
            </p>
          </div>
          <Activity className="w-5 h-5 text-muted-foreground" />
        </div>
        <div className="h-80">
          <ResponsiveContainer width="100%" height="100%">
            <AreaChart data={mockRevenueData}>
              <defs>
                <linearGradient id="colorRevenue" x1="0" y1="0" x2="0" y2="1">
                  <stop
                    offset="5%"
                    stopColor="hsl(var(--primary))"
                    stopOpacity={0.3}
                  />
                  <stop
                    offset="95%"
                    stopColor="hsl(var(--primary))"
                    stopOpacity={0}
                  />
                </linearGradient>
              </defs>
              <CartesianGrid strokeDasharray="3 3" opacity={0.1} />
              <XAxis dataKey="month" />
              <YAxis />
              <Tooltip />
              <Area
                type="monotone"
                dataKey="revenue"
                stroke="hsl(var(--primary))"
                fillOpacity={1}
                fill="url(#colorRevenue)"
              />
            </AreaChart>
          </ResponsiveContainer>
        </div>
      </Card>

      <Card className="p-8">
        <h3 className="text-xl font-bold mb-6">Recent Subscriptions</h3>
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="border-b border-border text-left">
                <th className="pb-3 text-sm font-semibold text-muted-foreground">
                  ID
                </th>
                <th className="pb-3 text-sm font-semibold text-muted-foreground">
                  Customer
                </th>
                <th className="pb-3 text-sm font-semibold text-muted-foreground">
                  Amount
                </th>
                <th className="pb-3 text-sm font-semibold text-muted-foreground">
                  Interval
                </th>
                <th className="pb-3 text-sm font-semibold text-muted-foreground">
                  Next Payment
                </th>
                <th className="pb-3 text-sm font-semibold text-muted-foreground">
                  Status
                </th>
              </tr>
            </thead>
            <tbody>
              {mockSubscriptions.map((sub) => (
                <tr
                  key={sub.id}
                  className="border-b border-border hover-elevate"
                  data-testid={`row-subscription-${sub.id}`}
                >
                  <td className="py-4">
                    <code className="text-sm font-mono">{sub.id}</code>
                  </td>
                  <td className="py-4 text-sm">{sub.customer}</td>
                  <td className="py-4 text-sm font-semibold">{sub.amount}</td>
                  <td className="py-4 text-sm">{sub.interval}</td>
                  <td className="py-4 text-sm">{sub.nextPayment}</td>
                  <td className="py-4">
                    <Badge
                      variant={
                        sub.status === "active" ? "default" : "destructive"
                      }
                      className={
                        sub.status === "active"
                          ? "bg-chart-3/20 text-chart-3 border-chart-3/30"
                          : ""
                      }
                    >
                      {sub.status}
                    </Badge>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </Card>
    </div>
  );
}

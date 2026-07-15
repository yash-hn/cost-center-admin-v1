import { DollarSign, Zap, Activity } from "lucide-react";

interface KPICardsProps {
  totalCost: number;
  totalTokens: number;
  totalWorkflows: number;
}

export function KPICards({ totalCost, totalTokens, totalWorkflows }: KPICardsProps) {
  const cards = [
    {
      label: "Total Cost",
      value: formatCurrency(totalCost),
      icon: DollarSign,
      iconBg: "bg-blue-50",
      iconColor: "text-blue-600",
    },
    {
      label: "Total Tokens",
      value: formatTokens(totalTokens),
      icon: Zap,
      iconBg: "bg-violet-50",
      iconColor: "text-violet-600",
    },
    {
      label: "Workflow Runs",
      value: formatNumber(totalWorkflows),
      icon: Activity,
      iconBg: "bg-emerald-50",
      iconColor: "text-emerald-600",
    },
  ];

  return (
    <div className="grid grid-cols-3 gap-4 mb-5">
      {cards.map((c) => (
        <div key={c.label} className="bg-white rounded-xl border border-slate-200 px-5 py-4 shadow-sm">
          <div className="flex items-start justify-between mb-3">
            <span className="text-[11px] font-semibold text-slate-400 uppercase tracking-widest">{c.label}</span>
            <div className={`w-7 h-7 rounded-lg ${c.iconBg} flex items-center justify-center`}>
              <c.icon size={13} className={c.iconColor} />
            </div>
          </div>
          <div className="text-[22px] font-bold text-slate-800 font-mono tracking-tight">{c.value}</div>
        </div>
      ))}
    </div>
  );
}

function formatCurrency(v: number): string {
  return "$" + v.toLocaleString("en-US", { minimumFractionDigits: 2, maximumFractionDigits: 2 });
}

function formatTokens(v: number): string {
  if (v >= 1e9) return (v / 1e9).toFixed(2) + "B";
  if (v >= 1e6) return (v / 1e6).toFixed(1) + "M";
  return (v / 1e3).toFixed(0) + "K";
}

function formatNumber(v: number): string {
  return v.toLocaleString("en-US");
}
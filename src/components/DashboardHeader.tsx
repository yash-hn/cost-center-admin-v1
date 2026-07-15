import { Download, Zap, ChevronDown } from "lucide-react";

interface DashboardHeaderProps {
  client: string;
  dateRange: string;
  clients: string[];
  onClientChange: (client: string) => void;
  onDateRangeChange: (range: string) => void;
}

export function DashboardHeader({
  client,
  dateRange,
  clients,
  onClientChange,
  onDateRangeChange,
}: DashboardHeaderProps) {
  return (
    <header className="sticky top-0 z-30 bg-white border-b border-slate-200/80 shadow-sm">
      <div className="max-w-screen-2xl mx-auto px-5 h-[52px] flex items-center gap-3">
        <div className="flex items-center gap-2 mr-3 flex-shrink-0">
          <div className="w-7 h-7 rounded-lg bg-blue-600 flex items-center justify-center shadow-sm">
            <Zap size={13} className="text-white" />
          </div>
          <span className="text-sm font-semibold text-slate-900 tracking-tight">CoreAI</span>
          <span className="text-slate-300">/</span>
          <span className="text-sm font-medium text-slate-500">Cost Center Admin</span>
        </div>

        <div className="flex items-center gap-2 ml-auto">
          <FilterSelect
            value={client}
            onChange={onClientChange}
            options={clients}
            label="Client"
            bold
          />
          <FilterSelect
            value={dateRange}
            onChange={onDateRangeChange}
            options={["Today", "Last 7 Days", "Last 30 Days", "Custom Range"]}
          />
          <button className="flex items-center gap-1.5 text-sm font-medium text-slate-600 bg-white border border-slate-200 hover:border-slate-300 hover:bg-slate-50 rounded-lg px-3 py-1.5 transition-colors">
            <Download size={13} />
            Export CSV
          </button>
        </div>
      </div>
    </header>
  );
}

function FilterSelect({
  value,
  onChange,
  options,
  label,
  bold = false,
}: {
  value: string;
  onChange: (v: string) => void;
  options: string[];
  label?: string;
  bold?: boolean;
}) {
  return (
    <div className="relative">
      {label && (
        <span className="absolute left-2.5 top-1/2 -translate-y-1/2 text-[10px] font-semibold text-slate-400 uppercase pointer-events-none">
          {label}:
        </span>
      )}
      <select
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className={`appearance-none bg-white border border-slate-200 text-slate-700 text-sm rounded-lg py-1.5 pr-7 cursor-pointer hover:border-slate-300 focus:outline-none focus:ring-2 focus:ring-blue-400/25 focus:border-blue-400 transition-colors ${
          label ? "pl-12" : "pl-3"
        } ${bold ? "font-semibold" : ""}`}
      >
        {options.map((o) => (
          <option key={o}>{o}</option>
        ))}
      </select>
      <ChevronDown size={12} className="absolute right-2.5 top-1/2 -translate-y-1/2 text-slate-400 pointer-events-none" />
    </div>
  );
}
import { Search, ChevronUp, ChevronDown, ChevronRight, ArrowLeft } from "lucide-react";
import { Project, User } from "@/lib/mock-data";

interface DataTableProps {
  viewMode: "projects" | "users";
  data: (Project | User)[];
  drilldown: { id: number; name: string } | null;
  client: string;
  search: string;
  sortCol: string;
  sortDir: "asc" | "desc";
  page: number;
  totalPages: number;
  onSearch: (value: string) => void;
  onSort: (col: string) => void;
  onPageChange: (page: number) => void;
  onRowClick?: (row: Project | User) => void;
  onBack?: () => void;
  onViewModeChange?: (mode: "projects" | "users") => void;
}

const PROJECT_AVATAR_COLORS = [
  "bg-blue-100 text-blue-700",
  "bg-violet-100 text-violet-700",
  "bg-emerald-100 text-emerald-700",
  "bg-amber-100 text-amber-700",
  "bg-rose-100 text-rose-700",
  "bg-cyan-100 text-cyan-700",
];

export function DataTable({
  viewMode,
  data,
  drilldown,
  client,
  search,
  sortCol,
  sortDir,
  page,
  totalPages,
  onSearch,
  onSort,
  onPageChange,
  onRowClick,
  onBack,
  onViewModeChange,
}: DataTableProps) {
  const isProjectsClickable = viewMode === "projects" && !drilldown;

  return (
    <div className="flex-1 min-w-0 bg-white rounded-xl border border-slate-200 shadow-sm overflow-hidden">
      <div className="px-5 pt-4 pb-3 border-b border-slate-100">
        <div className="flex items-center justify-between mb-3">
          <div className="flex items-center gap-1.5 text-sm min-w-0">
            {drilldown ? (
              <>
                <button
                  onClick={onBack}
                  className="flex items-center gap-1 text-blue-600 hover:text-blue-700 font-medium transition-colors"
                >
                  <ArrowLeft size={12} />
                  <span className="truncate max-w-[120px]">{client}</span>
                </button>
                <ChevronRight size={12} className="text-slate-300 flex-shrink-0" />
                <span className="font-semibold text-slate-800 truncate">{drilldown.name}</span>
                <span className="ml-1 px-2 py-0.5 bg-slate-100 text-slate-500 text-[11px] font-medium rounded-full flex-shrink-0">
                  Workspaces
                </span>
              </>
            ) : (
              <span className="font-semibold text-slate-800">
                {viewMode === "projects" ? "Projects" : "Users"}
              </span>
            )}
          </div>

          {!drilldown && onViewModeChange && (
            <div className="flex bg-slate-100 rounded-lg p-0.5 text-xs flex-shrink-0">
              {(["projects", "users"] as const).map((m) => (
                <button
                  key={m}
                  onClick={() => onViewModeChange(m)}
                  className={`px-4 py-1.5 rounded-md font-semibold capitalize transition-all ${
                    viewMode === m ? "bg-white text-slate-800 shadow-sm" : "text-slate-500 hover:text-slate-700"
                  }`}
                >
                  {m}
                </button>
              ))}
            </div>
          )}
        </div>

        <div className="relative">
          <Search size={13} className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400 pointer-events-none" />
          <input
            className="w-full pl-9 pr-4 py-2 text-sm bg-slate-50 border border-slate-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400/25 focus:border-blue-400 placeholder:text-slate-400 transition-all"
            placeholder={`Search ${drilldown ? "workspaces" : viewMode}…`}
            value={search}
            onChange={(e) => onSearch(e.target.value)}
          />
        </div>
      </div>

      <div className="overflow-x-auto">
        <table className="w-full text-sm">
          <thead>
            <tr className="bg-slate-50/80 border-b border-slate-100">
              <SortTh
                label={viewMode === "users" && !drilldown ? "User" : drilldown ? "Workspace" : "Project"}
                col="name"
                sortCol={sortCol}
                sortDir={sortDir}
                onSort={onSort}
              />
              <SortTh label="Total Cost" col="cost" sortCol={sortCol} sortDir={sortDir} onSort={onSort} />
              <SortTh label="Total Tokens" col="totalTokens" sortCol={sortCol} sortDir={sortDir} onSort={onSort} />
              <SortTh label="Input Tokens" col="inputTokens" sortCol={sortCol} sortDir={sortDir} onSort={onSort} />
              <SortTh label="Output Tokens" col="outputTokens" sortCol={sortCol} sortDir={sortDir} onSort={onSort} />
              <SortTh label="Runs" col="workflows" sortCol={sortCol} sortDir={sortDir} onSort={onSort} />
              <SortTh label="Avg / Run" col="avgCost" sortCol={sortCol} sortDir={sortDir} onSort={onSort} />
              {viewMode === "users" && !drilldown ? (
                <SortTh label="Last Active" col="lastActivity" sortCol={sortCol} sortDir={sortDir} onSort={onSort} />
              ) : (
                <SortTh label="Users" col="activeUsers" sortCol={sortCol} sortDir={sortDir} onSort={onSort} />
              )}
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-50">
            {data.length === 0 ? (
              <tr>
                <td colSpan={8} className="py-16 text-center">
                  <div className="flex flex-col items-center gap-2">
                    <Search size={20} className="text-slate-300" />
                    <span className="text-sm text-slate-400">No results found</span>
                    {search && (
                      <button onClick={() => onSearch("")} className="text-xs text-blue-500 hover:underline">
                        Clear search
                      </button>
                    )}
                  </div>
                </td>
              </tr>
            ) : (
              data.map((row, idx) => {
                const avatarColor = PROJECT_AVATAR_COLORS[idx % PROJECT_AVATAR_COLORS.length];
                const isUser = "email" in row;
                return (
                  <tr
                    key={row.id}
                    className={`group transition-colors ${
                      isProjectsClickable ? "cursor-pointer hover:bg-blue-50/50" : "hover:bg-slate-50/60"
                    }`}
                    onClick={() => isProjectsClickable && onRowClick && onRowClick(row)}
                  >
                    <td className="px-4 py-3.5">
                      <div className="flex items-center gap-2.5">
                        <div className={`w-7 h-7 rounded-lg flex-shrink-0 flex items-center justify-center text-[11px] font-bold ${avatarColor}`}>
                          {row.name[0]}
                        </div>
                        <div className="min-w-0">
                          <div className="flex items-center gap-1.5">
                            <span className="font-medium text-slate-800 truncate">{row.name}</span>
                            {isProjectsClickable && (
                              <ChevronRight size={12} className="text-slate-300 group-hover:text-blue-400 transition-colors flex-shrink-0" />
                            )}
                          </div>
                          {isUser && <div className="text-[11px] text-slate-400 truncate">{row.email}</div>}
                        </div>
                      </div>
                    </td>
                    <td className="px-4 py-3.5">
                      <span className="font-mono text-[13px] font-semibold text-slate-800">
                        {formatCurrency(row.cost)}
                      </span>
                    </td>
                    <td className="px-4 py-3.5 font-mono text-[13px] text-slate-600">{formatTokens(row.totalTokens)}</td>
                    <td className="px-4 py-3.5 font-mono text-[13px] text-slate-500">{formatTokens(row.inputTokens)}</td>
                    <td className="px-4 py-3.5 font-mono text-[13px] text-slate-500">{formatTokens(row.outputTokens)}</td>
                    <td className="px-4 py-3.5 font-mono text-[13px] text-slate-600">{formatNumber(row.workflows)}</td>
                    <td className="px-4 py-3.5 font-mono text-[13px] text-slate-600">
                      {formatCurrency(row.cost / (row.workflows || 1))}
                    </td>
                    <td className="px-4 py-3.5">
                      {isUser ? (
                        <span className={`text-[11px] font-semibold px-2 py-1 rounded-full ${activityColor(row.lastActivity)}`}>
                          {activityLabel(row.lastActivity)}
                        </span>
                      ) : (
                        <span className="font-mono text-[13px] text-slate-600">{row.activeUsers}</span>
                      )}
                    </td>
                  </tr>
                );
              })
            )}
          </tbody>
        </table>
      </div>

      <div className="px-5 py-3 border-t border-slate-100 flex items-center justify-between">
        <span className="text-xs text-slate-400">
          {data.length} {viewMode === "users" ? "users" : drilldown ? "workspaces" : "projects"}
        </span>
        <div className="flex items-center gap-1">
          <PageBtn label="Prev" onClick={() => onPageChange(Math.max(1, page - 1))} disabled={page === 1} />
          {Array.from({ length: totalPages }, (_, i) => (
            <button
              key={i}
              onClick={() => onPageChange(i + 1)}
              className={`w-7 h-7 rounded-md text-xs font-semibold transition-colors ${
                page === i + 1 ? "bg-blue-600 text-white" : "text-slate-500 hover:bg-slate-100"
              }`}
            >
              {i + 1}
            </button>
          ))}
          <PageBtn label="Next" onClick={() => onPageChange(Math.min(totalPages, page + 1))} disabled={page >= totalPages} />
        </div>
      </div>
    </div>
  );
}

function SortTh({
  label,
  col,
  sortCol,
  sortDir,
  onSort,
}: {
  label: string;
  col: string;
  sortCol: string;
  sortDir: "asc" | "desc";
  onSort: (c: string) => void;
}) {
  const active = sortCol === col;
  return (
    <th
      onClick={() => onSort(col)}
      className="px-4 py-3 text-left text-[11px] font-semibold text-slate-400 uppercase tracking-widest cursor-pointer select-none whitespace-nowrap hover:text-slate-600 transition-colors"
    >
      <span className="flex items-center gap-1">
        {label}
        <span className="inline-flex flex-col gap-px ml-0.5">
          <ChevronUp size={9} className={active && sortDir === "asc" ? "text-blue-500" : "text-slate-300"} />
          <ChevronDown size={9} className={active && sortDir === "desc" ? "text-blue-500" : "text-slate-300"} />
        </span>
      </span>
    </th>
  );
}

function PageBtn({ label, onClick, disabled }: { label: string; onClick: () => void; disabled: boolean }) {
  return (
    <button
      onClick={onClick}
      disabled={disabled}
      className="px-2.5 py-1 rounded-md border border-slate-200 text-xs font-medium text-slate-500 disabled:opacity-35 hover:bg-slate-50 transition-colors"
    >
      {label}
    </button>
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

function activityLabel(d: string): string {
  if (d === "2026-07-14") return "Today";
  if (d === "2026-07-13") return "Yesterday";
  const diff = Math.round((new Date("2026-07-14").getTime() - new Date(d).getTime()) / 86400000);
  return `${diff}d ago`;
}

function activityColor(d: string): string {
  if (d === "2026-07-14") return "bg-emerald-50 text-emerald-700 ring-1 ring-emerald-200";
  if (d === "2026-07-13") return "bg-blue-50 text-blue-700 ring-1 ring-blue-200";
  return "bg-slate-100 text-slate-500";
}
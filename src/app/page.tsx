"use client";

import { useState, useMemo } from "react";
import { DashboardHeader } from "@/components/DashboardHeader";
import { KPICards } from "@/components/KPICards";
import { DataTable } from "@/components/DataTable";
import { CLIENTS, PROJECTS, WORKSPACES, USERS, Project, User } from "@/lib/mock-data";

const PAGE_SIZE = 6;

export default function CostCenterAdmin() {
  const [client, setClient] = useState(CLIENTS[0]);
  const [dateRange, setDateRange] = useState("Last 30 Days");
  const [viewMode, setViewMode] = useState<"projects" | "users">("projects");
  const [drilldown, setDrilldown] = useState<{ id: number; name: string } | null>(null);
  const [search, setSearch] = useState("");
  const [sortCol, setSortCol] = useState("cost");
  const [sortDir, setSortDir] = useState<"asc" | "desc">("desc");
  const [page, setPage] = useState(1);

  const projects = PROJECTS[client] ?? [];
  const users = USERS[client] ?? [];
  const workspaces = drilldown ? (WORKSPACES[drilldown.id] ?? []) : [];

  const handleClientChange = (c: string) => {
    setClient(c);
    setDrilldown(null);
    setSearch("");
    setPage(1);
    setSortCol("cost");
    setSortDir("desc");
  };

  const handleSort = (col: string) => {
    if (sortCol === col) {
      setSortDir(sortDir === "asc" ? "desc" : "asc");
    } else {
      setSortCol(col);
      setSortDir("desc");
    }
    setPage(1);
  };

  const handleViewModeChange = (mode: "projects" | "users") => {
    setViewMode(mode);
    setSearch("");
    setPage(1);
    setSortCol("cost");
    setSortDir("desc");
  };

  const handleBack = () => {
    setDrilldown(null);
    setSearch("");
    setPage(1);
    setSortCol("cost");
    setSortDir("desc");
  };

  const handleRowClick = (row: Project | User) => {
    if (viewMode === "projects" && !drilldown) {
      setDrilldown({ id: row.id, name: row.name });
      setSearch("");
      setPage(1);
      setSortCol("cost");
      setSortDir("desc");
    }
  };

  const kpi = useMemo(
    () => ({
      cost: projects.reduce((a, p) => a + p.cost, 0),
      tokens: projects.reduce((a, p) => a + p.totalTokens, 0),
      workflows: projects.reduce((a, p) => a + p.workflows, 0),
    }),
    [projects]
  );

  const rawRows = viewMode === "users" ? users : drilldown ? workspaces : projects;

  const tableRows = useMemo(() => {
    let rows: any[] = rawRows;
    if (search.trim()) {
      rows = rows.filter((r) => {
        const nameMatch = r.name.toLowerCase().includes(search.toLowerCase());
        const emailMatch = "email" in r && r.email.toLowerCase().includes(search.toLowerCase());
        return nameMatch || emailMatch;
      });
    }
    return [...rows].sort((a, b) => {
      if (sortCol === "avgCost") {
        const aa = a.cost / (a.workflows || 1);
        const bb = b.cost / (b.workflows || 1);
        return sortDir === "asc" ? aa - bb : bb - aa;
      }
      const av = a[sortCol];
      const bv = b[sortCol];
      if (typeof av === "number") return sortDir === "asc" ? av - bv : bv - av;
      return sortDir === "asc" ? String(av).localeCompare(String(bv)) : String(bv).localeCompare(String(av));
    });
  }, [rawRows, search, sortCol, sortDir]);

  const totalPages = Math.max(1, Math.ceil(tableRows.length / PAGE_SIZE));
  const pagedRows = tableRows.slice((page - 1) * PAGE_SIZE, page * PAGE_SIZE);

  return (
    <div className="min-h-screen bg-slate-50 font-sans">
      <DashboardHeader
        client={client}
        dateRange={dateRange}
        clients={CLIENTS}
        onClientChange={handleClientChange}
        onDateRangeChange={setDateRange}
      />

      <div className="max-w-screen-2xl mx-auto px-5 py-5">
        <KPICards totalCost={kpi.cost} totalTokens={kpi.tokens} totalWorkflows={kpi.workflows} />

        <div className="flex gap-4 items-start">
          <DataTable
            viewMode={viewMode}
            data={pagedRows}
            drilldown={drilldown}
            client={client}
            search={search}
            sortCol={sortCol}
            sortDir={sortDir}
            page={page}
            totalPages={totalPages}
            onSearch={setSearch}
            onSort={handleSort}
            onPageChange={setPage}
            onRowClick={handleRowClick}
            onBack={handleBack}
            onViewModeChange={handleViewModeChange}
          />
        </div>
      </div>
    </div>
  );
}
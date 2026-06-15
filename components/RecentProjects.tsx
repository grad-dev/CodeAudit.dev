"use client";
import React, { useState } from "react";
import Link from "next/link";
import { ArrowRight, ChevronDown, ChevronRight, AlertOctagon, AlertTriangle, AlertCircle } from "lucide-react";

const findings = [
  {
    id: "CA-2026-001",
    severity: "Critical",
    title: "JWT Secret Hardcoded",
    file: "src/auth/jwt_service.ts:42",
    status: "Unresolved",
    icon: <AlertOctagon className="w-4 h-4 text-red-600" />,
    badgeClass: "bg-red-500 text-white border-[2px] border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]",
    rowBorderClass: "border-l-[6px] border-l-red-500",
    description: "A JWT signing secret was found directly in source code. If exposed, attackers could impersonate any user in the system.",
    fix: `// ❌ CRITICAL: Hardcoded secret
const token = jwt.sign({ userId: user.id }, "dev_super_secret_key_123");

// ✅ FIXED: Using environment variable
const token = jwt.sign({ userId: user.id }, process.env.JWT_SECRET);`
  },
  {
    id: "CA-2026-042",
    severity: "High",
    title: "Missing Rate Limiting",
    file: "src/routes/login.js:18",
    status: "Unresolved",
    icon: <AlertTriangle className="w-4 h-4 text-orange-600" />,
    badgeClass: "bg-orange-500 text-black border-[2px] border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]",
    rowBorderClass: "border-l-[6px] border-l-orange-500",
    description: "Authentication endpoints lack rate limiting, leaving the application vulnerable to automated credential stuffing attacks.",
    fix: `// ❌ HIGH: No rate limit on auth route
app.post('/api/login', loginHandler);

// ✅ FIXED: Throttling applied
const authLimiter = rateLimit({ windowMs: 15 * 60 * 1000, max: 5 });
app.post('/api/login', authLimiter, loginHandler);`
  },
  {
    id: "CA-2026-089",
    severity: "Medium",
    title: "Oversized Frontend Bundle",
    file: "dist/static/js/main.bundle.js",
    status: "Warning",
    icon: <AlertCircle className="w-4 h-4 text-yellow-600" />,
    badgeClass: "bg-yellow-400 text-black border-[2px] border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]",
    rowBorderClass: "border-l-[6px] border-l-yellow-400",
    description: "The application ships over 2.8 MB of JavaScript on first load, severely impacting performance metrics and user experience.",
    fix: `// ❌ MEDIUM: Importing entire library
import _ from 'lodash';

// ✅ FIXED: Targeted imports and code splitting
import debounce from 'lodash/debounce';
const HeavyComponent = React.lazy(() => import('./HeavyComponent'));`
  }
];

const RecentProjects = () => {
  const [expandedRow, setExpandedRow] = useState<string | null>("CA-2026-001");

  const toggleRow = (id: string) => {
    if (expandedRow === id) {
      setExpandedRow(null);
    } else {
      setExpandedRow(id);
    }
  };

  return (
    <section className="py-24 px-4 md:px-8 max-w-[85rem] mx-auto w-full bg-gray-50 border-t-[4px] border-black">
      
      <div className="mb-12 max-w-3xl bg-black p-6 text-white border-[4px] border-black shadow-[8px_8px_0px_0px_rgba(0,0,0,1)]">
        <h2 className="text-xl md:text-3xl font-black text-white mb-4 tracking-tighter uppercase leading-[1]">
          Sample Findings
        </h2>
        <p className="text-xs md:text-sm text-white font-bold leading-relaxed border-l-[4px] border-red-500 pl-4 bg-gray-900 py-2">
          See exactly what CodeAudit catches that standard linters miss. 
          No fluff—just raw, actionable security data.
        </p>
      </div>

      {/* The Audit Log Table */}
      <div className="w-full border-[4px] border-black overflow-hidden bg-white mb-10 shadow-[12px_12px_0px_0px_rgba(0,0,0,1)]">
        
        {/* Table Header */}
        <div className="hidden md:grid grid-cols-12 gap-4 p-5 bg-black border-b-[4px] border-black text-[10px] font-black text-white uppercase tracking-widest">
          <div className="col-span-2">Severity</div>
          <div className="col-span-3">Vulnerability_ID</div>
          <div className="col-span-5">File_Path</div>
          <div className="col-span-2 text-right">Status</div>
        </div>

        {/* Table Body */}
        <div className="flex flex-col">
          {findings.map((item) => {
            const isExpanded = expandedRow === item.id;
            
            return (
              <div key={item.id} className={`border-b-[4px] border-gray-900 last:border-b-0 ${item.rowBorderClass}`}>
                {/* Row Clickable Area */}
                <button 
                  onClick={() => toggleRow(item.id)}
                  className={`w-full grid grid-cols-1 md:grid-cols-12 gap-4 p-5 text-left items-center transition-colors text-xs md:text-sm ${isExpanded ? 'bg-blue-600 text-white' : 'hover:bg-gray-100 bg-white text-black'}`}
                >
                  {/* Severity */}
                  <div className="col-span-1 md:col-span-2 flex items-center gap-2">
                    {isExpanded ? <ChevronDown className={`w-4 h-4 ${isExpanded ? 'text-white' : 'text-black'}`} /> : <ChevronRight className={`w-4 h-4 ${isExpanded ? 'text-white' : 'text-black'}`} />}
                    <span className={`inline-flex items-center gap-1.5 px-2 py-0.5 text-[10px] font-black uppercase ${item.badgeClass}`}>
                      {item.icon} {item.severity}
                    </span>
                  </div>
                  
                  {/* Vulnerability ID */}
                  <div className="col-span-1 md:col-span-3 font-black text-[10px] md:text-xs">
                    {item.id}: <span className="font-bold opacity-80">{item.title}</span>
                  </div>

                  {/* File Path */}
                  <div className="col-span-1 md:col-span-5 truncate hidden md:block font-bold text-[10px] md:text-xs">
                    {item.file}
                  </div>

                  {/* Status */}
                  <div className="col-span-1 md:col-span-2 text-right font-black uppercase hidden md:block text-[10px] md:text-xs">
                    {item.status}
                  </div>
                </button>

                {/* Expanded Content Area */}
                {isExpanded && (
                  <div className="bg-gray-100 border-t-[4px] border-black p-6 md:p-10">
                    <div className="max-w-3xl">
                      <div className="mb-8 border-l-[4px] border-black pl-5">
                        <h4 className="text-xs md:text-sm font-black text-black uppercase tracking-widest mb-3 bg-yellow-300 inline-block px-2 py-1 border-[2px] border-black shadow-[2px_2px_0px_0px_rgba(0,0,0,1)]">Detailed Analysis</h4>
                        <p className="text-black leading-relaxed font-sans text-xs md:text-sm font-bold">
                          {item.description}
                        </p>
                      </div>

                      <div className="border-l-[4px] border-black pl-5">
                        <h4 className="text-xs md:text-sm font-black text-black uppercase tracking-widest mb-3 bg-green-400 inline-block px-2 py-1 border-[2px] border-black shadow-[2px_2px_0px_0px_rgba(0,0,0,1)]">Remediation Code</h4>
                        <div className="bg-black border-[4px] border-black p-5 overflow-x-auto shadow-[4px_4px_0px_0px_rgba(0,0,0,0.5)]">
                          <pre className="text-[10px] md:text-xs font-mono leading-relaxed"><code className="text-white">
                            {item.fix.split('\n').map((line, i) => {
                               let colorClass = "text-gray-300";
                               if (line.includes('❌')) colorClass = "text-red-500 font-bold bg-red-950/50 inline-block px-1";
                               if (line.includes('✅')) colorClass = "text-green-400 font-bold bg-green-950/50 inline-block px-1";
                               if (line.includes('const ') || line.includes('import ') || line.includes('app.')) colorClass = "text-blue-400 font-bold";
                               
                               return (
                                 <div key={i} className={colorClass}>{line || ' '}</div>
                               );
                            })}
                          </code></pre>
                        </div>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>

      <div>
         <Link 
            href="/sample-report"
            className="inline-flex items-center gap-2 font-black text-black hover:bg-black hover:text-white transition-all group text-[10px] md:text-xs uppercase tracking-widest border-[4px] border-black px-4 py-3 shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] active:translate-x-1 active:translate-y-1 active:shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] bg-white"
          >
            View Full Audit Log <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform stroke-[3]" />
          </Link>
      </div>

    </section>
  );
};

export default RecentProjects;

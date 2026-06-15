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
    badgeClass: "bg-red-100 text-red-700 border border-red-200",
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
    badgeClass: "bg-orange-100 text-orange-700 border border-orange-200",
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
    badgeClass: "bg-yellow-100 text-yellow-700 border border-yellow-200",
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
    <section className="py-24 px-4 md:px-6 max-w-[90rem] mx-auto w-full bg-white border-t border-gray-200">
      
      <div className="mb-12 max-w-3xl">
        <h2 className="text-sm font-bold tracking-widest text-gray-500 uppercase mb-3">
          Deep Inspection
        </h2>
        <h3 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 tracking-tight">
          Live Audit Log
        </h3>
        <p className="text-lg text-gray-600 leading-relaxed">
          See exactly what CodeAudit catches that standard linters miss. 
          No fluff—just raw, actionable security data.
        </p>
      </div>

      {/* The Audit Log Table */}
      <div className="w-full border border-gray-300 rounded-lg overflow-hidden bg-white shadow-sm mb-12">
        
        {/* Table Header */}
        <div className="hidden md:grid grid-cols-12 gap-4 p-4 bg-gray-50 border-b border-gray-300 text-xs font-mono font-bold text-gray-500 uppercase tracking-wider">
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
              <div key={item.id} className="border-b border-gray-200 last:border-b-0">
                {/* Row Clickable Area */}
                <button 
                  onClick={() => toggleRow(item.id)}
                  className={`w-full grid grid-cols-1 md:grid-cols-12 gap-4 p-4 text-left items-center transition-colors font-mono text-sm ${isExpanded ? 'bg-blue-50/30' : 'hover:bg-gray-50 bg-white'}`}
                >
                  {/* Severity */}
                  <div className="col-span-1 md:col-span-2 flex items-center gap-2">
                    {isExpanded ? <ChevronDown className="w-4 h-4 text-gray-400" /> : <ChevronRight className="w-4 h-4 text-gray-400" />}
                    <span className={`inline-flex items-center gap-1.5 px-2 py-0.5 rounded text-xs font-bold ${item.badgeClass}`}>
                      {item.icon} {item.severity}
                    </span>
                  </div>
                  
                  {/* Vulnerability ID */}
                  <div className="col-span-1 md:col-span-3 font-bold text-gray-900">
                    {item.id}: <span className="font-normal text-gray-700">{item.title}</span>
                  </div>

                  {/* File Path */}
                  <div className="col-span-1 md:col-span-5 text-gray-500 truncate hidden md:block">
                    {item.file}
                  </div>

                  {/* Status */}
                  <div className="col-span-1 md:col-span-2 text-right font-bold text-gray-400 hidden md:block">
                    {item.status}
                  </div>
                </button>

                {/* Expanded Content Area */}
                {isExpanded && (
                  <div className="bg-gray-50 border-t border-gray-200 p-6 md:p-8">
                    <div className="max-w-4xl">
                      <div className="mb-6">
                        <h4 className="text-sm font-bold text-gray-900 uppercase tracking-wider mb-2 font-mono">Detailed Analysis</h4>
                        <p className="text-gray-700 leading-relaxed font-sans text-base">
                          {item.description}
                        </p>
                      </div>

                      <div>
                        <h4 className="text-sm font-bold text-gray-900 uppercase tracking-wider mb-2 font-mono">Remediation Code</h4>
                        <div className="bg-[#0d0d10] rounded-md border border-gray-800 p-4 overflow-x-auto">
                          <pre className="text-sm font-mono leading-relaxed"><code className="text-gray-300">
                            {item.fix.split('\n').map((line, i) => {
                               let colorClass = "text-gray-300";
                               if (line.includes('❌')) colorClass = "text-red-400 font-bold";
                               if (line.includes('✅')) colorClass = "text-green-400 font-bold";
                               if (line.includes('const ') || line.includes('import ') || line.includes('app.')) colorClass = "text-blue-300";
                               
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
            className="inline-flex items-center gap-2 font-bold text-gray-900 hover:text-blue-600 transition-colors group font-mono text-sm uppercase tracking-wider"
          >
            View Full Audit Log <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </Link>
      </div>

    </section>
  );
};

export default RecentProjects;

import os

components_dir = 'c:/Users/suraj/Desktop/codeaudit.dev/components/products'

def process_file(filepath):
    with open(filepath, 'r', encoding='utf-8') as f:
        content = f.read()

    # Generic
    content = content.replace('Deploy Scanner', 'Audit My Code')
    content = content.replace('Initialize Audit', 'Audit My Code')
    content = content.replace('Query Logs (FAQ)', 'FAQ')
    content = content.replace('Knowledge Base Queries', 'FAQ')
    content = content.replace('Integration Workflow', 'How it works')
    content = content.replace('Executive Summary', 'Overview')
    content = content.replace('1.0 Specification', 'Overview')
    content = content.replace('2.0 Core Components', 'What We Check For')
    content = content.replace('Active Heuristics', 'What We Check For')
    content = content.replace('Analysis Capabilities', 'What We Check For')
    content = content.replace('System Parameters', 'Details')
    content = content.replace('Execute Build', 'Audit My Code')
    content = content.replace('Threat Vectors Detected', 'What We Check For')
    content = content.replace('CLASSIFIED MEMO', 'Overview')
    content = content.replace('DECRYPT PROJECT', 'Audit My Code')
    content = content.replace('USER_PROMPT_INIT', 'User Prompt')
    content = content.replace('SYSTEM_RESPONSE // AGENT', 'AI Response')
    content = content.replace('WORKFLOW_INSTRUCTION', 'How it works')
    content = content.replace('EXECUTE_WAITLIST_JOIN', 'Join Waitlist')
    content = content.replace('CODEAUDIT.DEV // INTERNAL DOCUMENT', 'CodeAudit Document')
    content = content.replace('EXECUTIVE SUMMARY', 'Overview')
    content = content.replace('FEATURE SPECIFICATION', 'Features')
    content = content.replace('JOIN_WAITLIST_PROTOCOL', 'Join Waitlist')
    content = content.replace('Incident Report // Classified', 'Security Findings')
    content = content.replace('Incident Report', 'Sample Finding')

    # SecurityScannerLayout specific list changes
    content = content.replace(
        '<span className="text-red-600 mr-3 font-black bg-red-100 px-1 border-[2px] border-red-600">[{String(idx + 1).padStart(2, \'0\')}]</span>',
        '<span className="text-red-600 mr-3 font-black text-lg leading-none mt-[-2px]">•</span>'
    )
    
    # PerformanceAnalyzerLayout specific list changes
    content = content.replace(
        '<div className="w-16 flex-shrink-0 border-r-[4px] border-black p-4 font-black text-black bg-gray-200 flex items-center justify-center text-[10px] md:text-xs">\n                    {(idx + 1).toString().padStart(2, \'0\')}\n                  </div>',
        '<div className="w-16 flex-shrink-0 border-r-[4px] border-black p-4 font-black text-black bg-gray-200 flex items-center justify-center text-[10px] md:text-xs">\n                    •\n                  </div>'
    )

    with open(filepath, 'w', encoding='utf-8') as f:
        f.write(content)

for filename in os.listdir(components_dir):
    if filename.endswith('.tsx'):
        process_file(os.path.join(components_dir, filename))

# Now fix blog page
blog_page = 'c:/Users/suraj/Desktop/codeaudit.dev/app/blog/page.tsx'
if os.path.exists(blog_page):
    with open(blog_page, 'r', encoding='utf-8') as f:
        content = f.read()
    content = content.replace('SYSTEM.LOG // BLOG', 'CodeAudit Blog')
    content = content.replace('[[ READ ]]', 'Read article')
    with open(blog_page, 'w', encoding='utf-8') as f:
        f.write(content)

# Now fix blog post page
blog_slug_page = 'c:/Users/suraj/Desktop/codeaudit.dev/app/blog/[slug]/page.tsx'
if os.path.exists(blog_slug_page):
    with open(blog_slug_page, 'r', encoding='utf-8') as f:
        content = f.read()
    content = content.replace('[ BACK TO SYSTEM.LOG ]', '← Back to Blog')
    with open(blog_slug_page, 'w', encoding='utf-8') as f:
        f.write(content)

# Now fix secure stack pages
secure_stack_page = 'c:/Users/suraj/Desktop/codeaudit.dev/app/secure/[stack]/page.tsx'
if os.path.exists(secure_stack_page):
    with open(secure_stack_page, 'r', encoding='utf-8') as f:
        content = f.read()
    content = content.replace('INITIALIZE SCAN', 'Audit My Code')
    content = content.replace('REQUEST ACCESS', 'Join Waitlist')
    # Remove the AUDIT eyebrow tag
    import re
    content = re.sub(r'<div className="inline-flex items-center gap-2 px-3 py-1 bg-black text-white border-\[2px\] border-black mb-6 shadow-\[4px_4px_0_0_rgba\(0,0,0,1\)\]">.*?</div>', '', content, flags=re.DOTALL)
    with open(secure_stack_page, 'w', encoding='utf-8') as f:
        f.write(content)

# Now fix pricing page
pricing_page = 'c:/Users/suraj/Desktop/codeaudit.dev/app/pricing/page.tsx'
if os.path.exists(pricing_page):
    with open(pricing_page, 'r', encoding='utf-8') as f:
        content = f.read()
    content = content.replace("<span className=\"text-black mr-3 font-bold\">{'>'}</span>", "<span className=\"text-black mr-3 font-bold\">•</span>")
    with open(pricing_page, 'w', encoding='utf-8') as f:
        f.write(content)

# Now fix sample report
sample_report_page = 'c:/Users/suraj/Desktop/codeaudit.dev/app/sample-report/page.tsx'
if os.path.exists(sample_report_page):
    with open(sample_report_page, 'r', encoding='utf-8') as f:
        content = f.read()
    content = content.replace('System_Audit_Report', 'System Audit Report')
    content = content.replace('[1] Security_Findings', '[1] Security Findings')
    content = content.replace('[2] AI-Generated_Code_Review', '[2] AI-Generated Code Review')
    content = content.replace('[3] AI_Fix_Prompt_Generation', '[3] AI Fix Prompt Generation')
    with open(sample_report_page, 'w', encoding='utf-8') as f:
        f.write(content)

print("Done.")

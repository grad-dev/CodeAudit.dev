import os

components_dir = 'c:/Users/suraj/Desktop/codeaudit.dev/components'

allowed_mono_files = ['HeroSection.tsx']

for root, dirs, files in os.walk(components_dir):
    for file in files:
        if file.endswith('.tsx') and file not in allowed_mono_files:
            filepath = os.path.join(root, file)
            with open(filepath, 'r', encoding='utf-8') as f:
                content = f.read()
            
            # For products and RecentProjects, we only allow font-mono on <pre> or <code> or specifically terminal interfaces
            if 'products' not in filepath and file != 'RecentProjects.tsx':
                content = content.replace('font-mono ', '').replace(' font-mono', '').replace('font-mono', '')
            elif file == 'RecentProjects.tsx':
                # Remove font-mono from headings and buttons
                content = content.replace(' font-mono', '')
                # Restore font-mono for the pre block
                content = content.replace('className="text-[10px] md:text-xs leading-relaxed"', 'className="text-[10px] md:text-xs font-mono leading-relaxed"')
            
            # Specific file fixes
            if file == 'Clients.tsx':
                content = content.replace('status: "SUPPORTED"', '')
                content = content.replace(',\n  }', '\n  }')
                content = content.replace(',\n    \n  }', '\n  }')
            
            with open(filepath, 'w', encoding='utf-8') as f:
                f.write(content)

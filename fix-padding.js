const fs = require('fs');
const path = require('path');
const dir = 'c:\\Users\\suraj\\Desktop\\codeaudit.dev\\components\\products';
const files = fs.readdirSync(dir);

files.forEach(file => {
  if (file.endsWith('.tsx')) {
    const fullPath = path.join(dir, file);
    let content = fs.readFileSync(fullPath, 'utf8');
    
    // Find the first instance of <div className="min-h-screen...
    content = content.replace(/className="min-h-screen([^"]*)"/, (match, p1) => {
        if (!p1.includes('pt-24') && !p1.includes('pt-32')) {
            // we will replace p-4, p-8, p-12 with px-4 px-8 px-12 to avoid overriding pt-
            let newP1 = p1.replace(/\bp-4\b/g, 'px-4').replace(/\bp-8\b/g, 'px-8').replace(/\bp-12\b/g, 'px-12');
            newP1 = newP1.replace(/\bmd:p-8\b/g, 'md:px-8').replace(/\bmd:p-12\b/g, 'md:px-12').replace(/\bsm:p-8\b/g, 'sm:px-8');
            return `className="min-h-screen pt-32 pb-12${newP1}"`;
        }
        return match;
    });
    fs.writeFileSync(fullPath, content);
    console.log(`Updated ${file}`);
  }
});

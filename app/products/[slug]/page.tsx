import { notFound } from 'next/navigation';
import { Metadata } from 'next';
import { products } from '@/data/products';

import SecurityScannerLayout from '@/components/products/SecurityScannerLayout';
import PerformanceAnalyzerLayout from '@/components/products/PerformanceAnalyzerLayout';
import ArchitectureReviewLayout from '@/components/products/ArchitectureReviewLayout';
import AICodeReviewLayout from '@/components/products/AICodeReviewLayout';
import DependencyCheckerLayout from '@/components/products/DependencyCheckerLayout';
import SecretsDetectionLayout from '@/components/products/SecretsDetectionLayout';
import FixPromptsLayout from '@/components/products/FixPromptsLayout';
import ReportsDashboardLayout from '@/components/products/ReportsDashboardLayout';

interface ProductPageProps {
  params: {
    slug: string;
  };
}

export function generateStaticParams() {
  return products.map((p) => ({ slug: p.slug }));
}

export function generateMetadata({ params }: ProductPageProps): Metadata {
  const product = products.find((p) => p.slug === params.slug);
  
  if (!product) return { title: 'Product Not Found' };

  return {
    title: product.seo.title,
    description: product.seo.description,
    alternates: { canonical: `https://codeaudit.dev/products/${product.slug}` },
  };
}

export default function ProductPage({ params }: ProductPageProps) {
  const product = products.find((p) => p.slug === params.slug);
  if (!product) notFound();

  switch (product.slug) {
    case 'security-scanner':
      return <SecurityScannerLayout product={product} />;
    case 'performance-analyzer':
      return <PerformanceAnalyzerLayout product={product} />;
    case 'architecture-review':
      return <ArchitectureReviewLayout product={product} />;
    case 'ai-code-review':
      return <AICodeReviewLayout product={product} />;
    case 'dependency-checker':
      return <DependencyCheckerLayout product={product} />;
    case 'secrets-detection':
      return <SecretsDetectionLayout product={product} />;
    case 'fix-prompts':
      return <FixPromptsLayout product={product} />;
    case 'reports-dashboard':
      return <ReportsDashboardLayout product={product} />;
    default:
      notFound();
  }
}

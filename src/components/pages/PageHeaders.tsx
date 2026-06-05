"use client";

import { PageHeader } from "@/components/ui/PageHeader";
import { useI18n } from "@/i18n/context";

export function ContactPageHeader() {
  const { content } = useI18n();
  const { contact } = content.ui;
  return (
    <PageHeader badge={contact.badge} title={contact.title} description={contact.description} />
  );
}

export function ServicesPageHeader() {
  const { content } = useI18n();
  const { services, pages } = content.ui;
  return (
    <PageHeader
      badge={services.badge}
      title={pages.servicesPageHeader}
      description={pages.servicesPageDesc}
    />
  );
}

export function ProductsPageHeader() {
  const { content } = useI18n();
  const { products, pages } = content.ui;
  return (
    <PageHeader
      badge={products.badge}
      title={pages.productsPageHeader}
      description={pages.productsPageDesc}
    />
  );
}

export function PricingPageHeader() {
  const { content } = useI18n();
  const { pages } = content.ui;
  return (
    <PageHeader
      badge={pages.pricing.title}
      title={pages.pricingPageHeader}
      description={pages.pricingPageDesc}
    />
  );
}

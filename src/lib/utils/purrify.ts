/**
 * Generate Purrify URL with UTM tracking
 */
export function purrifyUrl(path: string, page: string, medium: string = 'link'): string {
  const baseUrl = 'https://purrify.ca';
  const utmParams = new URLSearchParams({
    utm_source: 'thenaturalcatlitter',
    utm_medium: medium,
    utm_campaign: page,
  });

  return `${baseUrl}${path}?${utmParams.toString()}`;
}

export const purrifyLinks = {
  products: (page: string) => purrifyUrl('/products', page),
  trialSize: (page: string) => purrifyUrl('/products/trial-size', page),
  familyPack: (page: string) => purrifyUrl('/products/family-pack', page),
  howItWorks: (page: string) => purrifyUrl('/learn/how-it-works', page),
  science: (page: string) => purrifyUrl('/learn/science', page),
  safety: (page: string) => purrifyUrl('/learn/safety', page),
  faq: (page: string) => purrifyUrl('/learn/faq', page),
};

import withPlaiceholder from "@plaiceholder/next";

const cspHeader = `
    default-src 'self';
    script-src 'self' 'unsafe-eval' 'unsafe-inline';
    style-src 'self' 'unsafe-inline' https://fonts.googleapis.com;
    img-src 'self' https://ik.imagekit.io blob: data:;
    font-src 'self' https://fonts.gstatic.com;
    connect-src 'self' https://smc-sustainability.c3-interactive.ph https://sxrtmwec.forapprovalonly.net/sustainability https://sxrtmwec.forapprovalonly.net;
    object-src 'none';
    base-uri 'self';
    form-action 'self';
    frame-ancestors 'none';
    block-all-mixed-content;
    upgrade-insecure-requests;
    media-src 'self' https://smc-sustainability.c3-interactive.ph https://sxrtmwec.forapprovalonly.net/sustainability https://sxrtmwec.forapprovalonly.net;  
`

const securityHeaders = [
  {
    key: 'X-Frame-Options',
    value: 'SAMEORIGIN'
  },
];

const nextConfig = {
  basePath: "",
  // basePath: "/sustainability",
  // assetPrefix: "/sustainability",
  output: "export",
  images: {
    loader: 'custom',
    loaderFile: './src/utils/imageKitLoader.js',
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'ik.imagekit.io',
        port: '',
        pathname: '/smc/**',
      },
      {
        protocol: 'https',
        hostname: 'sxrtmwec.forapprovalonly.net/sustainability',
        port: '',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'smc-sustainability.c3-interactive.ph',
        port: '',
        pathname: '/**',
      },
    ],
    formats: ['image/avif', 'image/webp'],
  },
  reactStrictMode: true,
  swcMinify: true,
  compiler: {
    // Enables the styled-components SWC transform
    styledComponents: true,
  },
  trailingSlash: true,
  async headers() {
    return [
      {
        source: '/(.*)',
        headers: [
          {
            key: 'Content-Security-Policy',
            value: cspHeader.replace(/\n/g, ''),
          },
          // Add your custom security headers here
          ...securityHeaders,
        ],
      },
    ]
  },
};

export default withPlaiceholder(nextConfig);

// eslint-disable-next-line @typescript-eslint/triple-slash-reference
/// <reference path="./.sst/platform/config.d.ts" />

export default $config({
  app(input) {
    return {
      name: "hackkentucky",
      removal: input?.stage === "production" ? "retain" : "remove",
      protect: ["production"].includes(input?.stage),
      home: "aws",
    };
  },
  async run() {
    const aws = await import("@pulumi/aws");
    new sst.aws.Nextjs("HackKentucky", {
      domain: {
        name: "hackkentucky.com",
        dns: sst.aws.dns({
          zone: "Z02904321CAP9QVOTBGLO",
        }),
        cert: "arn:aws:acm:us-east-1:418295680070:certificate/86272627-eac2-4c36-b28f-bc851616a377",
      },
    });

    // ✅ Redirect www → root
    const redirectFn = new aws.cloudfront.Function("RedirectWWW", {
      runtime: "cloudfront-js-1.0", // ✅ required
      code: `
        function handler(event) {
          var host = event.request.headers.host.value;
          if (host === "www.hackkentucky.com") {
            return {
              statusCode: 301,
              statusDescription: "Moved Permanently",
              headers: {
                location: { value: "https://hackkentucky.com" }
              }
            };
          }
          return event.request;
        }
      `,
    });
        
    const wwwRedirectDist = new aws.cloudfront.Distribution("WWWHackKentuckyRedirect", {
      aliases: ["www.hackkentucky.com"],
      enabled: true,
      restrictions: {
        geoRestriction: {
          restrictionType: "none",
        },
      },
      origins: [
        {
          originId: "placeholder-origin",
          domainName: "hackkentucky.com",
          customOriginConfig: {
            originProtocolPolicy: "https-only",
            httpPort: 80,
            httpsPort: 443,
            originSslProtocols: ["TLSv1.2"],
          },
        },
      ],
      defaultCacheBehavior: {
        targetOriginId: "placeholder-origin",
        viewerProtocolPolicy: "redirect-to-https",
        allowedMethods: ["GET", "HEAD"],
        cachedMethods: ["GET", "HEAD"],
        cachePolicyId: "4135ea2d-6df8-44a3-9df3-4b5a84be39ad", // CachingDisabled
        functionAssociations: [
          {
            eventType: "viewer-request",
            functionArn: redirectFn.arn,
          },
        ],
      },
      viewerCertificate: {
        acmCertificateArn: "arn:aws:acm:us-east-1:418295680070:certificate/86272627-eac2-4c36-b28f-bc851616a377",
        sslSupportMethod: "sni-only",
      },
    });

    // ✅ Add this Route 53 record
    new aws.route53.Record("WWWAliasRecord", {
      name: "www.hackkentucky.com",
      type: "A",
      zoneId: "Z02904321CAP9QVOTBGLO",
      aliases: [{
        name: wwwRedirectDist.domainName,
        zoneId: "Z2FDTNDATAQYW2", // AWS' global CloudFront zone ID (always the same)
        evaluateTargetHealth: false,
      }],
    });
  },
});

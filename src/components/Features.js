import { TrendingUpIcon, LockClosedIcon, ServerIcon, ShieldCheckIcon, SupportIcon, LightningBoltIcon} from '@heroicons/react/outline'

const features = [
    { name: 'LiteSpeed Servers', desc: 'We’re using LiteSpeed servers which helps you to get a super-fast website. It helps you cache and optimizes the site', icon: ServerIcon },
    { name: 'Optimised WordPress', desc: 'We understand it’s difficult to optimise your site. When you will install WordPress it will come with baked in optimization', icon: TrendingUpIcon },
    { name: 'Free SSL Certificate', desc: 'No need to spend extra on SSL certificates because we at WebVerge give you SSL for free. We think of your privacy first', icon: LockClosedIcon },
    { name: 'Advanced Security', desc:'We help you with free image CDN which can help you to optimize all the images & dynamically change images in webp format', icon: ShieldCheckIcon },
    { name: 'Uptime Guaranteed', desc:'We know it is irritating to see your website go down. We understand your business needs and that is why we provide 99.9% uptime', icon: LightningBoltIcon },
    { name: 'Great Support', desc:'Sometimes setting up your website may take time to understand. You can always create a support ticket & we will help you', icon: SupportIcon },
  ]

export default function Features () {
return (
<div className="relative bg-gray-50 py-16 sm:py-24 lg:py-32">
<div className="mx-auto max-w-md px-4 text-center sm:max-w-3xl sm:px-6 lg:px-8 lg:max-w-7xl">
  <p className="mt-2 text-3xl font-extrabold text-gray-900 tracking-tight sm:text-4xl">
  Built for Performance
  </p>
  <p className="mt-5 max-w-prose mx-auto text-xl text-gray-500">
  Every layer of WebVerge has been built with performance in mind. We’ll fine tune this even further to keep your WordPress website lightening fast under heavy load.

  </p>
  <div className="mt-12">
    <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
      {features.map((feature) => (
        <div key={feature.name} className="pt-6">
          <div className="flow-root bg-white rounded-lg px-6 pb-8 shadow">
            <div className="-mt-6">
              <div>
                <span className="inline-flex items-center justify-center p-3 bg-indigo-500 rounded-md shadow-lg">
                  <feature.icon className="h-6 w-6 text-white" aria-hidden="true" />
                </span>
              </div>
              <h3 className="mt-8 text-lg font-medium text-gray-900 tracking-tight">{feature.name}</h3>
              <p className="mt-5 text-base text-gray-500">
              {feature.desc}
              </p>
            </div>
          </div>
        </div>
      ))}
    </div>
  </div>
</div>
</div>
)
      }
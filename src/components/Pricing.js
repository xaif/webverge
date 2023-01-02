import { CheckIcon } from '@heroicons/react/outline'


const starterFeatures = ['Powered By LiteSpeed', '1 Website', '3 GB SSD Storage','20 GB Bandwidth', 'Free SSL Certificate', 'Auto WordPress Updates']
const growthFeatures = ['Powered By LiteSpeed', '3 Website', '8 GB SSD Storage','60 GB Bandwidth', 'Free SSL Certificate', 'Auto WordPress Updates', 'Google Page Speed Optimization', 'WhatsApp Priority Support']
const agencyFeatures = ['Powered By LiteSpeed', '10 Website', '12 GB SSD Storage','100 GB Bandwidth', 'Free SSL Certificate', 'Auto WordPress Updates', 'Google Page Speed Optimization']

const Price = [{Starter: 249, Growth: 499, Agency: 999}]


export default function Pricing () {
    return (
        <div className="bg-gray-900">
        <div className="pt-12 px-4 sm:px-6 lg:px-8 lg:pt-20">
          <div className="text-center">
            <h2 className="text-lg leading-6 font-semibold text-gray-300 uppercase tracking-wider">Pricing</h2>

            <p className="mt-2 text-3xl font-extrabold text-white sm:text-4xl lg:text-5xl">
            Transparent Prices, No Surprises
            </p>
            <p className="mt-3 max-w-4xl mx-auto text-xl text-gray-300 sm:mt-5 sm:text-xl">
            We provide the best Cloud Infrastructure which will help you to manage any kind of website. 
            We know what is best for you and that is the reason we focus on security & speed.
            </p>
          </div>
        </div>
  
        <div className="mt-16 bg-white pb-12 lg:mt-20 lg:pb-20">
          <div className="relative z-0">
            <div className="absolute inset-0 h-5/6 bg-gray-900 lg:h-2/3" />
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="relative lg:grid lg:grid-cols-7">
                <div className="mx-auto max-w-md lg:mx-0 lg:max-w-none lg:col-start-1 lg:col-end-3 lg:row-start-2 lg:row-end-3">
                  <div className="h-full flex flex-col rounded-lg shadow-lg overflow-hidden lg:rounded-none lg:rounded-l-lg">
                    <div className="flex-1 flex flex-col">
                      <div className="bg-white px-6 py-10">
                        <div>
                          <h3 className="text-center text-2xl font-medium text-gray-900" id="tier-starter">
                            Starter
                          </h3>
                          {Price.map((Price) => (
                          <div className="mt-4 flex items-center justify-center">
                            <span className="px-3 flex items-start text-6xl tracking-tight text-gray-900">
                              <span className="mt-2 mr-2 text-4xl font-medium">₹</span>
                              <span className="font-extrabold">{Price.Starter}</span>
                            </span>
                            <span className="text-xl font-medium text-gray-500">/month</span>
                          </div>
                        ))}
                        </div>
                      </div>
                      <div className="flex-1 flex flex-col justify-between border-t-2 border-gray-100 p-6 bg-gray-50 sm:p-10 lg:p-6 xl:p-10">
                        <ul role="list" className="space-y-4">
                          {starterFeatures.map((feature) => (
                            <li key={feature} className="flex items-start">
                              <div className="flex-shrink-0">
                                <CheckIcon className="flex-shrink-0 h-6 w-6 text-green-500" aria-hidden="true" />
                              </div>
                              <p className="ml-3 text-base font-medium text-gray-500">{feature}</p>
                            </li>
                          ))}
                        </ul>
                        <div className="mt-8">
                          <div className="rounded-lg shadow-md">
                            <a
                              href="https://account.webverge.io/store/linux-web-shared-hosting/starter"
                              className="block w-full text-center rounded-lg border border-transparent bg-white px-6 py-3 text-base font-medium text-indigo-600 hover:bg-gray-50"
                              aria-describedby="tier-starter"
                            >
                              Get Started
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="mt-10 max-w-lg mx-auto lg:mt-0 lg:max-w-none lg:mx-0 lg:col-start-3 lg:col-end-6 lg:row-start-1 lg:row-end-4">
                  <div className="relative z-10 rounded-lg shadow-xl">
                    <div
                      className="pointer-events-none absolute inset-0 rounded-lg border-2 border-indigo-600"
                      aria-hidden="true"
                    />
                    <div className="absolute inset-x-0 top-0 transform translate-y-px">
                      <div className="flex justify-center transform -translate-y-1/2">
                        <span className="inline-flex rounded-full bg-indigo-600 px-4 py-1 text-sm font-semibold tracking-wider uppercase text-white">
                          Most popular
                        </span>
                      </div>
                    </div>
                    <div className="bg-white rounded-t-lg px-6 pt-12 pb-10">
                      <div>
                        <h3 className="text-center text-3xl font-semibold text-gray-900 sm:-mx-6" id="tier-growth">
                          Growth
                        </h3>
                        {Price.map((Price) => (
                        <div className="mt-4 flex items-center justify-center">
                          <span className="px-3 flex items-start text-6xl tracking-tight text-gray-900 sm:text-6xl">
                            <span className="mt-2 mr-2 text-4xl font-medium">₹</span>
                            <span className="font-extrabold">{Price.Growth}</span>
                          </span>
                          <span className="text-2xl font-medium text-gray-500">/month</span>
                        </div>
                        ))}
                      </div>
                    </div>
                    <div className="border-t-2 border-gray-100 rounded-b-lg pt-10 pb-8 px-6 bg-gray-50 sm:px-10 sm:py-10">
                      <ul role="list" className="space-y-4">
                        {growthFeatures.map((feature) => (
                          <li key={feature} className="flex items-start">
                            <div className="flex-shrink-0">
                              <CheckIcon className="flex-shrink-0 h-6 w-6 text-green-500" aria-hidden="true" />
                            </div>
                            <p className="ml-3 text-base font-medium text-gray-500">{feature}</p>
                          </li>
                        ))}
                      </ul>
                      <div className="mt-10">
                        <div className="rounded-lg shadow-md">
                          <a
                            href="https://account.webverge.io/store/linux-web-shared-hosting/growth"
                            className="block w-full text-center rounded-lg border border-transparent bg-indigo-600 px-6 py-4 text-xl leading-6 font-medium text-white hover:bg-indigo-700"
                            aria-describedby="tier-growth"
                          >
                            Get Started Now
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="mt-10 mx-auto max-w-md lg:m-0 lg:max-w-none lg:col-start-6 lg:col-end-8 lg:row-start-2 lg:row-end-3">
                  <div className="h-full flex flex-col rounded-lg shadow-lg overflow-hidden lg:rounded-none lg:rounded-r-lg">
                    <div className="flex-1 flex flex-col">
                      <div className="bg-white px-6 py-10">
                        <div>
                          <h3 className="text-center text-2xl font-medium text-gray-900" id="tier-agency">
                            Agency
                          </h3>
                          {Price.map((Price) => (
                          <div className="mt-4 flex items-center justify-center">
                            <span className="px-3 flex items-start text-6xl tracking-tight text-gray-900">
                              <span className="mt-2 mr-2 text-4xl font-medium">₹</span>
                              <span className="font-extrabold">{Price.Agency}</span>
                            </span>
                            <span className="text-xl font-medium text-gray-500">/month</span>
                          </div>
                          ))}
                        </div>
                      </div>
                      <div className="flex-1 flex flex-col justify-between border-t-2 border-gray-100 p-6 bg-gray-50 sm:p-10 lg:p-6 xl:p-10">
                        <ul role="list" className="space-y-4">
                          {agencyFeatures.map((feature) => (
                            <li key={feature} className="flex items-start">
                              <div className="flex-shrink-0">
                                <CheckIcon className="flex-shrink-0 h-6 w-6 text-green-500" aria-hidden="true" />
                              </div>
                              <p className="ml-3 text-base font-medium text-gray-500">{feature}</p>
                            </li>
                          ))}
                        </ul>
                        <div className="mt-8">
                          <div className="rounded-lg shadow-md">
                            <a
                              href="https://account.webverge.io/store/linux-web-shared-hosting/agency"
                              className="block w-full text-center rounded-lg border border-transparent bg-white px-6 py-3 text-base font-medium text-indigo-600 hover:bg-gray-50"
                              aria-describedby="tier-agency"
                            >
                              Get Started Now
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
    
  }

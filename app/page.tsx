import Image from "next/image";
import { featuredProducts, productCategories } from "@/data/products";

const steps = [
  "Share what you need",
  "Get a clear quotation",
  "Confirm quantities",
  "Receive your supplies",
];

export default function Home() {
  return (
    <main className="min-h-screen bg-[#f7f4ee] text-[#1f2933]">
      <header className="sticky top-0 z-20 border-b border-black/10 bg-[#f7f4ee]/90 backdrop-blur">
        <nav className="mx-auto flex max-w-6xl items-center justify-between px-5 py-4">
          <a href="#" className="text-lg font-black tracking-[0.16em] text-[#0f3d57]">
            LIEU
          </a>
          <div className="hidden items-center gap-7 text-sm font-semibold text-[#43505c] sm:flex">
            <a href="#products" className="hover:text-[#0f3d57]">
              Products
            </a>
            <a href="#process" className="hover:text-[#0f3d57]">
              Process
            </a>
            <a href="#contact" className="hover:text-[#0f3d57]">
              Contact
            </a>
          </div>
          <a
            href="#contact"
            className="rounded-md bg-[#0f3d57] px-4 py-2 text-sm font-bold text-white shadow-sm transition hover:bg-[#155a78]"
          >
            Request quote
          </a>
        </nav>
      </header>

      <section className="mx-auto grid min-h-[calc(100vh-73px)] max-w-6xl items-center gap-10 px-5 py-12 md:grid-cols-[1.02fr_0.98fr]">
        <div>
          <p className="mb-4 inline-flex rounded-md bg-white px-3 py-2 text-xs font-bold uppercase tracking-[0.2em] text-[#be7c1d] shadow-sm">
            General supplies company
          </p>
          <h1 className="max-w-3xl text-5xl font-black leading-[1.02] text-[#15212b] sm:text-6xl lg:text-7xl">
            Lieu Enterprise Limited
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-8 text-[#43505c]">
            A practical supply partner for stationery, cleaning essentials,
            water dispensers, office items, and custom general procurement.
          </p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <a
              href="#products"
              className="rounded-md bg-[#d79b2b] px-5 py-3 text-center text-sm font-black text-[#1f2933] transition hover:bg-[#e6ad3a]"
            >
              View products
            </a>
            <a
              href="#contact"
              className="rounded-md border border-[#0f3d57]/25 bg-white px-5 py-3 text-center text-sm font-black text-[#0f3d57] transition hover:border-[#0f3d57]"
            >
              Talk to us
            </a>
          </div>
        </div>

        <div className="rounded-lg border border-black/10 bg-white p-5 shadow-xl">
          <div className="grid gap-3 sm:grid-cols-2">
            {productCategories.map((category) => (
              <div
                key={category.name}
                className="rounded-lg border border-black/10 bg-[#faf9f6] p-5"
              >
                <div
                  className={`mb-4 inline-flex rounded-md px-3 py-2 text-xs font-black ${category.accent}`}
                >
                  {category.name}
                </div>
                <p className="text-sm leading-6 text-[#52616f]">
                  {category.description}
                </p>
              </div>
            ))}
          </div>
          <div className="mt-4 grid grid-cols-3 overflow-hidden rounded-lg bg-[#15212b] text-white">
            <div className="px-4 py-4">
              <p className="text-2xl font-black">4</p>
              <p className="text-xs text-white/70">Core categories</p>
            </div>
            <div className="border-x border-white/10 px-4 py-4">
              <p className="text-2xl font-black">12+</p>
              <p className="text-xs text-white/70">Featured items</p>
            </div>
            <div className="px-4 py-4">
              <p className="text-2xl font-black">1</p>
              <p className="text-xs text-white/70">Simple supplier</p>
            </div>
          </div>
        </div>
      </section>

      <section id="products" className="bg-white px-5 py-20">
        <div className="mx-auto max-w-6xl">
          <div className="max-w-2xl">
            <p className="text-sm font-black uppercase tracking-[0.18em] text-[#be7c1d]">
              Product range
            </p>
            <h2 className="mt-3 text-4xl font-black text-[#15212b]">
              Everyday supplies, organized for fast requests.
            </h2>
          </div>

          <div className="mt-10 grid gap-5 md:grid-cols-2">
            {productCategories.map((category) => (
              <article
                key={category.name}
                className="rounded-lg border border-black/10 bg-[#faf9f6] p-6"
              >
                <div
                  className={`mb-5 inline-flex rounded-md px-3 py-2 text-sm font-black ${category.accent}`}
                >
                  {category.name}
                </div>
                <p className="max-w-xl text-base leading-7 text-[#52616f]">
                  {category.description}
                </p>
                <div className="mt-6 grid gap-3 sm:grid-cols-2">
                  {category.items.map((item) => (
                    <div
                      key={item.name}
                      className="overflow-hidden rounded-md border border-black/10 bg-white"
                    >
                      {item.image ? (
                        <div className="relative aspect-[4/3] bg-white">
                          <Image
                            src={item.image}
                            alt={item.name}
                            fill
                            sizes="(min-width: 1024px) 240px, (min-width: 640px) 40vw, 90vw"
                            className="object-contain p-4"
                          />
                        </div>
                      ) : null}
                      <p className="px-3 py-3 text-sm font-semibold text-[#344250]">
                        {item.name}
                      </p>
                    </div>
                  ))}
                </div>
              </article>
            ))}
          </div>

          <div className="mt-12 rounded-lg bg-[#0f3d57] p-6 text-white md:p-8">
            <h3 className="text-2xl font-black">Featured static catalogue</h3>
            <div className="mt-5 grid gap-2 sm:grid-cols-2 lg:grid-cols-4">
              {featuredProducts.map((product) => (
                <p
                  key={product}
                  className="rounded-md bg-white/10 px-3 py-3 text-sm font-semibold"
                >
                  {product}
                </p>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section id="process" className="px-5 py-20">
        <div className="mx-auto grid max-w-6xl gap-10 md:grid-cols-[0.8fr_1.2fr]">
          <div>
            <p className="text-sm font-black uppercase tracking-[0.18em] text-[#be7c1d]">
              How it works
            </p>
            <h2 className="mt-3 text-4xl font-black text-[#15212b]">
              A simple supply flow for repeat orders.
            </h2>
            <p className="mt-5 text-base leading-7 text-[#52616f]">
              The site keeps the message direct: Lieu Enterprise is available
              for everyday business supplies and quote-based procurement.
            </p>
          </div>

          <div className="grid gap-4 sm:grid-cols-2">
            {steps.map((step, index) => (
              <div
                key={step}
                className="rounded-lg border border-black/10 bg-white p-6 shadow-sm"
              >
                <p className="text-sm font-black text-[#d79b2b]">
                  0{index + 1}
                </p>
                <h3 className="mt-3 text-xl font-black text-[#15212b]">
                  {step}
                </h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="contact" className="bg-[#15212b] px-5 py-20 text-white">
        <div className="mx-auto grid max-w-6xl gap-8 md:grid-cols-[1fr_0.8fr] md:items-end">
          <div>
            <p className="text-sm font-black uppercase tracking-[0.18em] text-[#f1b84f]">
              Request a quote
            </p>
            <h2 className="mt-3 text-4xl font-black">
              Need office, cleaning, or general supplies?
            </h2>
            <p className="mt-5 max-w-2xl text-base leading-7 text-white/72">
              Send Lieu Enterprise Limited your list of items, quantities, and
              delivery details. This first version can be updated with phone,
              email, WhatsApp, and location once the client confirms them.
            </p>
          </div>

          <div className="rounded-lg bg-white p-6 text-[#15212b]">
            <p className="text-sm font-black uppercase tracking-[0.18em] text-[#be7c1d]">
              Lieu Enterprise Limited
            </p>
            <div className="mt-5 space-y-3 text-sm font-semibold text-[#43505c]">
              <p>Stationery and office items</p>
              <p>Cleaning products and facility supplies</p>
              <p>Water dispensers and assorted general items</p>
            </div>
            <a
              href="mailto:info@lieuenterprise.com"
              className="mt-6 block rounded-md bg-[#0f3d57] px-5 py-3 text-center text-sm font-black text-white transition hover:bg-[#155a78]"
            >
              Email placeholder
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}

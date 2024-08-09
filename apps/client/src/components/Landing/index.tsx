import Logo from "@/components/Logo"
import { Button } from "@/components/ui/button"
import { ArrowRight, CheckCircleIcon } from "lucide-react"
import type { Metadata } from 'next'
import bg from '../../../public/hyperion.jpg'


export const metadata: Metadata = {
  title: 'Hyperion - A Turborepo with Next.js, Nest.js & Supabase',
  description: 'Build scalable and robust web applications with Hyperion, a powerful monorepo setup combining Next.js, Nest.js, and Supabase.',
  openGraph: {
    title: 'Hyperion - A Turborepo with Next.js, Nest.js & Supabase',
    description: 'Build scalable and robust web applications with Hyperion, a powerful monorepo setup combining Next.js, Nest.js, and Supabase.',
    url: 'https://hyperion.com',
    type: 'website',
    images: [
      {
        url: 'https://hyperion.com/images/og-image.jpg',
        width: 800,
        height: 600,
        alt: 'Hyperion Logo',
      }
    ],
    siteName: 'Hyperion'
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Hyperion - A Turborepo with Next.js, Nest.js & Supabase',
    description: 'Build scalable and robust web applications with Hyperion, a powerful monorepo setup combining Next.js, Nest.js, and Supabase.',
    creator: '@hyperion'
  },
  robots: {
    index: true,
    follow: true,
    noarchive: false,
    nosnippet: false,
    noimageindex: false,
  }
}

const BuyButton = () => {
  return <Button className="flex gap-2">
    <span>Buy for $99</span>
    <ArrowRight className="w-4" />
  </Button>
}

const Header = () => {
  "use client";
  return <header className="flex items-center justify-between py-8">
    <Logo />
    <div className="flex gap-2">
      <Button variant="link">Login</Button>
      <BuyButton />
    </div>
  </header>
}

const Hero = () => {
  return <div className="hero flex flex-col gap-24">
    <div className="grid items-center lg:grid-cols-5 gap-8">
      <div className="grid gap-4 lg:col-span-3">
        <div className="flex justify-start">
          <div className="flex items-center hover:bg-neutral-50 transition cursor-pointer border rounded-full px-4 py-2 bg-white shadow text-start text-sm font-[500]">
            <div>Introducing Hyperion</div>
            <ArrowRight className="h-4" />
          </div>
        </div>
        <h1 className="text-[56px] font-[900]" style={{ lineHeight: 1.24 }}>A Turborepo with Next.js, Nest.js & Supabase</h1>
      </div>
      <div className="grid gap-4 lg:col-span-2">
        <div className="grid gap-4 text-left">
          <h2 className="text-lg text-neutral-400">Build scalable web applications in 1 minute with Hyperion, a powerful monorepo setup combining Next.js, Nest.js, and Supabase</h2>
        </div>
        <div className="flex justify-start gap-4">
          <Button variant="outline">Documentation</Button>
          <BuyButton />
        </div>
      </div>
    </div>
    <div className="bg-red-500 w-full h-[500px] rounded-[32px] grow bg-cover bg-center" style={{
      backgroundImage: `url(${bg.src})`,
    }}></div>
  </div>
}

const Features = () => {
  const list = [
    {
      title: "Dashboard",
      description: "Get all the essential insights on one page in one minute without complexity.",
    },
    {
      title: "Features",
      description: "Track which features of your app are the most or least used.",
    },
    {
      title: "Routes",
      description: "Real-time data on the number of visitors and interactions.",
    },
    {
      title: "Reports",
      description: "Insightful reports with charts that give you a valuable perspective on your business.",
    },
    {
      title: "Privacy",
      description: "Anonymous site measurement with no cookies or personal data collection, compliant with GDPR.",
    },
    {
      title: "Conversions",
      description: "Analyze paid campaigns, track revenue, and create custom events to increase conversions.",
    },
    {
      title: "Team",
      description: "Share your stats publicly or privately and invite team members.",
    },
    {
      title: "Workspaces",
      description: "Create as many workspaces you need for every project.",
    },
    {
      title: "Developer friendly",
      description: "Easily use our library on JS applications to start tracking.",
    }
  ]

  return <div className="grid gap-8">
    <header className="text-center">
      <h2 className="text-[32px] font-[600]">Features</h2>
    </header>
    <div className="grid lg:grid-cols-3 gap-8">
      {list.map((feature, index) => <div key={index}>
        <CheckCircleIcon className="mb-4 text-green-500" />
        <h3 className="text-xl font-[600] h-12">{feature.title}</h3>
        <p className="text-neutral-400">{feature.description}</p>
      </div>)}
    </div>
  </div>
}

const Testimonials = () => {
  return <div>
    <div className="grid gap-8">
      <header className="text-center">
        <h2 className="text-[32px] font-[600]">A word from the creator itself</h2>
      </header>
      <div className="grid gap-8 text-center ">
        <p className="text-xl text-neutral-500">I created Trackerbro because no other analytics product on the market offered me the ability to track data through my features. This is a problem I tackled by testing it directly in production, and now I can't live without it.</p>
        <p className="font-[600]">Guillaume Duhan,<br />CEO of Trackerbro</p>
      </div>
    </div>
  </div>
}

const Footer = () => {
  return <div>footer</div>
}

export default function LandingComponent() {
  return <div className="grid gap-24 container">
    <div className="grid gap-12">
      <Header />
      <Hero />
    </div>
    {/* <Features />
    <Testimonials />
    <Footer /> */}
  </div>;
}
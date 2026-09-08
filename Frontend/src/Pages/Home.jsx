import {
  Wallet,
  Brain,
  BarChart3,
  Target
} from "lucide-react";

import FeatureCard from "../Components/FeatureCard";
import HowItWorksCard from "../Components/HowItWorksCard";

function Home() {
  const features = [
    {
      icon: <Wallet />,
      title: "Expense Tracking",
      description: "Track your expenses and understand where your money goes.",
    },
    {
      icon: <BarChart3 />,
      title: "Smart Analytics",
      description: "Understand your spending with clear financial analytics.",
    },
    {
      icon: <Brain />,
      title: "AI Insights",
      description: "Get intelligent insights and recommendations for your finances.",
    },
    {
      icon: <Target />,
      title: "Budget Management",
      description: "Create budgets and stay on track with your finances.",
    },
  ];

  return (
    <main className="bg-slate-950 text-white">

      <section className="flex min-h-[80vh] flex-col items-center gap-12 px-6 py-20 md:px-12 lg:flex-row lg:justify-between">

        {/* Left Content */}
        <div className="max-w-2xl">

          <p className="mb-4 text-lg font-medium text-emerald-400">
            AI-powered personal finance
          </p>

          <h1 className="text-4xl font-bold leading-tight sm:text-5xl">
            Take control of your finances with AI.
          </h1>

          <p className="mt-6 max-w-xl text-lg leading-8 text-gray-400">
            Track your expenses, understand your spending,
            and make smarter financial decisions with FinTrack AI.
          </p>

          <div className="mt-8 flex flex-wrap gap-4">

            <button className="rounded-lg bg-emerald-400 px-6 py-3 font-semibold text-black">
              Get Started
            </button>

            <button className="rounded-lg border border-gray-700 px-6 py-3 font-semibold text-white">
              View Demo
            </button>

          </div>

        </div>

        {/* Dashboard Preview */}
        <div className="w-full max-w-[420px] rounded-2xl border border-gray-800 bg-slate-900 p-6">

          <h2 className="text-xl font-semibold">
            FinTrack AI Dashboard
          </h2>

          <p className="mt-2 text-sm text-gray-500">
            Dashboard Preview
          </p>

        </div>

      </section>

      
            

      <section className="px-12 py-20">

         <div className="mb-10 max-w-2xl">

          <p className= "text-xl font medium text-emerald-400">
             Features </p>

          <h2 className="mt-2 text-4xl font-bold text-white">
            Everything you need to manage your money </h2>

           <p className="mt-4 text-gray-400">
            FinTrack AI helps you track, understand, and improve your finances.</p>

          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 " >
            {features.map((feature) => (
              <FeatureCard key={feature.title} {...feature} />
            ))}
          </div>
          

      </section>

      <section className="px-12 py-20">

        <div className="mb-12 max-w-2xl">

          <p className="text-xl font-medium text-emerald-400">
            How It Works</p>

          <h2 className="mt-2 text-4xl font-bold text-white">
             Manage your finances in 3 Simple and intelligent</h2>

          <p className="mt-4 text-gray-400">Fintrack AI makes managing your money simple and intelligent.</p>
        </div>
        
        <div>
          <ol className="grid grid-cols-3 gap-8">
  <li>
    <span>01</span>
    <h3>Track Your Expenses</h3>
    <p>Add your income and expenses...</p>
  </li>

  <li>
    <span>02</span>
    <h3>Understand Your Finances</h3>
    <p>Get clear insights into your spending...</p>
  </li>

  <li>
    <span>03</span>
    <h3>Get AI Recommendations</h3>
    <p>Receive personalized suggestions...</p>
  </li>
</ol>
        </div>


      </section>
      

    </main>
  );
}

export default Home;

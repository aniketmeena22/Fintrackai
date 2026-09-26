import { Link } from "react-router-dom";
import { Wallet, Brain, BarChart3, Target } from "lucide-react";

import Navbar from "../Components/Navbar";
import FeatureCard from "../Components/FeatureCard";
import HowItWorksCard from "../Components/HowItWorksCard";
import DashboardPreview from "../Components/DashboardPreview";
import Footer from "../Components/Footer";

function Home() {
  const features = [
    {
      icon: <Wallet />,
      title: "Expense Tracking",
      description:
        "Track your expenses and understand where your money goes.",
    },
    {
      icon: <Brain />,
      title: "AI Insights",
      description:
        "Get intelligent insights and recommendations for your finances.",
    },
    {
      icon: <BarChart3 />,
      title: "Smart Analytics",
      description:
        "Understand your spending with clear financial analytics.",
    },
    {
      icon: <Target />,
      title: "Budget Management",
      description:
        "Create budgets and stay on track with your financial goals.",
    },
  ];

  const steps = [
    {
      number: "1",
      title: "Track Your Expenses",
      description:
        "Add your income and expenses to keep track of your spending.",
    },
    {
      number: "2",
      title: "Understand Your Finances",
      description:
        "Get clear insights into your spending habits and financial patterns.",
    },
    {
      number: "3",
      title: "Get AI Recommendations",
      description:
        "Receive personalized suggestions to save money and reach your goals.",
    },
  ];

  return (
    <main className="bg-black text-white">

      {/* Hero Section */}
      <section className="grid  md:grid-cols-2 min-h-[80vh] items-center justify-between gap-12 px-12 py-20">

        <div className="max-w-2xl">

          <p className="mb-4 text-sm font-medium text-emerald-400">
            AI-powered personal finance
          </p>

          <h1 className="text-2xl md:text-5xl font-bold leading-tight">
            Take control of your finances with AI.
          </h1>

          <p className="mt-6 max-w-xl text-base md:text-lg leading-8 text-gray-400">
            Track your expenses, understand your spending,
            and make smarter financial decisions with FinTrack AI.
          </p>

          <div className="mt-8 flex gap-4">
            <Link
              to="/register"
              className="rounded-lg bg-emerald-400 px-3 py-3 font-semibold text-black text-sm md:text-lg"
            >
              Get Started
            </Link>

            <Link
              to="/dashboard"
              className="rounded-lg border text-sm md:text-lg border-gray-700 px-3 py-3 font-semibold text-white"
            >
              View Demo
            </Link>
          </div>
        </div>

        <DashboardPreview />

      </section>


      {/* Features Section */}
      <section id="Features" className="px-12 py-20">

        <div className="mb-10 max-w-2xl">

          <p className="text-sm font-medium text-emerald-400">
            Features
          </p>

          <h2 className="mt-2 text-2xl md:text-4xl font-bold">
            Everything you need to manage your money
          </h2>

          <p className="mt-4 text-gray-400">
            FinTrack AI helps you track, understand, and improve your finances.
          </p>

        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-3">

          {features.map((feature) => (
            <FeatureCard
              key={feature.title}
              icon={feature.icon}
              title={feature.title}
              description={feature.description}
            />
          ))}

        </div>

      </section>


      {/* How It Works Section */}
      <section className="px-12 py-20">

        <div className="mb-12 max-w-2xl">

          <p className="text-sm font-medium text-emerald-400">
            How It Works
          </p>

          <h2 className="mt-2 text-2xl md:text-4xl font-bold">
            Manage your finances in 3 simple steps
          </h2>

          <p className="mt-4 text-gray-400">
            FinTrack AI makes managing your money simple and intelligent.
          </p>

        </div>

        <ol className="grid grid-cols-2 md:grid-cols-3 gap-2">

          {steps.map((step) => (
            <HowItWorksCard
              key={step.number}
              number={step.number}
              title={step.title}
              description={step.description}
            />
          ))}

        </ol>

      </section>

      {/* Smart Advisor Section */}
      <section className="px-5 py-20 md:px-12" >

        <div className="mb-10 max-w-2xl " >
          <p className="text-sm font-medium text-emerald-400">
            Smart Advisor</p>

          <h2 className="mt-2 text-2xl md:text-4xl font-bold text-white">
            Get smarter insights about your money
          </h2>

          <p>
            Ask questions about your spending, savings, and financial goals.
          </p>
        </div>

        <div>

          <div>
            <p className="mt-4 text-slate-400">Ask your Smart Advisor</p>

            <div>
              <span>How can I save more money this month?</span>

              <button>Ask AI</button>
            </div>
          </div>

        </div>

      </section>

      {/* CTA Section */}
      <section className="px-5 py-20 md:px-12">

        <div className="rounded-3xl border border-emerald-400/20 bg-slate-900 px-6 py-16 text-center md:px-12">

          <p className="text-sm font-medium text-emerald-400">
            Ready to take control?
          </p>

          <h2 className="mt-3 text-2xl  font-bold text-white md:text-4xl">
            Start managing your finances smarter
          </h2>

          <p className="mx-auto mt-4 max-w-2xl text-sm leading-6 text-slate-400 md:text-base">
            Track your money, understand your spending, and make better
            financial decisions with FinTrack AI.
          </p>

          <button className="mt-8 rounded-xl bg-emerald-400 px-6 py-3 text-sm font-semibold text-slate-950 transition hover:bg-emerald-300">
            Get Started
          </button>

        </div>

      </section>

      {/* Footer */}
      <Footer/>


    </main>
  );
}

export default Home;
function HowItWorksCard({ number, title, description }) {
  return (
    <div className="rounded-2xl border border-slate-800 bg-slate-900 p-6">

      <span className="text-[8px] md:text-base font-medium text-emerald-400">
        {number}
      </span>

      <h3 className="mt-4 text-sm md:text-xl font-semibold text-white">
        {title}
      </h3>

      <p className=" text-[8px] md:text-sm leading-6 text-slate-400 m-0 mt-2">
        {description}
      </p>

    </div>
  );
}

export default HowItWorksCard;
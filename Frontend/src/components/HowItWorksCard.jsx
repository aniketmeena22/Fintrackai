function HowItWorksCard({ number, title, description }) {
  return (
    <div className="rounded-2xl border border-slate-800 bg-slate-900 p-5 w-50 h-50 ">

      <span className="text-base md:text-base font-medium text-emerald-400 m-0">
        {number}
      </span>

      <p className="mt-4 text-[10px] md:text-xl font-semibold text-white m-0">
        {title}
      </p>

      <p className=" text-[8px] md:text-base leading-6 text-slate-400 m-0 mt-2">
        {description}
      </p>

    </div>
  );
}

export default HowItWorksCard;
function FeatureCard({ icon, title, description }) {
  return (
    <div className="group rounded-2xl border border-slate-800 bg-slate-900 p-3 transition duration-300 hover:-translate-y-1 hover:border-emerald-400/40 hover:shadow-xl hover:shadow-emerald-950/30">

      <div className="mb-5 flex h-5 w-5 md:h-12 md:w-12 items-center justify-center rounded-xl bg-emerald-400/10 text-emerald-400 transition group-hover:bg-emerald-400 group-hover:text-slate-950">
        {icon}
      </div>

      <p className="text-sm md:text-xl font-semibold text-white">
        {title}
      </p>

      <p className=" text-[8px] md:text-sm leading-6 text-slate-400 m-0 mt-2">
        {description}
      </p>

    </div>
  );
}

export default FeatureCard;

import React from 'react';
function DashboardPreview() {
    return (
        <div className=" rounded-2xl border border-gray-800 bg-gray-950 p-8 shadow-2xl">

            <div>

                {/* Header */}
                <div className=" flex items-center justify-between">

                    <h2 className="text-base  font-semihold text-white">
                        Dashboard
                    </h2>

                    <span className="rounded-full bg-emerald-400/10 px-3  py-1 text-xs md:text-base font-medium text-emerald-400">
                        Live Preview
                    </span>

                </div>

                {/* Cards */}
                <div className="grid grid-cols-2 gap-4">

                    <div className="rounded-xl border border-slate-800 bg-slate-950 p-4 text-center">

                        <p className="text-sm md:text-base text-slate-400">
                            Balance
                        </p>

                        <p className="mt-2 text-lg md:text-2xl font-bold text-white">
                            ₹45,000
                        </p>

                    </div>

                    <div className="rounded-xl border border-slate-800 bg-slate-950 p-4 text-center">

                        <p className="text-sm md:text-base text-slate-400">
                            Expenses
                        </p>

                        <p className="mt-2 text-lg md:text-2xl font-bold text-white">
                            ₹12,500
                        </p>

                    </div>

                </div>

                {/* Transactions */}
                <div className="mt-6">

                    <p className="mb-3 text-sm md:text-base font-medium text-white">
                        Recent
                    </p>

                    <div className="flex items-center justify-between border-b border-slate-800 py-3">

                        <span className="mb-3 text-sm md:text-base font-medium text-white">
                            Zomato
                        </span>

                        <span className="text-sm md:text-base text-red-400">
                            -₹350
                        </span>

                    </div>

                    <div className="flex items-center justify-between py-3">

                        <span className="text-sm md:text-base text-slate-300">
                            Salary
                        </span>
                        <span className="text-sm md:text-base text-emerald-400">
                            +₹45,000
                        </span>

                    </div>

                </div>

            </div>

        </div>
    );
}

export default DashboardPreview;

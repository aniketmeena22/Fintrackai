import { Link } from "react-router-dom";
function Footer() {
    return (
        <footer className="border-t border-slate-800 bg-slate-950 px-5 py-12 md:px-12">

            <div className="grid gap-8 md:grid-cols-3">

                {/* Brand */}
                <div>
                    <h2 className="text-xl font-bold text-white">
                        FinTrack AI
                    </h2>

                    <p className="mt-3 max-w-sm text-sm leading-6 text-slate-400">
                        AI-powered personal finance management to help you
                        understand your money and make smarter decisions.
                    </p>
                </div>


                {/* Links */}
                <div>
                    <h3 className="text-sm font-semibold text-white">
                        Quick Links
                    </h3>

                    <ul className="mt-4 space-y-3 text-sm text-slate-400">
                        <li>
                            <a href="/" className="transition hover:text-emerald-400">
                                Home
                            </a>
                        </li>

                        <li>
                            <a href="#features" className="transition hover:text-emerald-400">
                                Features
                            </a>
                        </li>

                        <li>
                            <a href="#how-it-works" className="transition hover:text-emerald-400">
                                How It Works
                            </a>
                        </li>

                        <li>
                            <a href="/about" className="transition hover:text-emerald-400">
                                About
                            </a>
                        </li>
                    </ul>
                </div>


                {/* Security */}
                <div>
                    <h3 className="text-sm font-semibold text-white">
                        Your Privacy Matters
                    </h3>

                    <p className="mt-4 text-sm leading-6 text-slate-400">
                        Your financial information is handled with security
                        and privacy in mind.
                    </p>

                    <div className="mt-4 flex gap-4 text-sm">
                        <a
                            href="#"
                            className="text-slate-400 transition hover:text-emerald-400"
                        >
                            Privacy
                        </a>

                        <a
                            href="#"
                            className="text-slate-400 transition hover:text-emerald-400"
                        >
                            Security
                        </a>
                    </div>
                </div>

            </div>


            {/* Bottom */}
            <div className="mt-10 border-t border-slate-800 pt-6 text-center text-sm text-slate-500">
                © 2026 FinTrack AI. All rights reserved.
            </div>

        </footer>
    );
}

export default Footer;
import React from 'react';

const TermsOfServices: React.FC = () => {
    return (
        <div className="pt-24 min-h-screen">
            {/* Background Elements */}
            <div className="fixed inset-0 -z-10 pointer-events-none">
                <div className="absolute top-0 left-1/4 w-72 h-72 bg-blue-600/20 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob"></div>
                <div className="absolute top-20 right-1/4 w-72 h-72 bg-purple-600/20 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob animation-delay-2000"></div>
                <div className="absolute bottom-10 left-1/3 w-72 h-72 bg-pink-600/20 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob animation-delay-4000"></div>
            </div>

            <div className="max-w-4xl mx-auto px-6 py-12">
                <div className="mb-12 text-center">
                    <h1 className="text-4xl md:text-5xl font-bold mb-6 tracking-tight text-white">
                        Terms of <span className="text-gradient">Services</span>
                    </h1>
                    <p className="text-gray-400 text-lg">
                        Last updated: {new Date().toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}
                    </p>
                </div>

                <div className="glass-card rounded-3xl p-8 md:p-12 space-y-8 text-gray-300 leading-relaxed">
                    <section>
                        <h2 className="text-2xl font-bold text-white mb-4">1. Agreement to Terms</h2>
                        <p>
                            By accessing our website and using our services, you agree to be bound by these Terms of Services.
                            If you do not agree to agree with any of these terms, you are prohibited from using or accessing this site.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-2xl font-bold text-white mb-4">2. Intellectual Property Rights</h2>
                        <p>
                            Other than the content you own, under these Terms, ThinkersLabe and/or its licensors own all the intellectual property rights and materials contained in this Website.
                            You are granted limited license only for purposes of viewing the material contained on this Website.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-2xl font-bold text-white mb-4">3. Restrictions</h2>
                        <p>
                            You are specifically restricted from all of the following:
                        </p>
                        <ul className="list-disc list-inside mt-4 space-y-2 ml-4">
                            <li>Publishing any Website material in any other media;</li>
                            <li>Selling, sublicensing and/or otherwise commercializing any Website material;</li>
                            <li>Publicly performing and/or showing any Website material;</li>
                            <li>Using this Website in any way that is or may be damaging to this Website;</li>
                            <li>Using this Website in any way that impacts user access to this Website;</li>
                        </ul>
                    </section>

                    <section>
                        <h2 className="text-2xl font-bold text-white mb-4">4. Limitation of Liability</h2>
                        <p>
                            In no event shall ThinkersLabe, nor any of its officers, directors and employees, be held liable for anything arising out of or in any way connected with your use of this Website whether such liability is under contract.  ThinkersLabe, including its officers, directors and employees shall not be held liable for any indirect, consequential or special liability arising out of or in any way related to your use of this Website.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-2xl font-bold text-white mb-4">5. Governing Law</h2>
                        <p>
                            These Terms will be governed by and interpreted in accordance with the laws of the State, and you submit to the non-exclusive jurisdiction of the state and federal courts located in for the resolution of any disputes.
                        </p>
                    </section>
                </div>
            </div>
        </div>
    );
};

export default TermsOfServices;

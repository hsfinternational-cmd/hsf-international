import React from 'react';
import MotionWrapper from '../components/MotionWrapper';
import { MapPin, Phone, Mail, Clock } from 'lucide-react';
import { companyInfo } from '../src/data/company';

const ContactPage = () => {
    return (
        <div className="bg-white pt-24 min-h-screen">

            {/* Header */}
            <section className="bg-navy-900 text-white py-20 px-4 text-center">
                <MotionWrapper>
                    <span className="text-coral-500 font-bold tracking-widest uppercase text-sm mb-4 block">Get In Touch</span>
                    <h1 className="font-heading font-black text-4xl md:text-5xl">Partner for Execution</h1>
                </MotionWrapper>
            </section>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
                <div className="flex flex-col lg:flex-row gap-16">

                    {/* Contact Info */}
                    <div className="lg:w-1/3 space-y-8">
                        <MotionWrapper delay={0.1}>
                            <h3 className="font-heading font-bold text-2xl text-navy-900 mb-6">Headquarters</h3>

                            <div className="flex items-start gap-4 mb-6">
                                <div className="bg-coral-100 p-3 rounded text-coral-600"><MapPin className="w-5 h-5" /></div>
                                <div className="max-w-[200px]">
                                    <h4 className="font-bold text-navy-900">Visit Us</h4>
                                    <p className="text-slate-600 text-sm">{companyInfo.address}</p>
                                </div>
                            </div>

                            <div className="flex items-start gap-4 mb-6">
                                <div className="bg-coral-100 p-3 rounded text-coral-600"><Phone className="w-5 h-5" /></div>
                                <div>
                                    <h4 className="font-bold text-navy-900">Call Us</h4>
                                    <p className="text-slate-600 text-sm">{companyInfo.phone}</p>
                                </div>
                            </div>

                            <div className="flex items-start gap-4 mb-6">
                                <div className="bg-coral-100 p-3 rounded text-coral-600"><Mail className="w-5 h-5" /></div>
                                <div>
                                    <h4 className="font-bold text-navy-900">Email Us</h4>
                                    <p className="text-slate-600 text-sm">{companyInfo.email}</p>
                                </div>
                            </div>

                            <div className="flex items-start gap-4">
                                <div className="bg-coral-100 p-3 rounded text-coral-600"><Clock className="w-5 h-5" /></div>
                                <div>
                                    <h4 className="font-bold text-navy-900">Work Hours</h4>
                                    <p className="text-slate-600 text-sm">{companyInfo.workHours}</p>
                                </div>
                            </div>
                        </MotionWrapper>
                    </div>

                    {/* Form */}
                    <div className="lg:w-2/3">
                        <MotionWrapper delay={0.3} className="bg-slate-50 p-8 md:p-12 rounded-lg border border-slate-100">
                            <h3 className="font-heading font-bold text-2xl text-navy-900 mb-8">Send a Message</h3>
                            <form className="space-y-6">
                                <div className="grid md:grid-cols-2 gap-6">
                                    <input type="text" placeholder="First Name" className="w-full p-4 bg-white border border-slate-200 rounded focus:border-coral-500 focus:outline-none" />
                                    <input type="text" placeholder="Last Name" className="w-full p-4 bg-white border border-slate-200 rounded focus:border-coral-500 focus:outline-none" />
                                </div>
                                <div className="grid md:grid-cols-2 gap-6">
                                    <input type="email" placeholder="Email Address" className="w-full p-4 bg-white border border-slate-200 rounded focus:border-coral-500 focus:outline-none" />
                                    <input type="text" placeholder="Subject" className="w-full p-4 bg-white border border-slate-200 rounded focus:border-coral-500 focus:outline-none" />
                                </div>
                                <textarea rows={5} placeholder="Your Message" className="w-full p-4 bg-white border border-slate-200 rounded focus:border-coral-500 focus:outline-none"></textarea>

                                <button className="bg-coral-500 text-white font-bold px-10 py-4 rounded hover:bg-navy-900 transition-colors shadow-lg shadow-coral-500/20">
                                    Send Message
                                </button>
                            </form>
                        </MotionWrapper>
                    </div>

                </div>

                {/* Map Embed */}
                <div className="mt-24 h-96 w-full bg-slate-200 rounded-lg overflow-hidden shadow-inner">
                    <iframe
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15959.04944588729!2d32.5761!3d0.3201!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x177dbb7445c7865f%3A0x72697e882250170!2sNakasero%2C%20Kampala!5e0!3m2!1sen!2sug!4v1716300000000!5m2!1sen!2sug"
                        width="100%"
                        height="100%"
                        style={{ border: 0 }}
                        allowFullScreen
                        loading="lazy"
                    ></iframe>
                </div>
            </div>
        </div>
    );
};

export default ContactPage;

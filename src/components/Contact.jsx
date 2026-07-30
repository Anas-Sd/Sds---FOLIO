import { useState } from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { toast } from "sonner";
import { Github, Linkedin, Code2, Trophy, Mail, Send, Sparkles, ArrowUpRight } from "lucide-react";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import emailjs from "@emailjs/browser";

export const Contact = () => {
  const { ref: titleRef, isVisible: titleVisible } = useScrollAnimation();
  const { ref: formRef, isVisible: formVisible } = useScrollAnimation();
  const { ref: profilesRef, isVisible: profilesVisible } = useScrollAnimation();
  const [sending, setSending] = useState(false);

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    title: "",
    message: "",
  });

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!formData.name || !formData.email || !formData.title || !formData.message) {
      toast.error("Please fill all fields");
      return;
    }

    try {
      setSending(true);

      await emailjs.send(
        "service_6jj3xgs",
        "template_09wwdhl",
        {
          name: formData.name,
          email: formData.email,
          title: formData.title,
          message: formData.message,
          time: new Date().toLocaleString(),
        },
        "58zfZBQZsMKcMOCKG"
      );

      toast.success("Message sent! I'll get back to you soon.");
      setFormData({ name: "", email: "", title: "", message: "" });
    } catch (error) {
      toast.error("Failed to send message. Please try again.");
      console.error("Email send error:", error);
    } finally {
      setSending(false);
    }
  };

  const socialProfiles = [
    {
      name: "LinkedIn",
      icon: Linkedin,
      url: "https://www.linkedin.com/in/-syedanas/",
    },
    {
      name: "GitHub",
      icon: Github,
      url: "https://github.com/Anas-Sd",
    },
  ];

  const codingProfiles = [
    {
      name: "LeetCode",
      icon: Trophy,
      url: "https://leetcode.com/u/2300032619/",
    },
    {
      name: "CodeChef",
      icon: Code2,
      url: "https://www.codechef.com/users/kl_2300032619",
    },
    {
      name: "GeeksforGeeks",
      icon: Code2,
      url: "https://www.geeksforgeeks.org/profile/syedanas",
    },
  ];

  return (
    <section
      id="contact"
      className="relative py-20 sm:py-28 px-4 sm:px-6 lg:px-8 bg-[#050505] text-white overflow-hidden flex flex-col items-center justify-center min-h-screen w-full"
    >
      {/* Background Matrix Pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#3333330f_1px,transparent_1px),linear-gradient(to_bottom,#3333330f_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,#000_70%,transparent_100%)] pointer-events-none" />

      <div className="max-w-7xl mx-auto w-full relative z-10 flex flex-col items-center">
        
        {/* Section Header */}
        <div
          ref={titleRef}
          className={`text-center mb-12 sm:mb-16 transition-all duration-700 ${
            titleVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <span className="text-xs font-bold uppercase tracking-[0.3em] text-zinc-500">
            Let's Build Together
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black mt-1 tracking-tighter uppercase">
            Get In <span className="text-zinc-400">Touch</span>
          </h2>
          <div className="w-16 h-[2px] bg-zinc-800 mx-auto mt-3" />
          <p className="mt-4 text-xs sm:text-sm text-zinc-400 max-w-xl mx-auto font-light leading-relaxed">
            I'm always open to new engineering opportunities, freelance projects, or technical collaborations. Drop me a line below!
          </p>
        </div>

        {/* Perfectly Centered Grid Container */}
        <div className="grid lg:grid-cols-12 gap-8 items-start w-full">
          
          {/* Left Column: Contact Form */}
          <Card
            ref={formRef}
            className={`lg:col-span-7 p-6 sm:p-8 bg-[#0c0c0f] border-zinc-800/80 rounded-3xl shadow-2xl relative overflow-hidden transition-all duration-700 ${
              formVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
          >
            <div className="flex items-center gap-2 mb-6 border-b border-zinc-900 pb-4">
              <Send className="w-5 h-5 text-white" />
              <h3 className="text-lg sm:text-xl font-bold uppercase tracking-tight text-white">
                Send A Message
              </h3>
            </div>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="name" className="block text-xs font-mono uppercase text-zinc-400 mb-1.5">
                    Your Name *
                  </label>
                  <Input
                    id="name"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    required
                    placeholder="Syed Anas"
                    className="bg-zinc-950/80 border-zinc-800 focus:border-white text-white text-xs sm:text-sm rounded-xl py-5"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-xs font-mono uppercase text-zinc-400 mb-1.5">
                    Your Email *
                  </label>
                  <Input
                    id="email"
                    type="email"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    required
                    placeholder="anas@example.com"
                    className="bg-zinc-950/80 border-zinc-800 focus:border-white text-white text-xs sm:text-sm rounded-xl py-5"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="title" className="block text-xs font-mono uppercase text-zinc-400 mb-1.5">
                  Subject *
                </label>
                <Input
                  id="title"
                  type="text"
                  value={formData.title}
                  onChange={(e) => setFormData({ ...formData, title: e.target.value })}
                  required
                  placeholder="Project Inquiry / Collaboration"
                  className="bg-zinc-950/80 border-zinc-800 focus:border-white text-white text-xs sm:text-sm rounded-xl py-5"
                  maxLength={100}
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-xs font-mono uppercase text-zinc-400 mb-1.5">
                  Message *
                </label>
                <Textarea
                  id="message"
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  required
                  placeholder="Tell me about your project details or inquiry..."
                  rows={5}
                  className="bg-zinc-950/80 border-zinc-800 focus:border-white text-white text-xs sm:text-sm rounded-xl"
                />
              </div>

              <Button
                type="submit"
                size="lg"
                disabled={sending}
                className="w-full bg-white text-black font-bold uppercase tracking-wider text-xs hover:bg-zinc-200 transition-all rounded-xl py-6 mt-2"
              >
                {sending ? "Sending Message..." : "Send Message"}
              </Button>
            </form>
          </Card>

          {/* Right Column: Connect & Profiles */}
          <div
            ref={profilesRef}
            className={`lg:col-span-5 space-y-5 transition-all duration-700 delay-100 ${
              profilesVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
          >
            {/* Social Links Card */}
            <Card className="p-6 bg-[#0c0c0f] border-zinc-800/80 rounded-3xl">
              <h3 className="text-xs font-mono uppercase tracking-widest text-zinc-500 mb-4 flex items-center gap-2">
                <Sparkles className="w-3.5 h-3.5 text-zinc-400" /> Social Connections
              </h3>
              <div className="grid grid-cols-2 gap-3">
                {socialProfiles.map((profile) => (
                  <a
                    key={profile.name}
                    href={profile.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-between p-3.5 rounded-2xl bg-zinc-950 border border-zinc-800/60 hover:border-zinc-500 hover:bg-zinc-900 transition-all group"
                  >
                    <div className="flex items-center gap-2.5">
                      <profile.icon className="w-4 h-4 text-zinc-400 group-hover:text-white transition-colors" />
                      <span className="font-semibold text-xs text-zinc-300 group-hover:text-white">
                        {profile.name}
                      </span>
                    </div>
                    <ArrowUpRight className="w-3.5 h-3.5 text-zinc-600 group-hover:text-white transition-colors" />
                  </a>
                ))}
              </div>
            </Card>

            {/* Coding Profiles Card */}
            <Card className="p-6 bg-[#0c0c0f] border-zinc-800/80 rounded-3xl">
              <h3 className="text-xs font-mono uppercase tracking-widest text-zinc-500 mb-4 flex items-center gap-2">
                <Sparkles className="w-3.5 h-3.5 text-zinc-400" /> Competitive Coding
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-2.5">
                {codingProfiles.map((profile) => (
                  <a
                    key={profile.name}
                    href={profile.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-between p-3 rounded-xl bg-zinc-950 border border-zinc-800/60 hover:border-zinc-500 hover:bg-zinc-900 transition-all group"
                  >
                    <div className="flex items-center gap-2">
                      <profile.icon className="w-3.5 h-3.5 text-zinc-400 group-hover:text-white transition-colors" />
                      <span className="font-medium text-xs text-zinc-300 group-hover:text-white">
                        {profile.name}
                      </span>
                    </div>
                    <ArrowUpRight className="w-3 h-3 text-zinc-600 group-hover:text-white transition-colors" />
                  </a>
                ))}
              </div>
            </Card>

            {/* Direct Contact Action Card */}
            <Card className="p-6 bg-gradient-to-br from-zinc-900 to-zinc-950 border border-zinc-800 rounded-3xl relative overflow-hidden">
              <div className="relative z-10">
                <h3 className="text-base font-bold uppercase tracking-tight text-white mb-2 flex items-center gap-2">
                  <Mail className="w-4 h-4 text-zinc-400" /> Direct Email
                </h3>
                <p className="text-xs text-zinc-400 mb-4 font-light leading-relaxed">
                  Prefer direct email communication? Feel free to write directly to my inbox anytime.
                </p>
                <Button
                  asChild
                  className="w-full bg-zinc-900 hover:bg-zinc-800 text-white border border-zinc-700 font-semibold text-xs rounded-xl py-5"
                >
                  <a href="mailto:portfolio.syedanas@gmail.com" className="flex items-center justify-center gap-2">
                    <Mail className="w-3.5 h-3.5" />
                    portfolio.syedanas@gmail.com
                  </a>
                </Button>
              </div>
            </Card>

          </div>

        </div>

      </div>
    </section>
  );
};

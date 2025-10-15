"use client";

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { motion } from "motion/react";
import { Grid3x3, Zap, GitBranch, Users } from "lucide-react";

const features = [
  {
    icon: Grid3x3,
    title: "Visual Canvas Interface",
    description: "An intuitive, drag-free canvas with a responsive grid layout for all your projects. Build complex workflows visually with ease.",
    gradient: "from-primary/10 to-primary/5",
  },
  {
    icon: Zap,
    title: "Real-time AI Sync",
    description: "Experience seamless, bidirectional synchronization between the AI agent and your UI canvas. See changes in real-time as you work.",
    gradient: "from-secondary/10 to-secondary/5",
  },
  {
    icon: GitBranch,
    title: "Multi-step Planning",
    description: "Let the AI create and execute complex plans with visual progress tracking. Break down big projects into manageable steps.",
    gradient: "from-accent/10 to-accent/5",
  },
  {
    icon: Users,
    title: "Human-in-the-Loop",
    description: "Intelligent interrupts for clarification, ensuring you're always in control. The AI asks when it needs guidance.",
    gradient: "from-destructive/10 to-destructive/5",
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
    },
  },
};

export function FeaturesSection() {
  return (
    <section id="features" className="py-24 md:py-32 bg-muted/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4">
            Powerful Features for Modern Workflows
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto">
            Everything you need to build, manage, and automate your projects with AI-powered precision
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8"
        >
          {features.map((feature, index) => (
            <motion.div key={index} variants={itemVariants}>
              <Card className="h-full border-2 hover:border-primary/50 transition-all duration-300 hover:shadow-lg group">
                <CardHeader>
                  <div className={`w-14 h-14 rounded-xl bg-gradient-to-br ${feature.gradient} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}>
                    <feature.icon className="w-7 h-7 text-primary" />
                  </div>
                  <CardTitle className="text-2xl">{feature.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-base leading-relaxed">
                    {feature.description}
                  </CardDescription>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>

        {/* Additional Features Grid */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-8"
        >
          {[
            { stat: "Real-time", label: "Collaboration" },
            { stat: "Unlimited", label: "Canvas Space" },
            { stat: "AI-Powered", label: "Automation" },
            { stat: "Secure", label: "Cloud Storage" },
          ].map((item, index) => (
            <div key={index} className="text-center">
              <div className="text-2xl md:text-3xl font-bold text-primary mb-2">
                {item.stat}
              </div>
              <div className="text-sm md:text-base text-muted-foreground">
                {item.label}
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

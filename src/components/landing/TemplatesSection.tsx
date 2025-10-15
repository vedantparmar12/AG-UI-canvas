"use client";

import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { motion } from "motion/react";
import { CheckSquare, TrendingUp, Database, BarChart3, FileText, Workflow } from "lucide-react";
import Link from "next/link";

const templates = [
  {
    icon: CheckSquare,
    title: "Project Management",
    description: "Track tasks, milestones, and team progress with an intuitive Kanban-style board.",
    category: "Productivity",
    color: "bg-blue-500/10 text-blue-600",
  },
  {
    icon: TrendingUp,
    title: "SWOT Analysis",
    description: "Strategically analyze strengths, weaknesses, opportunities, and threats for any project.",
    category: "Strategy",
    color: "bg-green-500/10 text-green-600",
  },
  {
    icon: Database,
    title: "Entity Relationship Diagrams",
    description: "Design and visualize database schemas with relationships and constraints.",
    category: "Development",
    color: "bg-purple-500/10 text-purple-600",
  },
  {
    icon: BarChart3,
    title: "Data Dashboards",
    description: "Create interactive dashboards with real-time metrics and visual charts.",
    category: "Analytics",
    color: "bg-orange-500/10 text-orange-600",
  },
  {
    icon: FileText,
    title: "Content Planning",
    description: "Plan, organize, and schedule your content calendar with AI assistance.",
    category: "Marketing",
    color: "bg-pink-500/10 text-pink-600",
  },
  {
    icon: Workflow,
    title: "Process Automation",
    description: "Map out and automate complex business workflows with AI-powered logic.",
    category: "Automation",
    color: "bg-indigo-500/10 text-indigo-600",
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
  hidden: { opacity: 0, scale: 0.95 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      duration: 0.5,
    },
  },
};

export function TemplatesSection() {
  return (
    <section id="templates" className="py-24 md:py-32">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4">
            Start with a Template
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto">
            Jump-start your project with professionally designed templates for every use case
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8"
        >
          {templates.map((template, index) => (
            <motion.div key={index} variants={itemVariants}>
              <Card className="h-full hover:shadow-xl transition-all duration-300 hover:-translate-y-1 group border-2 hover:border-primary/50">
                <CardHeader>
                  <div className={`w-12 h-12 rounded-lg ${template.color} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}>
                    <template.icon className="w-6 h-6" />
                  </div>
                  <div className="flex items-center justify-between mb-2">
                    <CardTitle className="text-xl">{template.title}</CardTitle>
                  </div>
                  <Badge variant="secondary" className="w-fit">
                    {template.category}
                  </Badge>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-base">
                    {template.description}
                  </CardDescription>
                </CardContent>
                <CardFooter>
                  <Button variant="outline" className="w-full group-hover:bg-primary group-hover:text-primary-foreground transition-colors" asChild>
                    <Link href="/canvas">
                      Use Template
                    </Link>
                  </Button>
                </CardFooter>
              </Card>
            </motion.div>
          ))}
        </motion.div>

        {/* Browse All Templates CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="text-center mt-12"
        >
          <Button size="lg" variant="outline" asChild>
            <Link href="/templates">
              Browse All Templates
              <span className="ml-2">→</span>
            </Link>
          </Button>
        </motion.div>
      </div>
    </section>
  );
}

import {
  BarChart3,
  Bell,
  CalendarDays,
  CheckCircle,
  Users,
} from "lucide-react";

const Features = () => {
  return (
    <section id="features">
      <div className="text-center mb-12">
        <h2 className="text-3xl font-bold tracking-tighter md:text-4xl mb-4">
          Powerful Features for Modern Teams
        </h2>
        <p className="text-xl text-muted-foreground">
          Everything you need to manage projects efficiently and effectively.
        </p>
      </div>
      <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
        {[
          {
            title: "Intuitive Dashboard",
            description:
              "Get a bird's-eye view of all your projects and tasks.",
            icon: BarChart3,
          },
          {
            title: "Task Management",
            description: "Create, assign, and track tasks with ease.",
            icon: CalendarDays,
          },
          {
            title: "Team Collaboration",
            description:
              "Work together in real-time with comments and file sharing.",
            icon: Users,
          },
          {
            title: "Smart Notifications",
            description: "Stay updated with customizable alerts and reminders.",
            icon: Bell,
          },
          {
            title: "Progress Tracking",
            description:
              "Monitor project progress with visual charts and reports.",
            icon: CheckCircle,
          },
          {
            title: "Resource Management",
            description: "Optimize team workload and resource allocation.",
            icon: Users,
          },
        ].map((feature, index) => (
          <div
            key={index}
            className="flex flex-col items-center text-center p-6 bg-background rounded-lg shadow-lg transition-all hover:shadow-xl dark:bg-muted/30 dark:hover:bg-muted/50"
          >
            <div className="p-3 bg-primary/10 rounded-full mb-4 dark:bg-primary/20">
              <feature.icon className="w-8 h-8 text-primary" />
            </div>
            <h3 className="text-xl font-bold mb-2">{feature.title}</h3>
            <p className="text-muted-foreground">{feature.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Features;

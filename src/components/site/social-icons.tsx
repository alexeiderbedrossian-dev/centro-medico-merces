import { clinic } from "@/lib/site-data";
import { cn } from "@/lib/utils";

function InstagramGlyph({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" className={className} aria-hidden fill="currentColor">
      <path d="M7.8 2h8.4C19.4 2 22 4.6 22 7.8v8.4a5.8 5.8 0 0 1-5.8 5.8H7.8C4.6 22 2 19.4 2 16.2V7.8A5.8 5.8 0 0 1 7.8 2m-.2 2A3.6 3.6 0 0 0 4 7.6v8.8C4 18.39 5.61 20 7.6 20h8.8a3.6 3.6 0 0 0 3.6-3.6V7.6C20 5.61 18.39 4 16.4 4H7.6m9.65 1.5a1.25 1.25 0 1 1 0 2.5 1.25 1.25 0 0 1 0-2.5M12 7a5 5 0 1 1 0 10 5 5 0 0 1 0-10m0 2a3 3 0 1 0 0 6 3 3 0 0 0 0-6Z" />
    </svg>
  );
}

const links = [
  {
    href: clinic.socials.instagram.url,
    label: "Instagram da clínica",
    short: "Clínica",
  },
  {
    href: clinic.socials.instagramCardio.url,
    label: "Instagram da cardiologia",
    short: "Cardio",
  },
] as const;

export function SocialIcons({
  variant = "light",
  showLabels = true,
  labelFirst = false,
  className,
}: {
  variant?: "light" | "dark" | "hero";
  showLabels?: boolean;
  labelFirst?: boolean;
  className?: string;
}) {
  return (
    <div className={cn("flex flex-wrap items-center gap-2.5", className)}>
      {links.map((item) => (
        <a
          key={item.href}
          href={item.href}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={item.label}
          title={item.label}
          className={cn(
            "group inline-flex items-center gap-3 rounded-full font-semibold transition-[transform,box-shadow] duration-150 hover:scale-[1.03] hover:shadow-md active:scale-[0.98]",
            showLabels && labelFirst && "h-14 px-2 pr-5",
            showLabels && !labelFirst && "h-12 pr-4 pl-1.5",
            !showLabels && "size-12 justify-center",
            variant === "dark" &&
              "border border-white/20 bg-white/10 text-fg-on-ink hover:bg-white/15",
            variant === "light" &&
              "border border-border bg-bg-elevated text-fg hover:border-primary/30",
            variant === "hero" &&
              "border border-white/20 bg-white/10 text-fg-on-ink backdrop-blur-sm hover:bg-white/18",
          )}
        >
          {showLabels && labelFirst ? (
            <span className="pl-4 text-left text-sm leading-tight sm:text-base">
              {item.label}
            </span>
          ) : null}
          <span
            className="inline-flex size-10 shrink-0 items-center justify-center rounded-full text-white shadow-sm"
            style={{
              background:
                "radial-gradient(circle at 30% 107%, #fdf497 0%, #fdf497 5%, #fd5949 45%, #d6249f 60%, #285AEB 90%)",
            }}
          >
            <InstagramGlyph className="size-5" />
          </span>
          {showLabels && !labelFirst ? (
            <span className="text-sm">
              <span className="block leading-none">{item.short}</span>
              <span
                className={cn(
                  "mt-0.5 block text-[11px] font-medium",
                  variant === "light" ? "text-fg-muted" : "text-fg-on-ink-muted",
                )}
              >
                Instagram
              </span>
            </span>
          ) : null}
        </a>
      ))}
    </div>
  );
}

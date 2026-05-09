import React from "react";

const NavigationSection = () => {
  const isDark = true;

  const sections = [
    { id: "basic", label: "Basic Props", icon: "📦" },
    { id: "ref", label: "Ref Props", icon: "🔗" },
    { id: "children", label: "Children Props", icon: "👶" },
    { id: "complex", label: "Complex Props", icon: "🧩" },
    { id: "theme", label: "Theme Props", icon: "🎨" },
  ];

  return (
    <nav
      className={`sticky top-0 z-50 backdrop-blur-md border-b ${
        isDark
          ? "bg-zinc-900/80 border-zinc-800"
          : "bg-white/80 border-zinc-200"
      }`}
    >
      <div className="max-w-5xl mx-auto px-4 py-4 flex justify-center">
        {/* Nav Container */}
        <div
          className={`
            flex gap-2 p-2 rounded-lg shadow-sm
            ${isDark ? "bg-zinc-800/70" : "bg-zinc-100"}
          `}
        >
          {sections.map((section) => (
            <button
              key={section.id}
              className={`
                flex items-center gap-2 px-4 py-2 text-sm font-medium
                rounded-md transition-all duration-200
                ${
                  isDark
                    ? "text-zinc-300 hover:bg-zinc-700 hover:text-white"
                    : "text-zinc-600 hover:bg-white hover:text-black"
                }
              `}
            >
              <span>{section.icon}</span>
              <span>{section.label}</span>
            </button>
          ))}
        </div>
      </div>
    </nav>
  );
};

export default NavigationSection;

export default function Stepper({ steps, activeIndex }) {
  const STEP_HEIGHT = 70;

  return (
    <div className="relative mt-5">

      {/* Vertical Line */}
      <div className="absolute left-[13px] top-4 h-[210px] w-[2px] bg-primary" />

      {/* Active Line */}
      <div
        className="absolute left-[13px] top-4 w-[2px] bg-[#E41F26] transition-all duration-700 ease-in-out"
        style={{
          height: `${activeIndex * STEP_HEIGHT}px`,
        }}
      />

      <div className="flex flex-col gap-10">

        {steps.map((step, index) => {
          const active = index === activeIndex;

          return (
            <div
              key={index}
              className="flex items-center gap-5"
            >
              {/* Dot */}

              <div
                className={`relative z-10 h-7 w-7 rounded-full border-4 border-[#220203] transition-all duration-500
                  ${
                    active
                      ? "bg-[#E41F26] scale-110"
                      : "bg-[#7f1d1d]"
                  }
                `}
              />

              {/* Title */}

              <h3
                className={`text-xl font-semibold transition-all duration-500
                  ${
                    active
                      ? "text-primary translate-x-2"
                      : "text-[#731111]"
                  }
                `}
              >
                {step.title}
              </h3>

            </div>
          );
        })}

      </div>
    </div>
  );
}

import IconCard from "./IconCard";

const icons = [
  "/banners/tool1.png",
  "/banners/tool2.png",
  "/banners/tool3.png",
  "/banners/tool4.png",
];

const middleIcons = [
    "/banners/tool3.png",
    "/banners/tool1.png",
    "/banners/tool2.png",
  "/banners/tool4.png",
    "/banners/tool3.png",
    "/banners/tool1.png",
    "/banners/tool2.png",
  "/banners/tool4.png",
]
const rightColums = [
    "/banners/tool4.png",
    "/banners/tool1.png",
    "/banners/tool3.png",
  "/banners/tool2.png",
    "/banners/tool4.png",
    "/banners/tool1.png",
    "/banners/tool3.png",
  "/banners/tool2.png",
]

// Duplicate once for seamless looping
const loopIcons = [...icons, ...icons];
export default function IconColumn() {
  return (
    <div className="flex h-[650px] items-center gap-8 overflow-hidden">

      {/* Left Column */}
      <div className="relative h-full w-[180px] overflow-hidden">
        <div className="track track-up">
          {loopIcons.map((icon, index) => (
            <IconCard key={`left-${index}`} icon={icon} />
          ))}
        </div>
      </div>

      {/* Middle Column */}
      <div className="relative h-full w-[180px] overflow-hidden">
        <div className="track track-down">
          {middleIcons.map((icon, index) => (
            <IconCard key={`middle-${index}`} icon={icon} />
          ))}
        </div>
      </div>

      {/* Right Column */}
      <div className="relative h-full w-[180px] overflow-hidden">
        <div className="track track-up">
          {rightColums.map((icon, index) => (
            <IconCard key={`right-${index}`} icon={icon} />
          ))}
        </div>
      </div>

    </div>
  );
}
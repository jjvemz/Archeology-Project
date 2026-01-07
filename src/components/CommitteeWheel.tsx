import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useLanguage } from "@/hooks/useLanguage";

interface CommitteeMember {
  name: string;
  titleKey: string;
  affiliation: string;
  specialization: string;
  region: string;
  picture: string;
}

interface CommitteeWheelProps {
  members: CommitteeMember[];
}

const CommitteeWheel = ({ members }: CommitteeWheelProps) => {
  const { t } = useLanguage();
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  // Calculate angle for each member in the wheel
  const angleSlice = 360 / members.length;
  const radius = 300; // Distance from center

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    setMousePos({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
    });
  };

  const getMemberPosition = (index: number) => {
    const angle = (index * angleSlice - 90) * (Math.PI / 180);
    const x = Math.cos(angle) * radius;
    const y = Math.sin(angle) * radius;
    return { x, y, angle: index * angleSlice };
  };

  return (
    <div className="w-full h-screen flex items-center justify-center  relative overflow-hidden">
      <div
        className="relative w-full h-full flex items-center justify-center"
        onMouseMove={handleMouseMove}
      >
        {/* Center circle - always visible */}
        <motion.div 
          className="absolute w-80 h-80 rounded-full border-4 border-primary bg-primary flex items-center justify-center z-10 shadow-lg overflow-hidden"
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center"
          }}
        >
          <AnimatePresence mode="wait">
            {hoveredIndex !== null ? (
              <motion.img
                key={hoveredIndex}
                src={members[hoveredIndex].picture}
                alt={members[hoveredIndex].name}
                className="w-full h-full object-cover"
                initial={{ opacity: 0, scale: 0.3, borderRadius: "50%" }}
                animate={{ opacity: 1, scale: 1, borderRadius: "0%" }}
                exit={{ opacity: 0, scale: 0, borderRadius: "50%" }}
                transition={{ duration: 0.4, ease: "easeInOut" }}
                style={{ borderRadius: "inherit" }}
              />
            ) : (
              <motion.div 
                className="text-center"
                initial={{ opacity: 0, scale: 0.75 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0 }}
                transition={{ duration: 0.3, ease: "easeInOut" }}
              >
                <h3 className="text-3xl font-bold text-white">{t("committeeWheel.congress")}</h3>
                <p className="text-sm text-white mt-2">{t("committeeWheel.hoverOverName")}</p>
              </motion.div>
            )}
          </AnimatePresence>
        </motion.div>

        {/* Member positions around the wheel */}
        {members.map((member, index) => {
          const { x, y } = getMemberPosition(index);
          const isHovered = hoveredIndex === index;

          return (
            <div
              key={index}
              className="absolute cursor-pointer transition-all duration-300  flex items-center justify-center"
              style={{
                transform: `translate(calc(-50% + ${x}px), calc(-50% + ${y}px))`,
                left: "50%",
                top: "50%",
              }}
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
            >
              {/* Name Label */}
              <div
                className={`text-center transition-all duration-300 w-36 h-36 rounded-full border-2 border-dashed flex items-center justify-center ${
                  isHovered ? "scale-110 border-primary" : "scale-100 border-blue-800"
                }`}
              >
                <div className="text-center">
                  <p className={`font-bold text-xs leading-tight transition-colors ${
                    isHovered ? "text-primary" : "text-blue-800"
                  }`}>
                    {member.name}
                  </p>
                  <p className={`text-xs transition-colors ${
                    isHovered ? "text-primary font-semibold" : "text-blue-800"
                  }`}>
                    {member.region}
                  </p>
                  
                  {/* Indicator circle */}
                  <div
                    className={`w-3 h-3 rounded-full mx-auto mt-2 transition-all duration-300 ${
                      isHovered ? "bg-primary scale-150" : "bg-blue-800"
                    }`}
                  ></div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default CommitteeWheel;

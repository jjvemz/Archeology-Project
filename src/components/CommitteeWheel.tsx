import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useLanguage } from "@/hooks/useLanguage";
import bird1 from "/images/committee/Circles/bird1.png";
import bird2 from "/images/committee/Circles/bird2.png";
import bird3 from "/images/committee/Circles/bird3.png";
import whale1 from "/images/committee/Circles/whale1.png";
import whale2 from "/images/committee/Circles/whale2.png";
import whale3 from "/images/committee/Circles/whale3.png";
import whale4 from "/images/committee/Circles/whale4.png";
import whale5 from "/images/committee/Circles/whale5.png";

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

  const radius = 320; // Slightly larger for better spacing

  // Custom angles based on the user's drawing (0 is Top)
  const getCustomAngle = (id: string) => {
    switch (id) {
      case "wallin":
        return 0;
      case "lilian":
        return 45;
      case "chris":
        return 90;
      case "eske":
        return 135;
      case "aaron":
        return 180;
      case "kurt":
        return 225;
      case "sonia":
        return 270;
      case "joann":
        return 315;
      default:
        return 0;
    }
  };

  const getAnimalImage = (id: string) => {
    switch (id) {
      case "lilian":
        return bird1;
      case "chris":
        return whale1;
      case "eske":
        return whale2;
      case "aaron":
        return whale3;
      case "kurt":
        return whale4;
      case "sonia":
        return whale5;
      case "joann":
        return bird2;
      case "wallin":
        return bird3;
      default:
        return null;
    }
  };

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    setMousePos({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
    });
  };

  const getMemberPosition = (index: number) => {
    const member = members[index] as any;
    const angle = (getCustomAngle(member.id) - 90) * (Math.PI / 180);
    const x = Math.cos(angle) * radius;
    const y = Math.sin(angle) * radius;
    return { x, y };
  };

  const handleCircleClick = (index: number) => {
    setHoveredIndex(hoveredIndex === index ? null : index);
  };

  return (
    <div
      className="w-full h-screen flex items-center justify-center relative overflow-hidden"
      style={{
        background: "linear-gradient(to bottom, #1e40af 50%, #ffeecd 50%)",
      }}
    >
      <div
        className="relative w-full h-full flex items-center justify-center"
        onMouseMove={handleMouseMove}
      >
        {/* Center circle - split text */}
        <motion.div className="absolute w-80 h-80 rounded-full border-4 border-primary bg-primary flex flex-col items-center justify-center z-10 shadow-lg overflow-hidden">
          <AnimatePresence mode="wait">
            {hoveredIndex !== null ? (
              <motion.img
                key={hoveredIndex}
                src={members[hoveredIndex].picture}
                alt={members[hoveredIndex].name}
                className="w-full h-full object-cover"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.8 }}
                transition={{ duration: 0.4 }}
              />
            ) : (
              <motion.div
                className="text-center w-full h-full flex flex-col relative"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
              >
                {/* Top Half */}
                <div className="flex-1 flex flex-col items-center justify-center px-6 pt-4">
                  <h3 className="text-2xl font-black text-white leading-tight uppercase tracking-tighter">
                    {t("committeeWheel.congress")}
                  </h3>
                </div>

                {/* Split Line */}
                <div className="w-full h-1 bg-white/30" />

                {/* Bottom Half */}
                <div className="flex-1 flex flex-col items-center justify-center px-6 pb-4">
                  <h3 className="text-2xl font-black text-white/80 leading-tight uppercase tracking-tighter">
                    {t("committeeWheel.keynotes")}
                  </h3>
                  <p className="text-[10px] text-white/60 mt-2 uppercase tracking-widest font-bold">
                    {t("committeeWheel.hoverOverName")}
                  </p>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </motion.div>

        {/* Member positions around the wheel */}
        {members.map((member: any, index) => {
          const { x, y } = getMemberPosition(index);
          const isHovered = hoveredIndex === index;

          return (
            <div
              key={index}
              className="absolute cursor-pointer transition-all duration-300 flex items-center justify-center"
              style={{
                transform: `translate(calc(-50% + ${x}px), calc(-50% + ${y}px))`,
                left: "50%",
                top: "50%",
              }}
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
              onClick={() => handleCircleClick(index)}
            >
              <div
                className={`text-center transition-all duration-300 w-32 h-32 rounded-full border-2 border-dashed flex items-center justify-center bg-white/5 backdrop-blur-sm ${
                  isHovered
                    ? "scale-110 border-primary bg-white/10"
                    : "border-orange-700/50"
                }`}
              >
                {!isHovered ? (
                  <div className="text-center">
                    <img
                      src={getAnimalImage(member.id) || bird1}
                      alt="Icon"
                      className="w-12 h-12 object-contain mx-auto mb-1 opacity-80"
                    />
                    <p className="font-bold text-[10px] leading-tight text-orange-700 dark:text-primary px-2">
                      {member.name.split(" ").slice(-1)[0]}
                    </p>
                  </div>
                ) : (
                  <div className="text-center p-2">
                    <p className="font-black text-xs text-primary leading-tight uppercase">
                      {member.name}
                    </p>
                    <p className="text-[9px] text-primary/80 font-bold mt-1 uppercase">
                      {t(member.titleKey)}
                    </p>
                  </div>
                )}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default CommitteeWheel;

import { achievementsData } from '@/utils/data/achievement-data';
import AchievementCard from './achievement-card';

const Projects = () => {
  return (
    <div id='achievements' className="relative z-50 my-12 lg:my-24">
      <div className="sticky top-10">
        <div className="w-[80px] h-[80px] bg-violet-100 rounded-full absolute -top-3 left-0 translate-x-1/2 filter blur-3xl opacity-30"></div>
        <div className="flex items-center justify-start relative">
          <span className="bg-[#1a1443] absolute left-0 w-fit text-white px-5 py-3 text-xl rounded-md">
            ACHIEVEMENTS
          </span>
          <span className="w-full h-[2px] bg-[#1a1443]"></span>
        </div>
      </div>

      <div className="pt-24">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {achievementsData.map((achievement, index) => (
            <div
              id={`achievement-card-${index + 1}`}
              key={index}
              className="w-full mx-auto max-w-2xl"
            >
              <AchievementCard achievement={achievement} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Projects;
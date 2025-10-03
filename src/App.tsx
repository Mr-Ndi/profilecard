import React from "react";
import ProfileCard from "./ProfileCard";

const App: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-900 flex items-center justify-center p-4">
      <ProfileCard
        fullName="Ninshuti Poli Ndiramiye"
        jobTitle="Technology Professional"
        description="Passionate about creating efficient solutions with expertise in Python, DevOps, and more."
      />
    </div>
  );
};

export default App;

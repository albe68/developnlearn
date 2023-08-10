import React, { useState } from "react";
import {
  Tabs,
  TabsHeader,
  TabsBody,
  Tab,
  TabPanel,
} from "@material-tailwind/react";
import {
  Square3Stack3DIcon,
  UserCircleIcon,
} from "@heroicons/react/24/solid";
import ListCourses from "./listCourses";

export default function CoursesTab() {
  const [activeTab, setActiveTab] = useState("all");
  const [updated, setUpdated] = useState(false);

  const handleTabChange = (value) => {
    setActiveTab(value);
  };

  const data = [
    {
      label: "All Courses",
      value: "all",
      icon: Square3Stack3DIcon,
    },
    {
      label: "Blocked",
      value: "blocked",
      icon: UserCircleIcon,
    },
  ];

  const tabComponents = {
    all: <ListCourses updated={updated} setUpdated={setUpdated} />,

    // Add more components for other tabs if needed
  };

  return (
    <Tabs value={activeTab} onChange={handleTabChange} className="p-0.5">
      <TabsHeader className="ml-3.5 mr-3.5">
        {data.map(({ label, value, icon: Icon }) => (
          <Tab key={value} value={value}>
            <div className="flex items-center gap-2">
              <Icon className="w-5 h-5" />
              {label}
            </div>
          </Tab>
        ))}
      </TabsHeader>
      <TabsBody>
        {data.map(({ value }) => (
          <TabPanel key={value} value={value} className="pt-5">
            {tabComponents[value]} 
          </TabPanel>
        ))}
      </TabsBody>
    </Tabs>
  );
}

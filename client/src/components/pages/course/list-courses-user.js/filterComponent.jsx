import React, { useState, useEffect } from "react";
import Checkbox from "react-custom-checkbox";
import { filterProducts } from "../../../../api/endpoints/course/course";
import { getTags } from "../../../../api/endpoints/course/course";

export default function FilterComponent({ tagsmap, index, onFilteredCourses }) {
  const handleChange = async (condition) => {
    if (condition) {
      const filteredCourses = await filterProducts("nodejs");
      console.log(filteredCourses.data.data, "u sure");
      const filtered = filteredCourses.data.data;
      // Call the parent component's callback function to send the filteredCourses
      onFilteredCourses(filtered);
    }
  };

  return (
    <Checkbox
      name="my-input"
      checked={false}
      onChange={(value, event) => {
        let p = {
          isTrue: value,
        };
        console.log(event);
        handleChange(value);
      }}
      borderColor="#27aedf"
      borderStyle="27aedf"
      style={{ cursor: "pointer" }}
      labelStyle={{ marginLeft: 5, userSelect: "none" }}
      label={tagsmap}
    />
  );
}

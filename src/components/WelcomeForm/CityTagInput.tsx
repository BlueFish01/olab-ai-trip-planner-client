'use client'

import { useState } from "react";
import { Tag, TagInput } from "emblor";

export function CityTagInput() {
  const tags: Tag[] = [
    {
      id: "2207090901",
      text: "Tokyo",
    },
  ];
  const [cityTags, setCityTags] = useState<Tag[]>(tags);
  const [activeTagIndex, setActiveTagIndex] = useState<number | null>(null);

  return (
    <TagInput
      tags={cityTags}
      setTags={(newTags) => {
        setCityTags(newTags);
      }}
      placeholder="Add City tags"
      styleClasses={{
        input: "w-full",
        tag: {
          body: "p-1 gap-1",
          closeButton: 'px-1'
        }
      }}
      activeTagIndex={activeTagIndex}
      setActiveTagIndex={setActiveTagIndex}
      shape = {
        "rounded"
      }
      maxTags={4}
    />
  );
}

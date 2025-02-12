import { SectionType, SingleDocument } from "@/lib/types";
import { usePlateEditor, Plate, PlateContent } from "@udecode/plate/react";

interface IProps {
  sections: SectionType[];
}

const value = [
  {
    type: "p",
    children: [
      {
        text: "This is editable plain text with react and history plugins, just like a <textarea>!",
      },
    ],
  },
];
export default function PlateEditor({ sections }: IProps) {
  const editor = usePlateEditor({
    value: sections.map((section) => {
      return {
        type: "p",
        children: [
          {
            text: section.content,
          },
        ],
      };
    }),
  });

  return (
    <Plate editor={editor}>
      <PlateContent placeholder="Type..." />
    </Plate>
  );
}

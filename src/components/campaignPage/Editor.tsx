"use client";

import "./editor-styles.scss";

import { useEditor, EditorContent } from "@tiptap/react";
import Document from "@tiptap/extension-document";
import Paragraph from "@tiptap/extension-paragraph";
import Text from "@tiptap/extension-text";
import Placeholder from "@tiptap/extension-placeholder";
interface EditorProps {
  className: string;
}

const Editor = ({ className }: EditorProps) => {
  const editor = useEditor({
    extensions: [
      Document,
      Text,
      Paragraph,
      Placeholder.configure({
        placeholder: "نظر خود را بنویسید...",
        showOnlyCurrent: true,
      }),
    ],
    immediatelyRender: false,
    editorProps: {
      attributes: {
        class: `relative ${className}`,
      },
    },
  });

  return <EditorContent editor={editor} className="w-full grow" />;
};

export default Editor;

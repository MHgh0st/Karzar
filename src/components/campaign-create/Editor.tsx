"use client";
import "./editor-styles.scss";

import { useEditor, EditorContent } from "@tiptap/react";
import type { Editor as TiptapEditor } from "@tiptap/react";

import StarterKit from "@tiptap/starter-kit";
import Heading from "@tiptap/extension-heading";
import { FontSize, TextStyle } from "@tiptap/extension-text-style";
import Placeholder from "@tiptap/extension-placeholder";

import { useEffect } from "react";
interface EditorProps {
  className: string;
  onEditorReady?: (editor: TiptapEditor) => void;
}

const Editor = ({ className, onEditorReady }: EditorProps) => {
  const editor = useEditor({
    extensions: [
      StarterKit.configure({
        heading: false,
      }),
      Heading.configure({ levels: [1, 2, 3] }),
      FontSize,
      TextStyle,
      Placeholder.configure({
        placeholder: "متن کارزار خود را بنویسید...",
        showOnlyCurrent: true,
      }),
    ],
    immediatelyRender: false,
    editorProps: {
      attributes: {
        class: `relative ${className} prose prose-sm sm:prose-base max-w-none`,
      },
    },
  });

  useEffect(() => {
    if (editor && onEditorReady) {
      onEditorReady(editor);
    }
  }, [editor, onEditorReady]);

  if (!editor) {
    return null;
  }

  return (
    <>
      <EditorContent editor={editor} className="w-full grow min-h-0" />
    </>
  );
};

export default Editor;

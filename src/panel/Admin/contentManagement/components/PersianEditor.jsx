import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
const PersianEditor = ({ editorContent, setEditorContent }) => {
  const dispatch = useDispatch();
  useEffect(() => {
    const script = document.createElement("script");
    script.src = "/persian-tinymce/tinymce.min.js";
    script.onload = () => {
      if (window.tinymce) {
        window.tinymce.init({
          selector: "#editor",
          height: 450,
          language: "fa",
          menubar: true,
          plugins: [
            "advlist autolink lists link image charmap print anchor",
            "searchreplace visualblocks code fullscreen",
            "insertdatetime media table paste code help wordcount",
            "emoticons hr autosave",
          ],
          toolbar:
            "undo redo | image link emoticons hr | formatselect | bold italic underline forecolor backcolor | alignleft aligncenter alignright alignjustify | bullist numlist outdent indent | removeformat print restoredraft wordcount code",
          autosave_interval: "10s",
          autosave_prefix: "tinymce-autosave-{path}{query}-{id}-",
          setup: (editor) => {
            editor.on("change", () => {
              dispatch(setEditorContent(editor.getContent()));
            });
          },
        });
      }
    };
    document.body.appendChild(script);

    return () => {
      if (window.tinymce) {
        window.tinymce.remove();
      }
    };
  }, []);

  return (
    <div className="container m-0 p-0">
      <textarea id="editor"></textarea>
    </div>
  );
};

export default PersianEditor;

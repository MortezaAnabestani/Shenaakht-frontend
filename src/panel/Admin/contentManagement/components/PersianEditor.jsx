import React, { useEffect, useRef } from "react";
import { useDispatch } from "react-redux";
import { useLocation } from "react-router-dom";

const PersianEditor = ({ editorText, setFormData }) => {
  const dispatch = useDispatch();
  const editorRef = useRef(null);
  const location = useLocation();

  useEffect(() => {
    if (location.pathname === "/create") {
      dispatch(setFormData({ editorText: "" }));
    } else {
      dispatch(setFormData({ editorText: editorText }));
    }
  }, []);

  useEffect(() => {
    if (editorRef.current && editorText !== editorRef.current.getContent()) {
      editorRef.current.setContent(editorText || "");
    }
  }, [editorText, editorRef.current]);

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
            editorRef.current = editor;
            editor.on("init", () => {
              editor.setContent(editorText);
            });
            editor.on("change", () => {
              const content = editor.getContent();
              dispatch(setFormData({ editorText: content }));
            });
          },
        });
      }
    };
    document.body.appendChild(script);

    return () => {
      if (window.tinymce && editorRef.current) {
        window.tinymce.remove(editorRef.current);
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

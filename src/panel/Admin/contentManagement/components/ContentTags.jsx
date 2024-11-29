import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import styles from "../../../../styles/panel/admin/admin.module.css";
import Loading from "../../../../components/other/Loading";
import { fetchTags, sendTags } from "../../../../services/contentAPI";
import { setSelectedTags, setFaildTag, setTagValue } from "../../../../features/contents/createContentSlice";

const ContentTags = ({ selectedTags }) => {
  const dispatch = useDispatch();
  const { dataTag, loadingTag, errorTag, faildTag, tagValue } = useSelector((state) => state.createContent);

  useEffect(() => {
    dispatch(fetchTags());
  }, []);

  const handleInputChange = (e) => {
    dispatch(setFaildTag(false));
    dispatch(setTagValue(e.target.value));
  };

  const handleTagSelect = (tag) => {
    if (!selectedTags.includes(tag)) {
      dispatch(setSelectedTags([...selectedTags, tag]));
      dispatch(setTagValue(""));
    } else {
      dispatch(setFaildTag(true));
    }
  };

  const handleTagRemove = (tag) => {
    dispatch(setSelectedTags(selectedTags.filter((t) => t !== tag)));
  };

  const handleTagCreate = async (e) => {
    e.preventDefault();
    const newTag = tagValue.trim().toLowerCase();
    const tagExists =
      dataTag?.some((tag) => tag.name.toLowerCase() === newTag) || selectedTags.includes(newTag);
    if (tagExists) {
      dispatch(setFaildTag(true));
      return;
    }

    try {
      await dispatch(sendTags(newTag)).unwrap();
      dispatch(setSelectedTags([...selectedTags, newTag]));
      dispatch(setTagValue(""));
      dispatch(fetchTags());
      dispatch(setFaildTag(false));
    } catch (error) {
      console.error("Error creating a new tag:", error);
      dispatch(setFaildTag(true));
    }
  };

  const filteredTags = dataTag?.filter((tag) => tag.name.toLowerCase().startsWith(tagValue.toLowerCase()));

  return (
    <div className={styles.createContent_tag}>
      {loadingTag && <Loading />}
      <span>
        <label className="fs-10" htmlFor="tags">
          برچسب‌ها:
        </label>
      </span>
      <div className={styles.createContent_tag_input}>
        <input
          type="text"
          id="tag"
          name="tag"
          value={tagValue}
          onChange={handleInputChange}
          placeholder="برچسب‌ها را وارد کنید..."
        />
        <button onClick={handleTagCreate} disabled={!tagValue}>
          ایجاد برچسب جدید
        </button>
      </div>
      {filteredTags?.length > 0 && tagValue && (
        <ul className={styles.tagSuggest}>
          {filteredTags?.map((tag) => (
            <li key={tag._id} onClick={() => handleTagSelect(tag.name)}>
              {tag.name}
            </li>
          ))}
        </ul>
      )}
      {faildTag && <p className="text-center fs-12 text-danger p-0 m-0">این برچسب قبلاً انتخاب شده است</p>}
      {errorTag && <p className="text-center fs-12 text-danger p-0 m-0">{errorTag.message}</p>}
      <div className={styles.selectedtags}>
        {selectedTags.map((tag) => (
          <span className={styles.selectedtag} key={tag}>
            {tag}
            <button onClick={() => handleTagRemove(tag)}>
              <img
                src="/assets/images/icons/panel/admin/deleteIcon2.svg"
                className="mt-1"
                alt="delete icon"
                width="13px"
              />
            </button>
          </span>
        ))}
      </div>
    </div>
  );
};

export default ContentTags;

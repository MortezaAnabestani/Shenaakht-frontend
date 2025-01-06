import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import styles from "../../../../styles/panel/admin/admin.module.css";
import Loading from "../../../../components/other/Loading";
import { fetchTags, sendTags } from "../../../../services/contentAPI";
import { setSelectedTags, setFaildTag, setTagValue } from "../../../../features/contents/createContentSlice";
import debounce from "lodash.debounce";

const ContentTags = ({ tags, setFormData }) => {
  const dispatch = useDispatch();
  const { dataTag, loadingTag, errorTag } = useSelector((state) => state.readContent);
  const { faildTag, tagValue, selectedTags } = useSelector((state) => state.createContent);

  const [filteredTags, setFilteredTags] = useState([]);

  useEffect(() => {
    if (tags.length > 0) {
      const updatedTags = tags.map((tag) => tag.name);
      dispatch(setSelectedTags(updatedTags));
    }
    dispatch(fetchTags());
  }, [dispatch, tags]);

  const handleInputChange = debounce((value) => {
    dispatch(setFaildTag(false));
    dispatch(setTagValue(value));

    const lowerCasedValue = value.toLowerCase();
    const matchedTags = dataTag?.filter((tag) => tag.name.toLowerCase().startsWith(lowerCasedValue)) || [];
    setFilteredTags(matchedTags);
  }, 300);

  const handleTagSelect = (tag) => {
    if (!selectedTags.includes(tag.name) && !tags.includes(tag._id)) {
      dispatch(setSelectedTags([...selectedTags, tag.name]));
      dispatch(setFormData({ tags: [...tags, tag._id] }));
      dispatch(setTagValue(""));
      setFilteredTags([]);
    } else {
      dispatch(setFaildTag(true));
    }
  };

  const handleTagRemove = (tagName, tagID) => {
    dispatch(setSelectedTags(selectedTags.filter((t) => t !== tagName)));
    dispatch(
      setFormData({
        tags: tags.filter((id) => id !== tagID),
      })
    );
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
      const newTagData = await dispatch(sendTags(newTag)).unwrap();
      dispatch(setFormData({ tags: [...tags, newTagData.info._id] }));
      dispatch(setSelectedTags([...selectedTags, newTagData.info.name]));
      dispatch(setTagValue(""));
      dispatch(fetchTags()).unwrap();
      setFilteredTags([]);
      dispatch(setFaildTag(false));
    } catch (error) {
      console.error("Error creating a new tag:", error);
      dispatch(setFaildTag(true));
    }
  };

  return (
    <div className={styles.createContent_tag}>
      {loadingTag && <Loading />}
      <div>
        <label className="fs-10" htmlFor="tags">
          برچسب‌ها:
        </label>
      </div>
      <div className={styles.createContent_tag_input}>
        <input
          type="text"
          id="tag"
          name="tag"
          onChange={(e) => handleInputChange(e.target.value)}
          placeholder="برچسب‌ها را وارد کنید..."
        />
        <button onClick={handleTagCreate} disabled={!tagValue}>
          ایجاد برچسب جدید
        </button>
      </div>
      {filteredTags.length > 0 && tagValue && (
        <ul className={styles.tagSuggest}>
          {filteredTags.map((tag) => (
            <li key={tag._id} value={tag._id} onClick={() => handleTagSelect(tag)}>
              {tag.name}
            </li>
          ))}
        </ul>
      )}
      {faildTag && <p className="text-center fs-12 text-danger">این برچسب قبلاً انتخاب شده است</p>}
      {errorTag && <p className="text-center fs-12 text-danger">{errorTag.message}</p>}
      <div className={styles.selectedtags}>
        {selectedTags.map((tag, index) => (
          <span className={styles.selectedtag} key={index}>
            {tag}
            <button onClick={() => handleTagRemove(tag, tags[index])}>
              <span>&times;</span>
            </button>
          </span>
        ))}
      </div>
    </div>
  );
};

export default ContentTags;

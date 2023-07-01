import React, { useState } from "react";
import Editor from "@draft-js-plugins/editor";
import createHashtagPlugin from "draft-js-hashtag-plugin";
import { ContentState, EditorState } from "draft-js";
import { TAGS_LIST } from "modules/feed/assets/feed-tags";

export const FeedTextareaComponent = () => {
  const [editorState, setEditorState] = useState<EditorState>(() => EditorState.createEmpty());
  const [showDropdown, setShowDropdown] = useState<boolean>(false);
  const [dropdownItems, setDropdownItems] = useState<string[]>(TAGS_LIST);

  const hashtagPlugin = createHashtagPlugin();

  const handleEditorChange = (newEditorState: EditorState): void => {
    setEditorState(newEditorState);
    updateDropdownItems(newEditorState);
  };

  const updateDropdownItems = (newEditorState: EditorState): void => {
    const contentState = newEditorState.getCurrentContent();
    const selectionState = newEditorState.getSelection();
    const blockKey = selectionState.getStartKey();
    const block = contentState.getBlockForKey(blockKey);
    const text = block.getText();

    const caretPosition = selectionState.getStartOffset();
    const previousWord = getPreviousWord(text, caretPosition);

    if (previousWord && previousWord.startsWith("#")) {
      setDropdownItems(() => TAGS_LIST.filter((tag: string) => tag.toLowerCase().includes(previousWord.substring(1).toLowerCase())));
      setShowDropdown(true);
    } else {
      setDropdownItems(() => []);
      setShowDropdown(false);
    }
  };

  const getPreviousWord = (text: string, caretPosition: number): string => {
    const words = text.slice(0, caretPosition).trim().split(" ");
    return words[words.length - 1];
  };

  const handleClick: React.MouseEventHandler<HTMLUListElement> = (event: React.MouseEvent<HTMLUListElement>) => {
    const words = editorState.getCurrentContent().getPlainText().trim().split(" ");
    const target = event.target as HTMLUListElement;

    words[words.length - 1] = target.id;

    const newContentState = ContentState.createFromText(words.join(" "));
    console.log(words.join(" "));

    const newEditorState = EditorState.push(editorState, newContentState, "insert-characters");

    setEditorState(newEditorState);
    setShowDropdown(false);
  };

  return (
    <>
      <div style={{ border: "1px solid #ccc", padding: "10px" }}>
        <Editor placeholder="Type..." spellCheck={false} editorState={editorState} onChange={handleEditorChange} plugins={[hashtagPlugin]} />
      </div>
      <br />
      {showDropdown && (
        <ul onClick={(e: React.MouseEvent<HTMLUListElement>) => handleClick(e)}>
          {dropdownItems?.map((suggestion: string, index: number) => {
            return (
              <li id={"#" + suggestion} key={index}>
                {suggestion}
              </li>
            );
          })}
        </ul>
      )}
    </>
  );
};

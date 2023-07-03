import React from "react";
import Editor from "@draft-js-plugins/editor";
import createHashtagPlugin from "draft-js-hashtag-plugin";
import { ContentBlock, ContentState, EditorState, SelectionState } from "draft-js";
import { TAGS_LIST } from "modules/feed/assets/feed-tags";
import { filteredHashtags } from "../../utils/feed-helpers";
import { FeedTextareaSuggestionsListComponent } from "../feed-textarea-suggestions-component/feed-textarea-suggestions-list-component";
import { SpaceComponentY } from "shared/layout/space-component";
import { Box } from "@mui/material";

interface FeedTextareaComponentInterface {
  setIsSendingAvailable: React.Dispatch<React.SetStateAction<boolean>>;
  setTextLength: React.Dispatch<React.SetStateAction<number>>;
}

export const FeedTextareaComponent = React.memo(({ setIsSendingAvailable, setTextLength }: FeedTextareaComponentInterface) => {
  const [editorState, setEditorState] = React.useState<EditorState>(() => EditorState.createEmpty());
  const [showDropdownSuggestions, setShowDropdownSuggestions] = React.useState<boolean>(false);
  const [suggestions, setSuggestions] = React.useState<string[]>(TAGS_LIST);
  const hashtagPlugin = createHashtagPlugin();

  React.useEffect(() => {
    setIsSendingAvailable(() => !!editorState.getCurrentContent().getPlainText().length);
  }, [editorState, setIsSendingAvailable]);

  const getPreviousWord = (text: string, caretPosition: number): string => {
    const words = text.slice(0, caretPosition).trim().split(" ");
    return words[words.length - 1];
  };

  const updateDropdownItems = React.useCallback((newEditorState: EditorState): void => {
    const contentState: ContentState = newEditorState.getCurrentContent();
    const selectionState: SelectionState = newEditorState.getSelection();
    const blockKey: string = selectionState.getStartKey();
    const block: ContentBlock = contentState.getBlockForKey(blockKey);
    const text: string = block.getText();

    const caretPosition: number = selectionState.getStartOffset();
    const previousWord: string = getPreviousWord(text, caretPosition);
    const suggestions: string[] = TAGS_LIST.filter((tag: string) => tag.toLowerCase().includes(previousWord.substring(1).toLowerCase()));

    if (previousWord && previousWord.startsWith("#")) {
      setSuggestions(() => suggestions);
      setShowDropdownSuggestions(() => true);
    } else {
      setSuggestions(() => []);
      setShowDropdownSuggestions(() => false);
    }
  }, []);

  const handleEditorChange = React.useCallback(
    (newEditorState: EditorState): void => {
      const textLength = newEditorState.getCurrentContent().getPlainText("").length;
      setEditorState(newEditorState);
      setTextLength(textLength);
      updateDropdownItems(newEditorState);
    },
    [setTextLength, updateDropdownItems]
  );

  const handleClick = React.useCallback(
    (event: React.MouseEvent<HTMLDivElement>): void => {
      const words: string[] = editorState.getCurrentContent().getPlainText().trim().split(" ");
      const target: HTMLDivElement = event.currentTarget;

      words[words.length - 1] = target.innerText;

      const newContentState: ContentState = ContentState.createFromText(words.join(" "));
      const newEditorState: EditorState = EditorState.push(editorState, newContentState, "insert-characters");

      setEditorState(() => newEditorState);
      setShowDropdownSuggestions(() => false);
      setTextLength(words.join(" ").length);
    },
    [editorState, setTextLength]
  );

  return (
    <>
      <Box padding={1}>
        <Editor
          webDriverTestID="feed-editor"
          placeholder="Start typing hashtags(#)..."
          spellCheck={false}
          editorState={editorState}
          onChange={handleEditorChange}
          plugins={[hashtagPlugin]}
        />
      </Box>
      <SpaceComponentY spacing={1} />
      {showDropdownSuggestions && <FeedTextareaSuggestionsListComponent onClick={handleClick} suggestions={filteredHashtags(suggestions)} />}
    </>
  );
});

FeedTextareaComponent.displayName = "FeedTextareaComponent";

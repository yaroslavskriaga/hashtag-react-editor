/// <reference types="react-scripts" />

declare module "draft-js-hashtag-plugin" {
  import { EditorPlugin } from "draft-js-plugins-editor";

  type HashtagPlugin = EditorPlugin;

  function createHashtagPlugin(): HashtagPlugin;

  export default createHashtagPlugin;
}

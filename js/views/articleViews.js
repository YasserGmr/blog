import { elements } from '../base';

const { articleTypesOptions } = elements;

export const renderSubArticles = () => {
  const markup = `    <div id="subArticleDiv">
        <label for="sampleRecipientInput">Article Types</label>
        <div class="cl-custom-select">
            <select class="full-width" id="subArticleOptions" >
                <option value="Option 1">paragraph</option>
                <option value="Option 3">heading</option>
                <option value="Option 4">image</option>
            </select>
        </div>
    </div>
`;

  articleTypesOptions.insertAdjacentHTML('afterend', markup);
};

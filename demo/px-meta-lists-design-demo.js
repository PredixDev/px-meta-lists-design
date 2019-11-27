/*
Copyright (c) 2018, General Electric

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

    http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.
*/
/* Common imports */
/* Common demo imports */
/* Demo DOM module */
/*
  FIXME(polymer-modulizer): the above comments were extracted
  from HTML and may be out of place here. Review them and
  then delete this comment!
*/
import '@polymer/polymer/polymer-legacy.js';

import 'px-sass-doc/px-sass-doc.js';
import '../css/px-meta-lists-design-demo-styles.js';
import { Polymer } from '@polymer/polymer/lib/legacy/polymer-fn.js';
import { html } from '@polymer/polymer/lib/utils/html-tag.js';
Polymer({
  _template: html`
    <!-- 0: Import the styles-->
    <style include="px-meta-lists-design-demo-styles" is="custom-style"></style>


<!-- 1: Describe Module -->
<px-sass-doc module-name="px-meta-lists-design" description="The Meta Lists module is a shortcut collection of all Predix UI list related modules - that is, it automatically imports the three dependent libraries (list-bare, list-inline, and list-ui)." layer="meta" sassdoc-path="sassdoc.json" dependencies="[
    &quot;https://github.com/PredixDev/px-list-bare-design&quot;,
    &quot;https://github.com/PredixDev/px-list-inline-design&quot;,
    &quot;https://github.com/PredixDev/px-list-ui-design&quot;
  ]" selected-options="{{selectedOptions}}">
  <!--hide-demo-container="true">-->

<!-- 2: Set Options -->
<!-- N/A -->

<!-- 3: Make HTML Demo -->
<section slot="demo-html">
<ul class="list-inline">
  <li>List Item</li><li>List Item</li><li>List Item</li>
</ul>

<br><br>

<ul class="list-bare">
  <li>List Item</li>
  <li>List Item</li>
  <li>List Item</li>
</ul>

<br><br>

<ul class="list-ui">
  <li class="list-ui__item">List Item</li>
  <li class="list-ui__item">List Item</li>
  <li class="list-ui__item">List Item</li>
</ul>
</section>

<!-- 4: Set Import Slot -->
<section slot="import">
@import "px-meta-lists-design/_meta.lists.scss";
</section>

<!-- 5: Set Usage HTML -->
<section slot="usage">
<strong>Note:</strong> refer to the dependent libraries below for details on the enable flags, style variables, and actual usage for list components.
</section>

</px-sass-doc>
`,

  is: 'px-meta-lists-design-demo',

  attached : function(){
    this.async(function() {
      this.fire('px-sass-doc-demo-updated',{})
    }, 10);
  }
});

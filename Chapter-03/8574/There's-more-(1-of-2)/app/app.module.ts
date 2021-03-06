import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {ReactiveFormsModule} from '@angular/forms';
import {ArticleEditorComponent} from './article-editor.component';
import {MaxWordCountValidator} from './max-word-count.validator';

@NgModule({
  imports: [
    BrowserModule,
    ReactiveFormsModule
  ],
  declarations: [
    ArticleEditorComponent,
    MaxWordCountValidator
  ],
  bootstrap: [
    ArticleEditorComponent 
  ]
})
export class AppModule {}

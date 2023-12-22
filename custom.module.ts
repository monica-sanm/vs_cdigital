import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { TestComponent } from './test';


const FrameworkComponents = [
  
]

@NgModule({
  declarations: [
    FrameworkComponents,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    CommonModule,
  ],
  providers: [
  ],
  exports: [
    TestComponent
  ]
})
export class FrameworkModule { }

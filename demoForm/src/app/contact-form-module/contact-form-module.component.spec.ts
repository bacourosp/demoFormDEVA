import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContactFormModuleComponent } from './contact-form-module.component';

describe('ContactFormModuleComponent', () => {
  let component: ContactFormModuleComponent;
  let fixture: ComponentFixture<ContactFormModuleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ContactFormModuleComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ContactFormModuleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

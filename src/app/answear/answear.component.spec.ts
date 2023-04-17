import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AnswearComponent } from './answear.component';

describe('AnswearComponent', () => {
  let component: AnswearComponent;
  let fixture: ComponentFixture<AnswearComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AnswearComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AnswearComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

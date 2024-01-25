import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GetapiangularComponent } from './getapiangular.component';

describe('GetapiangularComponent', () => {
  let component: GetapiangularComponent;
  let fixture: ComponentFixture<GetapiangularComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GetapiangularComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GetapiangularComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

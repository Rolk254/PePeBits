import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PackOpener } from './pack-opener';

describe('PackOpener', () => {
  let component: PackOpener;
  let fixture: ComponentFixture<PackOpener>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PackOpener]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PackOpener);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

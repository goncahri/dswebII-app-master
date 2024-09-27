import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CousersBarComponent } from './cousers-bar.component';

describe('CousersBarComponent', () => {
  let component: CousersBarComponent;
  let fixture: ComponentFixture<CousersBarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CousersBarComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CousersBarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

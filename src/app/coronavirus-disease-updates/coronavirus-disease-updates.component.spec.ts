import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { CoronavirusDiseaseUpdatesComponent } from './coronavirus-disease-updates.component';

describe('CoronavirusDiseaseUpdatesComponent', () => {
  let component: CoronavirusDiseaseUpdatesComponent;
  let fixture: ComponentFixture<CoronavirusDiseaseUpdatesComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ CoronavirusDiseaseUpdatesComponent ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(CoronavirusDiseaseUpdatesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

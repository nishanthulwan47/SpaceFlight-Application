import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { SpaceflightPage } from './spaceflight.page';

describe('SpaceflightPage', () => {
  let component: SpaceflightPage;
  let fixture: ComponentFixture<SpaceflightPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SpaceflightPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(SpaceflightPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmojiResultComponent } from './emoji-result.component';

describe('EmojiResultComponent', () => {
  let component: EmojiResultComponent;
  let fixture: ComponentFixture<EmojiResultComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EmojiResultComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EmojiResultComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

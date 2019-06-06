import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
/** services */
import { AboutMushroomDataService } from '../../../../shared/services/aboutMushroomData.service';
import { MushroomClassifierService } from '../../../../shared/services/mushroomClassifier.service';

@Component({
  selector: 'app-mushroom-dialog',
  templateUrl: './mushroom-dialog.component.html',
  styleUrls: ['./mushroom-dialog.component.scss']
})
export class MushroomDialogComponent implements OnInit {
  capForm: FormGroup;
  gillForm: FormGroup;
  constructor(
    private fb: FormBuilder,
    private aboutMushroomDataService: AboutMushroomDataService,
    private mushroomClassifierService: MushroomClassifierService
  ) { }

  submitAllMushroomForms() {
    console.log(this.capForm.value);
    this.mushroomClassifierService.postMushroomData(this.buildReqObj()).subscribe(
      res => {
        console.log(res);
      },
      err => {
        console.log(err);
      }
    );
  }
  buildReqObj() {
    return {
      date: '2019-06-23 06:44:00 +0000',
      user: '456698778',
      mushroomParameter: {
        cap_shape: this.capForm.value.capShape,
        cap_surface: this.capForm.value.capSurface,
        cap_color: this.capForm.value.capColor,
        bruises: 't',
        odor: 'a',
        gill_attachment: this.gillForm.value.gillAttachment,
        gill_spacing: 'c',
        gill_size: 'b',
        gill_color: 'k',
        stalk_shape: 'e',
        stalk_root: 'b',
        stalk_surface_above_ring: 'f',
        stalk_surface_below_ring: 'y',
        stalk_color_above_ring: 'n',
        stalk_color_below_ring: 'n',
        veil_type: 'p',
        veil_color: 'n',
        ring_number: 'n',
        ring_type: 'c',
        spore_print_color: 'k',
        population: 'a',
        habitat: 'g'
      }
    };
  }


  ngOnInit() {
    console.log(this.aboutMushroomDataService.getCapShapeInfo());
    this.capForm = this.fb.group({
      capShape: ['', []],
      capSurface: ['', []],
      capColor: ['', []]
    });
    this.gillForm = this.fb.group({
      gillAttachment: ['', []],
    });

    /** 
    this.capForm.valueChanges.subscribe(result => {
      this.getFormData();
      console.log('newMagazine', result);

     });*/
  }

}

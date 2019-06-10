import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import * as moment from 'moment';
/** services */
import { AboutMushroomDataService } from '../../../../shared/services/aboutMushroomData.service';
import { MushroomClassifierService } from '../../../../shared/services/mushroomClassifier.service';

@Component({
  selector: 'app-mushroom-dialog',
  templateUrl: './mushroom-dialog.component.html',
  styleUrls: ['./mushroom-dialog.component.scss']
})
export class MushroomDialogComponent implements OnInit {
  private capForm: FormGroup;
  private gillForm: FormGroup;
  private stalkForm: FormGroup;
  private otherForm: FormGroup;
  private mushroomFormsAreInvalid: boolean;
  private showParamStepper: boolean;
  private mushroomPrediction: any; // TDOD: typing... typing in generell

  constructor(
    private fb: FormBuilder,
    private aboutMushroomDataService: AboutMushroomDataService,
    private mushroomClassifierService: MushroomClassifierService,
   
  ) { }

  checkMushroomFormIsInvalid() {
    // TODO: This can be done better
    if (
      this.capForm.status === 'INVALID' &&
      this.gillForm.status === 'INVALID' &&
      this.stalkForm.status === 'INVALID' &&
      this.otherForm.status  === 'INVALID'
    ) {
      this.mushroomFormsAreInvalid = true;
    } else {
      if (
        this.capForm.status === 'VALID' &&
        this.gillForm.status === 'VALID' &&
        this.stalkForm.status === 'VALID' &&
        this.otherForm.status  === 'VALID'
      ) {
        this.mushroomFormsAreInvalid = false;
      } else {
        this.mushroomFormsAreInvalid = true;
      };
    };
  }

  submitAllMushroomForms() {
    this.mushroomClassifierService.postMushroomData(this.buildReqObj()).subscribe(
      res => {
        this.showParamStepper = false;
        this.mushroomPrediction = res;
      },
      err => {
        console.log(err);
      }
    );
  }

  buildReqObj() {
    return {
      date: moment(new Date()).format('YYYY-MM-DD HH:mm Z'),
      mushroomParameter: {
        cap_shape: this.capForm.value.capShape,
        cap_surface: this.capForm.value.capSurface,
        cap_color: this.capForm.value.capColor,
        bruises: this.otherForm.value.bruises,
        odor: this.otherForm.value.odor,
        gill_attachment: this.gillForm.value.gillAttachment,
        gill_spacing: this.gillForm.value.gillSpacing,
        gill_size: this.gillForm.value.gillSize,
        gill_color: this.gillForm.value.gillColor,
        stalk_shape: this.stalkForm.value.stalkShape,
        stalk_root: this.stalkForm.value.stalkRoot,
        stalk_surface_above_ring: this.stalkForm.value.stalkSurfaceAboveRing,
        stalk_surface_below_ring: this.stalkForm.value.stalkSurfaceBelowRing,
        stalk_color_above_ring: this.stalkForm.value.stalkColorAboveRing,
        stalk_color_below_ring: this.stalkForm.value.stalkColorBelowRing,
        veil_type: this.otherForm.value.veilType,
        veil_color: this.otherForm.value.veilColor,
        ring_number: this.otherForm.value.ringNumber,
        ring_type: this.otherForm.value.ringType,
        spore_print_color: this.otherForm.value.sporePrintColor,
        population: this.otherForm.value.population,
        habitat: this.otherForm.value.habitat,
      }
    };
  }

  ngOnInit() {
    this.showParamStepper = true;
    this.mushroomFormsAreInvalid = true;
    this.capForm = this.fb.group({
      capShape: ['', [Validators.required]],
      capSurface: ['', [Validators.required]],
      capColor: ['', [Validators.required]],
    });
    this.gillForm = this.fb.group({
      gillAttachment: ['', [Validators.required]],
      gillSpacing: ['', [Validators.required]], 
      gillSize: ['', [Validators.required]], 
      gillColor:  ['', [Validators.required]], 
    });
    this.stalkForm = this.fb.group({
      stalkShape: ['', [Validators.required]],
      stalkRoot: ['', [Validators.required]],
      stalkSurfaceAboveRing: ['', [Validators.required]],
      stalkSurfaceBelowRing: ['', [Validators.required]], 
      stalkColorAboveRing: ['', [Validators.required]],
      stalkColorBelowRing: ['', [Validators.required]],
    });
    this.otherForm = this.fb.group({
      bruises: ['', [Validators.required]],
      odor: ['', [Validators.required]],
      veilType: ['', [Validators.required]],
      veilColor: ['', [Validators.required]],
      ringNumber: ['', [Validators.required]],
      ringType: ['', [Validators.required]],
      sporePrintColor: ['', [Validators.required]],
      population: ['', [Validators.required]],
      habitat: ['', [Validators.required]]
    });
    this.capForm.valueChanges.subscribe(result => {
      this.checkMushroomFormIsInvalid();
    });
    this.gillForm.valueChanges.subscribe(result => {
      this.checkMushroomFormIsInvalid();
    });
    this.stalkForm.valueChanges.subscribe(result => {
      this.checkMushroomFormIsInvalid();
    });
    this.otherForm.valueChanges.subscribe(result => {
      this.checkMushroomFormIsInvalid();
    });
  }
}

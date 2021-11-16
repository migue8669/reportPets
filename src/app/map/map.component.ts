import { MapsAPILoader } from '@agm/core';
import { google } from "google-maps";

import {
  Component,
  ElementRef,
  Input,
  NgZone,
  OnInit,
  ViewChild,
} from '@angular/core';
import { PetModel } from '../models/pet.model';
// import { FirebaseService } from '../services/firebase.service';

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.css'],
})
export class MapComponent implements OnInit {
  lat = 19.29095;
  lng = -99.653015;
  zoom = 9;
  address!: string;
  google!: google;


  private geoCoder!: google.maps.Geocoder;
  geolocal: boolean = true;

  @Input() mascotass: PetModel[] = [];

  constructor(
  //  private firebaseService: FirebaseService,
    private ngZone: NgZone,
    private mapsAPILoader: MapsAPILoader
  ) {}
  @ViewChild('search')
  public searchElementRef: ElementRef = new ElementRef('');
  ngOnInit() {
    console.log(this.searchElementRef);
    // this.firebaseService.getAll().subscribe((pets) => {
    //   console.log(pets);
    //   this.mascotass = pets;
    //   console.log(this.mascotass);
    // });
    //load Places Autocomplete
    this.mapsAPILoader.load().then(() => {
      this.setCurrentLocation();
      this.geoCoder = new google.maps.Geocoder();

      let autocomplete = new google.maps.places.Autocomplete(
        this.searchElementRef.nativeElement
      );
      autocomplete.addListener('place_changed', () => {
        this.ngZone.run(() => {
          //get the place result
          let place: google.maps.places.PlaceResult = autocomplete.getPlace();

          //verify result
          if (place.geometry === undefined || place.geometry === null) {
            return;
          }
          console.log('return');

          //set latitude, longitude and zoom
          this.lat = place.geometry.location.lat();
          this.lng = place.geometry.location.lng();
          this.zoom = 12;
        });
      });
    });
  }

  getAddress(latitude: number, longitude: number) {
    this.geoCoder.geocode(
      { location: { lat: latitude, lng: longitude } },
      (results: { formatted_address: string }[], status: string) => {
//console.log(results);
        console.log(status);
        if (status === 'OK') {
          if (results[0]) {
            this.zoom = 12;
            this.address = results[0].formatted_address;
          } else {
            window.alert('No results found');
          }
        } else {
          window.alert('Geocoder failed due to: ' + status);
        }
      }
    );
  }
  private setCurrentLocation() {
    console.log('set');
    if ('geolocation' in navigator) {
      console.log(navigator);
      navigator.geolocation.getCurrentPosition((position) => {
        this.lat = position.coords.latitude;
        this.lng = position.coords.longitude;
        this.zoom = 8;
        this.getAddress(this.lat, this.lng);
      });
      if (
        navigator.geolocation.watchPosition((length) => {
          0;
        })
      ) {
        this.geolocal = false;
        console.log(this.geolocal);
      }
    }
  }
}

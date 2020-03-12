import { Component,ViewEncapsulation,EventEmitter,Output } from '@angular/core';
import { Observable,timer,interval} from 'rxjs'
import{ take ,map} from 'rxjs/operators';
@Component({
  selector:'app-picture-selection',
  templateUrl:'picture-selection.component.html',
  styleUrls: ['picture-selection.component.css'],
  encapsulation:ViewEncapsulation.None
})

export class PictureSelectionComponent{
  correctAns = 0;
  showPin = false;
  countDown:any;
  counter = 20;
  showTimout = false;
  @Output('onTimeout') onTimeout = new EventEmitter();
  questions:QuestionInfo[] = [
    {
      Question:'Select traffic lights in the boxes',
      Images:[
        {
          ImagePaht:'https://bicycledutch.files.wordpress.com/2016/06/vri-05.jpg',
          IsCorrect:true,
          IsImageSelected:false
        },
        {
          ImagePaht:'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQZvazh4FCXlXIoWKchgckIKO9uRa3oHNWGK7tPOOW2mMJg1yGk',
          IsCorrect:false,
          IsImageSelected:false
        },
        {
          ImagePaht:'https://assets.publishing.service.gov.uk/government/uploads/system/uploads/feature/image/75808/s712_street-lamps.jpg',
          IsCorrect:false,
          IsImageSelected:false
        },
        {
          ImagePaht:'https://www.ft.com/__origami/service/image/v2/images/raw/http%3A%2F%2Fcom.ft.imagepublish.upp-prod-us.s3.amazonaws.com%2F569c55a2-bac9-11e9-8a88-aa6628ac896c?fit=scale-down&source=next&width=700',
          IsCorrect:true,
          IsImageSelected:false
        },
        {
          ImagePaht:'https://morth.nic.in/sites/default/files/Banner4.jpg',
          IsCorrect:false,
          IsImageSelected:false
        },
        {
          ImagePaht:'https://hips.hearstapps.com/pop.h-cdn.co/assets/16/42/1600x1071/gallery-1476822977-gettyimages-553005051.jpg?resize=480:*',
          IsCorrect:true,
          IsImageSelected:false
        },
        {
          ImagePaht:'https://upload.wikimedia.org/wikipedia/commons/thumb/d/df/Evacuated_Highway_401_Color.jpg/290px-Evacuated_Highway_401_Color.jpg',
          IsCorrect:false,
          IsImageSelected:false
        },
        {
          ImagePaht:'https://www.constructionweekonline.in/public/styles/full_img/public/images/2020/01/13/traffic-671399_1920.jpg?itok=USR-vcJf',
          IsCorrect:false,
          IsImageSelected:false
        },
        {
          ImagePaht:'https://usa.streetsblog.org/wp-content/uploads/sites/5/2018/07/philly-slip-lane.png',
          IsCorrect:false,
          IsImageSelected:false
        }
      ]
    },
    {
      Question:'Select traffic lights in the boxes',
      Images:[
        {
          ImagePaht:'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRDR4IlyXrgYU1Os69c0xcjVyZgpg3fqByO-x9LTeg1YjUayoET',
          IsCorrect:true,
          IsImageSelected:false
        },
        {
          ImagePaht:'https://images.csmonitor.com/csm/2014/07/0729-traffic.jpg?alias=standard_900x600',
          IsCorrect:false,
          IsImageSelected:false
        },
        {
          ImagePaht:'https://st4.depositphotos.com/2715315/20982/v/600/depositphotos_209829158-stock-video-fpv-driving-slowly-line-cars.jpg',
          IsCorrect:false,
          IsImageSelected:false
        },
        {
          ImagePaht:'https://thumbs.dreamstime.com/z/blurred-yellow-taxi-cabs-speed-past-people-traffic-cop-busy-crossing-th-avenue-manhattan-new-york-usa-december-157339464.jpg',
          IsCorrect:false,
          IsImageSelected:false
        },
        {
          ImagePaht:'https://images.radio.com/wben/Maple%20Flint.jpg?width=775&height=425&crop=2023,1108,x0,y110',
          IsCorrect:true,
          IsImageSelected:false
        },
        {
          ImagePaht:'https://api.time.com/wp-content/uploads/2014/06/latraffic.jpg?w=600&quality=85',
          IsCorrect:false,
          IsImageSelected:false
        },
        {
          ImagePaht:'https://upload.wikimedia.org/wikipedia/commons/thumb/3/3e/I-80_Eastshore_Fwy.jpg/300px-I-80_Eastshore_Fwy.jpg',
          IsCorrect:false,
          IsImageSelected:false
        },
        {
          ImagePaht:'https://www.scienceabc.com/wp-content/uploads/2015/08/Traffic-Lights.jpg',
          IsCorrect:true,
          IsImageSelected:false
        },
        {
          ImagePaht:'https://footage.framepool.com/shotimg/qf/383514533-road-user-thanksgiving-usa-5th-avenue-barrier.jpg',
          IsCorrect:false,
          IsImageSelected:false
        }
      ]
    },
  ];
  randomQuestion:QuestionInfo  = this.questions[Math.floor(Math.random() * this.questions.length)]
  onImageClick(imageInfo : QuestionImage):void {
    console.info(imageInfo);
    if(imageInfo.IsCorrect){
        this.correctAns += 1;
    }
  }

  ngOnInit() {
    const interval$ = interval(1000); 
    const subscription = interval$.subscribe(value => {
      --this.counter;
      if(this.counter <= 0) {
        if(!this.showPin){
        this.showTimout = true;
        this.showPin = false;
        this.onTimeout.emit(true);
        }
        subscription.unsubscribe();
      }
    });
  }

  verifyAns():void{
    if(this.randomQuestion.Images.filter(x=>x.IsImageSelected && x.IsCorrect).length == this.randomQuestion.Images.filter(x=>x.IsCorrect).length){
      this.showPin = true;
      this.showTimout = false;
    } else{
      this.showPin = false;
      this.showTimout = true;
    }
  }
}

export interface QuestionInfo{
  Question:string;
  Images:QuestionImage[];
}

export interface QuestionImage{
  ImagePaht:string;
  IsCorrect:boolean;
  IsImageSelected:boolean;
}